"use client"

import { useTRN } from "@/contexts/LanguageContext"

export function ProvidersMessage() {
  const TRN = useTRN()

  return (
    <div>
      {/* 1) HERO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                <span className="block">
                  {TRN(
                    "providers.hero.headline1",
                    "We operate hospitality technology.",
                    null,
                    "First hero line. Serious, selective tone. Translate 'hospitality' as the industry term (Spanish should use 'hosteleria')."
                  )}
                </span>
                <span className="mt-2 block text-foreground/80">
                  {TRN(
                    "providers.hero.headline2",
                    "Not every platform qualifies.",
                    null,
                    "Second hero line. Clear filter statement. Short sentence."
                  )}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {TRN(
                  "providers.hero.subheadline",
                  "Horeqa is an implementation and operations partner for selected hospitality technology providers. We work only with platforms that meet our technical and operational standards.",
                  null,
                  "Two short sentences. No SaaS hype. Keep authority."
                )}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {TRN(
                    "providers.hero.ctaPrimary",
                    "Apply as a provider",
                    null,
                    "Primary CTA. Do not translate as a generic 'Contact us'."
                  )}
                </a>
                <a
                  href="mailto:info@horeqa.com?subject=Provider%20application"
                  className="inline-flex items-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {TRN(
                    "providers.hero.ctaSecondary",
                    "Start a conversation",
                    null,
                    "Secondary CTA. Serious and direct."
                  )}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-border bg-secondary p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {TRN("providers.hero.side.eyebrow", "Positioning")}
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground">
                  {TRN(
                    "providers.hero.side.body",
                    "This is not a reseller page. Horeqa is an operational standard. We protect execution quality for restaurants and for providers.",
                    null,
                    "Short, assertive positioning. No buzzwords."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) WHO WE WORK WITH / WHO WE DON'T */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-background p-6 md:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {TRN("providers.fit.workWith.title", "Who we work with")}
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground">
                {[
                  {
                    key: "established",
                    text: "Established hospitality technology platforms",
                  },
                  { key: "categories", text: "POS, ordering, payments, and operational software" },
                  { key: "quality", text: "Providers focused on long-term product quality" },
                  { key: "excellence", text: "Teams that value operational excellence and stability" },
                ].map((item) => (
                  <li key={item.key} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      {TRN(`providers.fit.workWith.${item.key}`, item.text, null, "Bullet item. Keep it crisp.")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-secondary p-6 md:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {TRN("providers.fit.dontWorkWith.title", "Who we don't work with")}
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground">
                {[
                  { key: "earlyStage", text: "Early-stage or unstable products" },
                  { key: "integrations", text: "Platforms without real integration capabilities" },
                  { key: "notRealOps", text: "Solutions not designed for real hospitality operations" },
                  { key: "lowTouch", text: "Generic resellers or low-touch models" },
                ].map((item) => (
                  <li key={item.key} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-foreground/30" />
                    <span>
                      {TRN(
                        `providers.fit.dontWorkWith.${item.key}`,
                        item.text,
                        null,
                        "Bullet item. Clear exclusion. No soft language."
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3) OWNERSHIP */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 className="text-balance text-2xl font-semibold text-foreground md:text-3xl">
                {TRN(
                  "providers.ownership.title",
                  "Where Horeqa takes ownership",
                  null,
                  "Section title. Emphasize responsibility and ownership."
                )}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {TRN(
                  "providers.ownership.support",
                  "Providers can work with Horeqa on one specific area or across the full operational lifecycle.",
                  null,
                  "Support line. Keep it neutral and confident."
                )}
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { key: "onboarding", text: "Restaurant onboarding" },
                  { key: "golive", text: "Activation and go-live" },
                  { key: "support", text: "First-line support" },
                  { key: "escalations", text: "Operational coordination and escalations" },
                  { key: "billing", text: "Optional unified or delegated billing" },
                ].map((item) => (
                  <div key={item.key} className="rounded-lg border border-border bg-background p-5">
                    <p className="text-sm font-medium text-foreground">
                      {TRN(
                        `providers.ownership.items.${item.key}`,
                        item.text,
                        null,
                        "Ownership bullet. Short noun phrase."
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) EVALUATION PROCESS */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-border bg-secondary p-8 md:p-10">
            <h2 className="text-balance text-2xl font-semibold text-foreground md:text-3xl">
              {TRN(
                "providers.evaluation.title",
                "Every platform goes through an internal evaluation",
                null,
                "This block must feel like the protagonist. Serious and selective tone."
              )}
            </h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="leading-relaxed text-muted-foreground">
                  {TRN(
                    "providers.evaluation.body1",
                    "Horeqa does not include every solution in its ecosystem. Each platform is evaluated internally before any collaboration.",
                    null,
                    "Two short sentences. No marketing. Keep authority."
                  )}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {TRN(
                    "providers.evaluation.body2",
                    "Only platforms we can stand behind in front of our clients are included.",
                    null,
                    "Strong filter statement. Short."
                  )}
                </p>
              </div>

              <div className="lg:col-span-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {TRN("providers.evaluation.assessTitle", "We assess")}
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground">
                  {[
                    { key: "quality", text: "Product quality and stability" },
                    { key: "integrations", text: "Integration capabilities" },
                    { key: "supportModel", text: "Support and escalation model" },
                    { key: "fit", text: "Fit for real hospitality operations" },
                  ].map((item) => (
                    <li key={item.key} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>
                        {TRN(
                          `providers.evaluation.assess.${item.key}`,
                          item.text,
                          null,
                          "Assessment criteria. Keep it as a noun phrase."
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) HOW WE COLLABORATE */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 className="text-balance text-2xl font-semibold text-foreground md:text-3xl">
                {TRN(
                  "providers.collaboration.title",
                  "How we collaborate",
                  null,
                  "Section title. Calm authority."
                )}
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  {TRN(
                    "providers.collaboration.p1",
                    "Collaboration models depend on the solution and the provider.",
                    null,
                    "One sentence. Keep it direct."
                  )}
                </p>
                <p>
                  {TRN(
                    "providers.collaboration.p2",
                    "In some cases, Horeqa handles implementation and first-line support. In others, we coordinate operations with the provider's teams.",
                    null,
                    "Two short sentences. Keep it operational."
                  )}
                </p>
                <p>
                  {TRN(
                    "providers.collaboration.p3",
                    "Unified or delegated billing is evaluated case by case, based on technical capabilities and project fit.",
                    null,
                    "Use 'case by case'. No extra claims."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) CLOSE + CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
            <p className="text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              {TRN(
                "providers.close.statement",
                "Horeqa is not a generic reseller or a commoditized commercial channel. We are a demanding, specialized partner built for long-term collaboration and real hospitality operations.",
                null,
                "Two sentences. Strong positioning. No marketing fluff."
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {TRN("providers.close.ctaPrimary", "Apply as a provider")}
              </a>
              <a
                href="mailto:info@horeqa.com?subject=Provider%20application"
                className="inline-flex items-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {TRN("providers.close.ctaSecondary", "Start a conversation")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Apply section (anchor target for CTAs) */}
      <section id="apply" className="border-t border-border bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <h2 className="text-balance text-2xl font-semibold text-foreground md:text-3xl">
                {TRN(
                  "providers.apply.title",
                  "Apply as a provider",
                  null,
                  "Apply section title. Same as CTA label."
                )}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {TRN(
                  "providers.apply.subtitle",
                  "Send a short overview and we will reply with next steps. If the platform is not a fit, we will say so clearly.",
                  null,
                  "Maintain selective tone. No promises."
                )}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl border border-border bg-background p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {TRN("providers.apply.to", "Send to")}
                </p>
                <a
                  href="mailto:info@horeqa.com?subject=Provider%20application"
                  className="mt-4 inline-block text-base font-medium text-foreground underline underline-offset-4 hover:text-primary"
                >
                  info@horeqa.com
                </a>

                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {TRN("providers.apply.includeTitle", "Include")}
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {[
                    { key: "category", text: "Product category (POS, ordering, payments, etc.)" },
                    { key: "markets", text: "Markets and operator profiles you serve" },
                    { key: "integrations", text: "Integration docs or an overview of your API and partners" },
                    { key: "support", text: "Your support and escalation model" },
                  ].map((item) => (
                    <li key={item.key} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>
                        {TRN(
                          `providers.apply.include.${item.key}`,
                          item.text,
                          null,
                          "Apply checklist item. Keep it specific."
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

