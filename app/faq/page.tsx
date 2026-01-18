export default function FAQPage() {
    const faqs = [
        {
            category: "Ordering & Shipping",
            items: [
                {
                    q: "Do you ship internationally?",
                    a: "Yes, we ship worldwide via fully insured, expedited shipping. International buyers are responsible for any customs duties or taxes."
                },
                {
                    q: "How long does shipping take?",
                    a: "Domestic orders typically arrive within 1-2 business days. International shipments may take 3-5 business days, depending on customs clearance."
                }
            ]
        },
        {
            category: "Authenticity & Warranty",
            items: [
                {
                    q: "Are the watches authentic?",
                    a: "Absolutely. Every watch comes with a lifetime authenticity guarantee. We rigorously inspect every piece before it is listed."
                },
                {
                    q: "Do you offer a warranty?",
                    a: "Yes, all our pre-owned watches come with a 2-year Ademato mechanical warranty, covering any internal defects."
                }
            ]
        },
        {
            category: "Selling & Trading",
            items: [
                {
                    q: "Can I trade in my watch?",
                    a: "Yes, we offer competitive trade-in values. Please submit a quote request via our 'Sell Your Watch' page."
                },
                {
                    q: "How do you determine the value of my watch?",
                    a: "Our valuations are based on current market trends, the condition of your watch, and the presence of original box and papers."
                }
            ]
        }
    ]

    return (
        <main className="flex-1 bg-background pt-24 pb-16 min-h-[60vh]">
            <div className="mx-auto max-w-7xl px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">Frequently Asked Questions</h1>
                    <p className="text-lg text-muted-foreground font-light">
                        Everything you need to know about buying, selling, and trading with Ademato.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-12">
                    <div className="hidden md:block md:col-span-3 lg:col-span-3">
                        <div className="sticky top-32 space-y-2 border-l border-border pl-4">
                            <p className="font-medium text-foreground tracking-wide mb-4">Categories</p>
                            {faqs.map((f, i) => (
                                <a key={i} href={`#faq-${i}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    {f.category}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-9 lg:col-span-8 space-y-16">
                        {faqs.map((section, idx) => (
                            <div key={idx} id={`faq-${idx}`} className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-light tracking-tight border-b border-border pb-4">{section.category}</h2>
                                <div className="space-y-4">
                                    {section.items.map((item, i) => (
                                        <details key={i} className="group border border-border/50 rounded-sm bg-secondary/10 open:bg-secondary/20 transition-colors">
                                            <summary className="flex cursor-pointer items-center justify-between p-6 font-medium tracking-wide">
                                                {item.q}
                                                <span className="ml-4 flex-shrink-0 transition-transform group-open:rotate-180">
                                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <div className="px-6 pb-6 text-muted-foreground font-light leading-relaxed">
                                                {item.a}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
