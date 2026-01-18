"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { X, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"

export function CartDrawer({ children }: { children: React.ReactNode }) {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart()
  const hasItems = items.length > 0

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl font-serif">Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full pt-6">
          {hasItems ? (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto pr-2">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b border-border">
                      <div className="w-24 h-24 flex-shrink-0 bg-secondary rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt={`${item.brand} ${item.model}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground tracking-widest">{item.brand}</p>
                          <h4 className="font-medium">{item.model}</h4>
                          <p className="text-xs text-muted-foreground">Ref. {item.ref}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="font-medium">${item.price.toLocaleString()}</p>
                          <div className="flex items-center gap-3 text-sm">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="h-6 w-6 border border-border rounded hover:bg-secondary transition-colors"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="h-6 w-6 border border-border rounded hover:bg-secondary transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Footer */}
              <div className="border-t border-border pt-6 space-y-4 mt-auto">
                <div className="flex justify-between text-lg font-medium">
                  <span>Subtotal</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Shipping and taxes calculated at checkout
                </p>
                <div className="space-y-3">
                  <Link href="/cart" className="block">
                    <Button className="w-full h-12" variant="outline">
                      View Cart
                    </Button>
                  </Link>
                  <Link href="/checkout">
                    <Button className="w-full h-12">
                      Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <h3 className="text-xl font-serif font-medium mb-2">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Add some beautiful timepieces to your cart
              </p>
              <Link href="/shop">
                <Button>
                  Continue Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
