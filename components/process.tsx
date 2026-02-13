"use client"

import { useTRN } from "@/contexts/LanguageContext"
import { Search, Layout, Rocket, LifeBuoy } from "lucide-react"

export function Process() {
  const TRN = useTRN()

  const steps = [
    {
      number: "01",
      icon: Search,
      title: TRN(
        "process.steps.discover.title",
        "We understand your operation",
        null,
        "Step title. Restaurant operator tone. Avoid sounding like a consultancy."
      ),
      description: TRN(
        "process.steps.discover.description",
        "We start by understanding how your restaurant really works: service model, team, peak hours, current tools and daily pain points. No generic setups, no assumptions.",
        null,
        "Step description. Plain, direct language. No SaaS hype."
      ),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      icon: Layout,
      title: TRN(
        "process.steps.design.title",
        "We take ownership of your technology",
        null,
        "Step title. Emphasize ownership and responsibility."
      ),
      description: TRN(
        "process.steps.design.description",
        "We define the right tech stack for your operation, keep what works, replace what doesn’t, and coordinate all the tools involved: ordering, POS, payments, delivery, menus and back office.",
        null,
        "Step description. Mention the categories. Keep it operational."
      ),
      gradient: "from-violet-500 to-purple-500",
    },
    {
      number: "03",
      icon: Rocket,
      title: TRN(
        "process.steps.implement.title",
        "We implement and go live with you",
        null,
        "Step title. Restaurant operator tone. Keep it concrete."
      ),
      description: TRN(
        "process.steps.implement.description",
        "We configure everything, connect the systems, train your team and manage the go-live. You don’t deal with multiple vendors or setups. We do.",
        null,
        "Step description. Two short sentences. Avoid jargon."
      ),
      gradient: "from-emerald-500 to-green-500",
    },
    {
      number: "04",
      icon: LifeBuoy,
      title: TRN(
        "process.steps.support.title",
        "We operate and support the day-to-day",
        null,
        "Step title. Emphasize day-to-day operations and support."
      ),
      description: TRN(
        "process.steps.support.description",
        "Once live, Horeqa becomes your single point of contact. Incidents, changes, improvements or scaling. We handle it and coordinate with providers when needed.",
        null,
        "Step description. Short sentences. Operational tone."
      ),
      gradient: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section id="process" className="relative overflow-hidden border-y border-border bg-gradient-to-b from-white via-secondary/30 to-white py-24 md:py-32">
      {/* Background decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-gradient-to-l from-accent/5 to-primary/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
            {TRN("process.eyebrow", "How it works")}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {TRN(
              "process.title",
              "A simple model, built for real restaurant operations.",
              null,
              "Subtitle-style section title. Keep it straightforward and credible."
            )}
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Connection line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-full top-16 hidden h-0.5 w-full lg:block">
                    <div className="h-full w-full bg-gradient-to-r from-border via-primary/20 to-border" />
                  </div>
                )}

                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                  {/* Gradient background on hover */}
                  <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${step.gradient} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20`} />
                  
                  <div className="relative">
                    {/* Number badge */}
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="mt-6">
                      <Icon className={`h-8 w-8 bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110`} />
                    </div>

                    {/* Content */}
                    <h3 className="mt-6 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full bg-gradient-to-r ${step.gradient} transition-all duration-500 group-hover:w-full`}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Closing line */}
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-foreground md:text-2xl">
            {TRN(
              "process.closing",
              "One partner. One conversation. One responsible team.",
              null,
              "Closing line. Strong, short, confident. Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension."
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
