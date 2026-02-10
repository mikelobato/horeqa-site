"use client";

import React, { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { normalizeLocale, stripLocaleFromPath, type Language } from "@/lib/i18n";
import { createTrn } from "@/lib/trn";
import { TRANSLATIONS, type Locale } from "@/translations";
import { DEFAULT_LOCALE_BY_LANG } from "@/config/site-locales";

interface LanguageContextType {
  // Full locale segment from the URL, e.g. "es-es" or "en-gb".
  locale: string;
  // Translation language, e.g. "es" or "en".
  language: Locale;
  setLocale: (locale: string) => void;
  trn: ReturnType<typeof createTrn>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const DEFAULT_LANGUAGE: Locale = "en";

function resolveLanguage(value?: string): Locale {
  const normalized = normalizeLocale(value);
  return normalized in TRANSLATIONS ? (normalized as Locale) : DEFAULT_LANGUAGE;
}

function resolveLocaleSegment(value?: string): string {
  const seg = (value || DEFAULT_LOCALE_BY_LANG.en).toLowerCase();
  if (/^[a-z]{2}-[a-z]{2}$/i.test(seg)) return seg;
  if (/^[a-z]{2}$/i.test(seg)) {
    const mapped = (DEFAULT_LOCALE_BY_LANG as Record<string, string>)[seg];
    return mapped || seg;
  }
  return DEFAULT_LOCALE_BY_LANG.en;
}

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Language;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { locale, language, hasTranslations } = useMemo(() => {
    const segment = pathname
      ? resolveLocaleSegment(pathname.split("/")[1] || "")
      : resolveLocaleSegment((DEFAULT_LOCALE_BY_LANG as Record<string, string>)[initialLanguage] || initialLanguage);
    const candidateLanguage = resolveLanguage(segment);
    const supported = candidateLanguage in TRANSLATIONS;
    return {
      locale: segment,
      language: supported ? candidateLanguage : DEFAULT_LANGUAGE,
      hasTranslations: supported && candidateLanguage !== DEFAULT_LANGUAGE,
    };
  }, [initialLanguage, pathname]);
  const trn = useMemo(
    () => createTrn(hasTranslations ? TRANSLATIONS[language] : {}),
    [hasTranslations, language]
  );

  // Static-export friendly locale canonicalization:
  // Redirect "/es/..." -> "/es-es/..." once per browser (cookie), unless "?locale=skip".
  // Bots typically won't execute this client redirect.
  useEffect(() => {
    if (!pathname) return;
    const params = new URLSearchParams(window.location.search || "");
    if (params.get("locale") === "skip") return;
    if (document.cookie.includes("horeqa_locale_redirect=1")) return;

    const first = pathname.split("/")[1] || "";
    if (!/^[a-z]{2}$/i.test(first)) return;

    const lang = first.toLowerCase();
    const targetLocale = (DEFAULT_LOCALE_BY_LANG as Record<string, string>)[lang];
    if (!targetLocale) return;

    const rest = pathname.replace(new RegExp(`^/${first}`, "i"), "") || "";
    const nextPath = `/${targetLocale}${rest}`;
    const qs = window.location.search || "";
    const hash = window.location.hash || "";

    document.cookie = "horeqa_locale_redirect=1; path=/; max-age=31536000";
    router.replace(`${nextPath}${qs}${hash}`);
  }, [pathname, router]);

  const setLocale = (nextLocale: string) => {
    const resolved = resolveLocaleSegment(nextLocale);
    if (pathname) {
      const cleaned = stripLocaleFromPath(pathname);
      const nextPath = `/${resolved}${cleaned === "/" ? "" : cleaned}`;
      if (nextPath !== pathname) {
        router.push(nextPath);
      }
    } else {
      router.push(`/${resolved}`);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, language, setLocale, trn }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTRN() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTRN must be used within a LanguageProvider");
  }
  return context.trn;
}

export function useLocale() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLocale must be used within a LanguageProvider");
  }
  return context.locale;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context.language;
}

export function useSetLocale() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useSetLocale must be used within a LanguageProvider");
  }
  return context.setLocale;
}
