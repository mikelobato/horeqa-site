"use client"

import { useTRN } from "@/contexts/LanguageContext"

const steps = [
  {
    key: "discover",
    number: "01",
    title: "Understand the operation",
    description: "We study your business, workflows, and current technology landscape.",
  },
  {
    key: "design",
    number: "02",
    title: "Design the tech stack",
    description: "We architect the right combination of platforms and integrations for your needs.",
  },
  {
    key: "implement",
    number: "03",
    title: "Implement & integrate",
    description: "We deploy, configure, and connect all systems for a seamless operation.",
  },
  {
    key: "support",
    number: "04",
    title: "Support & optimize",
    description: "We provide ongoing monitoring, optimization, and vendor coordination.",
  },
]

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
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3">
              <span className="text-3xl font-bold text-primary">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                {TRN(`process.steps.${step.key}.title`, step.title)}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {TRN(`process.steps.${step.key}.description`, step.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
