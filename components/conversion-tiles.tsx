import Link from "next/link"
import { ArrowRight, Crown, Search, RefreshCw } from "lucide-react"

const tiles = [
  {
    icon: Crown,
    title: "VIP Early Access",
    description: "Get first access to new inventory before public release.",
    cta: "Join VIP List",
    href: "/vip",
  },
  {
    icon: Search,
    title: "Dream Watch Sourcing",
    description: "Tell us what you want. We will find it.",
    cta: "Request Sourcing",
    href: "/concierge",
  },
  {
    icon: RefreshCw,
    title: "Sell or Trade",
    description: "Turn your watch into cash or store credit.",
    cta: "Get Your Estimate",
    href: "/sell",
  },
]

export function ConversionTiles() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiles.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="group relative bg-card border border-border p-8 lg:p-10 hover:border-foreground/20 transition-all duration-300"
            >
              <tile.icon className="h-8 w-8 text-accent mb-6" strokeWidth={1.5} />
              <h3 className="text-xl lg:text-2xl font-medium tracking-wide text-foreground mb-3">{tile.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">{tile.description}</p>
              <span className="inline-flex items-center gap-2 text-sm tracking-widest text-foreground group-hover:gap-3 transition-all">
                {tile.cta}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
