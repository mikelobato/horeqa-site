"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SUPPORTED_LOCALES } from "@/translations/locales";

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
    return "en";
  }
  for (const candidate of languages) {
    const normalized = candidate.toLowerCase();
    const exact = SUPPORTED_LOCALES.find((locale) => normalized === locale);
    if (exact) {
      return exact;
    }
    const prefix = SUPPORTED_LOCALES.find(
      (locale) => normalized.startsWith(`${locale}-`) || normalized.startsWith(`${locale}_`)
    );
    if (prefix) {
      return prefix;
    }
  }
  return "en";
}
