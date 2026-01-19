"use client"

import Link from "next/link"
import { ArrowRight, Crown, Search, RefreshCw } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

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
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section 
      ref={sectionRef}
      className={`py-16 lg:py-24 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiles.map((tile, index) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="group relative bg-card border border-border p-8 lg:p-10 hover:border-[var(--luxury-gold)] hover:shadow-luxury-hover transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--luxury-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <tile.icon 
                  className="h-8 w-8 mb-6 transition-all duration-500 group-hover:scale-110" 
                  style={{ color: 'var(--luxury-bronze)' }}
                  strokeWidth={1.5} 
                />
                <h3 className="text-xl lg:text-2xl font-medium tracking-wide text-foreground mb-3">{tile.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">{tile.description}</p>
                <span className="inline-flex items-center gap-2 text-sm tracking-widest text-foreground group-hover:gap-4 transition-all duration-300">
                  {tile.cta}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
