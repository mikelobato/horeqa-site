"use client"

import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useLocale, useSetLocale, useTRN } from "@/contexts/LanguageContext"
import { SUPPORTED_LOCALES, type Locale } from "@/translations"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const TRN = useTRN()
  const locale = useLocale()
  const setLocale = useSetLocale()
  const pathname = usePathname()

  const navLinks = [
    { label: TRN("nav.restaurants", "For restaurants"), href: `/${locale}` },
    { label: TRN("nav.providers", "For providers"), href: `/${locale}/providers` },
  ]

  const isProvidersPage = pathname?.includes("/providers") ?? false
  const primaryCta = isProvidersPage
    ? {
        href: `/${locale}/providers#apply`,
        label: TRN(
          "nav.cta.providers",
          "Apply as a provider",
          null,
          "Header CTA when on the providers page. Must not be a generic 'Contact us'."
        ),
      }
    : {
        href: `/${locale}#contact`,
        label: TRN("nav.cta", "Contact us"),
      }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        {/* Left: logo */}
        <div className="flex items-center justify-start">
          <a href={`/${locale}`} aria-label={TRN("nav.home", "Horeqa home")}>
            <Image
              src="/horeqa_logo_dark.svg"
              alt={TRN("nav.logoAlt", "Horeqa logo")}
              width={180}
              height={32}
              priority
              className="h-7 w-auto"
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
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {primaryCta.label}
            </a>
            <div className="flex items-center gap-2">
              <label htmlFor="language-select" className="sr-only">
                {TRN("nav.language", "Language")}
              </label>
              <select
                id="language-select"
                value={locale}
                onChange={(event) => setLocale(event.target.value as Locale)}
                className="rounded-md border border-input bg-background px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {SUPPORTED_LOCALES.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={
                mobileOpen ? TRN("nav.mobile.close", "Close menu") : TRN("nav.mobile.open", "Open menu")
              }
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Mobile language dropdown aligned to the far right */}
            <label htmlFor="language-select-mobile-bar" className="sr-only">
              {TRN("nav.language", "Language")}
            </label>
            <select
              id="language-select-mobile-bar"
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
              className="rounded-md border border-input bg-background px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {SUPPORTED_LOCALES.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="border-t border-border px-6 pb-6 pt-4 md:hidden"
          aria-label={TRN(
            "nav.aria.mobile",
            "Mobile navigation",
            null,
            "ARIA label for the mobile navigation panel."
          )}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={primaryCta.href}
              className="mt-2 rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
