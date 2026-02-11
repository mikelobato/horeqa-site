import type { MetadataRoute } from "next";
import { buildHreflangAlternates, SUPPORTED_REGION_LOCALES } from "@/config/site-locales";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  // Always publish the production sitemap on the canonical www domain.
  const baseUrl = "https://www.horeqa.com";
  const canonicalRoutes = ["", "/providers"] as const;
  const canonicalLocales = Array.from(new Set<string>(SUPPORTED_REGION_LOCALES));

  // Build alternates once per route to keep hreflang sets consistent across all locale variants.
  const alternatesByRoute = new Map<string, Record<string, string>>();
  canonicalRoutes.forEach((route) => {
    alternatesByRoute.set(route, buildHreflangAlternates(baseUrl, route));
  });

  return canonicalLocales.flatMap((locale) =>
    canonicalRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : 0.7,
      alternates: {
        languages: alternatesByRoute.get(route)!,
      },
    }))
  );
}
