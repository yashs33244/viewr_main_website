"use client";

import { Button } from "@/components/ui/button";
import { BeamButton } from "@/components/ui/beam-button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronRight, Play, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { CalendlyButton } from "@/components/ui/calendly-button";
import SecurityDashboard from "../mockup";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-noise">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-viewr-purple/20 rounded-full blur-[140px] pulse-gradient animate-gradient-x"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-viewr-blue/20 rounded-full blur-[120px] pulse-gradient animate-gradient-x"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-viewr-purple-light/10 rounded-full blur-[100px] pulse-gradient animate-gradient-x"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-viewr-purple-light/50 to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5">
              <BeamButton size="sm">AI-Powered Security</BeamButton>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              AI-Powered Security That
              <br />
              Never Sleeps
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Upgrade your surveillance with intelligent person recognition,
              real-time alerts, and automated reporting. Monitor multiple
              locations remotely and never miss what matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton
                url="https://calendly.com/yash-viewr/30min"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 shadow-zinc-900 p-px text-sm font-semibold leading-6 text-white [&_span:nth-child(1)]:bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(139,92,246,0.6)_0%,rgba(139,92,246,0)_75%)] relative no-underline group cursor-pointer shadow-2xl [&_span:nth-child(3)]:bg-gradient-to-r [&_span:nth-child(3)]:from-fuchsia-400/0 [&_span:nth-child(3)]:via-fuchsia-400/90 [&_span:nth-child(3)]:to-fuchsia-400/0"
              >
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full ring-1 bg-zinc-950 ring-white/10 py-2 px-5">
                  <span>Schedule a Call</span>
                  <Calendar className="h-4 w-4" />
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] transition-opacity duration-500 group-hover:opacity-40" />
              </CalendlyButton>

              <Button
                variant="outline"
                size="lg"
                className="bg-black/30 border-viewr-purple/20 hover:bg-black/50 transition-all group"
              >
                <Play className="mr-2 h-4 w-4 text-viewr-purple-light group-hover:text-white transition-colors" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-16 w-full max-w-[900px] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Dashboard Mockup */}
            <SecurityDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ChartBar({ height, delay = 0 }: { height: string; delay?: number }) {
  return (
    <motion.div
      className="flex-1 bg-gradient-to-t from-viewr-purple-light/70 to-viewr-purple/30 rounded-sm"
      style={{ height }}
      initial={{ height: 0 }}
      animate={{ height }}
      transition={{
        duration: 1,
        delay: delay + 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    ></motion.div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="glass-card rounded-lg p-6 relative group hover:border-viewr-purple/30 transition-all duration-300 hover-lift">
      <div className="mb-4 text-viewr-purple-light">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

// Icons
function AIIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
      />
    </svg>
  );
}

function InsightsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
      />
    </svg>
  );
}

function OptimizationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
      />
    </svg>
  );
}
