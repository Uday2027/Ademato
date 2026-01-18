import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

const benefits = [
  "Access to rare and hard-to-find timepieces",
  "Expert guidance from watch specialists",
  "Private viewings and consultations",
  "Dedicated concierge service",
  "Priority access to new arrivals",
  "Customized watch recommendations"
]

export default function ConciergePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-secondary flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1587836374628-4651568d04c4?q=80&w=2670&auto=format&fit=crop')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight mb-4">Concierge Service</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Personalized watch acquisition for discerning collectors
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left: Description */}
            <div>
              <h2 className="text-3xl font-serif font-medium mb-6">White-Glove Watch Acquisition</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our concierge service offers a bespoke approach to watch collecting. Whether you're seeking a specific reference or building a collection, our team of experts will guide you through every step of the journey.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From sourcing rare timepieces to providing market insights, our concierge team is dedicated to making your watch acquisition seamless and rewarding.
              </p>

              <h3 className="text-xl font-medium mb-4">Concierge Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-serif font-medium mb-6">Request Concierge Service</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="watchInterest">What watch are you looking for?</Label>
                  <Input id="watchInterest" placeholder="e.g. Rolex Daytona, Patek Philippe Nautilus" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range (Optional)</Label>
                  <Input id="budget" placeholder="e.g. $10,000 - $50,000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Tell us about your collecting interests, timeline, or specific requirements..."
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-base">
                  Submit Request
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  A concierge specialist will contact you within 24 hours
                </p>
              </form>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-secondary/30 border border-border rounded-lg p-10 text-center">
            <blockquote className="text-lg italic text-foreground/90 max-w-3xl mx-auto mb-4">
              "The concierge team helped me locate a rare vintage Patek Philippe I had been searching for years. Their expertise and dedication made the entire process effortless."
            </blockquote>
            <p className="text-sm text-muted-foreground">— Michael R., Collector</p>
          </div>
        </div>
      </div>
    </div>
  )
}
