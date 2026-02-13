"use client"

import Image from "next/image"
import { useTRN } from "@/contexts/LanguageContext"

export function PartnersMessage() {
  const TRN = useTRN()

  return (
    <div>
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                {TRN(
                  "partners.hero.title",
                  "Multiply your revenue with a structured partner network and first-line operational support.",
                  null,
                  "Partners page hero headline. Strong B2B positioning with no hype. Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension."
                )}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {TRN(
                  "partners.hero.subtitle",
                  "Join the Horeqa network: combine your commercial strength with our operations, support, and technical coordination to sell technology solutions to restaurants in a more profitable, efficient, and scalable way.",
                  null,
                  "Partners page hero subtitle. Clear and practical language."
                )}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#join"
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {TRN("partners.hero.ctaPrimary", "Join the Horeqa network")}
                </a>
                <a
                  href="mailto:info@horeqa.com?subject=Horeqa%20partners"
                  className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  {TRN("partners.hero.ctaSecondary", "Talk to our partner team", null, "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension.")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            {TRN("partners.problem.title", "The partner challenge today", null, "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension.")}
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
            {TRN(
              "partners.problem.body",
              "Most partners lose time and margin on duplicated operational work: fragmented activations, reactive support, and inconsistent coordination between tools and providers. Horeqa removes that friction so your team can focus on selling and growing accounts.",
              null,
              "Problem statement for partner audience. Operational tone. Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension."
            )}
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
                {TRN(
                  "partners.proof.title",
                  "Execution in real environments, not slide decks.",
                  null,
                  "Section title for partner page. Strong operational proof tone."
                )}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {TRN(
                  "partners.proof.body",
                  "From installations and store operations to events and partner enablement, Horeqa executes directly in the field. Partners gain a delivery engine they can trust when selling and scaling accounts.",
                  null,
                  "Two sentences. Keep direct and operational. Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension."
                )}
              </p>
              <div className="mt-8 grid gap-3">
                <article className="rounded-xl border border-border bg-background p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    {TRN("partners.proof.impact.fieldOps.title", "Field operations")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {TRN(
                      "partners.proof.impact.fieldOps.body",
                      "On-site installations, activations, and operational follow-through in real restaurants."
                    )}
                  </p>
                </article>
                <article className="rounded-xl border border-border bg-background p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    {TRN("partners.proof.impact.enablement.title", "Enablement")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {TRN(
                      "partners.proof.impact.enablement.body",
                      "Playbooks, training, and execution support so partner teams can sell with confidence."
                    )}
                  </p>
                </article>
                <article className="rounded-xl border border-border bg-background p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    {TRN("partners.proof.impact.accountGrowth.title", "Account growth")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {TRN(
                      "partners.proof.impact.accountGrowth.body",
                      "Higher conversion and cleaner retention through reliable delivery and shared ownership."
                    )}
                  </p>
                </article>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="relative h-52 overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/images/horeqa_installer.jpg"
                    alt={TRN("partners.proof.image.installer", "Horeqa technician performing on-site installation")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-52 overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/images/horeqa_store.jpg"
                    alt={TRN("partners.proof.image.store", "Horeqa team supporting restaurant store operations")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-52 overflow-hidden rounded-2xl border border-border sm:col-span-2">
                  <Image
                    src="/images/horeqa_stand.jpg"
                    alt={TRN("partners.proof.image.stand", "Horeqa partner stand showcasing solutions and demos", null, "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension.")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/images/horeqa_podcast.jpg"
                    alt={TRN("partners.proof.image.podcast", "Horeqa sharing market insights with partners", null, "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension.")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/images/horeqa-open.png"
                    alt={TRN("partners.proof.image.open", "Horeqa open event with partners and providers", null, "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension.")}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            {TRN("partners.value.title", "Our value proposition")}
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-base font-semibold text-foreground">
                {TRN("partners.value.profitability.title", "Clear profitability")}
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>{TRN("partners.value.profitability.item1", "Competitive commissions and margins.")}</li>
                <li>{TRN("partners.value.profitability.item2", "Access to multiple tech solutions with one onboarding.")}</li>
                <li>{TRN("partners.value.profitability.item3", "No duplicated operation.")}</li>
              </ul>
            </article>
            <article className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-base font-semibold text-foreground">
                {TRN("partners.value.operations.title", "Full operational support")}
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>{TRN("partners.value.operations.item1", "Activations and go-live managed by Horeqa.")}</li>
                <li>{TRN("partners.value.operations.item2", "First- and second-line support for your clients.")}</li>
                <li>{TRN("partners.value.operations.item3", "Escalation coordination with manufacturers when needed.")}</li>
              </ul>
            </article>
            <article className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-base font-semibold text-foreground">
                {TRN("partners.value.enablement.title", "Continuous enablement")}
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>{TRN("partners.value.enablement.item1", "Certified training for commercial and technical teams.")}</li>
                <li>{TRN("partners.value.enablement.item2", "Playbooks and resources to sell faster.")}</li>
                <li>{TRN("partners.value.enablement.item3", "Regular sessions, benchmarking, and partner community.", null, "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension.")}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
                {TRN("partners.benefits.partner.title", "Benefits for you as a partner", null, "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension.")}
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground">
                <li>{TRN("partners.benefits.partner.item1", "Qualified leads and better conversion flow.")}</li>
                <li>{TRN("partners.benefits.partner.item2", "Operational and support tasks delegated to Horeqa.")}</li>
                <li>{TRN("partners.benefits.partner.item3", "Access to Sinqro, Disqober, and selected third-party solutions.")}</li>
                <li>{TRN("partners.benefits.partner.item4", "Tools, metrics, and continuous training.")}</li>
              </ul>
            </div>
            <div>
              <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
                {TRN("partners.benefits.client.title", "Benefits for your restaurant clients")}
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground">
                <li>{TRN("partners.benefits.client.item1", "Faster onboarding and cleaner go-live.")}</li>
                <li>{TRN("partners.benefits.client.item2", "Specialized multi-solution support.")}</li>
                <li>{TRN("partners.benefits.client.item3", "Modern integrations with stable operations.")}</li>
                <li>{TRN("partners.benefits.client.item4", "Confidence and continuity in day-to-day service.")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            {TRN("partners.how.title", "How the program works")}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: TRN("partners.how.step1.title", "1. Registration"),
                body: TRN("partners.how.step1.body", "Share your profile, market, and current operation model."),
              },
              {
                title: TRN("partners.how.step2.title", "2. Onboarding"),
                body: TRN("partners.how.step2.body", "We align processes, tools, and enablement resources."),
              },
              {
                title: TRN("partners.how.step3.title", "3. Activation"),
                body: TRN("partners.how.step3.body", "Horeqa executes setup and go-live with clear ownership."),
              },
              {
                title: TRN("partners.how.step4.title", "4. Sales"),
                body: TRN("partners.how.step4.body", "Your team focuses on pipeline and account growth."),
              },
              {
                title: TRN("partners.how.step5.title", "5. Scaled support"),
                body: TRN("partners.how.step5.body", "We run support and escalations with providers when required."),
              },
            ].map((step) => (
              <article key={step.title} className="rounded-xl border border-border bg-background p-5">
                <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            {TRN("partners.testimonials.title", "What partners say", null, "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension.")}
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              TRN(
                "partners.testimonials.item1",
                '"Horeqa reduced our operational load and helped us close more accounts with predictable delivery."'
              ),
              TRN(
                "partners.testimonials.item2",
                '"Their activation and support model lets our team stay focused on sales execution."'
              ),
              TRN(
                "partners.testimonials.item3",
                '"Clear ownership, faster implementations, and better client retention."'
              ),
            ].map((quote) => (
              <blockquote key={quote} className="rounded-xl border border-border bg-secondary/40 p-6 text-sm leading-relaxed text-foreground">
                {quote}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
            <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
              {TRN("partners.cta.title", "Not just distributors. Structured growth partners.", null, "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension.")}
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              {TRN(
                "partners.cta.subtitle",
                "Clear profitability and competitive margins. Activations and support delegated so you can focus on selling."
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:info@horeqa.com?subject=Join%20Horeqa%20partner%20network"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {TRN("partners.cta.primary", "Join the Horeqa network")}
              </a>
              <a
                href="mailto:info@horeqa.com?subject=Partner%20team%20meeting"
                className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                {TRN("partners.cta.secondary", "Request a meeting with our partner team", null, "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension.")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            {TRN("partners.faq.title", "Partner FAQ", null, "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension.")}
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-sm font-semibold text-foreground">
                {TRN("partners.faq.commissions.q", "How do commissions and margins work?")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {TRN("partners.faq.commissions.a", "They are defined by solution category and collaboration scope, with transparent commercial terms from day one.")}
              </p>
            </article>
            <article className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-sm font-semibold text-foreground">
                {TRN("partners.faq.support.q", "Who handles daily support?")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {TRN("partners.faq.support.a", "Horeqa handles first-line operations and coordinates escalations with providers when needed.")}
              </p>
            </article>
            <article className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-sm font-semibold text-foreground">
                {TRN("partners.faq.training.q", "Do you provide certifications and training?")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {TRN("partners.faq.training.a", "Yes. We provide structured enablement for commercial and technical teams, with recurring updates.")}
              </p>
            </article>
            <article className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-sm font-semibold text-foreground">
                {TRN("partners.faq.tools.q", "What tools and reporting are included?")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {TRN("partners.faq.tools.a", "Partners get operational visibility, implementation tracking, and shared governance workflows.", null, "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension.")}
              </p>
            </article>
          </div>
          <div className="mt-10 rounded-xl border border-border bg-secondary/40 p-6 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">
              {TRN("partners.links.title", "Related pages")}
            </p>
            <p className="mt-2">
              {TRN(
                "partners.links.subtitle",
                "If you also offer technology platforms directly, review our provider collaboration model."
              )}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/es-es/providers"
                className="inline-flex items-center rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                {TRN("partners.links.providers", "Provider model")}
              </a>
              <a
                href="/es-es"
                className="inline-flex items-center rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                {TRN("partners.links.home", "Restaurants home")}
              </a>
              <a
                href="/es-es#contact"
                className="inline-flex items-center rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                {TRN("partners.links.contact", "Contact Horeqa")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
