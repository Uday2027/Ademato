"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    id: 1,
    headline: "Curated Rolex for Serious Collectors",
    value: "Every timepiece authenticated by master horologists",
    cta: "Shop New Arrivals",
    ctaLink: "/shop",
    secondaryLink: "Browse Rolex",
    secondaryHref: "/shop/rolex",
    image: "/luxury-rolex-submariner-watch-on-black-velvet.jpg",
  },
  {
    id: 2,
    headline: "Sell or Trade in Minutes",
    value: "Get the best value for your luxury timepiece",
    cta: "Get an Estimate",
    ctaLink: "/sell",
    secondaryLink: "How it works",
    secondaryHref: "/how-it-works",
    image: "/elegant-patek-philippe-watch-close-up.jpg",
  },
  {
    id: 3,
    headline: "Can't Find It? We Source It.",
    value: "Our concierge team finds the rarest pieces",
    cta: "Request Concierge",
    ctaLink: "/concierge",
    secondaryLink: "View sold archive",
    secondaryHref: "/archive",
    image: "/audemars-piguet-royal-oak-luxury-watch.jpg",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  return (
    <section
      className="relative h-[70vh] lg:h-[85vh] overflow-hidden bg-[#0f0f0f]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0">
            <img 
              src={slide.image || "/placeholder.svg"} 
              alt="" 
              className={`h-full w-full object-cover transition-transform duration-1000 ${
                index === current ? "scale-105" : "scale-100"
              }`}
            />
            {/* Sophisticated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          </div>

          {/* Content with Staggered Animation */}
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 w-full">
              <div className="max-w-2xl">
                <h2 
                  className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight tracking-tight text-balance transition-all duration-1000 delay-100 ${
                    index === current 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {slide.headline}
                </h2>
                <p 
                  className={`mt-6 text-lg md:text-xl text-white/90 font-light tracking-wide transition-all duration-1000 delay-300 ${
                    index === current 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ letterSpacing: '0.05em', lineHeight: '1.8' }}
                >
                  {slide.value}
                </p>
                <div 
                  className={`mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center transition-all duration-1000 delay-500 ${
                    index === current 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-sm tracking-[0.2em] px-8 py-6 transition-all duration-500 hover:scale-105"
                  >
                    <Link href={slide.ctaLink}>{slide.cta}</Link>
                  </Button>
                  <Link
                    href={slide.secondaryHref}
                    className="text-white/80 hover:text-white text-sm tracking-[0.2em] underline underline-offset-4 transition-all duration-300 hover:underline-offset-8"
                  >
                    {slide.secondaryLink}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced Navigation Arrows with Glassmorphism */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 glass-effect rounded-full text-white/60 hover:text-white transition-all duration-300 group hover:scale-110"
        aria-label="Previous slide"
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <ChevronLeft className="h-6 w-6 lg:h-8 lg:w-8 transition-transform group-hover:-translate-x-1" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 glass-effect rounded-full text-white/60 hover:text-white transition-all duration-300 group hover:scale-110"
        aria-label="Next slide"
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <ChevronRight className="h-6 w-6 lg:h-8 lg:w-8 transition-transform group-hover:translate-x-1" />
      </button>

      {/* Elegant Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === current
                ? "w-12 bg-white"
                : "w-8 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
