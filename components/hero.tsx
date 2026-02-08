"use client"

import { useTRN } from "@/contexts/LanguageContext"

export function Hero() {
  const TRN = useTRN()

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-foreground/5 blur-3xl" />
      </div>

      <div className="w-full">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {TRN(
              "hero.eyebrow",
              "Implementation. Operations. Support.",
              null,
              "Short eyebrow line. Keep it factual and non-marketing."
            )}
          </p>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            {TRN(
              "hero.title",
              "Hospitality technology, executed end to end.",
              null,
              "Hero headline. Serious, operational tone. Translate 'hospitality' as the industry term (Spanish should use 'hosteleria', not 'hospitalidad')."
            )}
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            {TRN(
              "hero.subtitle",
              "Horeqa takes ownership of the rollout: analysis, stack design, vendor coordination, go-live, and ongoing support. One partner. Clear responsibility.",
              null,
              "Two short sentences. Avoid buzzwords and exaggerated claims. Keep it aligned with the operator message on the page."
            )}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              {TRN(
                "hero.cta",
                "Start a project",
                null,
                "Primary CTA for restaurants/operators. Do not translate as generic 'Contact us' if a better local equivalent exists."
              )}
            </a>
            <a
              href="#operators"
              className="inline-flex w-full items-center justify-center rounded-md border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:w-auto"
            >
              {TRN("hero.ctaSecondary", "How we work")}
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
