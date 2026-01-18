"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, RefreshCw } from "lucide-react"

export default function TradePage() {
    return (
        <main className="min-h-screen bg-background pb-16">
            {/* Hero Banner */}
            <div className="h-[40vh] bg-secondary flex items-center justify-center mb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0a1f26]/40 z-10" />
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-4 text-white">Trade Your Watch</h1>
                    <p className="text-xl font-light tracking-wide max-w-xl mx-auto text-white/90">
                        Refresh your collection by trading in your current timepiece for something new.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-4xl px-4">
                {/* Trade Benefits */}
                <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-light tracking-tight">Why Trade With Ademato?</h2>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                </div>
                                <p className="font-light text-muted-foreground"><span className="font-medium text-foreground">Higher Value:</span> Trade-ins often receive a higher valuation than straight cash sales.</p>
                            </li>
                            <li className="flex gap-4">
                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                </div>
                                <p className="font-light text-muted-foreground"><span className="font-medium text-foreground">Seamless Process:</span> Apply your trade credit instantly towards any watch in our inventory.</p>
                            </li>
                            <li className="flex gap-4">
                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                </div>
                                <p className="font-light text-muted-foreground"><span className="font-medium text-foreground">Tax Savings:</span> Pay sales tax only on the difference in some jurisdictions (check local laws).</p>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-secondary/40 p-8 rounded-lg flex items-center justify-center">
                        <RefreshCw className="h-24 w-24 text-foreground/20" />
                    </div>
                </div>

                {/* Trade Form */}
                <div className="bg-secondary/20 p-8 lg:p-12 rounded-sm border border-border/50">
                    <h2 className="text-3xl font-light tracking-tight mb-8 text-center">Start Your Trade</h2>
                    <form className="space-y-8">
                        <div className="border-b border-border/50 pb-8">
                            <h3 className="text-xl font-medium tracking-wide mb-6">1. Your Watch (Trade-In)</h3>
                            <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <Label htmlFor="brand">Brand</Label>
                                    <Input id="brand" placeholder="e.g. Omega" className="bg-background border-border" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="model">Model</Label>
                                    <Input id="model" placeholder="e.g. Speedmaster" className="bg-background border-border" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <Label>Photos</Label>
                                <div className="border-2 border-dashed border-border/60 rounded-lg p-8 text-center hover:bg-secondary/30 transition-colors cursor-pointer">
                                    <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                                    <p className="text-sm text-muted-foreground font-light">Upload photos of your watch</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-border/50 pb-8">
                            <h3 className="text-xl font-medium tracking-wide mb-6">2. Desired Watch (Trade-Up)</h3>
                            <div className="space-y-2">
                                <Label htmlFor="desired">Which watch are you interested in?</Label>
                                <Input id="desired" placeholder="e.g. Patek Philippe Nautilus or paste a link" className="bg-background border-border" />
                            </div>
                        </div>

                        <div className="pt-2">
                            <h3 className="text-xl font-medium tracking-wide mb-6">3. Contact Information</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" placeholder="John Doe" className="bg-background border-border" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border" />
                                </div>
                            </div>
                        </div>

                        <Button type="submit" size="lg" className="w-full tracking-widest text-lg py-6">
                            Submit Trade Request
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    )
}
