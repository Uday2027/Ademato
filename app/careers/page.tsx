import { Button } from "@/components/ui/button"
import { MapPin, Clock, Heart } from "lucide-react"
import Link from "next/link"

const positions = [
  {
    title: "Senior Watch Specialist",
    department: "Sales",
    location: "New York, NY",
    type: "Full-time",
    description: "We're seeking an experienced watch specialist with deep knowledge of luxury timepieces and exceptional client service skills."
  },
  {
    title: "Watchmaker / Technician",
    department: "Service",
    location: "Los Angeles, CA",
    type: "Full-time",
    description: "Certified watchmaker needed for authentication, servicing, and restoration of luxury timepieces."
  },
  {
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Lead our digital marketing efforts across social media, email, and paid advertising channels."
  },
  {
    title: "Client Concierge",
    department: "Customer Service",
    location: "Miami, FL",
    type: "Full-time",
    description: "Provide world-class concierge service to our VIP clientele, assisting with acquisitions and inquiries."
  }
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible schedule and generous PTO policy"
  },
  {
    icon: MapPin,
    title: "Beautiful Office",
    description: "Modern workspace in prime locations"
  }
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-medium tracking-tight mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build your career with a leading luxury watch dealer
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Culture Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-medium mb-6">Our Culture</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Ademato, we're passionate about luxury timepieces and providing exceptional service to collectors worldwide. Our team is made up of watch enthusiasts, industry veterans, and creative professionals who share a love for horology.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We foster a collaborative environment where expertise is valued, innovation is encouraged, and every team member plays a vital role in our success.
                </p>
              </div>
              <div 
                className="h-96 bg-secondary rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop')"
                }}
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-medium text-center mb-12">Benefits & Perks</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <h2 className="text-3xl font-serif font-medium mb-8">Open Positions</h2>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-medium mb-1">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <Link href={`/careers/${index + 1}`}>
                      <Button variant="outline">
                        View Details
                      </Button>
                    </Link>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {position.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-secondary/30 border border-border rounded-lg p-10">
            <h3 className="text-2xl font-serif font-medium mb-4">Don't see a perfect fit?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a href="mailto:careers@ademato.com">
              <Button size="lg">
                Send General Application
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
