"use client"

import { useTRN } from "@/contexts/LanguageContext"

export function Support() {
  const TRN = useTRN()

  return (
    <section id="support" className="border-y border-border bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
            {TRN("support.eyebrow", "Support")}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {TRN(
              "support.title",
              "Support designed for restaurants.",
              null,
              "Section title. Restaurant-focused, operational tone."
            )}
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            {TRN(
              "support.p1",
              "Fast and practical channel for the team (shared groups when applicable).",
              null,
              "Support detail. Keep it concise."
            )}
          </p>
          <p>
            {TRN(
              "support.p2",
              "Horeqa is first line: we filter, resolve, and coordinate.",
              null,
              "Support detail. Keep it operational."
            )}
          </p>
          <p>
            {TRN(
              "support.p3",
              "If escalation is needed, we work with the provider or manufacturer without sending you in circles.",
              null,
              "Support detail. Avoid hype."
            )}
          </p>
          <p className="pt-2 font-medium text-foreground">
            {TRN(
              "support.note",
              "Horeqa is not a reseller. We are operations and accountability.",
              null,
              "Closing note. Strong and direct."
            )}
          </p>
        </div>
      </div>
    </section>
  )
}

