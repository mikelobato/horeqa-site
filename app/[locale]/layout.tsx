import type React from "react";
import type { Metadata } from "next";
import { AppProviders } from "@/components/AppProviders";
import { normalizeLocale, type Language } from "@/lib/i18n";
import { SUPPORTED_LOCALES } from "@/translations/locales";
import {
  buildHreflangAlternates,
  canonicalLocaleSegment,
  SUPPORTED_REGION_LOCALES,
} from "@/config/site-locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const localeSegment = (localeParam || "en").toLowerCase();
  const locale = normalizeLocale(localeSegment) as Language;

  // Use the canonical production domain for hreflang + canonical.
  const baseUrl = "https://www.horeqa.com";
  const canonicalUrl = `${baseUrl}/${canonicalLocaleSegment(localeSegment)}`;

  const languages = buildHreflangAlternates(baseUrl, "");

  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
  };
}

export async function generateStaticParams() {
  const locales = Array.from(new Set<string>([...SUPPORTED_LOCALES, ...SUPPORTED_REGION_LOCALES]));
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam) as Language;

  return <AppProviders initialLanguage={locale}>{children}</AppProviders>;
}
