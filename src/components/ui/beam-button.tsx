"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React from "react";

interface BeamButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "default" | "secondary" | "purple";
  size?: "default" | "sm" | "lg";
}

export const BeamButton = React.forwardRef<HTMLButtonElement, BeamButtonProps>(
  (
    {
      className,
      children,
      rightIcon = <ChevronRight className="h-4 w-4" />,
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      default:
        "bg-slate-800 shadow-zinc-900 [&_span:nth-child(1)]:bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] [&_div]:bg-zinc-950 [&_div]:ring-white/10 [&_span:nth-child(3)]:bg-gradient-to-r [&_span:nth-child(3)]:from-emerald-400/0 [&_span:nth-child(3)]:via-emerald-400/90 [&_span:nth-child(3)]:to-emerald-400/0",
      secondary:
        "bg-slate-900 shadow-zinc-900 [&_span:nth-child(1)]:bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(120,119,198,0.6)_0%,rgba(120,119,198,0)_75%)] [&_div]:bg-zinc-950 [&_div]:ring-white/10 [&_span:nth-child(3)]:bg-gradient-to-r [&_span:nth-child(3)]:from-indigo-400/0 [&_span:nth-child(3)]:via-indigo-400/90 [&_span:nth-child(3)]:to-indigo-400/0",
      purple:
        "bg-slate-900 shadow-zinc-900 [&_span:nth-child(1)]:bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(139,92,246,0.6)_0%,rgba(139,92,246,0)_75%)] [&_div]:bg-zinc-950 [&_div]:ring-white/10 [&_span:nth-child(3)]:bg-gradient-to-r [&_span:nth-child(3)]:from-fuchsia-400/0 [&_span:nth-child(3)]:via-fuchsia-400/90 [&_span:nth-child(3)]:to-fuchsia-400/0",
    };

    const sizeClasses = {
      default: "p-px text-sm font-semibold leading-6",
      sm: "p-px text-xs font-medium leading-5",
      lg: "p-px text-base font-semibold leading-7",
    };

    const contentSizeClasses = {
      default: "py-1.5 px-4",
      sm: "py-1 px-3",
      lg: "py-2 px-5",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative no-underline group cursor-pointer shadow-2xl rounded-full text-white inline-block",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div
          className={cn(
            "relative flex space-x-2 items-center z-10 rounded-full ring-1",
            contentSizeClasses[size]
          )}
        >
          <span>{children}</span>
          {rightIcon}
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] transition-opacity duration-500 group-hover:opacity-40" />
      </button>
    );
  }
);

BeamButton.displayName = "BeamButton";
