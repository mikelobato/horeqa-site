"use client";

import React, { createContext, useContext, useMemo, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { normalizeLocale, stripLocaleFromPath, type Language } from "@/lib/i18n";
import { createTrn } from "@/lib/trn";
import { TRANSLATIONS, type Locale } from "@/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  trn: ReturnType<typeof createTrn>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const DEFAULT_LOCALE: Locale = "en";

function resolveLocale(value?: string): Locale {
  const normalized = normalizeLocale(value);
  return normalized in TRANSLATIONS ? (normalized as Locale) : DEFAULT_LOCALE;
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
  const { locale, hasTranslations } = useMemo(() => {
    const candidate = pathname
      ? normalizeLocale(pathname.split("/")[1] || "")
      : normalizeLocale(initialLanguage);
    const supported = candidate in TRANSLATIONS;
    return {
      locale: supported ? (candidate as Locale) : DEFAULT_LOCALE,
      hasTranslations: supported && candidate !== DEFAULT_LOCALE,
    };
  }, [initialLanguage, pathname]);
  const trn = useMemo(
    () => createTrn(hasTranslations ? TRANSLATIONS[locale] : {}),
    [hasTranslations, locale]
  );

  const setLocale = (nextLocale: Locale) => {
    const resolved = resolveLocale(nextLocale);
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
    <LanguageContext.Provider value={{ locale, setLocale, trn }}>
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

export function useSetLocale() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useSetLocale must be used within a LanguageProvider");
  }
  return context.setLocale;
}
