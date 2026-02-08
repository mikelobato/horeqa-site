"use client"

import { useTRN } from "@/contexts/LanguageContext"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const TRN = useTRN()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-gradient-to-b from-white via-primary-light/20 to-white pt-20 pb-16">
      {/* Advanced background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 blur-3xl animate-float" />
        <div className="absolute -bottom-32 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-accent/10 to-primary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 h-[300px] w-[300px] rounded-full bg-primary/5 blur-2xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge/Eyebrow */}
            <div className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 backdrop-blur-sm transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                {TRN(
                  "hero.eyebrow",
                  "Implementation. Operations. Support.",
                  null,
                  "Short eyebrow line. Keep it factual and non-marketing."
                )}
              </span>
            </div>

            {/* Main heading */}
            <h1 className={`mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground transition-all duration-700 delay-100 md:text-5xl lg:text-6xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="block">
                {TRN(
                  "hero.title",
                  "Hospitality technology, executed end to end.",
                  null,
                  "Hero headline. Serious, operational tone. Translate 'hospitality' as the industry term (Spanish should use 'hosteleria', not 'hospitalidad')."
                )}
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-200 md:text-lg lg:text-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {TRN(
                "hero.subtitle",
                "We take ownership of the rollout: analysis, stack design, vendor coordination, go-live, and ongoing support. One partner. Clear responsibility.",
                null,
                "Two short sentences. Avoid buzzwords and exaggerated claims. Keep it aligned with the operator message on the page."
              )}
            </p>

            {/* Key points */}
            <div className={`mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{TRN("hero.keyPoint1", "Full stack implementation")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{TRN("hero.keyPoint2", "24/7 Support")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{TRN("hero.keyPoint3", "Vendor coordination")}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
              >
                {TRN(
                  "hero.cta",
                  "Start a project",
                  null,
                  "Primary CTA for restaurants/operators. Do not translate as generic 'Contact us' if a better local equivalent exists."
                )}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#operators"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary/20 bg-white/80 px-8 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white hover:shadow-lg sm:w-auto"
              >
                {TRN("hero.ctaSecondary", "How we work")}
              </a>
            </div>

            {/* Trust indicators */}
            <div className={`mt-12 flex flex-col items-center gap-4 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {TRN(
                  "hero.trustedBy",
                  "Trusted by leading hospitality operators",
                  null,
                  "Translate 'hospitality' as the industry term: Spanish should use 'hostelería' (not 'hospitalidad')."
                )}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                {/* Placeholder for client logos - you can add actual logos later */}
                <div className="h-8 w-24 rounded bg-gradient-to-r from-muted to-muted-foreground/20" />
                <div className="h-8 w-24 rounded bg-gradient-to-r from-muted to-muted-foreground/20" />
                <div className="h-8 w-24 rounded bg-gradient-to-r from-muted to-muted-foreground/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
