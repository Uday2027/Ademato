export default function ReturnsPage() {
    return (
        <main className="flex-1 bg-background pt-24 pb-16 min-h-[60vh]">
            <div className="mx-auto max-w-3xl px-4">
                <div className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">Returns & Refunds</h1>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                        We want you to be completely delighted with your purchase. If you are not satisfied, we are here to help.
                    </p>
                </div>

                <div className="space-y-12 text-foreground/80 font-light leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-light tracking-tight text-foreground">7-Day Inspection Period</h2>
                        <p>
                            We offer a 7-day inspection period on all online purchases. You have 7 days from the date of delivery to request a return if you are not 100% satisfied with your timepiece.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-light tracking-tight text-foreground">Return Conditions</h2>
                        <p>
                            To be eligible for a full refund, the watch must be returned in the exact same condition as it was sold, with all stickers, tags, and protective plastics intact.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-muted-foreground">
                            <li>The watch must be unworn and unaltered.</li>
                            <li>All original boxes, papers, books, and accessories must be included.</li>
                            <li>Returns showing signs of wear, damage, or alteration will be rejected or subject to a restocking fee.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-light tracking-tight text-foreground">How to Start a Return</h2>
                        <ol className="list-decimal pl-5 space-y-2 marker:text-muted-foreground">
                            <li>Contact our concierge team at <span className="text-foreground border-b border-muted-foreground">returns@ademato.com</span> within the 7-day window.</li>
                            <li>We will provide a fully insured prepaid shipping label.</li>
                            <li>Pack the watch securely using the original packaging materials.</li>
                            <li>Drop off the package at a staffed FedEx location.</li>
                        </ol>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-light tracking-tight text-foreground">Refund Processing</h2>
                        <p>
                            Once your return is received and inspected by our watchmakers (typically within 24-48 hours), your refund will be processed to the original payment method. Please allow 3-5 business days for the funds to appear in your account depending on your bank.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
