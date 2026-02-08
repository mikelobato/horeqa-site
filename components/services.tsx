"use client"

import { Settings, Layers, Headphones } from "lucide-react"
import { useTRN } from "@/contexts/LanguageContext"

const serviceItems = [
  {
    key: "consulting",
    icon: Settings,
    title: "Technology Consulting",
    description: "Strategy, architecture, and selection of hospitality technology.",
  },
  {
    key: "implementation",
    icon: Layers,
    title: "Implementation & Integrations",
    description: "POS, ordering, payments, marketplaces, internal systems.",
  },
  {
    key: "support",
    icon: Headphones,
    title: "Operations & Support",
    description: "Ongoing support, monitoring, optimization, and coordination with vendors.",
  },
]

export function Services() {
  const TRN = useTRN()

  return (
    <section id="services" className="border-t border-border bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {TRN("services.eyebrow", "What we do")}
        </h2>
        <p className="mt-2 max-w-xl text-2xl font-semibold text-foreground md:text-3xl">
          {TRN(
            "services.title",
            "End-to-end technology services for hospitality.",
            null,
            "Translate 'hospitality' as the industry term: Spanish should use 'hosteleria' (not 'hospitalidad')."
          )}
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {serviceItems.map((service) => (
            <div key={service.title} className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-background">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {TRN(`services.items.${service.key}.title`, service.title)}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {service.key === "consulting"
                  ? TRN(
                      "services.items.consulting.description",
                      "Strategy, architecture, and selection of hospitality technology.",
                      null,
                      "Translate 'hospitality' as the industry term: Spanish should use 'hosteleria' (not 'hospitalidad')."
                    )
                  : TRN(`services.items.${service.key}.description`, service.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
