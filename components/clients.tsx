import { Building2, Store, UtensilsCrossed, Cpu } from "lucide-react"

const segments = [
  { icon: UtensilsCrossed, label: "Restaurants & restaurant groups" },
  { icon: Store, label: "QSR & chains" },
  { icon: Building2, label: "Hospitality operators" },
  { icon: Cpu, label: "Technology vendors & platforms" },
]

export function Clients() {
  return (
    <section id="clients" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Who we work with
        </h2>
        <p className="mt-2 max-w-xl text-2xl font-semibold text-foreground md:text-3xl">
          Focused on hospitality, exclusively.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((seg) => (
            <div
              key={seg.label}
              className="flex items-start gap-4 rounded-lg border border-border bg-background p-5"
            >
              <seg.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium leading-snug text-foreground">
                {seg.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-xl leading-relaxed text-muted-foreground">
          Horeqa works as a neutral partner between operators and technology
          providers.
        </p>
      </div>
    </section>
  )
}
