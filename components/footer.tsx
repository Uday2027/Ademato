import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { name: "Shop All Watches", href: "/shop" },
      { name: "Sell Your Watch", href: "/sell" },
      { name: "Trade-In", href: "/trade" },
      { name: "Concierge", href: "/concierge" },
      { name: "Watch Sourcing", href: "/sourcing" },
    ],
  },
  about: {
    title: "About",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Authenticity", href: "/authenticity" },
      { name: "Press", href: "/press" },
      { name: "Careers", href: "/careers" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/faq" },
      { name: "Shipping", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "Warranty", href: "/warranty" },
    ],
  },
}

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
]

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--luxury-bronze-dark)]/20 to-transparent pointer-events-none" />
      
      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Newsletter */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-serif font-light tracking-tight mb-4">Elevate Your Collection</h2>
            <p className="text-primary-foreground/60 font-light mb-8 max-w-md leading-relaxed tracking-wide">
              Join our exclusive circle for private offers, new arrivals, and expert market insights.
            </p>
            <form className="flex gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-1"
              />
              <Button
                type="submit"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 tracking-widest px-6"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Right: Links */}
          <div className="grid sm:grid-cols-3 gap-8">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 
                  className="text-xs tracking-[0.2em] font-medium mb-6 uppercase"
                  style={{ color: 'var(--luxury-gold)' }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="text-xl tracking-[0.3em] font-serif font-light">
              ADEMATO
            </Link>

            {/* Social */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-primary-foreground/50 font-light">
              © {new Date().getFullYear()} Ademato. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
