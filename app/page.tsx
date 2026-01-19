import { HeroCarousel } from "@/components/hero-carousel"
import { LuxuryBanner } from "@/components/luxury-banner"
import { ConversionTiles } from "@/components/conversion-tiles"
import { RolexShowcase } from "@/components/rolex-showcase"
import { NewArrivals } from "@/components/new-arrivals"
import { TrustStrip } from "@/components/trust-strip"
import { CuratedCategories } from "@/components/curated-categories"
import { PressBar } from "@/components/press-bar"
import { JournalPreview } from "@/components/journal-preview"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroCarousel />
      <LuxuryBanner />
      <RolexShowcase />
      <NewArrivals />
      <ConversionTiles />
      <TrustStrip />
      <CuratedCategories />
      {/* <PressBar /> */}
      <TestimonialSlider />
      {/* <JournalPreview /> */}
      <BackToTop />
    </main>
  )
}
