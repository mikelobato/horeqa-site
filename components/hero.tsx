"use client"

import { useTRN } from "@/contexts/LanguageContext"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

const HERO_DESKTOP = "/images/hero/hero_desktop.png"
const HERO_MOBILE = "/images/hero/hero_mobile.png"

export function Hero() {
  const TRN = useTRN()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-white via-primary-light/20 to-white pb-10 pt-20 md:pb-14 md:pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={HERO_MOBILE} />
          <img
            src={HERO_DESKTOP}
            alt=""
            className="h-full w-full scale-105 object-cover object-center saturate-[0.9]"
          />
        </picture>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-black/10 to-black/45" />
      </div>

      <div className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 py-8 md:py-10">
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge/Eyebrow */}
            <div className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-5 py-2.5 backdrop-blur-sm transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Sparkles className="h-4 w-4 text-primary md:h-5 md:w-5" />
              <span className="text-sm font-semibold text-primary md:text-base">
                {TRN(
                  "hero.eyebrow",
                  "Implementation. Operations. Support.",
                  null,
                  "Short eyebrow line. Keep it factual and non-marketing."
                )}
              </span>
            </div>

            {/* Main heading */}
            <h1 className={`mt-7 text-balance text-4xl font-bold leading-tight tracking-tight text-white transition-all duration-700 delay-100 md:text-6xl lg:text-7xl ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="mx-auto block max-w-[20ch]">
                {TRN(
                  "hero.title",
                  "Your technology partner for the restaurant's day-to-day.",
                  null,
                  "Hero headline for restaurant operators. Serious, operational tone. Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension."
                )}
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`mx-auto mt-7 max-w-4xl text-pretty text-lg leading-relaxed text-white/95 transition-all duration-700 delay-200 md:text-xl lg:text-2xl ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {TRN(
                "hero.subtitle",
                "We select, implement, and operate your technology: ordering, POS, payments, delivery, reservations, menus, and back office. One contact. One accountable owner.",
                null,
                "Two short sentences. Operational language. Avoid SaaS hype."
              )}
            </p>

            {/* CTAs */}
            <div className={`mt-12 flex flex-col items-center justify-center gap-4 transition-all duration-700 delay-300 sm:flex-row ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-9 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
              >
                {TRN(
                  "hero.cta",
                  "Talk to Horeqa",
                  null,
                  "Primary CTA for restaurant operators. Keep it direct."
                )}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#process"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/50 bg-white/15 px-9 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-white/70 hover:bg-white/20 hover:shadow-lg sm:w-auto"
              >
                {TRN("hero.ctaSecondary", "See how we work")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
