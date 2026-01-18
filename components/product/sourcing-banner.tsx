import { Button } from "@/components/ui/button"

export function SourcingBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-secondary text-primary-foreground py-20 px-4 md:px-8 mt-16 rounded-xl">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1623835694297-71b9c9f4d7b3?q=80&w=2669&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        
        {/* Abstract Watch Elements (Visual Flair) */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 opacity-90 hidden lg:block">
            <img src="/placeholder.svg" alt="" className="w-full h-full object-contain mix-blend-overlay" style={{filter: 'brightness(10)'}}/> 
            {/* Ideally this would be a high-qual asset like in the screenshot (Rolex/Hublot faces) */}
        </div>
         <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 opacity-90 hidden lg:block">
            <img src="/placeholder.svg" alt="" className="w-full h-full object-contain mix-blend-overlay" style={{filter: 'brightness(10)'}}/>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">
          We can Source you any Watch!
        </h2>
        <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-2xl">
          If our current inventory doesn't capture your heart, rest assured that we specialize in sourcing any watch you desire. Each watch is meticulously inspected before being swiftly delivered to your doorstep or made available for collection at our Boca Raton showroom.
        </p>
        <Button 
            className="h-12 px-8 bg-black text-white hover:bg-black/80 border border-white/20"
        >
          Inquire Now
        </Button>
      </div>
    </div>
  )
}
