"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { BeamButton } from "@/components/ui/beam-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CalendlyButton } from "../ui/calendly-button";
import { calendlyUrl } from "../security-hero";

export function TestimonialsSection() {
  // We'll use state to track the active testimonial for animation
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-28 relative bg-noise">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[200px] opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-viewr-purple/20 via-viewr-blue/20 to-viewr-purple/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex justify-center">
              <BeamButton variant="default" size="sm">
                Client Stories
              </BeamButton>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Trusted by leading organizations worldwide to deliver cutting-edge
              security solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={index === activeIndex}
                index={index}
                setActive={setActiveIndex}
              />
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-viewr-purple-light scale-110"
                    : "bg-viewr-deep-purple/50 hover:bg-viewr-deep-purple"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
            Ready to enhance your security?
          </h3>
          <p className="text-muted-foreground mb-8">
            Join hundreds of satisfied clients who have transformed their
            security infrastructure with our advanced AI-powered solutions.
          </p>

          <BeamButton variant="purple" size="lg">
            <CalendlyButton url={calendlyUrl}>Get Started Today</CalendlyButton>
          </BeamButton>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  isActive,
  index,
  setActive,
}: {
  testimonial: Testimonial;
  isActive: boolean;
  index: number;
  setActive: (index: number) => void;
}) {
  return (
    <div
      className={`relative glass-card rounded-xl border border-viewr-deep-purple/30 p-6 transition-all duration-500 ease-in-out cursor-pointer
        ${
          isActive
            ? "opacity-100 scale-100"
            : "opacity-50 scale-95 hover:opacity-70"
        }`}
      onClick={() => setActive(index)}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={!isActive}
        proximity={64}
        inactiveZone={0.01}
      />

      <div className="pb-2">
        <div className="flex justify-center mb-4">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
            ))}
          </div>
        </div>
        <div className="text-xl font-medium text-center">
          <span className="text-3xl text-viewr-purple-light">"</span>
          {testimonial.quote}
          <span className="text-3xl text-viewr-purple-light">"</span>
        </div>
      </div>

      <div className="pt-6">
        <div className="flex items-center justify-center mt-2">
          <div className="ml-4 text-left">
            <p className="text-sm font-medium text-white">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We've reduced security incidents by 70% since implementing Viewr's AI cameras. The real-time alerts have been a game-changer for our operations team.",
    name: "Rajesh Sharma",
    title: "CTO, TechVision India",
    avatar: "https://ext.same-assets.com/2949822208/1703428997.jpeg",
  },
  {
    quote:
      "The facial recognition and unusual activity detection features have significantly improved our response time. Our security team can now focus on genuine threats.",
    name: "Priya Patel",
    title: "Security Director, Mumbai Enterprises",
    avatar: "https://ext.same-assets.com/2949822208/3784568976.jpeg",
  },
  {
    quote:
      "After years of using traditional CCTV systems, Viewr's AI capabilities have revolutionized how we monitor our facilities. Worth every rupee invested.",
    name: "Vikram Singh",
    title: "Operations Manager, Delhi Metro Solutions",
    avatar: "https://ext.same-assets.com/2949822208/4285470759.jpeg",
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}
