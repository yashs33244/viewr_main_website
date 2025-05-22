"use client";

import React from "react";
import { SecurityCameraDemo } from "@/registry/magicui/security-camera-demo";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import SecurityDashboard from "./mockup";
import { CalendlyButton } from "./ui/calendly-button";
import { motion } from "motion/react";
export const calendlyUrl = "https://calendly.com/yash-viewr/30min";

export function SecurityHero() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 xl:py-32 bg-gradient-bg">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center space-y-8 mb-16 md:mb-20 lg:mb-24">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-4xl mt-12 font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white text-center"
            >
              AI-Powered Security That
              <motion.span
                initial={{ backgroundPosition: "100% 0%" }}
                animate={{ backgroundPosition: "0% 100%" }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient"
              >
                Never Sleeps
              </motion.span>
            </motion.h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-300 md:text-xl lg:text-2xl leading-relaxed">
              Transform your cameras into intelligent guardians. Our AI
              instantly identifies people, sends real-time alerts, and delivers
              comprehensive reports—all accessible remotely from anywhere.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 shadow-zinc-900 p-px text-sm font-semibold leading-6 text-white [&_span:nth-child(1)]:bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(139,92,246,0.6)_0%,rgba(139,92,246,0)_75%)] relative no-underline group cursor-pointer shadow-2xl [&_span:nth-child(3)]:bg-gradient-to-r [&_span:nth-child(3)]:from-fuchsia-400/0 [&_span:nth-child(3)]:via-fuchsia-400/90 [&_span:nth-child(3)]:to-fuchsia-400/0">
              <CalendlyButton url={calendlyUrl}>
                <RainbowButton
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg"
                  component="div"
                >
                  Request Demo
                </RainbowButton>
              </CalendlyButton>
            </div>
          </div>
        </div>

        {/* Dashboard Demo */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Real-Time Security Dashboard
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Monitor all your cameras, track identified persons, and receive
              instant alerts from our comprehensive control center.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <SecurityDashboard />
            </div>
          </div>
        </div>

        {/* Camera Demo */}
        <div className="text-center mb-0">
          <div className="mb-8 md:mb-12 ">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Smart Camera Integration
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how our AI seamlessly integrates with your existing camera
              infrastructure to provide intelligent monitoring and analysis.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <SecurityCameraDemo className="w-full rounded-lg overflow-hidden shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
