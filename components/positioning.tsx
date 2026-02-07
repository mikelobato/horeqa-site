export function Positioning() {
  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            About Horeqa
          </h2>
          <p className="mt-6 text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            Horeqa is specialized exclusively in hospitality technology. We are
            independent, platform-agnostic, and focused on long-term operational
            success.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-muted-foreground">Independent</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-muted-foreground">Platform-agnostic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-muted-foreground">Long-term focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
