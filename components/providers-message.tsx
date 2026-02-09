"use client"

import { useTRN } from "@/contexts/LanguageContext"

export function ProvidersMessage() {
  const TRN = useTRN()

  return (
    <section className="border-b border-border py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            {TRN(
              "providers.short.title",
              "For providers",
              null,
              "Providers page title. Keep it short."
            )}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {TRN(
              "providers.short.body",
              "Horeqa is an implementation and support partner in real restaurants. We operate and coordinate. We only work with providers we can defend and support.",
              null,
              "Short positioning. Serious, selective tone. No marketing hype."
            )}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:info@horeqa.com?subject=Provider%20inquiry"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {TRN(
                "providers.short.cta",
                "Start a conversation",
                null,
                "CTA on providers page. Keep it serious and direct."
              )}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
