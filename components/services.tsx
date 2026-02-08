"use client"

import { Settings, Layers, Headphones } from "lucide-react"
import { useTRN } from "@/contexts/LanguageContext"

export function Services() {
  const TRN = useTRN()

  const services = [
    {
      icon: Settings,
      title: TRN(
        "services.items.consulting.title",
        "Technology consulting",
        null,
        "Service title. Short noun phrase."
      ),
      description: TRN(
        "services.items.consulting.description",
        "Strategy, architecture, and selection of hospitality technology.",
        null,
        "Translate 'hospitality' as the industry term (Spanish should use 'hosteleria', not 'hospitalidad')."
      ),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Layers,
      title: TRN(
        "services.items.implementation.title",
        "Implementation and integrations",
        null,
        "Service title. Avoid ampersands."
      ),
      description: TRN(
        "services.items.implementation.description",
        "POS, ordering, payments, marketplaces, internal systems.",
        null,
        "Service description. Comma-separated list."
      ),
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Headphones,
      title: TRN(
        "services.items.support.title",
        "Operations and support",
        null,
        "Service title. Avoid ampersands."
      ),
      description: TRN(
        "services.items.support.description",
        "Ongoing support, monitoring, optimization, and coordination with vendors.",
        null,
        "Service description. Operational tone."
      ),
      gradient: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section id="services" className="relative border-t border-border bg-white py-24 md:py-32">
      {/* Background pattern */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-accent/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
            {TRN("services.eyebrow", "What we do")}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {TRN(
              "services.title",
              "End-to-end technology services for hospitality.",
              null,
              "Translate 'hospitality' as the industry term: Spanish should use 'hosteleria' (not 'hospitalidad')."
            )}
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Gradient accent on hover */}
                <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20`} />
                
                <div className="relative">
                  {/* Icon container */}
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                    {TRN("services.learnMore", "Learn more")}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25"
          >
            {TRN("services.cta", "Discuss your project")}
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
