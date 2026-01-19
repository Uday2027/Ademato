"use client"

import Link from "next/link"
import { Heart, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface ProductCardProps {
    product: {
        id: number
        brand: string
        model: string
        ref: string
        price: number | string
        image: string
        badges: string[]
    }
}

export function ProductCard({ product }: ProductCardProps) {
    const [isWishlisted, setIsWishlisted] = useState(false)

    // Helper to format price if it's a number
    const formattedPrice = typeof product.price === "number"
        ? `$${product.price.toLocaleString()}`
        : product.price

    return (
        <div className="group bg-card border border-border">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-secondary rounded-xl">
                <img
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.brand} ${product.model}`}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                {product.badges && product.badges.length > 0 && (
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                        {product.badges.map((badge) => (
                            <Badge
                                key={badge}
                                variant="secondary"
                                className="bg-background/90 text-foreground text-[10px] tracking-wider font-medium"
                            >
                                {badge}
                            </Badge>
                        ))}
                    </div>
                )}

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            setIsWishlisted(!isWishlisted)
                        }}
                        className={`p-2 bg-background/90 hover:bg-background transition-colors ${isWishlisted ? "text-accent" : "text-foreground"
                            }`}
                        aria-label="Add to wishlist"
                    >
                        <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
                    </button>
                    <Link
                        href={`/watch/${product.id}`}
                        className="p-2 bg-background/90 hover:bg-background text-foreground transition-colors"
                        aria-label="Quick view"
                    >
                        <Eye className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            {/* Details */}
            <div className="p-4">
                <p className="text-xs tracking-widest text-muted-foreground mb-1">{product.brand}</p>
                <h3 className="text-lg font-medium text-foreground mb-1">{product.model}</h3>
                <p className="text-xs text-muted-foreground mb-3">Ref. {product.ref}</p>
                <p className="text-lg font-medium text-foreground">{formattedPrice}</p>
            </div>
        </div>
    )
}
