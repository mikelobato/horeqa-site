"use client"

import { Building2, Store, UtensilsCrossed, Cpu } from "lucide-react"
import { useTRN } from "@/contexts/LanguageContext"

const segments = [
  { key: "restaurants", icon: UtensilsCrossed, label: "Restaurants & restaurant groups" },
  { key: "qsr", icon: Store, label: "QSR & chains" },
  { key: "operators", icon: Building2, label: "Hospitality operators" },
  { key: "vendors", icon: Cpu, label: "Technology vendors & platforms" },
]

export function Clients() {
  const TRN = useTRN()

  return (
    <section id="clients" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {TRN("clients.eyebrow", "Who we work with")}
        </h2>
        <p className="mt-2 max-w-xl text-2xl font-semibold text-foreground md:text-3xl">
          {TRN(
            "clients.title",
            "Focused on hospitality, exclusively.",
            null,
            "Translate 'hospitality' as the industry term: Spanish should use 'hosteleria' (not 'hospitalidad')."
          )}
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((seg) => (
            <div
              key={seg.label}
              className="flex items-start gap-4 rounded-lg border border-border bg-background p-5"
            >
              <seg.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium leading-snug text-foreground">
                {TRN(`clients.segments.${seg.key}`, seg.label)}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-xl leading-relaxed text-muted-foreground">
          {TRN(
            "clients.note",
            "Horeqa works as a neutral partner between operators and technology providers."
          )}
        </p>
      </div>
    </section>
  )
}
