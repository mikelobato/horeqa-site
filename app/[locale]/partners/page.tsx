import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PartnersMessage } from "@/components/partners-message"
import { normalizeLocale, type Language } from "@/lib/i18n"
import { createTrn } from "@/lib/trn"
import { META_TRANSLATIONS } from "@/translations/meta"
import { buildHreflangAlternates, canonicalLocaleSegment } from "@/config/site-locales"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: localeParam } = await params
  const localeSegment = (localeParam || "en").toLowerCase()
  const locale = normalizeLocale(localeSegment) as Language
  const TRN = createTrn(META_TRANSLATIONS[locale] ?? META_TRANSLATIONS.en)

  const baseUrl = "https://www.horeqa.com"
  const canonicalUrl = `${baseUrl}/${canonicalLocaleSegment(localeSegment)}/partners`

  const title = TRN(
    "meta.partners.title",
    "Horeqa Partner Network - Distribution and operational support",
    null,
    "SEO title for partners page. Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension."
  )
  const description = TRN(
    "meta.partners.description",
    "Become a Horeqa partner and scale your sales with structured onboarding, operational support, and continuous enablement.",
    null,
    "SEO description for partners page. Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension."
  )

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
      languages: buildHreflangAlternates(baseUrl, "/partners"),
    },
  }
}

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main>
        <PartnersMessage />
      </main>
      <Footer />
    </>
  )
}
