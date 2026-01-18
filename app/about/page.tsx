import Image from "next/image"

export default function AboutPage() {
    return (
        <main className="flex-1 bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#0f0f0f]/20 z-10" />
                <div className="container relative z-20 text-center px-4">
                    <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-foreground mb-6">Our Story</h1>
                    <p className="text-lg lg:text-xl font-light tracking-wide max-w-2xl mx-auto text-foreground/80">
                        Dedicated to the art of horology and the pursuit of timeless excellence.
                    </p>
                </div>
            </section>

            {/* Narrative Section */}
            <section className="py-20 lg:py-32 border-b border-border">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl lg:text-4xl font-light tracking-tight">Curated Excellence</h2>
                            <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground">
                                <p>
                                    At Ademato, we believe that a fine timepiece is more than just an instrument to tell time—it is a piece of history, a work of engineering art, and a legacy to be cherished.
                                </p>
                                <p>
                                    Founded by enthusiasts for enthusiasts, our mission is to provide a transparent, trusted, and premium platform for buying, selling, and trading the world's most desired watches.
                                </p>
                                <p>
                                    Every watch in our collection undergoes a rigorous multi-point inspection and authentication process by our in-house master watchmakers, ensuring that you can collect with absolute confidence.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-square lg:aspect-[4/5] bg-secondary/20">
                            {/* Placeholder for About Image - referencing an existing image in public if possible, or using color block */}
                            <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center text-muted-foreground font-light tracking-widest">
                                [Showroom Image]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 lg:py-32 bg-secondary/10">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-4">Our Core Values</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium tracking-wide">Authenticity</h3>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                We guarantee the authenticity of every timepiece we sell. Our reputation is built on trust and transparency.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium tracking-wide">Expertise</h3>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                Our team comprises veteran watchmakers and market analysts with decades of combined experience.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium tracking-wide">Service</h3>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                We provide a white-glove experience for every client, from the first inquiry to the final delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
