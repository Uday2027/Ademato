"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowLeft, UserCheck, Eye, Database, Globe } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 })

  const sections = [
    {
      title: "Data Stewardship",
      icon: UserCheck,
      content: "At Ademato, your privacy is as valuable as the timepieces we curate. We act as stewards of your personal information, ensuring it is handled with the highest level of discretion and security."
    },
    {
      title: "Information Collection",
      icon: Database,
      content: "We collect only the essential information required to facilitate elite horological transactions: name, contact details, and transaction history. We do not sell or lease your data to third parties."
    },
    {
      title: "Transparency & Insight",
      icon: Eye,
      content: "We utilize advanced analytics to provide a more personalized experience, such as tailoed recommendations based on your collection preferences. You maintain full rights to access and manage your data."
    },
    {
      title: "Global Standards",
      icon: Globe,
      content: "As a global platform, we adhere to international data protection standards. Your information is encrypted using industry-leading protocols and stored on secure, monitored servers."
    }
  ]

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="mx-auto max-w-4xl px-4">
        {/* Navigation */}
        <div className="mb-12">
            <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm tracking-widest text-muted-foreground hover:text-[var(--luxury-gold)] transition-colors group"
            >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                BACK TO HOME
            </Link>
        </div>

        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="text-4xl lg:text-6xl font-serif font-light tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p 
            className="text-[var(--luxury-bronze)] tracking-[0.3em] uppercase text-xs mb-8"
          >
            Our Commitment to Discretion
          </p>
          <div className="max-w-xs mx-auto h-[1px] bg-gradient-to-r from-transparent via-[var(--luxury-gold)] to-transparent" />
        </div>

        {/* Content */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <PolicySection key={index} section={section} index={index} />
          ))}
        </div>

        {/* Final Statement */}
        <div className="mt-24 pt-12 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
                If you have questions regarding our privacy practices, please reach out to our Concierge team. Your trust is our most significant asset.
            </p>
        </div>
      </div>
    </main>
  )
}

function PolicySection({ section, index }: { section: any, index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const Icon = section.icon

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-secondary/50 rounded-full text-[var(--luxury-gold)]">
            <Icon className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-serif font-light tracking-wide">{section.title}</h2>
      </div>
      <p className="text-foreground/80 leading-relaxed font-light text-lg pl-16">
        {section.content}
      </p>
    </div>
  )
}
