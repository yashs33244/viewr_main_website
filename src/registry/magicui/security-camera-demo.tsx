"use client";

import React, {
  forwardRef,
  useRef,
  useId,
  useState,
  useEffect,
  RefObject,
} from "react";
import { motion } from "motion/react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; size?: "sm" | "md" | "lg" }
>(({ className = "", children, size = "md" }, ref) => {
  const sizeClasses = {
    sm: "size-10",
    md: "size-12",
    lg: "size-16",
  };

  return (
    <div
      ref={ref}
      className={`z-10 flex ${sizeClasses[size]} items-center justify-center rounded-full border-2 bg-white dark:bg-gray-800 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();
        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });
        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;
        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    updatePath();

    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export default function SimplifiedSecurityFlow({
  className = "",
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Simplified structure - 4 main layers
  const inputRef = useRef<HTMLDivElement>(null);
  const processingRef = useRef<HTMLDivElement>(null);
  const aiModelRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Synchronized animation - all beams start together
  const syncDelay = 0;
  const syncDuration = 4;

  return (
    <div
      className={`relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg bg-black ${className}`}
      ref={containerRef}
    >
      <div className="flex size-full max-w-5xl flex-row items-center justify-between gap-16 p-8">
        {/* Input Layer */}
        <div className="flex flex-col items-center gap-4">
          <Circle
            ref={inputRef}
            className="bg-blue-50 dark:bg-blue-900"
            size="lg"
          >
            <InputIcon />
          </Circle>
          <div className="text-center">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Data Sources
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Cameras, Sensors, Mobile
            </p>
          </div>
        </div>

        {/* Processing Layer */}
        <div className="flex flex-col items-center gap-4">
          <Circle
            ref={processingRef}
            className="bg-purple-50 dark:bg-purple-900"
            size="lg"
          >
            <ProcessingIcon />
          </Circle>
          <div className="text-center">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Processing
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Cloud & Edge Computing
            </p>
          </div>
        </div>

        {/* AI Models Layer */}
        <div className="flex flex-col items-center gap-4">
          <Circle
            ref={aiModelRef}
            className="bg-green-50 dark:bg-green-900"
            size="lg"
          >
            <AIIcon />
          </Circle>
          <div className="text-center">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              AI Analysis
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Vision, NLP, Behavior
            </p>
          </div>
        </div>

        {/* Output Layer */}
        <div className="flex flex-col items-center gap-4">
          <Circle
            ref={outputRef}
            className="bg-red-50 dark:bg-red-900"
            size="lg"
          >
            <OutputIcon />
          </Circle>
          <div className="text-center">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Security Response
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Alerts & Actions
            </p>
          </div>
        </div>
      </div>

      {/* Synchronized Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={inputRef}
        toRef={processingRef}
        gradientStartColor="#3b82f6"
        gradientStopColor="#8b5cf6"
        delay={syncDelay}
        duration={syncDuration}
        curvature={0}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={processingRef}
        toRef={aiModelRef}
        gradientStartColor="#8b5cf6"
        gradientStopColor="#10b981"
        delay={syncDelay}
        duration={syncDuration}
        curvature={0}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={aiModelRef}
        toRef={outputRef}
        gradientStartColor="#10b981"
        gradientStopColor="#ef4444"
        delay={syncDelay}
        duration={syncDuration}
        curvature={0}
      />

      {/* Additional flow lines for visual richness */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={inputRef}
        toRef={aiModelRef}
        gradientStartColor="#3b82f6"
        gradientStopColor="#10b981"
        delay={syncDelay + 0.5}
        duration={syncDuration}
        curvature={30}
        pathOpacity={0.1}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={processingRef}
        toRef={outputRef}
        gradientStartColor="#8b5cf6"
        gradientStopColor="#ef4444"
        delay={syncDelay + 1}
        duration={syncDuration}
        curvature={-30}
        pathOpacity={0.1}
      />
    </div>
  );
}

// Simplified Icon Components
const InputIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="size-8"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const ProcessingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="size-8"
  >
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);

const AIIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="size-8"
  >
    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .99 1 1.72 0 .73-.4 1.37-1 1.72V15a2 2 0 0 1-2 2h-4v1.27c.6.35 1 .99 1 1.73a2 2 0 1 1-4 0c0-.74.4-1.38 1-1.73V17H7a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.99-1-1.72 0-.73.4-1.37 1-1.72V9a2 2 0 0 1 2-2h4V5.73c-.6-.35-1-.99-1-1.73a2 2 0 0 1 2-2Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const OutputIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="size-8"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
