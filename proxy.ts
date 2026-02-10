import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE_BY_LANG, SUPPORTED_REGION_LOCALES } from "@/config/site-locales";

const languages = ["ar", "ca", "de", "en", "es", "fr", "it", "pt", "zh"] as const;
const defaultLanguage = "en";

const BOT_UA = /(bot|crawl|spider|slurp|facebookexternalhit|whatsapp|twitterbot|linkedinbot|googlebot|bingbot)/i;

function isBot(request: NextRequest): boolean {
  const ua = request.headers.get("user-agent") || "";
  return BOT_UA.test(ua);
}

function pickPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) {
    return DEFAULT_LOCALE_BY_LANG[defaultLanguage];
  }
  const candidates = acceptLanguage
    .toLowerCase()
    .split(",")
    .map((part) => part.split(";")[0]?.trim())
    .filter(Boolean);
  for (const candidate of candidates) {
    // Prefer an exact region locale if we support it.
    const exactRegion = SUPPORTED_REGION_LOCALES.find((loc) => loc === candidate);
    if (exactRegion) return exactRegion;

    // Otherwise fall back to language -> default region.
    const lang = languages.find((l) => candidate === l || candidate.startsWith(`${l}-`));
    if (lang) return DEFAULT_LOCALE_BY_LANG[lang];
  }
  return DEFAULT_LOCALE_BY_LANG[defaultLanguage];
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const host = request.headers.get("host") ?? "";
  const hostname = host.split(":")[0] ?? "";

  // Canonicalize to www in production.
  if (hostname === "horeqa.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = "www.horeqa.com";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  if (pathname.includes("/src/") || pathname.includes("/_next/") || pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Skip automatic redirects if the user explicitly opts out.
  const skipLocaleRedirect = request.nextUrl.searchParams.get("locale") === "skip";

  // Detect "/en" (language-only) and redirect to the default region locale (e.g. "/en-gb").
  const langOnly = pathname.match(/^\/([a-z]{2})\/?$/i);
  if (langOnly) {
    const lang = langOnly[1]?.toLowerCase() || defaultLanguage;
    const target = (DEFAULT_LOCALE_BY_LANG as Record<string, string>)[lang];
    const alreadyRedirected = request.cookies.get("horeqa_locale_redirect")?.value === "1";
    if (target && !skipLocaleRedirect && !alreadyRedirected && !isBot(request)) {
      const url = request.nextUrl.clone();
      url.pathname = `/${target}`;
      const res = NextResponse.redirect(url, 302);
      res.cookies.set("horeqa_locale_redirect", "1", { path: "/", maxAge: 60 * 60 * 24 * 365 });
      res.headers.set("Cache-Control", "no-store");
      return res;
    }
    // Allow the language-only route to resolve normally (e.g. when skipped or for bots).
    return NextResponse.next();
  }

  // Consider both "/en" and "/en-gb" as "has locale" so we don't prefix twice.
  const pathnameHasLocale = (() => {
    const match = pathname.match(/^\/([a-z]{2})(?:-[a-z]{2})?(\/|$)/i);
    if (!match) return false;
    const lang = match[1]?.toLowerCase();
    return !!lang && (languages as readonly string[]).includes(lang);
  })();

  if (pathnameHasLocale) return NextResponse.next();

  if (pathname === "/" || pathname === "") {
    const locale = pickPreferredLocale(request);
    request.nextUrl.pathname = `/${locale}`;
    return NextResponse.redirect(request.nextUrl);
  }

  const locale = pickPreferredLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|src|.*\\..*).*)", "/"],
};
