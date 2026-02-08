"use client"

import Image from "next/image"
import { useTRN } from "@/contexts/LanguageContext"

export function Footer() {
  const TRN = useTRN()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <Image
          src="/horeqa_logo_dark.svg"
          alt={TRN("footer.logoAlt", "Horeqa logo")}
          width={120}
          height={22}
          className="h-5 w-auto"
        />
        <p className="text-xs text-muted-foreground">
          {TRN("footer.copyright", "© {{year}} Horeqa. All rights reserved.", {
            year,
          })}
        </p>
      </div>
    </footer>
  )
}
