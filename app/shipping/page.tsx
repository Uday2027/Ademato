export default function ShippingPage() {
    return (
        <main className="flex-1 bg-background pt-24 pb-16 min-h-[60vh]">
            <div className="mx-auto max-w-3xl px-4">
                <div className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">Shipping Policy</h1>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                        We are committed to delivering your timepiece safely and securely, anywhere in the world.
                    </p>
                </div>

                <div className="space-y-12 text-foreground/80 font-light leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-light tracking-tight text-foreground">Domestic Shipping</h2>
                        <p>
                            We are pleased to offer complimentary FedEx Priority Overnight shipping on all watch orders within the United States.
                            All shipments are fully insured and require a signature upon delivery.
                        </p>
                        <p>
                            Orders placed before 2:00 PM EST are typically processed and shipped the same business day, pending identity verification and payment clearance.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-light tracking-tight text-foreground">International Shipping</h2>
                        <p>
                            We ship globally to most countries via FedEx International Priority. International shipping rates are calculated at checkout based on your destination.
                        </p>
                        <p className="bg-secondary/20 p-4 rounded-sm border border-border/50 text-sm">
                            <strong className="font-medium text-foreground block mb-1">Customs & Duties</strong>
                            Please note that international customers are responsible for any applicable customs duties, import taxes, or VAT levied by their local government.
                            Ademato does not declare items below value or as gifts.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-light tracking-tight text-foreground">Insurance & Safety</h2>
                        <p>
                            Every package we ship is fully insured for its full purchase value through a third-party specialized insurer (Parcel Pro/Ferrari Group).
                            In the extremely rare event that a package is lost in transit, you are fully covered.
                        </p>
                        <p>
                            For security reasons, we do not ship to P.O. Boxes. We recommend having your watch shipped to a business address or a FedEx Hold for Pickup location for maximum security.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
