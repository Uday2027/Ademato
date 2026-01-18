import { Shield, Truck, Headphones } from "lucide-react"

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
  return (
    <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {trustItems.map((item) => (
            <div key={item.title} className="text-center">
              <item.icon className="h-10 w-10 mx-auto mb-4 opacity-80" strokeWidth={1.5} />
              <h3 className="text-lg lg:text-xl font-medium tracking-wide mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/70 font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
