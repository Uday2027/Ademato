export default function WarrantyPage() {
    return (
        <main className="flex-1 bg-background pt-24 pb-16 min-h-[60vh]">
            <div className="mx-auto max-w-3xl px-4">
                <div className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">Warranty Coverage</h1>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                        Every timepiece we sell is backed by the Ademato 2-Year Mechanical Warranty, giving you total peace of mind.
                    </p>
                </div>

                <div className="space-y-12 text-foreground/80 font-light leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-light tracking-tight text-foreground">Ademato 2-Year Warranty</h2>
                        <p>
                            We stand behind the quality and authenticity of our inventory. Ademato provides a comprehensive 2-year warranty on the movement and mechanical function of all pre-owned watches sold.
                        </p>
                        <p>
                            If a mechanical defect arises within two years of purchase date, we will repair it free of charge through our network of expert watchmakers.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-light tracking-tight text-foreground">What Is Covered?</h2>
                        <ul className="list-disc pl-5 space-y-2 marker:text-muted-foreground">
                            <li>Mechanical failure of the movement.</li>
                            <li>Issues with timekeeping accuracy beyond manufacturer specs.</li>
                            <li>manufacturing defects in function.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-light tracking-tight text-foreground">What Is Not Covered?</h2>
                        <p>
                            Our warranty does not cover damages resulting from:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-muted-foreground">
                            <li>Accidental damage (drops, impacts, shocks).</li>
                            <li>Water damage (unless the watch was explicitly pressure tested by us and failed under normal conditions).</li>
                            <li>Normal wear and tear (scratches on case, bracelet, crystal).</li>
                            <li>Unauthorized repairs or modifications by third parties.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-light tracking-tight text-foreground">Factory Warranty</h2>
                        <p>
                            Many of our modern timepieces still carry the balance of their original manufacturer's warranty (e.g., Rolex 5-year warranty).
                            In such cases, the manufacturer's warranty takes precedence, and we will assist you in utilizing it if service is needed.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
