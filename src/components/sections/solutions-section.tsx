"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BeamButton } from "@/components/ui/beam-button";
import GlowingEffectDemo from "@/components/glowing-effect-demo";
import SecurityCameraDemo from "@/registry/magicui/security-camera-demo";

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative bg-noise py-20">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20 pulse-gradient">
          <div className="w-full h-full bg-gradient-radial from-viewr-purple/40 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container relative z-10">
        {/* Smart Camera Integration Section */}
        <div className="text-center mb-20">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart Camera Integration
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how our AI seamlessly integrates with your existing camera
              infrastructure
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <SecurityCameraDemo className="w-full rounded-lg overflow-hidden shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Tailored Security Solutions Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Tailored Security Solutions
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Customized security solutions to meet the unique needs of every
              client, from homes to enterprises.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <GlowingEffectDemo />
        </motion.div>

        {/* Advanced Security Technologies Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {/* Left: Features List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Advanced Security Technologies
            </h3>
            <p className="text-muted-foreground mb-6">
              Our enterprise security solutions leverage cutting-edge AI and
              machine learning to provide unparalleled protection for your
              business assets and data.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Facial recognition and object detection",
                "Behavioral analytics and anomaly detection",
                "Seamless integration with existing systems",
                "Customizable alerts and notifications",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-6 w-6 shrink-0 rounded-full bg-viewr-purple/20 flex items-center justify-center mt-0.5">
                    <CheckIcon className="h-3.5 w-3.5 text-viewr-purple-light" />
                  </span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <BeamButton variant="purple" className="w-fit">
              Learn More
            </BeamButton>
          </motion.div>

          {/* Right: Camera Feed Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative group"
          >
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden beam-border group-hover:shadow-2xl group-hover:shadow-viewr-purple/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-black to-viewr-deep-purple/30"></div>

              <div className="relative h-full z-10 p-6 flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-video bg-black/40 rounded-lg overflow-hidden beam-border">
                    <div className="absolute inset-0 bg-viewr-deep-purple/10"></div>

                    {/* Security Camera Feed Mockup */}
                    <div className="absolute top-2 left-2 flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-xs text-red-400">REC</span>
                    </div>

                    <div className="absolute bottom-2 left-2 text-xs text-gray-400">
                      Camera 03 • Main Entrance
                    </div>
                    <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                      13:45:22
                    </div>

                    {/* Grid overlay effect */}
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 pointer-events-none">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="border border-gray-800/20"
                        ></div>
                      ))}
                    </div>

                    {/* Motion Detection Frames */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 border-2 border-green-400 rounded animate-pulse"></div>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-green-400 bg-black/60 px-2 py-1 rounded">
                        Person Detected
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
