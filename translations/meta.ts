import type { Locale } from "./locales";

type MetaTranslations = Record<string, string>;

const EN: MetaTranslations = {
  "meta.global.description":
    "Horeqa helps restaurants and hospitality operators implement, integrate, and operate their technology stack.",
  "meta.home.title": "Technology partner for modern hospitality",
  "meta.home.description":
    "Consulting, implementation, and support for HORECA technology stacks.",
};

const ES: MetaTranslations = {
  "meta.global.description":
    "Horeqa ayuda a restaurantes y operadores hoteleros a implementar, integrar y operar su stack tecnológico.",
  "meta.home.title": "Socio tecnológico para la hostelería moderna",
  "meta.home.description":
    "Consultoría, implementación y soporte para stacks tecnológicos HORECA.",
};

export const META_TRANSLATIONS: Record<Locale, MetaTranslations> = {
  ar: EN,
  ca: EN,
  de: EN,
  en: EN,
  es: ES,
  fr: EN,
  it: EN,
  pt: EN,
  zh: EN,
};
