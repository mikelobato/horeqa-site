"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_LOCALE_BY_LANG, SUPPORTED_REGION_LOCALES } from "@/config/site-locales";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const locale = pickPreferredLocale(navigator.languages);
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}

function pickPreferredLocale(languages: readonly string[] | undefined): string {
  if (!languages || languages.length === 0) {
    return DEFAULT_LOCALE_BY_LANG.en;
  }
  for (const candidate of languages) {
    const normalized = candidate.toLowerCase();
    // Prefer an exact supported region locale first (e.g. "es-es").
    const exactRegion = SUPPORTED_REGION_LOCALES.find((loc) => normalized === loc);
    if (exactRegion) return exactRegion;

    // Otherwise fall back to language -> default region.
    const lang = normalized.slice(0, 2);
    if (lang in DEFAULT_LOCALE_BY_LANG) {
      return (DEFAULT_LOCALE_BY_LANG as Record<string, string>)[lang];
    }
  }
  return DEFAULT_LOCALE_BY_LANG.en;
}
