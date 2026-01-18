"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ProductCard } from "@/components/product-card"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Mock Data - Sold Watches
const soldWatches = [
    { id: 101, brand: "Rolex", model: "Daytona 'Panda'", ref: "116500LN", price: "Sold", image: "/rolex-daytona-white-dial-chronograph-watch.jpg", badges: ["Sold"], category: "Rolex", condition: "Pre-Owned" },
    { id: 102, brand: "Patek Philippe", model: "Nautilus", ref: "5711/1A", price: "Sold", image: "/patek-philippe-nautilus-blue-dial-watch.jpg", badges: ["Sold"], category: "Patek", condition: "Pre-Owned" },
    { id: 103, brand: "Audemars Piguet", model: "Royal Oak Jumbo", ref: "15202ST", price: "Sold", image: "/audemars-piguet-royal-oak-steel-watch.jpg", badges: ["Sold"], category: "AP", condition: "Pre-Owned" },
    { id: 104, brand: "Rolex", model: "GMT-Master II 'Pepsi'", ref: "126710BLRO", price: "Sold", image: "/rolex-gmt-master-batman-bezel-watch.jpg", badges: ["Sold"], category: "Rolex", condition: "Pre-Owned" },
    { id: 105, brand: "FP Journe", model: "Chronometre Bleu", ref: "CB", price: "Sold", image: "/placeholder.svg", badges: ["Sold"], category: "FP Journe", condition: "Pre-Owned" },
    { id: 106, brand: "Rolex", model: "Submariner 'Hulk'", ref: "116610LV", price: "Sold", image: "/rolex-submariner-black-dial-luxury-watch.jpg", badges: ["Sold"], category: "Rolex", condition: "Pre-Owned" },
    { id: 107, brand: "Patek Philippe", model: "Aquanaut Travel Time", ref: "5164A", price: "Sold", image: "/patek-philippe-aquanaut-black-rubber-strap.jpg", badges: ["Sold"], category: "Patek", condition: "Pre-Owned" },
    { id: 108, brand: "Audemars Piguet", model: "Royal Oak Offshore", ref: "26470ST", price: "Sold", image: "/audemars-piguet-offshore-chronograph-watch.jpg", badges: ["Sold"], category: "AP", condition: "Pre-Owned" },
    { id: 109, brand: "Rolex", model: "Day-Date 40", ref: "228235", price: "Sold", image: "/rolex-day-date-gold.jpg", badges: ["Sold"], category: "Rolex", condition: "Pre-Owned" },
    { id: 110, brand: "Vacheron Constantin", model: "Overseas", ref: "4500V", price: "Sold", image: "/vacheron-overseas.jpg", badges: ["Sold"], category: "Vacheron", condition: "Pre-Owned" },
    { id: 111, brand: "Rolex", model: "Sky-Dweller", ref: "326934", price: "Sold", image: "/rolex-sky-dweller-blue.jpg", badges: ["Sold"], category: "Rolex", condition: "Pre-Owned" },
    { id: 112, brand: "Omega", model: "Speedmaster Snoopy", ref: "310.32.42.50.02.001", price: "Sold", image: "/omega-speedmaster.jpg", badges: ["Sold"], category: "Omega", condition: "Pre-Owned" },
]

const brands = ["Rolex", "Patek Philippe", "Audemars Piguet", "Omega", "Vacheron Constantin", "FP Journe"]

export default function ArchivePage() {
    const [selectedBrands, setSelectedBrands] = useState<string[]>([])
    const [visibleCount, setVisibleCount] = useState(12)

    // Filter Logic
    const filteredWatches = useMemo(() => {
        return soldWatches.filter((watch) => {
            if (selectedBrands.length > 0 && !selectedBrands.includes(watch.brand)) return false
            return true
        })
    }, [selectedBrands])

    const visibleWatches = filteredWatches.slice(0, visibleCount)

    const toggleBrand = (brand: string) => {
        setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand])
    }

    const clearFilters = () => {
        setSelectedBrands([])
        setVisibleCount(12)
    }

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 12)
    }

    const FiltersContent = () => (
        <div className="space-y-8">
            {/* Brands */}
            <div className="space-y-4">
                <h3 className="font-medium tracking-wide">Brands</h3>
                <div className="space-y-3">
                    {brands.map((brand) => (
                        <div key={brand} className="flex items-center space-x-3">
                            <Checkbox
                                id={`brand-${brand}`}
                                checked={selectedBrands.includes(brand)}
                                onCheckedChange={() => toggleBrand(brand)}
                            />
                            <Label htmlFor={`brand-${brand}`} className="font-light cursor-pointer">
                                {brand}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Clear Filters */}
            <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="w-full"
            >
                Clear All Filters
            </Button>
        </div>
    )

    return (
        <main className="min-h-screen bg-background pb-16">
            {/* Banner */}
            <div className="h-[40vh] bg-secondary flex items-center justify-center mb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-4 text-white">Sold Archive</h1>
                    <p className="text-xl font-light tracking-wide max-w-xl mx-auto text-white/90">
                        A curated selection of extraordinary timepieces we have had the privilege to handle.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4">

                {/* Breadcrumb */}
                <div className="mb-8">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Sold Archive</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 pb-8 border-b border-border">
                    <div className="flex items-center gap-4">
                        {/* Filter Drawer Trigger */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="default" className="gap-2">
                                    <Filter className="h-4 w-4" /> Filters
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <SheetHeader>
                                    <SheetTitle className="text-left mb-6">Filters</SheetTitle>
                                </SheetHeader>
                                <FiltersContent />
                            </SheetContent>
                        </Sheet>
                        <div className="text-sm text-muted-foreground">
                            Showing {visibleWatches.length} of {filteredWatches.length} Sold Watches
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {visibleWatches.length > 0 ? (
                        visibleWatches.map((watch) => (
                            <ProductCard key={watch.id} product={watch} />
                        ))
                    ) : (
                        <div className="col-span-full py-24 text-center">
                            <p className="text-lg text-muted-foreground font-light">
                                No archive items found.
                            </p>
                            <Button variant="link" onClick={clearFilters} className="mt-2 text-foreground">
                                Clear filters
                            </Button>
                        </div>
                    )}
                </div>

                {/* Load More */}
                {visibleCount < filteredWatches.length && (
                    <div className="mt-16 text-center">
                        <p className="text-sm text-muted-foreground mb-4">
                            Showing {visibleWatches.length} of {filteredWatches.length} Watches
                        </p>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={handleLoadMore}
                            className="px-12 tracking-widest"
                        >
                            View More
                        </Button>
                    </div>
                )}
            </div>
        </main>
    )
}
