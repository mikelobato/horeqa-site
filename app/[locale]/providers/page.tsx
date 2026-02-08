import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProvidersMessage } from "@/components/providers-message";
import { normalizeLocale, type Language } from "@/lib/i18n";
import { createTrn } from "@/lib/trn";
import { META_TRANSLATIONS } from "@/translations/meta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam) as Language;
  const TRN = createTrn(META_TRANSLATIONS[locale] ?? META_TRANSLATIONS.en);

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NODE_ENV === "production" ? "https://www.horeqa.com" : "https://dev-www.horeqa.com");
  const canonicalUrl = `${baseUrl}/${locale}/providers`;

  const title = TRN(
    "meta.providers.title",
    "For hospitality technology providers",
    null,
    "Page meta title for the providers page."
  );
  const description = TRN(
    "meta.providers.description",
    "Implementation, operations, and support to help hospitality tech providers deliver stable rollouts and strong adoption.",
    null,
    "Page meta description for the providers page."
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: "Horeqa",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/providers`,
        es: `${baseUrl}/es/providers`,
      },
    },
  };
}

export default function ProvidersPage() {
  return (
    <>
      <Header />
      <main>
        <ProvidersMessage />
      </main>
      <Footer />
    </>
  );
}

