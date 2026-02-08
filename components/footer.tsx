"use client"

import Image from "next/image"
import { Instagram, Linkedin, Music2 } from "lucide-react"
import { useTRN } from "@/contexts/LanguageContext"

export function Footer() {
  const TRN = useTRN()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <Image
          src="/horeqa_logo_dark.svg"
          alt={TRN("footer.logoAlt", "Horeqa logo")}
          width={120}
          height={22}
          className="h-5 w-auto"
        />

        <div className="flex items-center gap-5">
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
            className="text-muted-foreground transition-colors hover:text-foreground"
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
            className="text-muted-foreground transition-colors hover:text-foreground"
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
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          {TRN("footer.copyright", "© {{year}} Horeqa. All rights reserved.", {
            year,
          })}
        </p>
      </div>
    </footer>
  )
}
