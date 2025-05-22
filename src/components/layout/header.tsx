"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BeamButton } from "@/components/ui/beam-button";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Menu, X, Calendar } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const prevScrollY = React.useRef(0);

  // Track scroll position to control header appearance
  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollingDown = latest > prevScrollY.current;

    if (latest > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    prevScrollY.current = latest;
  });

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      // Scroll to the section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-3">
      <motion.div
        className="w-full"
        animate={{
          width: scrolled ? "95%" : "98%",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
          duration: 0.1,
        }}
      >
        <motion.div
          className={`relative flex items-center justify-between py-3 px-6 w-full transition-all duration-300 ${
            scrolled
              ? "border-viewr-deep-purple/30 bg-black/80 backdrop-blur-md py-3 rounded-md beam-border"
              : "border-transparent bg-transparent py-5"
          }`}
        >
          {/* Logo */}
          <div
            className="flex items-center group relative z-10 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-viewr-blue to-viewr-purple-light bg-clip-text text-transparent group-hover:animate-gradient-x">
              VIEWR
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-viewr-blue transition-colors hover-glow px-2 py-1 cursor-pointer"
            >
              Home
            </div>
            <div
              onClick={() => scrollToSection("solutions")}
              className="text-foreground hover:text-viewr-blue transition-colors hover-glow px-2 py-1 cursor-pointer"
            >
              Solutions
            </div>
            <div
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-viewr-blue transition-colors hover-glow px-2 py-1 cursor-pointer"
            >
              About
            </div>
            <div
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-viewr-blue transition-colors hover-glow px-2 py-1 cursor-pointer"
            >
              Testimonials
            </div>
          </nav>

          {/* Desktop Schedule Button */}
          <div className="hidden md:flex items-center gap-2">
            <button>
              <CalendlyButton
                url="https://calendly.com/yash-viewr/30min"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 shadow-zinc-900 p-px text-sm font-semibold leading-6 text-white [&_span:nth-child(1)]:bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(139,92,246,0.6)_0%,rgba(139,92,246,0)_75%)] relative no-underline group cursor-pointer shadow-2xl [&_span:nth-child(3)]:bg-gradient-to-r [&_span:nth-child(3)]:from-fuchsia-400/0 [&_span:nth-child(3)]:via-fuchsia-400/90 [&_span:nth-child(3)]:to-fuchsia-400/0"
              >
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full ring-1 bg-zinc-950 ring-white/10 py-1.5 px-4">
                  <span>Schedule a Call</span>
                  <Calendar className="h-4 w-4" />
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] transition-opacity duration-500 group-hover:opacity-40" />
              </CalendlyButton>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 glass-card rounded-xl p-4 md:hidden w-[calc(100%-2rem)] mx-auto beam-border"
          >
            <div className="flex flex-col space-y-4">
              <div
                onClick={() => scrollToSection("hero")}
                className="text-left text-foreground hover:text-viewr-blue transition-colors py-2 px-3 rounded-md hover:bg-black/20 cursor-pointer"
              >
                Home
              </div>
              <div
                onClick={() => scrollToSection("solutions")}
                className="text-left text-foreground hover:text-viewr-blue transition-colors py-2 px-3 rounded-md hover:bg-black/20 cursor-pointer"
              >
                Solutions
              </div>
              <div
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-viewr-blue transition-colors py-2 px-3 rounded-md hover:bg-black/20 cursor-pointer"
              >
                About
              </div>
              <div
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-foreground hover:text-viewr-blue transition-colors py-2 px-3 rounded-md hover:bg-black/20 cursor-pointer"
              >
                Testimonials
              </div>
              <div className="border-t border-viewr-deep-purple/20 pt-4 mt-2">
                <CalendlyButton
                  url="https://calendly.com/yash-viewr/30min"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 shadow-zinc-900 p-px text-sm font-semibold leading-6 text-white [&_span:nth-child(1)]:bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(139,92,246,0.6)_0%,rgba(139,92,246,0)_75%)] relative no-underline group cursor-pointer shadow-2xl [&_span:nth-child(3)]:bg-gradient-to-r [&_span:nth-child(3)]:from-fuchsia-400/0 [&_span:nth-child(3)]:via-fuchsia-400/90 [&_span:nth-child(3)]:to-fuchsia-400/0"
                >
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full ring-1 bg-zinc-950 ring-white/10 py-1.5 px-4">
                    <span>Schedule a Call</span>
                    <Calendar className="h-4 w-4" />
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] transition-opacity duration-500 group-hover:opacity-40" />
                </CalendlyButton>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </header>
  );
}
