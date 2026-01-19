"use client"

import { Shield, Truck, Headphones } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const trustItems = [
  {
    icon: Shield,
    title: "Lifetime Authenticity Guarantee",
    description: "Every watch verified by certified horologists",
  },
  {
    icon: Truck,
    title: "Insured Shipping Worldwide",
    description: "Fully insured delivery to your door",
  },
  {
    icon: Headphones,
    title: "Concierge Support 24/7",
    description: "Personal assistance whenever you need",
  },
]

export function TrustStrip() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section 
      ref={sectionRef}
      className={`relative py-20 lg:py-24 bg-primary text-primary-foreground overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--luxury-bronze)]/10 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {trustItems.map((item, index) => (
            <div 
              key={item.title} 
              className={`text-center transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <item.icon 
                className="h-12 w-12 mx-auto mb-6 animate-luxuryPulse" 
                style={{ color: 'var(--luxury-bronze)' }}
                strokeWidth={1.5} 
              />
              <h3 className="text-lg lg:text-xl font-medium tracking-wide mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/70 font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
