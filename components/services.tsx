"use client"

import { ShoppingBag, CreditCard, Truck, UtensilsCrossed, ListChecks, BarChart3, Printer, LayoutGrid } from "lucide-react"
import { useTRN } from "@/contexts/LanguageContext"

export function Services() {
  const TRN = useTRN()

  const coverage = [
    {
      icon: ShoppingBag,
      key: "ordering",
      title: TRN(
        "coverage.items.ordering",
        "Direct ordering (web/QR) and sales channels",
        null,
        "Coverage item. Keep it scannable. Avoid marketing."
      ),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: UtensilsCrossed,
      key: "pos",
      title: TRN(
        "coverage.items.pos",
        "POS and front-of-house operations",
        null,
        "Coverage item. Keep it scannable. Avoid marketing."
      ),
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: CreditCard,
      key: "payments",
      title: TRN(
        "coverage.items.payments",
        "Payments and reconciliation",
        null,
        "Coverage item. Keep it scannable. Avoid marketing."
      ),
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: Truck,
      key: "delivery",
      title: TRN(
        "coverage.items.delivery",
        "Delivery and marketplaces",
        null,
        "Coverage item. Keep it scannable. Avoid marketing."
      ),
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: LayoutGrid,
      key: "reservations",
      title: TRN(
        "coverage.items.reservations",
        "Reservations and table management",
        null,
        "Coverage item. Keep it scannable. Avoid marketing."
      ),
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: ListChecks,
      key: "menus",
      title: TRN(
        "coverage.items.menus",
        "Menus, pricing, and publishing",
        null,
        "Coverage item. Keep it scannable. Avoid marketing."
      ),
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: BarChart3,
      key: "backoffice",
      title: TRN(
        "coverage.items.backoffice",
        "Back office and reporting",
        null,
        "Coverage item. Keep it scannable. Avoid marketing."
      ),
      gradient: "from-slate-600 to-slate-800",
    },
    {
      icon: Printer,
      key: "hardware",
      title: TRN(
        "coverage.items.hardware",
        "Hardware (printers, POS terminals, kiosks)",
        null,
        "Coverage item. Keep it scannable. Avoid marketing."
      ),
      gradient: "from-teal-500 to-cyan-600",
    },
  ]

  return (
    <section id="what-we-do" className="relative border-t border-border bg-white py-24 md:py-32">
      {/* Background pattern */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-accent/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
            {TRN("coverage.eyebrow", "What we cover")}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {TRN(
              "coverage.title",
              "We cover most of your technology operation.",
              null,
              "Section title for restaurant operators. Avoid SaaS language."
            )}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {TRN(
              "coverage.subtitle",
              "We are not software. We are the team that makes everything work: configuration, integrations, incidents, and continuous improvements.",
              null,
              "Short explanation. Operational tone."
            )}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {coverage.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.key}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Gradient accent on hover */}
                <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20`} />
                
                <div className="relative">
                  {/* Icon container */}
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-base font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-14 max-w-4xl text-center">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {TRN(
              "coverage.close",
              "We work with a limited ecosystem of validated providers. If a tool is not defensible, we do not operate it.",
              null,
              "Closing line. Strong and selective."
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
