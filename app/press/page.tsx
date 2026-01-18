import { ExternalLink } from "lucide-react"
import Link from "next/link"

const pressFeatures = [
  {
    outlet: "Financial Times",
    title: "The Rise of Pre-Owned Luxury Watches",
    date: "January 2026",
    url: "#"
  },
  {
    outlet: "Bloomberg",
    title: "Watch Market Trends: Investment-Grade Timepieces",
    date: "December 2025",
    url: "#"
  },
  {
    outlet: "GQ Magazine",
    title: "Where Collectors Turn for Rare Watches",
    date: "November 2025",
    url: "#"
  },
  {
    outlet: "Forbes",
    title: "The New Generation of Watch Dealers",
    date: "October 2025",
    url: "#"
  }
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-serif font-medium tracking-tight mb-4">Press & Media</h1>
            <p className="text-xl text-muted-foreground">
              Ademato in the news and media coverage
            </p>
          </div>

          {/* Press Features */}
          <div className="space-y-6 mb-20">
            <h2 className="text-2xl font-serif font-medium mb-8">Featured Articles</h2>
            {pressFeatures.map((feature, index) => (
              <Link 
                key={index} 
                href={feature.url}
                className="block bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-accent font-medium mb-2">{feature.outlet}</p>
                    <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{feature.date}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>

          {/* Press Kit */}
          <div className="bg-secondary/30 border border-border rounded-lg p-10">
            <h2 className="text-2xl font-serif font-medium mb-4">Press Kit</h2>
            <p className="text-muted-foreground mb-6">
              Download our press kit for high-resolution logos, brand assets, and company information.
            </p>
            <button className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-md hover:bg-foreground/90 transition-colors">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Press Kit
            </button>
          </div>

          {/* Media Contact */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-serif font-medium mb-4">Media Inquiries</h2>
            <p className="text-muted-foreground mb-2">
              For press inquiries, interviews, or collaboration opportunities
            </p>
            <a href="mailto:press@ademato.com" className="text-accent hover:underline text-lg">
              press@ademato.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
