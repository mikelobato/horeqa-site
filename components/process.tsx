"use client"

import { useTRN } from "@/contexts/LanguageContext"

export function Process() {
  const TRN = useTRN()

  return (
    <section id="process" className="border-t border-border bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {TRN("process.eyebrow", "How we work")}
        </h2>
        <p className="mt-2 max-w-xl text-2xl font-semibold text-foreground md:text-3xl">
          {TRN("process.title", "A clear, structured approach.")}
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <span className="text-3xl font-bold text-primary">01</span>
            <h3 className="text-lg font-semibold text-foreground">
              {TRN("process.steps.discover.title", "Understand the operation", null, "Step title. Short sentence.")}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {TRN(
                "process.steps.discover.description",
                "We study your business, workflows, and current technology landscape.",
                null,
                "Step description. Operational tone."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-3xl font-bold text-primary">02</span>
            <h3 className="text-lg font-semibold text-foreground">
              {TRN("process.steps.design.title", "Design the tech stack", null, "Step title. Short sentence.")}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {TRN(
                "process.steps.design.description",
                "We architect the right combination of platforms and integrations for your needs.",
                null,
                "Step description. Keep it specific."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-3xl font-bold text-primary">03</span>
            <h3 className="text-lg font-semibold text-foreground">
              {TRN("process.steps.implement.title", "Implement and integrate", null, "Step title. Avoid ampersands.")}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {TRN(
                "process.steps.implement.description",
                "We deploy, configure, and connect all systems for a seamless operation.",
                null,
                "Step description. Operational tone."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-3xl font-bold text-primary">04</span>
            <h3 className="text-lg font-semibold text-foreground">
              {TRN("process.steps.support.title", "Support and optimize", null, "Step title. Avoid ampersands.")}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {TRN(
                "process.steps.support.description",
                "We provide ongoing monitoring, optimization, and vendor coordination.",
                null,
                "Step description. Operational tone."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
