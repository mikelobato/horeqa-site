export const SUPPORTED_LOCALES = [
  "ar",
  "ca",
  "de",
  "en",
  "es",
  "fr",
  "it",
  "pt",
  "zh",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];
