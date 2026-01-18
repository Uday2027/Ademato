"use client"

import { ProductCard } from "@/components/product-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const RELATED_PRODUCTS = [
  {
    id: 1,
    brand: "Breitling",
    model: "Old Navitimer Automatic 41mm",
    ref: "A13022",
    price: 3500.00,
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1587&auto=format&fit=crop",
    badges: []
  },
  {
    id: 2,
    brand: "Breitling",
    model: "Superocean, Black Dial, Automatic",
    ref: "A1734011/B218",
    price: 1580.00,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1760&auto=format&fit=crop",
    badges: []
  },
  {
    id: 3,
    brand: "Omega",
    model: "Speedmaster, Black 41mm",
    ref: "3570.50",
    price: 4650.00,
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1604&auto=format&fit=crop",
    badges: []
  },
  {
    id: 4,
    brand: "A. Lange & Söhne",
    model: '"Darth Lange 1" Platinum 38.5mm',
    ref: "101.035",
    price: 41000.00,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1587&auto=format&fit=crop",
    badges: []
  },
   {
    id: 5,
    brand: "Rolex",
    model: "DateJust 41mm, Wimbledon Jubilee",
    ref: "126334",
    price: 16500.00,
    image: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=1760&auto=format&fit=crop",
    badges: ["New Arrival"]
  }
]

export function RelatedProducts() {
  return (
    <div className="space-y-10 py-16">
      <div className="text-center space-y-1">
        <h2 className="text-3xl font-serif font-medium text-foreground">You Might Also Like</h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {RELATED_PRODUCTS.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static translate-y-0" />
            <CarouselNext className="relative static translate-y-0" />
        </div>
      </Carousel>
    </div>
  )
}
