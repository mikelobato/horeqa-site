"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown, Globe, Menu, X } from "lucide-react"
import { useLocale, useTRN } from "@/contexts/LanguageContext"
import { SUPPORTED_REGION_LOCALES } from "@/config/site-locales"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

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
  const [localeModalOpen, setLocaleModalOpen] = useState(false)
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

  const localeCode = (locale || "").toUpperCase()

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled
          ? "bg-white/95 py-3 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "bg-white/80 py-4 backdrop-blur-md"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
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

        {/* Center: desktop menu */}
        <nav
          className="hidden items-center justify-center gap-8 md:flex"
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
        <Dialog open={localeModalOpen} onOpenChange={setLocaleModalOpen}>
          <div className="flex items-center justify-end">
            <div className="hidden items-center gap-4 md:flex">
              <a
                href={primaryCta.href}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                <span className="relative z-10">{primaryCta.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  aria-label={TRN(
                    "nav.localeSwitcher",
                    "Change language and country",
                    null,
                    "ARIA label for the locale switcher button."
                  )}
                  className="h-10 gap-2 rounded-lg bg-white px-3 text-xs font-semibold text-foreground hover:bg-primary/5"
                >
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="tabular-nums">{localeCode}</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DialogTrigger>
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

              <DialogTrigger asChild>
                <button
                  type="button"
                  aria-label={TRN(
                    "nav.localeSwitcher",
                    "Change language and country",
                    null,
                    "ARIA label for the locale switcher button."
                  )}
                  className="flex items-center gap-1 rounded-lg border border-input bg-white px-2.5 py-2 text-xs font-semibold text-foreground transition-all hover:border-primary/50"
                >
                  <span className="tabular-nums">{localeCode}</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
              </DialogTrigger>
            </div>
          </div>

          <DialogContent className="max-h-[85vh] max-w-xl overflow-hidden">
            <DialogHeader>
              <DialogTitle>
                {TRN("locale.modal.title", "Choose your locale", null, "Modal title for locale selection.")}
              </DialogTitle>
              <DialogDescription>
                {TRN(
                  "locale.modal.subtitle",
                  "Select language and country. You will stay on the same page when available.",
                  null,
                  "Modal subtitle. Keep it short."
                )}
              </DialogDescription>
            </DialogHeader>

            <div className="max-h-[60vh] overflow-y-auto pr-1">
              <div className="grid gap-2 sm:grid-cols-2">
                {SUPPORTED_REGION_LOCALES.map((loc) => {
                  const selected = loc === (locale || "").toLowerCase()
                  return (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => {
                        setLocaleModalOpen(false)
                        handleLocaleChange(loc)
                      }}
                      className={`flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors ${
                        selected
                          ? "border-primary bg-primary/5"
                          : "border-border bg-white hover:bg-secondary/40"
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-foreground">
                          {getLocaleLabel(loc)}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {TRN("locale.modal.code", "ISO code", null, "Small label for ISO code.")}:{" "}
                          <span className="tabular-nums">{loc.toUpperCase()}</span>
                        </div>
                      </div>
                      <span className="ml-3 shrink-0 rounded-md bg-secondary px-2 py-1 text-[11px] font-semibold text-foreground">
                        {loc.toUpperCase()}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="animate-fade-in-up border-t border-border bg-white/95 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden"
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
