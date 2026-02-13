"use client"

import { BadgeEuro, Hand, Headset, Lightbulb, PlayCircle, ReceiptText } from "lucide-react"
import { useTRN } from "@/contexts/LanguageContext"

export function RestaurantAreas() {
  const TRN = useTRN()

  const areas = [
    {
      key: "consulting",
      icon: Lightbulb,
      originalTitle: "Horeqa Consulting",
      localizedUnit: TRN("areas.consulting.unit", "Consulting"),
      description: TRN(
        "areas.consulting.body",
        "We analyze your current setup and what you need across technology solutions."
      ),
    },
    {
      key: "sales",
      icon: BadgeEuro,
      originalTitle: "Horeqa Sales",
      localizedUnit: TRN("areas.sales.unit", "Sales"),
      description: TRN(
        "areas.sales.body",
        "We build a tailored commercial proposal for your business model and operating context."
      ),
    },
    {
      key: "activations",
      icon: PlayCircle,
      originalTitle: "Horeqa Activations",
      localizedUnit: TRN("areas.activations.unit", "Activations"),
      description: TRN(
        "areas.activations.body",
        "We activate products ourselves through our partner network.",
        null,
        "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension."
      ),
    },
    {
      key: "support",
      icon: Headset,
      originalTitle: "Horeqa Support",
      localizedUnit: TRN("areas.support.unit", "Support"),
      description: TRN(
        "areas.support.body",
        "We provide support across all activated services in one operational flow."
      ),
    },
    {
      key: "services",
      icon: Hand,
      originalTitle: "Horeqa Services",
      localizedUnit: TRN("areas.services.unit", "Services"),
      description: TRN(
        "areas.services.body",
        "Hands-on services to support your day-to-day operations, so you can focus on your business."
      ),
    },
    {
      key: "billing",
      icon: ReceiptText,
      originalTitle: "Horeqa Billing",
      localizedUnit: TRN("areas.billing.unit", "Billing"),
      description: TRN(
        "areas.billing.body",
        "We bill your services centrally in a single invoice."
      ),
    },
  ]

  return (
    <section className="border-t border-border bg-slate-50/70 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
            {TRN("areas.eyebrow", "Restaurant Operating Areas")}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {TRN("areas.title", "How Horeqa operates for restaurants")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {TRN(
              "areas.subtitle",
              "From discovery to billing, Horeqa runs the key execution areas needed to keep your technology stack under control."
            )}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <article
                key={area.key}
                className="rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">{area.originalTitle}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary/70">{area.localizedUnit}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{area.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
