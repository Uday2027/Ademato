import Link from "next/link"

const pressLogos = [
  { name: "Forbes", width: 80 },
  { name: "Robb Report", width: 100 },
  { name: "GQ", width: 40 },
  { name: "Hodinkee", width: 90 },
  { name: "Bloomberg", width: 100 },
]

export function PressBar() {
  return (
    <section className="py-12 lg:py-16 bg-secondary border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-xs tracking-[0.3em] text-muted-foreground mb-8">IN THE NEWS</p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {pressLogos.map((logo) => (
            <div
              key={logo.name}
              className="text-foreground/30 hover:text-foreground/60 transition-colors"
              style={{ width: logo.width }}
            >
              <span className="text-lg lg:text-xl font-semibold tracking-widest">{logo.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/press"
            className="text-xs tracking-widest text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
          >
            See Press
          </Link>
        </div>
      </div>
    </section>
  )
}
