"use client"

import { useTRN } from "@/contexts/LanguageContext"

export function OperatorMessage() {
  const TRN = useTRN()

  return (
    <section id="operators" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {TRN("home.operators.eyebrow", "For hospitality operators")}
            </h2>
            <p className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
              {TRN("home.operators.title", "A single partner, end to end.", null, "Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension.")}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-6 leading-relaxed text-muted-foreground">
              <p>
                {TRN(
                  "home.operators.p1",
                  "We work with restaurants, groups, and hospitality operators that need to implement, improve, or reorganize their technology without unnecessary complexity or risk. Horeqa acts as a single point of contact and takes responsibility for the full technology process.",
                  null,
                  "Write in a sober, operational tone. Translate 'hospitality' as the industry term (Spanish should use 'hosteleria')."
                )}
              </p>
              <p>
                {TRN(
                  "home.operators.p2",
                  "Our work starts by understanding your business and the reality of your operation. We analyze your needs, workflows, and objectives, and we review the tools you already use to identify friction, inefficiencies, and limitations.",
                  null,
                  "Keep the meaning close to the Spanish original. Avoid adding claims not present in the source."
                )}
              </p>
              <p>
                {TRN(
                  "home.operators.p3",
                  "Based on that analysis, we design a technology proposal aligned with your operation: adding new solutions, optimizing existing tools, or replacing platforms when needed. Always with a practical approach focused on day-to-day execution.",
                  null,
                  "Avoid buzzwords. Prioritize clarity and day-to-day operations."
                )}
              </p>
              <p>
                {TRN(
                  "home.operators.p4",
                  "We manage the full rollout. We configure solutions, coordinate vendors, train teams, and leave the system running in production. Horeqa does not just recommend: we execute and stay involved.",
                  null,
                  "Use 'rollout' / 'go-live' language; keep it concise."
                )}
              </p>
              <p>
                {TRN(
                  "home.operators.p5",
                  "Once the system is live, we remain by your side. We provide ongoing operational support and become your day-to-day technology contact. Depending on the project and tools involved, we can also centralize service management and billing to simplify operations further.",
                  null,
                  "Keep the structure: support + single point of contact + optional centralized management/billing."
                )}
              </p>
              <p className="font-medium text-foreground">
                {TRN(
                  "home.operators.p6",
                  "With Horeqa, you do not need to coordinate multiple vendors or platforms. You get one partner that understands your business, assumes responsibility, and makes sure technology works.",
                  null,
                  "Strong closing. Avoid exaggeration; keep it grounded. Use the term 'partner' when culturally understood (Spanish should keep 'partner', not 'socio'). Translate only if needed for comprehension."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
