"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";

export function AppProviders({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Language;
}) {
  return <LanguageProvider initialLanguage={initialLanguage}>{children}</LanguageProvider>;
}
