"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useLocale, useTRN } from "@/contexts/LanguageContext"
import { SUPPORTED_REGION_LOCALES } from "@/config/site-locales"

function getLocaleLabel(localeSegment: string): string {
  const seg = (localeSegment || "").toLowerCase()
  const m = seg.match(/^([a-z]{2})-([a-z]{2})$/i)
  if (!m) return seg.toUpperCase()

  const lang = m[1]!
  const region = m[2]!.toUpperCase()

  try {
    const langName = new Intl.DisplayNames([seg], { type: "language" }).of(lang) || lang
    const regionName = new Intl.DisplayNames([seg], { type: "region" }).of(region) || region
    const niceLangName = langName.charAt(0).toUpperCase() + langName.slice(1)
    return `${niceLangName} (${regionName})`
  } catch {
    return `${lang.toUpperCase()} (${region})`
  }
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const TRN = useTRN()
  const locale = useLocale()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLocaleChange = (nextLocaleSegment: string) => {
    const currentPath = pathname || `/${locale}`
    const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}(?:-[a-z]{2})?(\/|$)/, "/")
    const newPath = `/${nextLocaleSegment}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`
    window.location.href = newPath
  }

  const navLinks = [
    { label: TRN("nav.what", "What we do"), href: `/${locale}#what-we-do` },
    { label: TRN("nav.how", "How we work"), href: `/${locale}#process` },
    { label: TRN("nav.support", "Support"), href: `/${locale}#support` },
    { label: TRN("nav.contact", "Contact"), href: `/${locale}#contact` },
  ]

  const primaryCta = {
    href: `/${locale}#contact`,
    label: TRN(
      "nav.cta",
      "Talk to Horeqa",
      null,
      "Primary header CTA for restaurant operators. Avoid generic 'Contact us' if there is a better local equivalent."
    ),
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled
          ? "bg-white/95 py-3 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "bg-white/80 py-4 backdrop-blur-md"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Left: logo */}
        <div className="flex items-center justify-start">
          <a 
            href={`/${locale}`} 
            aria-label={TRN("nav.home", "Horeqa home")}
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/horeqa_logo_dark.svg"
              alt={TRN("nav.logoAlt", "Horeqa logo")}
              width={180}
              height={32}
              priority
              className={`h-auto transition-all duration-300 ${scrolled ? "w-36" : "w-40"}`}
            />
          </a>
        </div>

        {/* Center: desktop menu (true center, independent from right-side width) */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-8 md:flex"
          aria-label={TRN(
            "nav.aria.main",
            "Main navigation",
            null,
            "ARIA label for the primary (desktop) navigation."
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: actions (desktop) / toggle (mobile) */}
        <div className="flex items-center justify-end">
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={primaryCta.href}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              <span className="relative z-10">{primaryCta.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <div className="flex items-center gap-2">
              <label htmlFor="language-select" className="sr-only">
                {TRN("nav.language", "Language")}
              </label>
              <select
                id="language-select"
                value={locale}
                onChange={(event) => handleLocaleChange(event.target.value)}
                className="max-w-[220px] cursor-pointer rounded-lg border border-input bg-white px-3 py-2 text-xs font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {SUPPORTED_REGION_LOCALES.map((loc) => (
                  <option key={loc} value={loc}>
                    {getLocaleLabel(loc)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={
                mobileOpen ? TRN("nav.mobile.close", "Close menu") : TRN("nav.mobile.open", "Open menu")
              }
              className="rounded-lg p-2 transition-colors hover:bg-primary/10"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <label htmlFor="language-select-mobile-bar" className="sr-only">
              {TRN("nav.language", "Language")}
            </label>
            <select
              id="language-select-mobile-bar"
              value={locale}
              onChange={(event) => handleLocaleChange(event.target.value)}
              className="max-w-[200px] cursor-pointer rounded-lg border border-input bg-white px-3 py-2 text-xs font-semibold text-foreground transition-all hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {SUPPORTED_REGION_LOCALES.map((loc) => (
                <option key={loc} value={loc}>
                  {getLocaleLabel(loc)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="animate-in border-t border-border bg-white/95 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden"
          aria-label={TRN(
            "nav.aria.mobile",
            "Mobile navigation",
            null,
            "ARIA label for the mobile navigation panel."
          )}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-muted-foreground transition-all hover:bg-primary/5 hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={primaryCta.href}
              className="mt-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-center text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all hover:shadow-lg"
              onClick={() => setMobileOpen(false)}
            >
              {primaryCta.label}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
