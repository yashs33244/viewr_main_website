"use client";

import { motion, useInView } from "motion/react";
import { BeamButton } from "@/components/ui/beam-button";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative bg-noise">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pulse-gradient">
          <div className="w-full h-full bg-gradient-radial from-viewr-blue/30 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              About Us
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Pioneering the industry with AI-powered surveillance solutions
              featuring cutting-edge technology and unmatched accuracy.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StatCard value="983+" label="Installations" icon={<ShieldIcon />} />

          <StatCard value="9+" label="Patents" icon={<PatentIcon />} />
          <StatCard
            value="96%+"
            label="Guaranteed Accuracy"
            icon={<TargetIcon />}
          />
          <StatCard value="24/7" label="Support" icon={<ClockIcon />} />
        </motion.div>

        {/* Technology Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-24"
        >
          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-viewr-purple/5 rounded-full blur-[100px]"></div>

            <h3 className="text-2xl font-bold mb-8 text-center text-white">
              Our Technology
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <TechCard
                icon={<AiIcon className="w-5 h-5 text-viewr-purple-light" />}
                title="Advanced AI Analysis"
                description="Our AI models are trained on millions of data points to accurately detect and classify objects, people, and behaviors with industry-leading precision."
              />
              <TechCard
                icon={
                  <EncryptionIcon className="w-5 h-5 text-viewr-purple-light" />
                }
                title="End-to-End Encryption"
                description="All video feeds and data are protected with military-grade encryption protocols, ensuring your security data remains private and secure."
              />
              <TechCard
                icon={<CloudIcon className="w-5 h-5 text-viewr-purple-light" />}
                title="Cloud-Native Architecture"
                description="Our platform is built on a modern cloud infrastructure for unlimited scalability, automatic updates, and 99.9% uptime."
              />
              <TechCard
                icon={
                  <IntegrationIcon className="w-5 h-5 text-viewr-purple-light" />
                }
                title="Seamless Integrations"
                description="Connect easily with your existing security systems, smart home devices, and business applications through our extensive API."
              />
            </div>
          </div>
        </motion.div>

        {/* Team Section Preview */}
      </div>
    </section>
  );
}

function TechCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg bg-black/30 backdrop-blur-sm p-6 border border-viewr-deep-purple/30 hover:border-viewr-purple/30 transition-all duration-300">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-viewr-deep-purple/50 mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold mb-2 text-white">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

function StatCard({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Special handling for 24/7 value
  const isSpecialValue = value === "24/7";

  // Extract numeric value from string (e.g., "983+" -> 983, "96%+" -> 96)
  const numericValue = isSpecialValue
    ? 24
    : parseInt(value.replace(/[^\d]/g, ""));
  const suffix = isSpecialValue ? "/7" : value.replace(/[\d]/g, "");

  useEffect(() => {
    if (isInView && !isSpecialValue) {
      let startTime: number;
      const duration = 2000; // 2 seconds animation

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * numericValue);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    } else if (isSpecialValue) {
      setCount(24);
    }
  }, [isInView, numericValue, isSpecialValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative group border border-gray-800/50 rounded-2xl"
    >
      <div className="relative bg-black backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-300">
        {/* Card Border Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-50"></div>

        {/* Grid pattern background */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="w-full h-full border border-gray-800/50 rounded-2xl">
            {/* Horizontal lines - moved closer to borders */}
            <div className="absolute left-0 right-0 top-[15%] h-px bg-gray-800/50"></div>
            <div className="absolute left-0 right-0 bottom-[15%] h-px bg-gray-800/50"></div>
            {/* Vertical lines - moved closer to borders */}
            <div className="absolute top-0 bottom-0 left-[15%] w-px bg-gray-800/50"></div>
            <div className="absolute top-0 bottom-0 right-[15%] w-px bg-gray-800/50"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Animated number */}
          <div className="mb-3">
            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 tracking-tight">
              {isSpecialValue ? "24" : count.toLocaleString()}
              <span className="text-blue-400">{suffix}</span>
            </span>
          </div>

          {/* Label */}
          <div className="text-gray-400 font-medium text-lg tracking-wide uppercase">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Demo component with sample stats
export default function AnimatedStatCardDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Professional Animated Stats
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <StatCard value="983+" label="Installations" icon={<ShieldIcon />} />
          <StatCard value="777k" label="Views" icon={<ViewsIcon />} />
          <StatCard
            value="96%+"
            label="Guaranteed Accuracy"
            icon={<TargetIcon />}
          />
          <StatCard value="24/7" label="Support" icon={<ClockIcon />} />
        </div>
      </div>
    </div>
  );
}

// Icon components
function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function ViewsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

function PatentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  );
}

function AiIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="M9 8.5h4.5a1.5 1.5 0 0 1 0 3h-2a1.5 1.5 0 0 0 0 3H15"></path>
      <path d="M7 8v8"></path>
      <path d="M17 8v8"></path>
    </svg>
  );
}

function EncryptionIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
    </svg>
  );
}

function IntegrationIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
      <path d="M3 9h18"></path>
      <path d="M9 21V9"></path>
    </svg>
  );
}
