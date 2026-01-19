"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Star, Quote, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "James C.",
    role: "Collector",
    content: "The authentication process was seamless. My Rolex Submariner arrived in perfect condition, exactly as described. Truly a white-glove service.",
    rating: 5,
    date: "January 2024"
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "First-time Buyer",
    content: "I was hesitant buying a pre-owned luxury watch online, but the team's transparency and communication put me at ease. I love my new Cartier.",
    rating: 5,
    date: "December 2023"
  },
  {
    id: 3,
    name: "Michael R.",
    role: "Enthusiast",
    content: "Sold my AP Royal Oak through their consignment service. Got a great price and the money was wired immediately after the sale. Highly recommended.",
    rating: 5,
    date: "November 2023"
  },
  {
    id: 4,
    name: "David L.",
    role: "Investor",
    content: "Ademato has become my go-to for sourcing investment-grade timepieces. Their curation is impeccable.",
    rating: 5,
    date: "October 2023"
  },
  {
    id: 5,
    name: "Elena K.",
    role: "Collector",
    content: "Finding a mint condition Patek like this was a dream. The team went above and beyond to ensure safe delivery.",
    rating: 5,
    date: "September 2023"
  },
  {
    id: 6,
    name: "Robert P.",
    role: "Watch Aficionado",
    content: "The trade-in process was fair and fast. I upgraded my collection effortlessly. Will definitely do business again.",
    rating: 5,
    date: "August 2023"
  },
  {
    id: 7,
    name: "Sophia T.",
    role: "Gift Buyer",
    content: "Bought a vintage Omega for my husband's anniversary. It was packaged beautifully and arrived right on time.",
    rating: 5,
    date: "July 2023"
  },
  {
    id: 8,
    name: "William B.",
    role: "Frequent Client",
    content: "Consistently excellent service. They know their watches inside and out. A trustworthy partner in building my collection.",
    rating: 5,
    date: "June 2023"
  }
]

export default function ReviewsPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Navigation */}
        <div className="mb-12">
            <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm tracking-widest text-muted-foreground hover:text-[var(--luxury-gold)] transition-colors group"
            >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                BACK TO HOME
            </Link>
        </div>

        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="text-4xl lg:text-6xl font-serif font-light tracking-tight mb-6">
            Client Stories
          </h1>
          <p 
            className="text-[var(--luxury-bronze)] tracking-[0.3em] uppercase text-xs mb-8"
          >
            A tradition of excellence since 1998
          </p>
          <div className="max-w-2xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ReviewCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
            <h2 className="text-2xl font-serif font-light mb-6">Experience the Ademato Difference</h2>
            <Button
                asChild
                variant="outline"
                className="px-12 h-12 tracking-[0.2em] border-foreground text-foreground hover:bg-foreground hover:text-background"
            >
                <Link href="/shop">SHOP THE COLLECTION</Link>
            </Button>
        </div>
      </div>
    </main>
  )
}

function ReviewCard({ testimonial, index }: { testimonial: any, index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div 
      ref={ref}
      className={`bg-card border border-border/50 p-8 shadow-luxury hover:shadow-luxury-hover hover:border-[var(--luxury-gold)] transition-all duration-700 font-roboto relative group overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote 
        className="absolute top-4 right-4 h-10 w-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500" 
        style={{ color: 'var(--luxury-gold)' }}
      />
      
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-[var(--luxury-gold)] text-[var(--luxury-gold)]" />
        ))}
      </div>

      <blockquote className="text-xl font-light italic mb-8 leading-relaxed text-foreground/90">
        &quot;{testimonial.content}&quot;
      </blockquote>

      <div className="mt-auto pt-6 border-t border-border/50 flex justify-between items-end">
        <div>
          <div className="font-medium tracking-[0.1em] text-sm uppercase">{testimonial.name}</div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-2" style={{ color: 'var(--luxury-bronze)' }}>
            {testimonial.role}
          </div>
        </div>
        <div className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-light">
          {testimonial.date}
        </div>
      </div>
    </div>
  )
}
