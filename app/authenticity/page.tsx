import { Check, Shield } from "lucide-react"

const authenticityProcess = [
  {
    title: "Physical Inspection",
    description: "Comprehensive examination of case, bracelet, dial, and movement using specialized tools and magnification."
  },
  {
    title: "Dial Verification",
    description: "Scrutiny of dial printing, markers, hands, and luminous material for period-correctness and authenticity."
  },
  {
    title: "Movement Authentication",
    description: "Analysis of caliber specifications, finishing quality, and manufacturer's signatures."
  },
  {
    title: "Serial Number Validation",
    description: "Cross-reference of case and movement serial numbers with manufacturer databases."
  },
  {
    title: "Material Testing",
    description: "Verification of precious metals and original components using non-destructive testing methods."
  },
  {
    title: "Documentation Review",
    description: "Authentication of accompanying papers, warranty cards, and service records."
  }
]

const guarantees = [
  "100% authentic timepieces guaranteed",
  "Multi-point inspection process",
  "Expert watchmaker verification",
  "Lifetime authenticity guarantee",
  "Full money-back protection",
  "Certificate of authenticity included"
]

export default function AuthenticityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h1 className="text-5xl font-serif font-medium tracking-tight mb-4">Authenticity Guarantee</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every timepiece undergoes rigorous authentication by our expert team
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl font-serif font-medium mb-6">Our Commitment to Authenticity</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In a market where counterfeit watches have become increasingly sophisticated, we maintain the highest standards of authentication to ensure every timepiece in our collection is 100% genuine.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of certified watchmakers and authentication specialists brings decades of combined experience in luxury watch authentication.
            </p>
          </div>

          {/* Authentication Process */}
          <div className="mb-20">
            <h3 className="text-2xl font-serif font-medium text-center mb-12">Our Authentication Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authenticityProcess.map((step, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                      {index + 1}
                    </div>
                    <h4 className="font-medium">{step.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantees */}
          <div className="bg-secondary/30 border border-border rounded-lg p-12">
            <h3 className="text-2xl font-serif font-medium text-center mb-8">What We Guarantee</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-serif font-medium mb-4">Expert Team</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our authentication team consists of certified watchmakers, former brand representatives, and industry veterans with a collective 50+ years of experience in luxury watch authentication and restoration.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
