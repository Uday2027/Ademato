"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ProductCard } from "@/components/product-card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
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

// Mock Data - Expanded
const allWatches = [
    { id: 1, brand: "Rolex", model: "Submariner Date", ref: "126610LN", price: 14500, image: "/rolex-submariner-black-dial-luxury-watch.jpg", badges: ["New", "Full Set"], category: "Rolex", condition: "New" },
    { id: 2, brand: "Patek Philippe", model: "Nautilus", ref: "5711/1A-010", price: 110000, image: "/patek-philippe-nautilus-blue-dial-watch.jpg", badges: ["Certified"], category: "Patek", condition: "Pre-Owned" },
    { id: 3, brand: "Audemars Piguet", model: "Royal Oak", ref: "15500ST", price: 42000, image: "/audemars-piguet-royal-oak-steel-watch.jpg", badges: ["Full Set"], category: "AP", condition: "Pre-Owned" },
    { id: 4, brand: "Rolex", model: "Daytona", ref: "116500LN", price: 32500, image: "/rolex-daytona-white-dial-chronograph-watch.jpg", badges: ["New"], category: "Rolex", condition: "New" },
    { id: 5, brand: "Rolex", model: "GMT-Master II", ref: "126710BLNR", price: 18900, image: "/rolex-gmt-master-batman-bezel-watch.jpg", badges: ["Certified", "Full Set"], category: "Rolex", condition: "Pre-Owned" },
    { id: 6, brand: "Patek Philippe", model: "Aquanaut", ref: "5167A-001", price: 38000, image: "/patek-philippe-aquanaut-black-rubber-strap.jpg", badges: [], category: "Patek", condition: "Pre-Owned" },
    { id: 7, brand: "Rolex", model: "Datejust 41", ref: "126334", price: 12800, image: "/rolex-datejust-blue-dial-jubilee-bracelet.jpg", badges: ["New", "Full Set"], category: "Rolex", condition: "New" },
    { id: 8, brand: "Audemars Piguet", model: "Royal Oak Offshore", ref: "26470ST", price: 28500, image: "/audemars-piguet-offshore-chronograph-watch.jpg", badges: ["Certified"], category: "AP", condition: "Pre-Owned" },
    { id: 9, brand: "Rolex", model: "Explorer II", ref: "226570", price: 11500, image: "/rolex-explorer-ii.jpg", badges: ["Full Set"], category: "Rolex", condition: "Pre-Owned" },
    { id: 10, brand: "Omega", model: "Speedmaster Professional", ref: "310.30.42.50.01.002", price: 7200, image: "/omega-speedmaster.jpg", badges: ["New"], category: "Omega", condition: "New" },
    { id: 11, brand: "Vacheron Constantin", model: "Overseas", ref: "4500V/110A-B128", price: 28000, image: "/vacheron-overseas.jpg", badges: ["Certified"], category: "Vacheron", condition: "Pre-Owned" },
    { id: 12, brand: "Rolex", model: "Oyster Perpetual 41", ref: "124300", price: 9500, image: "/rolex-op-green.jpg", badges: [], category: "Rolex", condition: "Pre-Owned" },
    { id: 13, brand: "Cartier", model: "Santos de Cartier", ref: "WSSA0029", price: 7800, image: "/cartier-santos.jpg", badges: ["New"], category: "Cartier", condition: "New" },
    { id: 14, brand: "Rolex", model: "Sky-Dweller", ref: "326934", price: 24000, image: "/rolex-sky-dweller-blue.jpg", badges: ["Full Set"], category: "Rolex", condition: "Pre-Owned" },
    // Duplicating for lazy load demo
    { id: 15, brand: "Rolex", model: "Yacht-Master 40", ref: "126622", price: 16000, image: "/rolex-yachtmaster.jpg", badges: [], category: "Rolex", condition: "Pre-Owned" },
    { id: 16, brand: "Rolex", model: "Day-Date 40", ref: "228238", price: 45000, image: "/rolex-day-date-gold.jpg", badges: ["New"], category: "Rolex", condition: "New" },
]

