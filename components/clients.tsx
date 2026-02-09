"use client"

import { Headset, ShieldCheck, Wrench, Users } from "lucide-react"
import { useTRN } from "@/contexts/LanguageContext"

export function Clients() {
  const TRN = useTRN()

  return (
    <section id="why-horeqa" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
            {TRN("why.eyebrow", "Why Horeqa")}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {TRN(
              "why.title",
              "One accountable owner. No finger-pointing.",
              null,
              "Section title. Strong promise of responsibility. Avoid SaaS language."
            )}
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
            <Users className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-base font-bold text-foreground">
              {TRN("why.items.poc.title", "One point of contact")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {TRN("why.items.poc.body", "One single point of contact for everything technology-related.")}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
            <Wrench className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-base font-bold text-foreground">
              {TRN("why.items.handsOn.title", "Hands-on implementation")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {TRN(
                "why.items.handsOn.body",
                "We configure it and leave it running in production. No slide decks."
              )}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
            <Headset className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-base font-bold text-foreground">
              {TRN("why.items.support.title", "Ongoing operational support")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {TRN(
                "why.items.support.body",
                "Operational support and coordination with vendors, day to day."
              )}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-base font-bold text-foreground">
              {TRN("why.items.escalate.title", "Escalate only when needed")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {TRN(
                "why.items.escalate.body",
                "We escalate to the manufacturer only when needed, without exposing the restaurant to the noise."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
