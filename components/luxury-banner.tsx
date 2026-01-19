"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Crown } from "lucide-react"
import Link from "next/link"

export function LuxuryBanner() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ 
    threshold: 0.2, 
    delay: 200 
  })
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ 
    threshold: 0.2, 
    delay: 400 
  })

  return (
    <section className="relative py-20 lg:py-32 bg-background border-y border-border/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="aspect-[4/5] bg-secondary overflow-hidden">
              <img
                src="/luxury-rolex-submariner-watch-on-black-velvet.jpg"
                alt="Luxury timepiece detail"
                className="h-full w-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
            </div>
            
            {/* Decorative floating element */}
            <div 
              className="absolute -top-4 -right-4 w-24 h-24 border border-[var(--luxury-gold)] opacity-30 animate-parallaxFloat"
              style={{ borderWidth: '1px' }}
            />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            {/* Luxury icon accent */}
            <div 
              ref={titleRef}
              className={`transition-all duration-800 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Crown 
                className="h-10 w-10 mb-6 animate-luxuryPulse" 
                style={{ color: 'var(--luxury-gold)' }}
                strokeWidth={1.5}
              />
            </div>

            {/* Headline */}
            <div
              ref={titleRef}
              className={`transition-all duration-800 delay-100 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p 
                className="text-sm tracking-[0.3em] uppercase mb-4 font-medium"
                style={{ color: 'var(--luxury-bronze)' }}
              >
                Since 1998
              </p>
              <h2 
                className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light leading-tight text-balance"
                style={{ 
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-serif)'
                }}
              >
                Curated Excellence in Every Timepiece
              </h2>
            </div>

            {/* Description */}
            <div
              ref={contentRef}
              className={`transition-all duration-800 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
                <p style={{ lineHeight: '1.9', letterSpacing: '0.01em' }}>
                  For over two decades, we have been the trusted destination for discerning collectors 
                  seeking the world's most prestigious timepieces. Each watch in our collection is 
                  meticulously authenticated by master horologists and presented with complete provenance.
                </p>
                <p style={{ lineHeight: '1.9', letterSpacing: '0.01em' }}>
                  Our commitment to excellence extends beyond our inventory. From white-glove concierge 
                  service to lifetime authenticity guarantees, we ensure every aspect of your experience 
                  reflects the exceptional quality of the timepieces we curate.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              ref={ctaRef}
              className={`transition-all duration-800 ${
                ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-foreground text-foreground font-medium tracking-[0.15em] text-sm hover:bg-foreground hover:text-background transition-all duration-500 group"
              >
                DISCOVER OUR STORY
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div 
        className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 opacity-20"
        style={{ background: 'var(--luxury-gold)' }}
      />
    </section>
  )
}
