"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/registry/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white dark:bg-gray-800 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function SecurityCameraDemo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const model1Ref = useRef<HTMLDivElement>(null);
  const model2Ref = useRef<HTMLDivElement>(null);
  const model3Ref = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10 rounded-lg",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-4xl flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={cameraRef} className="bg-blue-50 dark:bg-blue-900">
            <CameraIcon />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle
            ref={cloudRef}
            className="size-16 bg-purple-50 dark:bg-purple-900"
          >
            <CloudIcon />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Circle ref={model1Ref} className="bg-green-50 dark:bg-green-900">
            <AIModelIcon1 />
          </Circle>
          <Circle ref={model2Ref} className="bg-yellow-50 dark:bg-yellow-900">
            <AIModelIcon2 />
          </Circle>
          <Circle ref={model3Ref} className="bg-red-50 dark:bg-red-900">
            <AIModelIcon3 />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={userRef} className="bg-gray-50 dark:bg-gray-900">
            <UserIcon />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={cameraRef}
        toRef={cloudRef}
        duration={3}
        gradientStartColor="#3b82f6"
        gradientStopColor="#8b5cf6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={cloudRef}
        toRef={model1Ref}
        duration={3}
        gradientStartColor="#8b5cf6"
        gradientStopColor="#10b981"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={cloudRef}
        toRef={model2Ref}
        duration={3}
        gradientStartColor="#8b5cf6"
        gradientStopColor="#eab308"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={cloudRef}
        toRef={model3Ref}
        duration={3}
        gradientStartColor="#8b5cf6"
        gradientStopColor="#ef4444"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={model1Ref}
        toRef={userRef}
        duration={3}
        gradientStartColor="#10b981"
        gradientStopColor="#6b7280"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={model2Ref}
        toRef={userRef}
        duration={3}
        gradientStartColor="#eab308"
        gradientStopColor="#6b7280"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={model3Ref}
        toRef={userRef}
        duration={3}
        gradientStartColor="#ef4444"
        gradientStopColor="#6b7280"
      />
    </div>
  );
}

// Simple Icons
const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-6"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const CloudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-8"
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const AIModelIcon1 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-6"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M7 7h.01" />
    <path d="M10 7h7" />
    <path d="M7 12h.01" />
    <path d="M10 12h7" />
    <path d="M7 17h.01" />
    <path d="M10 17h7" />
  </svg>
);

const AIModelIcon2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-6"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const AIModelIcon3 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-6"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-6"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
