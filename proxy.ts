import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime = "experimental-edge";

const locales = ["ar", "ca", "de", "en", "es", "fr", "it", "pt", "zh"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) {
    return defaultLocale;
  }
  const candidates = acceptLanguage
    .toLowerCase()
    .split(",")
    .map((part) => part.split(";")[0]?.trim())
    .filter(Boolean);
  for (const candidate of candidates) {
    const match = locales.find((locale) => candidate === locale || candidate.startsWith(`${locale}-`));
    if (match) {
      return match;
    }
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.includes("/src/") || pathname.includes("/_next/") || pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  if (pathname === "/" || pathname === "") {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}`;
    return NextResponse.redirect(request.nextUrl);
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|src|.*\\..*).*)", "/"],
};
