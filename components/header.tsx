"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLocale, useSetLocale, useTRN } from "@/contexts/LanguageContext"
import { SUPPORTED_LOCALES, type Locale } from "@/translations"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const TRN = useTRN()
  const locale = useLocale()
  const setLocale = useSetLocale()

  const navLinks = [
    { label: TRN("nav.services", "Services"), href: "#services" },
    { label: TRN("nav.clients", "Clients"), href: "#clients" },
    { label: TRN("nav.process", "Process"), href: "#process" },
    { label: TRN("nav.about", "About"), href: "#about" },
    { label: TRN("nav.contact", "Contact"), href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {TRN("nav.cta", "Contact us")}
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
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={
            mobileOpen ? TRN("nav.mobile.close", "Close menu") : TRN("nav.mobile.open", "Open menu")
          }
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-border px-6 pb-6 pt-4 md:hidden" aria-label="Mobile navigation">
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
              href="#contact"
              className="mt-2 rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={() => setMobileOpen(false)}
            >
              {TRN("nav.cta", "Contact us")}
            </a>
            <div className="flex items-center gap-2">
              <label htmlFor="language-select-mobile" className="sr-only">
                {TRN("nav.language", "Language")}
              </label>
              <select
                id="language-select-mobile"
                value={locale}
                onChange={(event) => setLocale(event.target.value as Locale)}
                className="w-full rounded-md border border-input bg-background px-2 py-2 text-sm font-medium text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {SUPPORTED_LOCALES.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
