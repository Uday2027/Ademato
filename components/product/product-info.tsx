"use client"

import { Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface ProductInfoProps {
  product: {
    brand: string
    model: string
    ref: string
    price: number
    sku?: string
  }
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
            <h2 className="text-3xl font-serif font-medium tracking-tight text-foreground">
            {product.brand} {product.model}
            </h2>
            <Button variant="ghost" size="icon" className="group">
                 <Heart className="h-5 w-5 text-muted-foreground group-hover:text-red-500 transition-colors" />
            </Button>
        </div>
        <p className="text-sm text-muted-foreground tracking-widest uppercase">
          (Ref. {product.ref})
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>SKU: {product.sku || "N/A"}</span>
        </div>
        
        <div className="space-y-1">
             <div className="text-2xl font-medium">
                ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
            <p className="text-sm text-muted-foreground">
                From ${(product.price / 12).toFixed(2)}/mo with <span className="font-bold text-[#5A31F4]">shop</span> <span className="underline cursor-pointer">Check your purchasing power</span>
            </p>
        </div>
      </div>

      <div className="space-y-3">
        <Button className="w-full h-12 text-base font-medium border-2" variant="outline">
          Add to cart
        </Button>
        <Button className="w-full h-12 text-base font-medium bg-[#5A31F4] hover:bg-[#4825C9] text-white">
          Buy with <span className="font-bold ml-1">shop</span>
        </Button>
        <div className="text-center text-xs text-muted-foreground pt-1">
          <span className="underline cursor-pointer">More payment options</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-10">
          Call Us
        </Button>
        <Button variant="outline" className="h-10">
          Email Us
        </Button>
      </div>

      <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
        <button className="flex items-center gap-2 hover:text-foreground transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            Ask a question
        </button>
        <button className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Share2 className="h-4 w-4" />
            Share
        </button>
      </div>
      
      <Separator />

      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-muted-foreground"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
            <div>
                <span className="font-medium text-foreground">Estimated Delivery: </span>
                <span className="text-muted-foreground">Jan 23 - Jan 27</span>
            </div>
        </div>
        <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-muted-foreground"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/><line x1="3.27" y1="6.96" x2="12" y2="7.5"/><line x1="12" y1="7.5" x2="20.73" y2="6.96"/></svg>
            <div>
                 <span className="font-medium text-foreground">Shipping: </span>
                 <span className="text-muted-foreground">Complimentary next-day priority overnight shipping. Shipping begins once payment clears.</span>
            </div>
        </div>
      </div>
    </div>
  )
}
