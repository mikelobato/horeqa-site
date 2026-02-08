"use client"

import { Settings, Layers, Headphones } from "lucide-react"
import { useTRN } from "@/contexts/LanguageContext"

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
          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-background">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {TRN(
                "services.items.consulting.title",
                "Technology consulting",
                null,
                "Service title. Short noun phrase."
              )}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {TRN(
                "services.items.consulting.description",
                "Strategy, architecture, and selection of hospitality technology.",
                null,
                "Translate 'hospitality' as the industry term (Spanish should use 'hosteleria', not 'hospitalidad')."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-background">
              <Layers className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {TRN(
                "services.items.implementation.title",
                "Implementation and integrations",
                null,
                "Service title. Avoid ampersands."
              )}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {TRN(
                "services.items.implementation.description",
                "POS, ordering, payments, marketplaces, internal systems.",
                null,
                "Service description. Comma-separated list."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-background">
              <Headphones className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {TRN(
                "services.items.support.title",
                "Operations and support",
                null,
                "Service title. Avoid ampersands."
              )}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {TRN(
                "services.items.support.description",
                "Ongoing support, monitoring, optimization, and coordination with vendors.",
                null,
                "Service description. Operational tone."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
