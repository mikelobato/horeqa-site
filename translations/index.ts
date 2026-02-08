import ar from "./ar.json";
import ca from "./ca.json";
import de from "./de.json";
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";
import it from "./it.json";
import pt from "./pt.json";
import zh from "./zh.json";

export const TRANSLATIONS = {
  ar,
  ca,
  de,
  en,
  es,
  fr,
  it,
  pt,
  zh,
};

export type Locale = keyof typeof TRANSLATIONS;
export type TranslationMap = Record<string, string>;
export const SUPPORTED_LOCALES: Locale[] = ["ar", "ca", "de", "en", "es", "fr", "it", "pt", "zh"];
