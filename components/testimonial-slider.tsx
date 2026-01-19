"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const testimonials = [
    {
        id: 1,
        name: "James C.",
        role: "Collector",
        content: "The authentication process was seamless. My Rolex Submariner arrived in perfect condition, exactly as described. Truly a white-glove service.",
        rating: 5,
    },
    {
        id: 2,
        name: "Sarah M.",
        role: "First-time Buyer",
        content: "I was hesitant buying a pre-owned luxury watch online, but the team's transparency and communication put me at ease. I love my new Cartier.",
        rating: 5,
    },
    {
        id: 3,
        name: "Michael R.",
        role: "Enthusiast",
        content: "Sold my AP Royal Oak through their consignment service. Got a great price and the money was wired immediately after the sale. Highly recommended.",
        rating: 5,
    },
    {
        id: 4,
        name: "David L.",
        role: "Investor",
        content: "Ademato has become my go-to for sourcing investment-grade timepieces. Their curation is impeccable.",
        rating: 5,
    },
    {
        id: 5,
        name: "Elena K.",
        role: "Collector",
        content: "Finding a mint condition Patek like this was a dream. The team went above and beyond to ensure safe delivery.",
        rating: 5,
    },
    {
        id: 6,
        name: "Robert P.",
        role: "Watch Aficionado",
        content: "The trade-in process was fair and fast. I upgraded my collection effortlessly. Will definitely do business again.",
        rating: 5,
    },
    {
        id: 7,
        name: "Sophia T.",
        role: "Gift Buyer",
        content: "Bought a vintage Omega for my husband's anniversary. It was packaged beautifully and arrived right on time.",
        rating: 5,
    },
    {
        id: 8,
        name: "William B.",
        role: "Frequent Client",
        content: "Consistently excellent service. They know their watches inside and out. A trustworthy partner in building my collection.",
        rating: 5,
    },
]

export function TestimonialSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 },
            '(min-width: 1280px)': { slidesToScroll: 4 },
            '(min-width: 1536px)': { slidesToScroll: 5 }
        }
    }, [Autoplay({ delay: 4000, stopOnInteraction: false }) as any])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    return (
        <section className="py-16 lg:py-24 bg-background border-t border-border">
            <div className="px-4">
                <div className="text-center mb-12 max-w-7xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-4">Client Stories</h2>
                    <p className="text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                        Trusted by collectors and enthusiasts worldwide.
                    </p>
                </div>

                <div className="relative group mb-12">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-6">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] 2xl:flex-[0_0_20%] min-w-0 pl-6">
                                    <div className="h-full p-8 bg-secondary/30 border border-border/50 rounded-xl font-roboto">
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                            ))}
                                        </div>
                                        <blockquote className="text-lg font-light italic mb-6 leading-relaxed">
                                            &quot;{testimonial.content}&quot;
                                        </blockquote>
                                        <div>
                                            <div className="font-medium tracking-wide">{testimonial.name}</div>
                                            <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-secondary transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-secondary transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Mobile Navigation */}
                    <div className="flex justify-center gap-4 mt-8 lg:hidden">
                        <button onClick={scrollPrev} className="p-2 border border-border rounded-full hover:bg-secondary">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button onClick={scrollNext} className="p-2 border border-border rounded-full hover:bg-secondary">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* View All Reviews Button */}
                <div className="text-center">
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="tracking-widest px-8 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                    >
                        <Link href="/reviews">View All Reviews</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
