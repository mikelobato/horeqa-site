import type React from "react";
import type { Metadata } from "next";
import { AppProviders } from "@/components/AppProviders";
import { normalizeLocale, type Language } from "@/lib/i18n";
import { SUPPORTED_LOCALES } from "@/translations/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam) as Language;

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NODE_ENV === "production" ? "https://www.horeqa.com" : "https://dev-www.horeqa.com");
  const canonicalUrl = `${baseUrl}/${locale}`;

  const languages = SUPPORTED_LOCALES.reduce<Record<string, string>>((acc, lang) => {
    acc[lang] = `${baseUrl}/${lang}`;
    return acc;
  }, {});

  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
  };
}

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
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
