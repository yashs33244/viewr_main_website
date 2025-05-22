"use client";

import Link from "next/link";
import { BeamButton } from "@/components/ui/beam-button";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="pt-24 pb-8 border-t border-viewr-deep-purple/20 relative bg-noise">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[200px] opacity-10 pulse-gradient">
          <div className="w-full h-full bg-gradient-radial from-viewr-purple/30 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center group">
              <div className="relative">
                {/* Logo */}
                <span className="text-3xl font-bold bg-gradient-to-r from-viewr-blue to-viewr-purple-light bg-clip-text text-transparent group-hover:animate-gradient-x">
                  VIEWR
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Leading provider of advanced security solutions for businesses and homes.
            </p>
            <div className="flex space-x-4 text-muted-foreground">
              <Link
                href="#"
                className="hover:text-viewr-purple-light transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-viewr-purple-light transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-viewr-purple-light transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-viewr-purple-light transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-6 text-lg text-white">Quick Links</h3>
            <ul className="space-y-4">
              <FooterLink href="#products">Products</FooterLink>
              <FooterLink href="#solutions">Solutions</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-6 text-lg text-white">Contact Us</h3>
            <ul className="space-y-5">
              <li>
                <Link
                  href="mailto:help@viewr.in"
                  className="text-muted-foreground hover:text-viewr-purple-light transition-colors flex items-center gap-2 group"
                >
                  <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center group-hover:bg-viewr-deep-purple/50 transition-colors">
                    <MailIcon className="w-4 h-4 text-viewr-purple-light" />
                  </div>
                  <span className="text-sm">help@viewr.in</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+919891367183"
                  className="text-muted-foreground hover:text-viewr-purple-light transition-colors flex items-center gap-2 group"
                >
                  <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center group-hover:bg-viewr-deep-purple/50 transition-colors">
                    <PhoneIcon className="w-4 h-4 text-viewr-purple-light" />
                  </div>
                  <span className="text-sm">+91 98913 67183</span>
                </Link>
              </li>
              <li className="text-muted-foreground flex items-start gap-2 group">
                <div className="w-8 h-8 rounded-full bg-viewr-deep-purple/30 flex items-center justify-center shrink-0 mt-1">
                  <MapPinIcon className="w-4 h-4 text-viewr-purple-light" />
                </div>
                <span className="text-sm">
                  Tower 4, DLF CORPORATE GREENS, 2114-17, Sector 74A, Gurugram, Haryana 122004
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-6 text-lg text-white">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest security updates and news.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black/40 border border-viewr-deep-purple/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-viewr-purple placeholder:text-gray-500"
                />
                <div className="absolute inset-0 rounded-lg beam-border pointer-events-none"></div>
              </div>
              <BeamButton
                variant="purple"
                className="w-full"
              >
                Subscribe
              </BeamButton>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-viewr-deep-purple/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Viewr. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-viewr-purple-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-viewr-purple-light transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-muted-foreground hover:text-viewr-purple-light transition-colors"
      >
        {children}
      </Link>
    </li>
  )
}

// Icons
function FacebookIcon({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  )
}

function TwitterIcon({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  )
}

function LinkedInIcon({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  )
}

function InstagramIcon({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  )
}

function MailIcon({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  )
}

function PhoneIcon({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  )
}

function MapPinIcon({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  )
}
