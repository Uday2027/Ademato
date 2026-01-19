"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const filters = ["All", "Rolex", "Patek", "AP", "Under $20k", "Full Set"]

const watches = [
  {
    id: 1,
    brand: "Rolex",
    model: "Submariner Date",
    ref: "126610LN",
    price: "$14,500",
    image: "/rolex-submariner-black-dial-luxury-watch.jpg",
    badges: ["New", "Full Set"],
    category: "Rolex",
  },
  {
    id: 2,
    brand: "Patek Philippe",
    model: "Nautilus",
    ref: "5711/1A-010",
    price: "Call for Price",
    image: "/patek-philippe-nautilus-blue-dial-watch.jpg",
    badges: ["Certified"],
    category: "Patek",
  },
  {
    id: 3,
    brand: "Audemars Piguet",
    model: "Royal Oak",
    ref: "15500ST",
    price: "$42,000",
    image: "/audemars-piguet-royal-oak-steel-watch.jpg",
    badges: ["Full Set"],
    category: "AP",
  },
  {
    id: 4,
    brand: "Rolex",
    model: "Daytona",
    ref: "116500LN",
    price: "$32,500",
    image: "/rolex-daytona-white-dial-chronograph-watch.jpg",
    badges: ["New"],
    category: "Rolex",
  },
  {
    id: 5,
    brand: "Rolex",
    model: "GMT-Master II",
    ref: "126710BLNR",
    price: "$18,900",
    image: "/rolex-gmt-master-batman-bezel-watch.jpg",
    badges: ["Certified", "Full Set"],
    category: "Rolex",
  },
  {
    id: 6,
    brand: "Patek Philippe",
    model: "Aquanaut",
    ref: "5167A-001",
    price: "$38,000",
    image: "/patek-philippe-aquanaut-black-rubber-strap.jpg",
    badges: [],
    category: "Patek",
  },
  {
    id: 7,
    brand: "Rolex",
    model: "Datejust 41",
    ref: "126334",
    price: "$12,800",
    image: "/rolex-datejust-blue-dial-jubilee-bracelet.jpg",
    badges: ["New", "Full Set"],
    category: "Rolex",
  },
  {
    id: 8,
    brand: "Audemars Piguet",
    model: "Royal Oak Offshore",
    ref: "26470ST",
    price: "$28,500",
    image: "/audemars-piguet-offshore-chronograph-watch.jpg",
    badges: ["Certified"],
    category: "AP",
  },
]

export function NewArrivals() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [wishlist, setWishlist] = useState<number[]>([])

  const filteredWatches = watches.filter((watch) => {
    if (activeFilter === "All") return true
    if (activeFilter === "Under $20k") {
      const price = Number.parseInt(watch.price.replace(/[$,]/g, ""))
      return !isNaN(price) && price < 20000
    }
    if (activeFilter === "Full Set") {
      return watch.badges.includes("Full Set")
    }
    return watch.category === activeFilter
  })

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section 
      ref={sectionRef}
      className={`py-16 lg:py-24 bg-secondary transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-foreground">New Arrivals</h2>
          <p className="mt-4 text-muted-foreground font-light">Fresh additions to our curated collection</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm tracking-widest transition-all ${activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-primary/10"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Watch Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredWatches.map((watch, index) => (
            <div 
              key={watch.id} 
              className="group bg-card border border-border hover:border-[var(--luxury-gold)] hover:-translate-y-2 hover:shadow-luxury-hover transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-secondary rounded-xl">
                <img
                  src={watch.image || "/placeholder.svg"}
                  alt={`${watch.brand} ${watch.model}`}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges with Glassmorphism */}
                {watch.badges.length > 0 && (
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {watch.badges.map((badge) => (
                      <Badge
                        key={badge}
                        variant="secondary"
                        className="glass-effect text-foreground text-[10px] tracking-wider font-medium backdrop-blur-sm"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={() => toggleWishlist(watch.id)}
                    className={`p-2 bg-background/90 hover:bg-background transition-colors ${wishlist.includes(watch.id) ? "text-accent" : "text-foreground"
                      }`}
                    aria-label="Add to wishlist"
                  >
                    <Heart className={`h-4 w-4 ${wishlist.includes(watch.id) ? "fill-current" : ""}`} />
                  </button>
                  <Link
                    href={`/watch/${watch.id}`}
                    className="p-2 bg-background/90 hover:bg-background text-foreground transition-colors"
                    aria-label="Quick view"
                  >
                    <Eye className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Details */}
              <div className="p-4">
                <p className="text-xs tracking-widest text-muted-foreground mb-1">{watch.brand}</p>
                <h3 className="text-lg font-medium text-foreground mb-1">{watch.model}</h3>
                <p className="text-xs text-muted-foreground mb-3">Ref. {watch.ref}</p>
                <p className="text-lg font-medium text-foreground">{watch.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="tracking-widest px-12 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
          >
            <Link href="/shop">View All Watches</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
