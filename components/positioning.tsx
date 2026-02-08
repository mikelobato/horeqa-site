"use client"

import { useTRN } from "@/contexts/LanguageContext"

export function Positioning() {
  const TRN = useTRN()

  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {TRN("about.eyebrow", "About Horeqa")}
          </h2>
          <p className="mt-6 text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            {TRN(
              "about.description",
              "Horeqa is specialized exclusively in hospitality technology. We are independent, platform-agnostic, and focused on long-term operational success.",
              null,
              "Translate 'hospitality' as the industry term: Spanish should use 'hostelería' (not 'hospitalidad')."
            )}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                {TRN("about.points.independent", "Independent")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                {TRN("about.points.agnostic", "Platform-agnostic")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                {TRN("about.points.longTerm", "Long-term focus")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
