import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const articles = [
  {
    id: 1,
    category: "Buying Guide",
    title: "The Complete Guide to Pre-Owned Rolex",
    excerpt: "Everything you need to know before making your first investment in a pre-owned Rolex timepiece.",
    image: "/placeholder.svg?height=400&width=600",
    href: "/journal/rolex-buying-guide",
  },
  {
    id: 2,
    category: "Market Note",
    title: "Q1 2026 Watch Market Analysis",
    excerpt: "Key trends and price movements in the luxury watch market this quarter.",
    image: "/placeholder.svg?height=400&width=600",
    href: "/journal/q1-2026-market",
  },
  {
    id: 3,
    category: "Collector Story",
    title: "Building a 10-Watch Collection",
    excerpt: "One collector's journey to curating the perfect rotation of timepieces.",
    image: "/placeholder.svg?height=400&width=600",
    href: "/journal/10-watch-collection",
  },
]

export function JournalPreview() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-foreground">The Journal</h2>
          <p className="mt-4 text-muted-foreground font-light">
            Insights, guides, and stories from the world of horology
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={article.href} className="group">
              <div className="aspect-[3/2] overflow-hidden bg-secondary mb-4">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs tracking-widest text-accent mb-2">{article.category}</p>
              <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{article.excerpt}</p>
              <span className="inline-flex items-center gap-2 mt-4 text-sm tracking-widest text-foreground group-hover:gap-3 transition-all">
                Read More <ArrowRight className="h-4 w-4" />
              </span>
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
            <Link href="/journal">Read the Journal</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
