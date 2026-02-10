export type Lang = "ar" | "ca" | "de" | "en" | "es" | "fr" | "it" | "pt" | "zh";

// Default country per language for canonical URLs and region-aware SEO.
// Keep values lowercase for URL segments.
export const DEFAULT_LOCALE_BY_LANG: Record<Lang, string> = {
  ar: "ar-sa",
  ca: "ca-es",
  de: "de-de",
  en: "en-gb",
  es: "es-es",
  fr: "fr-fr",
  it: "it-it",
  pt: "pt-pt",
  zh: "zh-cn",
};

export const SUPPORTED_REGION_LOCALES = Object.values(DEFAULT_LOCALE_BY_LANG);

export function isLanguageOnlyLocaleSegment(localeSegment: string): boolean {
  const value = (localeSegment || "").toLowerCase();
  const m = value.match(/^([a-z]{2})$/);
  if (!m) return false;
  return m[1] in DEFAULT_LOCALE_BY_LANG;
}

export function canonicalLocaleSegment(localeSegment: string): string {
  const value = (localeSegment || "en").toLowerCase();
  const m = value.match(/^([a-z]{2})$/);
  if (!m) return value;
  const lang = m[1] as Lang;
  return DEFAULT_LOCALE_BY_LANG[lang] || value;
}

export function toHreflang(localeSegment: string): string {
  // Convert "/en-gb" -> "en-GB" for standard hreflang formatting.
  const [lang, country] = localeSegment.split("-");
  if (!country) return (lang || "en").toLowerCase();
  return `${(lang || "en").toLowerCase()}-${country.toUpperCase()}`;
}

export function buildHreflangAlternates(baseUrl: string, path: string) {
  const languages: Record<string, string> = {};
  for (const locale of SUPPORTED_REGION_LOCALES) {
    languages[toHreflang(locale)] = `${baseUrl}/${locale}${path}`;
  }
  // Choose a stable default for users/robots when no locale matches.
  languages["x-default"] = `${baseUrl}/${DEFAULT_LOCALE_BY_LANG.es}${path}`;
  return languages;
}
