"use client";

import { RainbowButton } from "@/registry/magicui/rainbow-button";

export function RainbowButtonDemo() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-xl font-semibold mb-2">Request Demo</h3>
      <div className="flex gap-4">
        <RainbowButton variant="default">Get Demo Access</RainbowButton>
        <RainbowButton variant="outline">Schedule Demo</RainbowButton>
      </div>
    </div>
  );
}
