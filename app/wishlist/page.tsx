"use client"

import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock data - in a real app, this would come from state management or API
const WISHLIST_ITEMS = [
  {
    id: 1,
    brand: "Rolex",
    model: "Submariner Date",
    ref: "126610LN",
    price: 14500,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1760&auto=format&fit=crop",
    badges: ["In Stock"]
  },
  {
    id: 2,
    brand: "Omega",
    model: "Speedmaster Professional",
    ref: "310.30.42.50.01.001",
    price: 6800,
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1604&auto=format&fit=crop",
    badges: []
  },
]

export default function WishlistPage() {
  const hasItems = WISHLIST_ITEMS.length > 0

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-serif font-medium tracking-tight mb-2">My Wishlist</h1>
            <p className="text-muted-foreground">
              {hasItems ? `${WISHLIST_ITEMS.length} items saved for later` : "No items in your wishlist yet"}
            </p>
          </div>

          {hasItems ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {WISHLIST_ITEMS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <svg
                className="h-24 w-24 text-muted-foreground/30 mb-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h2 className="text-2xl font-serif font-medium mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                Save your favorite timepieces to easily find them later
              </p>
              <Link href="/shop">
                <Button size="lg">
                  Discover Timepieces
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
