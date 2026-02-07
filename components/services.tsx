import { Settings, Layers, Headphones } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Technology Consulting",
    description:
      "Strategy, architecture, and selection of hospitality technology.",
  },
  {
    icon: Layers,
    title: "Implementation & Integrations",
    description:
      "POS, ordering, payments, marketplaces, internal systems.",
  },
  {
    icon: Headphones,
    title: "Operations & Support",
    description:
      "Ongoing support, monitoring, optimization, and coordination with vendors.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          What we do
        </h2>
        <p className="mt-2 max-w-xl text-2xl font-semibold text-foreground md:text-3xl">
          End-to-end technology services for hospitality.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-background">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
