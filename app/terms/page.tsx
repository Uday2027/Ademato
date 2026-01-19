"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowLeft, ShieldCheck, Scale, FileText, Lock } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 })

  const sections = [
    {
      title: "1. Membership & Eligibility",
      icon: ShieldCheck,
      content: "Ademato offers an exclusive platform for horological enthusiasts. Membership is open to individuals over 18 who are passionate about authentic luxury timepieces. We reserve the right to refuse service to anyone for any reason at any time."
    },
    {
      title: "2. Authenticity Guarantee",
      icon: Scale,
      content: "Every timepiece listed on Ademato undergoes a rigorous multi-point inspection by our master watchmakers. We guarantee the authenticity of every watch we sell. If a timepiece is found to be non-authentic by an authorized manufacturer service center, we offer a full refund."
    },
    {
      title: "3. Purchase & Payments",
      icon: FileText,
      content: "All prices are listed in USD. We accept bank wire transfers, major credit cards, and cryptocurrency for select transactions. Title to the timepiece passes to the buyer only upon receipt of cleared funds in full."
    },
    {
      title: "4. Shipping & Insurance",
      icon: Lock,
      content: "All shipments are sent via fully insured, overnight express courier (FedEx or DHL). A signature by an adult over 21 is required for all deliveries. Shipping costs and applicable taxes/duties are the responsibility of the buyer unless otherwise stated."
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
            Terms of Service
          </h1>
          <p 
            className="text-[var(--luxury-bronze)] tracking-[0.3em] uppercase text-xs mb-8"
          >
            Last Updated: January 2024
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
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light italic">
                By using our platform, you acknowledge that you have read and agree to be bound by these Terms of Service. Ademato reserves the right to update these terms at any time.
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
