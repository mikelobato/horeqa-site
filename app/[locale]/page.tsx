import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Clients } from "@/components/clients";
import { Process } from "@/components/process";
import { Support } from "@/components/support";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { normalizeLocale, type Language } from "@/lib/i18n";
import { createTrn } from "@/lib/trn";
import { META_TRANSLATIONS } from "@/translations/meta";
import { buildHreflangAlternates, canonicalLocaleSegment } from "@/config/site-locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const localeSegment = (localeParam || "en").toLowerCase();
  const locale = normalizeLocale(localeSegment) as Language;
  const TRN = createTrn(META_TRANSLATIONS[locale] ?? META_TRANSLATIONS.en);

  const baseUrl = "https://www.horeqa.com";
  const canonicalUrl = `${baseUrl}/${canonicalLocaleSegment(localeSegment)}`;
  const title = TRN(
    "meta.home.title",
    "Technology partner for modern hospitality",
    null,
    "Home page meta title. Translate 'hospitality' as the industry term: Spanish should use 'hosteleria' (not 'hospitalidad')."
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
      languages: buildHreflangAlternates(baseUrl, ""),
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
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