const brands = ["Rolex", "Patek Philippe", "Audemars Piguet", "Omega", "Cartier", "Vacheron Constantin"]
const conditions = ["New", "Pre-Owned"]

export default function ShopPage() {
    const [selectedBrands, setSelectedBrands] = useState<string[]>([])
    const [selectedConditions, setSelectedConditions] = useState<string[]>([])
    const [priceRange, setPriceRange] = useState([0, 150000])
    const [sortBy, setSortBy] = useState("featured")
    const [visibleCount, setVisibleCount] = useState(12)

    // Filter Logic
    const filteredWatches = useMemo(() => {
        return allWatches.filter((watch) => {
            if (selectedBrands.length > 0 && !selectedBrands.includes(watch.brand)) return false
            if (selectedConditions.length > 0 && !selectedConditions.includes(watch.condition)) return false
            if (watch.price < priceRange[0] || watch.price > priceRange[1]) return false
            return true
        }).sort((a, b) => {
            switch (sortBy) {
                case "price-asc": return a.price - b.price
                case "price-desc": return b.price - a.price
                case "newest": return b.id - a.id
                default: return 0
            }
        })
    }, [selectedBrands, selectedConditions, priceRange, sortBy])

    const visibleWatches = filteredWatches.slice(0, visibleCount)

    const toggleBrand = (brand: string) => {
        setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand])
    }

    const toggleCondition = (condition: string) => {
        setSelectedConditions(prev => prev.includes(condition) ? prev.filter(c => c !== condition) : [...prev, condition])
    }

    const clearFilters = () => {
        setSelectedBrands([])
        setSelectedConditions([])
        setPriceRange([0, 150000])
        setSortBy("featured")
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

            {/* Price Range */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-medium tracking-wide">Price Range</h3>
                    <span className="text-xs text-muted-foreground">
                        ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}+
                    </span>
                </div>
                <Slider
                    defaultValue={[0, 150000]}
                    max={150000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                />
            </div>

            {/* Condition */}
            <div className="space-y-4">
                <h3 className="font-medium tracking-wide">Condition</h3>
                <div className="space-y-3">
                    {conditions.map((condition) => (
                        <div key={condition} className="flex items-center space-x-3">
                            <Checkbox
                                id={`condition-${condition}`}
                                checked={selectedConditions.includes(condition)}
                                onCheckedChange={() => toggleCondition(condition)}
                            />
                            <Label htmlFor={`condition-${condition}`} className="font-light cursor-pointer">
                                {condition}
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
                <div className="absolute inset-0 bg-black/20 z-10" />
                <div className="relative z-20 text-center">
                    <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-4">Shop</h1>
                    <p className="text-xl font-light tracking-wide max-w-xl mx-auto">
                        Explore our curated collection of investment-grade timepieces.
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
                                <BreadcrumbPage>Shop</BreadcrumbPage>
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
                        <div className="text-sm text-muted-foreground hidden md:block">
                            Showing {visibleWatches.length} of {filteredWatches.length} Watches
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Select value={sortBy} onValueChange={setSortBy}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="featured">Featured</SelectItem>
                                <SelectItem value="newest">Newest Arrivals</SelectItem>
                                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Product Grid - Full Width without Sidebar (as filters are in drawer now) */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {visibleWatches.length > 0 ? (
                        visibleWatches.map((watch) => (
                            <ProductCard key={watch.id} product={watch} />
                        ))
                    ) : (
                        <div className="col-span-full py-24 text-center">
                            <p className="text-lg text-muted-foreground font-light">
                                No watches found matching your criteria.
                            </p>
                            <Button variant="link" onClick={clearFilters} className="mt-2 text-foreground">
                                Clear all filters
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
