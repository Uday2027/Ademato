"use client"

import { useParams } from "next/navigation"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductInfo } from "@/components/product/product-info"
import { ProductTabs } from "@/components/product/product-tabs"
import { SourcingBanner } from "@/components/product/sourcing-banner"
import { RelatedProducts } from "@/components/product/related-products"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// MOCK DATA - In a real app, this would be fetched based on the ID
const PRODUCT_DATA = {
  id: "1",
  brand: "Breitling",
  model: "Navitimer Automatic 35mm Ladies",
  ref: "A17395F41G1A1",
  sku: "N/A", 
  price: 3750.00,
  images: [
    "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=1760&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1619134778706-c73405e671c0?q=80&w=1587&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1595935327293-6c84c1f6b52a?q=80&w=1587&auto=format&fit=crop"
  ],
  specs: {
    "Brand": "Breitling",
    "Model": "Navitimer Automatic 35mm Ladies (Ref. A17395F41G1A1)",
    "Metal Type": "Stainless Steel",
    "Year": "2020",
    "Condition": "Near mint, stickers still on it.",
    "Box & Papers": "Complete roll-up and original receipt",
    "Warranty": "2 year warranty on the movement of the watch. Please contact us for more details."
  },
  description: "Experience the elegance of the Breitling Navitimer Automatic 35mm. This ladies' timepiece combines historic appeal with contemporary sophistication."
}

export default function ProductPage() {
  const params = useParams()
  
  // In a real implementation: const product = fetchProduct(params.id)
  const product = PRODUCT_DATA

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop">Above $10K</BreadcrumbLink>
            </BreadcrumbItem>
             <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.brand} {product.model}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Gallery */}
            <div>
                 <ProductGallery images={product.images} />
            </div>

            {/* Right Column: Info */}
            <div>
                <ProductInfo product={product} />
            </div>
        </div>

        {/* Tabs Section - Full Width below */}
        <div className="mt-16 md:mt-24 max-w-4xl">
            <ProductTabs description={product.description} specs={product.specs} />
        </div>

        {/* Banner */}
        <SourcingBanner />

        {/* Related Products */}
        <RelatedProducts />
      </div>
    </main>
  )
}
