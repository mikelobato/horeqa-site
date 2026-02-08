import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Clients } from "@/components/clients";
import { Process } from "@/components/process";
import { Positioning } from "@/components/positioning";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
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
  const canonicalUrl = `${baseUrl}/${locale}`;
  const title = TRN(
    "meta.home.title",
    "Technology partner for modern hospitality",
    null,
    "Home page meta title. Translate 'hospitality' as the industry term: Spanish should use 'hostelería' (not 'hospitalidad')."
  );
  const description = TRN(
    "meta.home.description",
    "Consulting, implementation, and support for HORECA technology stacks.",
    null,
    "Home page meta description."
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
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
      },
    },
  };
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Process />
        <Positioning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
