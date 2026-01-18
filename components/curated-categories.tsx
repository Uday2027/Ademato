import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  return (
    <section className="py-16 lg:py-24 bg-background">
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
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative aspect-[4/5] overflow-hidden bg-secondary"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={`${category.brand} ${category.name}`}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs tracking-widest text-primary-foreground/70 mb-1">{category.brand}</p>
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
