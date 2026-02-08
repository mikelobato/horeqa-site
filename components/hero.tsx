"use client"

import { useTRN } from "@/contexts/LanguageContext"

export function Hero() {
  const TRN = useTRN()

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:py-40">
      <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {TRN(
          "hero.title",
          "Technology partner for modern hospitality.",
          null,
          "Translate 'hospitality' as the industry term: Spanish should use 'hostelería' (not 'hospitalidad')."
        )}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        {TRN(
          "hero.subtitle",
          "We help restaurants and hospitality operators implement, integrate, and operate their technology stack.",
          null,
          "Translate 'hospitality' as the industry term: Spanish should use 'hostelería' (not 'hospitalidad')."
        )}
      </p>
      <div className="mt-10">
        <a
          href="#contact"
          className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {TRN("hero.cta", "Contact us")}
        </a>
      </div>
    </section>
  )
}
