"use client";

import React, { useEffect, useState } from "react";

interface CalendlyButtonProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export function CalendlyButton({
  url,
  children,
  className,
}: CalendlyButtonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize Calendly on client side
  useEffect(() => {
    // Check if Calendly is already available on the window
    if (typeof window !== "undefined" && (window as any).Calendly) {
      setIsLoaded(true);
      return;
    }

    // Function to handle when the script loads
    const handleScriptLoad = () => {
      if ((window as any).Calendly) {
        setIsLoaded(true);
      }
    };

    // Watch for the script to be loaded
    const intervalId = setInterval(() => {
      if ((window as any).Calendly) {
        setIsLoaded(true);
        clearInterval(intervalId);
      }
    }, 100);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isLoaded) {
      console.warn("Calendly script is still loading...");
      return;
    }

    try {
      (window as any).Calendly.initPopupWidget({
        url: url,
      });
    } catch (error) {
      console.error("Error opening Calendly:", error);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${className} ${
        !isLoaded ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
      }`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick(e as unknown as React.MouseEvent);
        }
      }}
    >
      {children}
    </div>
  );
}
