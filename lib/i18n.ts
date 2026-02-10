export type Language = "ar" | "ca" | "de" | "en" | "es" | "fr" | "it" | "pt" | "zh";

const SUPPORTED_LANGS: Language[] = ["ar", "ca", "de", "en", "es", "fr", "it", "pt", "zh"];

export function normalizeLocale(input?: string): Language {
  const value = (input || "en").toLowerCase();
  const match = SUPPORTED_LANGS.find((lang) => value.startsWith(lang));
  return match || "en";
}

export function stripLocaleFromPath(pathname: string): string {
  if (!pathname) {
    return "/";
  }
  const parts = pathname.split("/").filter(Boolean);
  let index = 0;
  while (index < parts.length) {
    const segment = parts[index];
    const isLangOnly = SUPPORTED_LANGS.includes(segment as Language);
    const isRegionLocale =
      /^[a-z]{2}-[a-z]{2}$/i.test(segment) && SUPPORTED_LANGS.includes(segment.slice(0, 2) as Language);
    if (isLangOnly || isRegionLocale) {
      index += 1;
      continue;
    }
    break;
  }
  const remaining = parts.slice(index);
  if (remaining.length === 0) {
    return "/";
  }
  return `/${remaining.join("/")}`;
}
