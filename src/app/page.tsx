"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import { SolutionsSection } from "@/components/sections/solutions-section";
import { AboutSection } from "@/components/sections/about-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { SecurityHero } from "@/components/security-hero";
import MouseGradient from "@/components/ui/mouse-gradient";
import { BGPattern } from "@/components/ui/bg-pattern";

export default function Home() {
  // Reference for scroll animations
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track scroll position for parallax effects
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll events for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={scrollRef} className="min-h-screen flex flex-col">
      <BGPattern variant="grid" mask="fade-edges" />
      <MouseGradient />

      <Header />

      <main className="flex-1 overflow-auto">
        <SecurityHero />
        <SolutionsSection />
        <AboutSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
