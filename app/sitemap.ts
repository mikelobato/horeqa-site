import type { MetadataRoute } from "next";
import { SUPPORTED_LOCALES } from "@/translations/locales";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  // Always publish the production sitemap on the canonical www domain.
  const baseUrl = "https://www.horeqa.com";

  const routes = ["", "/providers"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  SUPPORTED_LOCALES.forEach((locale) => {
    routes.forEach((route) => {
      const languages = SUPPORTED_LOCALES.reduce<Record<string, string>>((acc, lang) => {
        acc[lang] = `${baseUrl}/${lang}${route}`;
        return acc;
      }, {});

      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages,
        },
      });
    });
  });

  return sitemapEntries;
}
