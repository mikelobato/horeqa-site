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
    if (SUPPORTED_LANGS.includes(segment as Language)) {
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
