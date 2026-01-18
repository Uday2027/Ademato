import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const steps = [
  {
    number: "01",
    title: "Submit Your Request",
    description: "Tell us about the timepiece you're looking for - brand, model, specifications, and budget."
  },
  {
    number: "02",
    title: "Expert Search",
    description: "Our global network and industry connections go to work finding your perfect watch."
  },
  {
    number: "03",
    title: "Authentication & Review",
    description: "Each watch is thoroughly authenticated and vetted by our expert team."
  },
  {
    number: "04",
    title: "Delivery & Enjoyment",
    description: "Receive your timepiece with full documentation, warranty, and our guarantee."
  }
]

export default function SourcingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] bg-secondary flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2670&auto=format&fit=crop')",
            filter: "brightness(0.5)"
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight mb-6">
              We Can Source Any Watch
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              If our current inventory doesn't capture your heart, rest assured that we specialize in sourcing any watch you desire.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our streamlined process makes finding your dream watch simple and secure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground text-2xl font-serif font-medium mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Request Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-serif font-medium mb-6">Request a Watch</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're looking for a modern icon or a vintage grail, our sourcing specialists have the expertise and connections to find it.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium text-foreground">Global Network</p>
                    <p className="text-muted-foreground">Access to authorized dealers and trusted sellers worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium text-foreground">Guaranteed Authenticity</p>
                    <p className="text-muted-foreground">Every watch is rigorously authenticated by our experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium text-foreground">No Obligation</p>
                    <p className="text-muted-foreground">Free sourcing service with no commitment required</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
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
                  <Label htmlFor="brand">Brand</Label>
                  <Input id="brand" placeholder="e.g. Rolex, Patek Philippe" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="model">Model / Reference</Label>
                  <Input id="model" placeholder="e.g. Submariner 126610LN" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget (Optional)</Label>
                  <Input id="budget" placeholder="e.g. $15,000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Details</Label>
                  <Textarea 
                    id="notes" 
                    rows={4}
                    placeholder="Condition preferences, specific year, box & papers requirements, etc."
                  />
                </div>

                <Button type="submit" className="w-full h-12">
                  Submit Sourcing Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
