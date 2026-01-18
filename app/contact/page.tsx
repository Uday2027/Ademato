"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex-1 bg-background pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-8">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground font-light mb-12 max-w-md">
              Whether you are looking to buy, sell, or trade, our team of
              experts is here to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin className="h-6 w-6 text-foreground/70" />
                </div>
                <div>
                  <h3 className="font-medium tracking-wide mb-1">
                    Visit Our Showroom
                  </h3>
                  <p className="text-muted-foreground font-light">
                    123 Luxury Lane, Suite 100
                    <br />
                    Beverly Hills, CA 90210
                    <br />
                    <span className="text-xs uppercase tracking-widest text-muted-foreground/70 mt-2 block">
                      By Appointment Only
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail className="h-6 w-6 text-foreground/70" />
                </div>
                <div>
                  <h3 className="font-medium tracking-wide mb-1">Email Us</h3>
                  <p className="text-muted-foreground font-light">
                    concierge@ademato.com
                    <br />
                    sales@ademato.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone className="h-6 w-6 text-foreground/70" />
                </div>
                <div>
                  <h3 className="font-medium tracking-wide mb-1">Call Us</h3>
                  <p className="text-muted-foreground font-light">
                    +1 (800) 555-0123
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary/20 p-8 lg:p-12 rounded-sm border border-border/50">
            <h2 className="text-2xl font-light tracking-tight mb-8">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium tracking-wide"
                  >
                    First Name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="Enter Your First Name"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium tracking-wide"
                  >
                    Last Name
                  </label>
                  <Input
                    id="last-name"
                    placeholder="Enter Your Last Name"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium tracking-wide"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium tracking-wide"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option>General Inquiry</option>
                  <option>Sell Your Watch</option>
                  <option>Sourcing Request</option>
                  <option>Service & Repair</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium tracking-wide"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter Your Message"
                  className="min-h-[150px] bg-background border-border"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full tracking-widest"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
