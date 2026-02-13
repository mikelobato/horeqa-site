"use client"

import { useTRN } from "@/contexts/LanguageContext"

export function ProvidersMessage() {
  const TRN = useTRN()

  return (
    <div>
      {/* 1) HERO */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
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
                  "Two short sentences. No SaaS hype. Keep authority. Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension."
                )}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {TRN(
                    "providers.hero.ctaPrimary",
                    "Apply as a provider",
                    null,
                    "Primary CTA. Must not be a generic 'Contact us'."
                  )}
                </a>
                <a
                  href="mailto:info@horeqa.com?subject=Provider%20application"
                  className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
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
              <div className="rounded-2xl border border-border bg-secondary/40 p-7 md:p-8">
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
      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-7 md:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {TRN("providers.fit.workWith.title", "Who we work with")}
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    {TRN(
                      "providers.fit.workWith.established",
                      "Established hospitality technology platforms",
                      null,
                      "Bullet item. Keep it crisp."
                    )}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    {TRN(
                      "providers.fit.workWith.categories",
                      "POS, ordering, payments, and operational software",
                      null,
                      "Bullet item. Keep it crisp."
                    )}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    {TRN(
                      "providers.fit.workWith.quality",
                      "Providers focused on long-term product quality",
                      null,
                      "Bullet item. Keep it crisp."
                    )}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    {TRN(
                      "providers.fit.workWith.excellence",
                      "Teams that value operational excellence and stability",
                      null,
                      "Bullet item. Keep it crisp."
                    )}
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-secondary/40 p-7 md:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {TRN("providers.fit.dontWorkWith.title", "Who we don't work with")}
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-foreground/30" />
                  <span>
                    {TRN(
                      "providers.fit.dontWorkWith.earlyStage",
                      "Early-stage or unstable products",
                      null,
                      "Bullet item. Clear exclusion. No soft language."
                    )}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-foreground/30" />
                  <span>
                    {TRN(
                      "providers.fit.dontWorkWith.integrations",
                      "Platforms without real integration capabilities",
                      null,
                      "Bullet item. Clear exclusion. No soft language."
                    )}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-foreground/30" />
                  <span>
                    {TRN(
                      "providers.fit.dontWorkWith.notRealOps",
                      "Solutions not designed for real hospitality operations",
                      null,
                      "Bullet item. Clear exclusion. No soft language."
                    )}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-foreground/30" />
                  <span>
                    {TRN(
                      "providers.fit.dontWorkWith.lowTouch",
                      "Generic resellers or low-touch models",
                      null,
                      "Bullet item. Clear exclusion. No soft language."
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3) WHERE HOREQA TAKES OWNERSHIP */}
      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
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
                <div className="rounded-xl border border-border bg-background p-5">
                  <p className="text-sm font-semibold text-foreground">
                    {TRN("providers.ownership.items.onboarding", "Restaurant onboarding")}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-5">
                  <p className="text-sm font-semibold text-foreground">
                    {TRN("providers.ownership.items.golive", "Activation and go-live")}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-5">
                  <p className="text-sm font-semibold text-foreground">
                    {TRN("providers.ownership.items.support", "First-line support")}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-5">
                  <p className="text-sm font-semibold text-foreground">
                    {TRN("providers.ownership.items.escalations", "Operational coordination and escalations")}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-5 sm:col-span-2">
                  <p className="text-sm font-semibold text-foreground">
                    {TRN("providers.ownership.items.billing", "Optional unified or delegated billing")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) EVALUATION PROCESS */}
      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-border bg-secondary/40 p-8 md:p-10">
            <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
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
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{TRN("providers.evaluation.assess.quality", "Product quality and stability")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{TRN("providers.evaluation.assess.integrations", "Integration capabilities")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{TRN("providers.evaluation.assess.supportModel", "Support and escalation model")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{TRN("providers.evaluation.assess.fit", "Fit for real hospitality operations")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) HOW WE COLLABORATE */}
      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
                {TRN("providers.collaboration.title", "How we collaborate")}
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>{TRN("providers.collaboration.p1", "Collaboration models depend on the solution and the provider.")}</p>
                <p>
                  {TRN(
                    "providers.collaboration.p2",
                    "In some cases, Horeqa handles implementation and first-line support. In others, we coordinate operations with the provider's teams."
                  )}
                </p>
                <p>
                  {TRN(
                    "providers.collaboration.p3",
                    "Unified or delegated billing is evaluated case by case, based on technical capabilities and project fit."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) CLOSE + CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
            <p className="text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
              {TRN(
                "providers.close.statement",
                "Horeqa is not a generic reseller or a commoditized commercial channel. We are a demanding, specialized partner built for long-term collaboration and real hospitality operations.",
                null,
                "Two sentences. Strong positioning. No marketing fluff. Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension."
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {TRN("providers.close.ctaPrimary", "Apply as a provider")}
              </a>
              <a
                href="mailto:info@horeqa.com?subject=Provider%20application"
                className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                {TRN("providers.close.ctaSecondary", "Start a conversation")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Apply section (anchor target for CTAs) */}
      <section id="apply" className="border-t border-border bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
                {TRN("providers.apply.title", "Apply as a provider")}
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
              <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {TRN("providers.apply.to", "Send to")}
                </p>
                <a
                  href="mailto:info@horeqa.com?subject=Provider%20application"
                  className="mt-4 inline-block text-base font-semibold text-foreground underline underline-offset-4 hover:text-primary"
                >
                  info@horeqa.com
                </a>

                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {TRN("providers.apply.includeTitle", "Include")}
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      {TRN("providers.apply.include.category", "Product category (POS, ordering, payments, etc.)")}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{TRN("providers.apply.include.markets", "Markets and operator profiles you serve")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      {TRN(
                        "providers.apply.include.integrations",
                        "Integration docs or an overview of your API and partners",
                        null,
                        "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension."
                      )}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{TRN("providers.apply.include.support", "Your support and escalation model")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
