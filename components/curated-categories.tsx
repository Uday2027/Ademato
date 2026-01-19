"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const categories = [
  {
    name: "Day-Date",
    brand: "Rolex",
    image: "/rolex-day-date-president-gold-watch.jpg",
    href: "/shop/rolex-day-date",
  },
  {
    name: "GMT-Master II",
    brand: "Rolex",
    image: "/rolex-gmt-master-pepsi-bezel-watch.jpg",
    href: "/shop/rolex-gmt",
  },
  {
    name: "Submariner",
    brand: "Rolex",
    image: "/rolex-submariner-ceramic-bezel-watch.jpg",
    href: "/shop/rolex-submariner",
  },
  {
    name: "Datejust",
    brand: "Rolex",
    image: "/rolex-datejust-two-tone-watch.jpg",
    href: "/shop/rolex-datejust",
  },
]

export function CuratedCategories() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section 
      ref={sectionRef}
      className={`py-16 lg:py-24 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-foreground">
            Curated Collections
          </h2>
          <p className="mt-4 text-muted-foreground font-light">Explore our most sought-after categories</p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative aspect-[4/5] overflow-hidden bg-secondary shadow-luxury hover:shadow-luxury-hover hover:border-[var(--luxury-gold)] border border-transparent transition-all duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={`${category.brand} ${category.name}`}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              {/* Shimmer overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                <p 
                  className="text-xs tracking-[0.2em] uppercase mb-1"
                  style={{ color: 'var(--luxury-gold)' }}
                >
                  {category.brand}
                </p>
                <h3 className="text-xl lg:text-2xl font-medium text-primary-foreground tracking-wide">
                  {category.name}
                </h3>
                <span className="inline-flex items-center gap-2 mt-3 text-sm text-primary-foreground/80 group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="tracking-widest px-12 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
          >
            <Link href="/collections">Explore All Collections</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
