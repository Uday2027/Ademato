"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductTabsProps {
  description: string
  specs: Record<string, string>
}

export function ProductTabs({ description, specs }: ProductTabsProps) {
  return (
    <Tabs defaultValue="description" className="w-full">
      <div className="border-b border-border">
        <TabsList className="h-auto p-0 bg-transparent gap-8">
          <TabsTrigger
            value="description"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-0 py-4 text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-none"
          >
            Product description
          </TabsTrigger>
          <TabsTrigger
            value="returns"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-0 py-4 text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-none"
          >
            Returns & Exchanges
          </TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="description" className="pt-8 animate-in fade-in slide-in-from-top-2 duration-500">
        <div className="space-y-6 text-sm text-foreground/80 leading-relaxed">
           <div className="grid gap-4">
             {Object.entries(specs).map(([key, value]) => (
                 <div key={key} className="grid grid-cols-[150px_1fr] gap-4">
                     <span className="font-medium text-foreground">{key}:</span>
                     <span>{value}</span>
                 </div>
             ))}
           </div>
           
           <div className="flex flex-col gap-2 mt-6 p-4 bg-secondary/30 border border-border rounded-md">
                <p className="font-medium text-foreground">Have questions about this timepiece?</p>
                <p>Contact our concierge team for a detailed walkthrough or video consultation.</p>
           </div>
        </div>
      </TabsContent>
      
      <TabsContent value="returns" className="pt-8 animate-in fade-in slide-in-from-top-2 duration-500">
        <div className="space-y-4 text-sm text-foreground/80 leading-relaxed max-w-2xl">
          <p>
            We want you to be completely satisfied with your purchase. If for any reason you are not happy with your new timepiece, you may return it within 7 days of receipt for a full refund or exchange.
          </p>
          <p>
            Please check that the watch is in the same condition as when it was shipped, with all stickers and tags intact.
          </p>
          <ul className="list-disc pl-5 space-y-2 pt-2">
            <li>Returns must be initiated within 7 days of delivery.</li>
            <li>Items must be unworn, unaltered, and with original tags/stickers.</li>
            <li>Original packaging and warranty cards must be included.</li>
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  )
}
