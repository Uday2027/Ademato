"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { X } from "lucide-react"
import Link from "next/link"

// Mock cart data
const INITIAL_CART_ITEMS = [
  {
    id: 1,
    brand: "Rolex",
    model: "Submariner Date",
    ref: "126610LN",
    price: 14500,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=600&auto=format&fit=crop",
    quantity: 1
  },
  {
    id: 2,
    brand: "Omega",
    model: "Speedmaster Professional",
    ref: "310.30.42.50.01.001",
    price: 6800,
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=600&auto=format&fit=crop",
    quantity: 1
  }
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS)

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 0 // Free shipping
  const tax = subtotal * 0.08 // 8% tax estimate
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif font-medium tracking-tight mb-12">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 pb-6 border-b border-border">
                  <div className="w-32 h-32 flex-shrink-0 bg-secondary rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.brand} ${item.model}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <div>
                        <p className="text-xs text-muted-foreground tracking-widest uppercase">{item.brand}</p>
                        <h3 className="text-lg font-medium">{item.model}</h3>
                        <p className="text-sm text-muted-foreground">Ref. {item.ref}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4 border border-border rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-3 py-2 hover:bg-secondary transition-colors"
                        >
                          -
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-3 py-2 hover:bg-secondary transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-lg font-medium">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}

              <Link href="/shop">
                <Button variant="outline" size="lg" className="mt-6">
                  Continue Shopping
                </Button>
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-serif font-medium mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimated Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-between text-lg font-medium mb-6">
                  <span>Total</span>
                  <span>${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>

                <div className="space-y-3 mb-6">
                  <Input placeholder="Discount code" />
                  <Button variant="outline" className="w-full">
                    Apply
                  </Button>
                </div>

                <Link href="/checkout">
                  <Button className="w-full h-12 text-base">
                    Proceed to Checkout
                  </Button>
                </Link>

                <div className="mt-6 text-center">
                  <p className="text-xs text-muted-foreground">
                    Secure checkout powered by Stripe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
