"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartDrawer } from "@/components/cart-drawer";
import { useCart } from "@/lib/cart-context";

const navItems = [
  { name: "Shop", href: "/shop" },
  { name: "Sell", href: "/sell" },
  { name: "Trade", href: "/trade" },
  { name: "Concierge", href: "/concierge" },
  { name: "Sold Archive", href: "/archive" },
  // { name: "Journal", href: "/journal" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Main Header */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-background">
                <nav className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-xl font-light tracking-wide hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-3xl lg:text-4xl font-bold tracking-wide text-foreground font-[family-name:var(--font-caveat)]">
                Ademato
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm tracking-widest font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-1 lg:gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-foreground/80 hover:text-foreground"
              >
                {isSearchOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
                <span className="sr-only">Search</span>
              </Button>
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden sm:inline-flex text-foreground/80 hover:text-foreground"
                >
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </Link>
              <Link href="/wishlist">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground/80 hover:text-foreground"
                >
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Wishlist</span>
                </Button>
              </Link>
              <CartDrawer>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-foreground/80 hover:text-foreground"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-medium text-accent-foreground flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                  <span className="sr-only">Cart</span>
                </Button>
              </CartDrawer>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-border py-4 px-4 animate-in slide-in-from-top-2">
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for Rolex, Patek Philippe, Audemars Piguet..."
                  className="w-full bg-secondary border-0 py-3 pl-12 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
