"use client"

import Image from "next/image"
import { Instagram, Linkedin, Music2, Mail, MapPin, ArrowUp } from "lucide-react"
import { useTRN, useLocale } from "@/contexts/LanguageContext"

export function Footer() {
  const TRN = useTRN()
  const locale = useLocale()
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    company: [
      { label: TRN("footer.links.about", "About us"), href: `/${locale}/about` },
      { label: TRN("footer.links.services", "Services"), href: `/${locale}#services` },
      { label: TRN("footer.links.contact", "Contact"), href: `/${locale}#contact` },
    ],
    resources: [
      { label: TRN("footer.links.blog", "Blog"), href: `/${locale}/blog` },
      { label: TRN("footer.links.case-studies", "Case studies"), href: `/${locale}/case-studies` },
      { label: TRN("footer.links.documentation", "Documentation"), href: `/${locale}/docs` },
    ],
    legal: [
      { label: TRN("footer.links.privacy", "Privacy policy"), href: `/${locale}/privacy` },
      { label: TRN("footer.links.terms", "Terms of service"), href: `/${locale}/terms` },
      { label: TRN("footer.links.cookies", "Cookie policy"), href: `/${locale}/cookies` },
    ],
  }

  return (
    <footer className="relative overflow-hidden border-t border-border bg-gradient-to-b from-white to-primary-light/5">
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-t from-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/horeqa_logo_dark.svg"
              alt={TRN("footer.logoAlt", "Horeqa logo")}
              width={160}
              height={28}
              className="h-7 w-auto"
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {TRN(
                "footer.description",
                "End-to-end technology services for the hospitality industry. Implementation, integration, and ongoing support.",
                null,
                "Translate 'hospitality' as the industry term: Spanish should use 'hostelería' (not 'hospitalidad')."
              )}
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@horeqa.com" className="transition-colors hover:text-primary">
                  info@horeqa.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{TRN("footer.location", "Barcelona, Spain")}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/horeqa.app/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={TRN(
                  "footer.social.instagram",
                  "Horeqa on Instagram",
                  null,
                  "Social profile label for assistive tech."
                )}
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-all hover:border-primary/50 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 hover:text-white hover:shadow-lg"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@horeqa.app"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={TRN(
                  "footer.social.tiktok",
                  "Horeqa on TikTok",
                  null,
                  "Social profile label for assistive tech."
                )}
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-all hover:border-primary/50 hover:bg-black hover:text-white hover:shadow-lg"
              >
                <Music2 className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/horeqa/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={TRN(
                  "footer.social.linkedin",
                  "Horeqa on LinkedIn",
                  null,
                  "Social profile label for assistive tech."
                )}
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-all hover:border-primary/50 hover:bg-[#0077B5] hover:text-white hover:shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {TRN("footer.sections.company", "Company")}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {TRN("footer.sections.resources", "Resources")}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {TRN("footer.sections.legal", "Legal")}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {TRN("footer.copyright", "© {{year}} Horeqa. All rights reserved.", {
              year,
            })}
          </p>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            {TRN("footer.backToTop", "Back to top")}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white transition-all group-hover:border-primary/50 group-hover:bg-primary group-hover:text-white">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
