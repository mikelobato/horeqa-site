import type { MetadataRoute } from "next";
import { SUPPORTED_LOCALES } from "@/translations/locales";
import { buildHreflangAlternates, SUPPORTED_REGION_LOCALES } from "@/config/site-locales";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  // Always publish the production sitemap on the canonical www domain.
  const baseUrl = "https://www.horeqa.com";

  const routes = ["", "/providers"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  const locales = Array.from(new Set<string>([...SUPPORTED_LOCALES, ...SUPPORTED_REGION_LOCALES]));

  locales.forEach((locale) => {
    routes.forEach((route) => {
      const languages = buildHreflangAlternates(baseUrl, route);

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
