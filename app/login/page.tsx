"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function LoginPage() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12 relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,var(--luxury-gold)_0%,transparent_25%)] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,var(--luxury-bronze)_0%,transparent_20%)] opacity-[0.02] pointer-events-none" />

      <div 
        ref={ref}
        className={`w-full max-w-md transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-serif font-light tracking-tight mb-2">Welcome Back</h1>
          <p className="text-[var(--luxury-bronze)] uppercase tracking-[0.2em] text-[10px]">Exceptional Timepieces Await</p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-luxury p-10 lg:p-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[var(--luxury-gold)] to-transparent" />
          
          <form className="space-y-8">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                className="h-12 bg-background/50 border-border/50 focus:border-[var(--luxury-gold)] focus:ring-[var(--luxury-gold)]/20 transition-all duration-300"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">Password</Label>
                <Link href="/forgot-password" className="text-[10px] tracking-widest text-[var(--luxury-bronze)] hover:text-[var(--luxury-gold)] transition-colors uppercase">
                  Forgot?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="h-12 bg-background/50 border-border/50 focus:border-[var(--luxury-gold)] focus:ring-[var(--luxury-gold)]/20 transition-all duration-300"
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-border text-[var(--luxury-gold)] focus:ring-[var(--luxury-gold)]"
              />
              <label htmlFor="remember" className="text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer">
                Remember my signature
              </label>
            </div>

            <Button 
                type="submit" 
                className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 tracking-[0.3em] uppercase text-xs font-medium transition-all duration-500 hover:shadow-luxury-hover hover:scale-[1.02]"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-11">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google
              </Button>
              <Button variant="outline" className="h-11">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                GitHub
              </Button>
            </div>
          </div>

          <p className="text-center text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-10">
            Don't have an account?{" "}
            <Link href="/register" className="text-[var(--luxury-gold)] hover:underline font-bold">
              Join the Circle
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
