"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"

export default function SellPage() {
    return (
        <main className="min-h-screen bg-background pb-16">
            {/* Hero Banner */}
            <div className="h-[40vh] bg-secondary flex items-center justify-center mb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1a1a1a]/30 z-10" />
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-4 text-white">Sell Your Watch</h1>
                    <p className="text-xl font-light tracking-wide max-w-xl mx-auto text-white/90">
                        Get the best market value for your timepiece with our transparent, secure, and expedited selling process.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-4xl px-4">
                {/* Process Steps */}
                <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
                    <div className="space-y-4">
                        <div className="h-12 w-12 rounded-full bg-foreground text-background flex items-center justify-center text-xl font-medium mx-auto">1</div>
                        <h3 className="text-xl font-medium tracking-wide">Submit Details</h3>
                        <p className="text-muted-foreground font-light">Fill out the form below with your watch&apos;s information and photos.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="h-12 w-12 rounded-full bg-foreground text-background flex items-center justify-center text-xl font-medium mx-auto">2</div>
                        <h3 className="text-xl font-medium tracking-wide">Receive Offer</h3>
                        <p className="text-muted-foreground font-light">Our experts will review your submission and provide a competitive quote within 24 hours.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="h-12 w-12 rounded-full bg-foreground text-background flex items-center justify-center text-xl font-medium mx-auto">3</div>
                        <h3 className="text-xl font-medium tracking-wide">Get Paid</h3>
                        <p className="text-muted-foreground font-light">Ship your watch with our insured label. Once inspected, payment is wired immediately.</p>
                    </div>
                </div>

                {/* Sell Form */}
                <div className="bg-secondary/20 p-8 lg:p-12 rounded-sm border border-border/50">
                    <h2 className="text-3xl font-light tracking-tight mb-8 text-center">Watch Details</h2>
                    <form className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="brand">Brand</Label>
                                <Input id="brand" placeholder="e.g. Rolex" className="bg-background border-border" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="model">Model</Label>
                                <Input id="model" placeholder="e.g. Submariner" className="bg-background border-border" />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="refernece">Reference Number</Label>
                                <Input id="reference" placeholder="e.g. 126610LN" className="bg-background border-border" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="year">Year (Approx.)</Label>
                                <Input id="year" placeholder="e.g. 2022" className="bg-background border-border" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="condition">Condition & Accessories</Label>
                            <Textarea
                                id="condition"
                                placeholder="Please describe the condition of the watch. Does it come with original box and papers?"
                                className="min-h-[100px] bg-background border-border"
                            />
                        </div>

                        <div className="space-y-4">
                            <Label>Photos</Label>
                            <div className="border-2 border-dashed border-border/60 rounded-lg p-12 text-center hover:bg-secondary/30 transition-colors cursor-pointer">
                                <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground font-light">
                                    Drag & drop photos here, or click to browse
                                </p>
                                <p className="text-xs text-muted-foreground/60 mt-2">Max 5MB per image</p>
                            </div>
                        </div>

                        <div className="border-t border-border/50 pt-8 mt-8">
                            <h3 className="text-xl font-medium tracking-wide mb-6">Contact Information</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" placeholder="John Doe" className="bg-background border-border" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border" />
                                </div>
                                <div className="space-y-2 sm:col-span-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-background border-border" />
                                </div>
                            </div>
                        </div>

                        <Button type="submit" size="lg" className="w-full tracking-widest text-lg py-6">
                            Submit Quote Request
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    )
}
