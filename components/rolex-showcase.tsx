"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const categories = [
  "All Watches",
  "Submariner",
  "DateJust",
  "Daytona",
  "GMT-Master II",
  "Oyster Perpetual",
];

const watches = [
  {
    id: 1,
    brand: "ROLEX",
    model: "Submariner Date",
    price: "$14,500",
    image: "/rolex-submariner-black-dial-luxury-watch.jpg",
    category: "Submariner",
  },
  {
    id: 2,
    brand: "ROLEX",
    model: "DateJust 41",
    price: "$12,800",
    image: "/rolex-datejust-blue-dial-jubilee-bracelet.jpg",
    category: "DateJust",
  },
  {
    id: 3,
    brand: "ROLEX",
    model: "Daytona Panda",
    price: "$32,500",
    image: "/rolex-daytona-white-dial-chronograph-watch.jpg",
    category: "Daytona",
  },
  {
    id: 4,
    brand: "ROLEX",
    model: "GMT-Master II 'Batgirl'",
    price: "$18,900",
    image: "/rolex-gmt-master-batman-bezel-watch.jpg",
    category: "GMT-Master II",
  },
  {
    id: 5,
    brand: "ROLEX",
    model: "Oyster Perpetual 41",
    price: "$9,500",
    image: "/rolex-oyster-perpetual-green-dial.jpg",
    category: "Oyster Perpetual",
  },
  {
    id: 6,
    brand: "ROLEX",
    model: "Submariner No Date",
    price: "$13,200",
    image: "/rolex-submariner-no-date.jpg",
    category: "Submariner",
  },
  {
    id: 7,
    brand: "ROLEX",
    model: "DateJust 36",
    price: "$11,500",
    image: "/rolex-datejust-36-mint-green.jpg",
    category: "DateJust",
  },
];

export function RolexShowcase() {
  const [activeCategory, setActiveCategory] = useState("All Watches");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
      "(min-width: 1280px)": { slidesToScroll: 4 },
      "(min-width: 1536px)": { slidesToScroll: 5 },
    },
  }, [Autoplay({ delay: 3000, stopOnInteraction: false }) as any]);

  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const filteredWatches = watches.filter(
    (watch) =>
      activeCategory === "All Watches" || watch.category === activeCategory,
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((emblaApi: any) => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(0);
  }, [activeCategory, emblaApi]);

  return (
    <section 
      ref={sectionRef}
      className={`py-16 bg-background border-t border-border transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="px-4">
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl lg:text-3xl font-serif font-light tracking-tight mb-3">Rolex Collection</h2>
            <p className="text-[var(--luxury-bronze)] text-xs tracking-[0.2em] uppercase">Masterpieces of Engineering</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className={`flex h-10 w-10 items-center justify-center text-foreground hover:opacity-70 transition-all duration-300 hover:scale-110 ${!canScrollPrev ? "opacity-30 cursor-not-allowed" : ""}`}
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-8 w-8" />
            </button>
            <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className={`flex h-10 w-10 items-center justify-center text-foreground hover:opacity-70 transition-all duration-300 hover:scale-110 ${!canScrollNext ? "opacity-30 cursor-not-allowed" : ""}`}
                aria-label="Next slide"
            >
                <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {filteredWatches.map((watch, index) => (
                <div
                  key={watch.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] 2xl:flex-[0_0_16.666%] min-w-0 pl-4"
                >
                  <Link
                    href={`/watch/${watch.id}`}
                    className="block group/card"
                  >
                    {/* Image Container with Shimmer */}
                    <div className="aspect-[3/4] bg-[#f5f5f5] mb-4 overflow-hidden relative shadow-luxury hover:shadow-luxury-hover transition-shadow duration-500 rounded-sm">
                      <img
                        src={watch.image || "/placeholder.svg"}
                        alt={watch.model}
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                      />
                      {/* Shimmer overlay on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 shimmer-overlay" />
                    </div>

                    {/* Info */}
                    <div className="space-y-1">
                      <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                        {watch.brand}
                      </h3>
                      <h4 className="text-base font-normal text-foreground tracking-wide group-hover/card:translate-x-1 transition-transform duration-300">
                        {watch.model}
                      </h4>
                      <p className="text-sm font-medium text-[var(--luxury-gold)] tracking-wide">
                        {watch.price}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
