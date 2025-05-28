"use client";

import { Shield, Eye, Settings, Sparkles, VideoIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Shield className="h-4 w-4 text-viewr-purple-light" />}
        title="Advanced Security"
        description="Enterprise-grade encryption and protection for your critical data."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-viewr-purple-light" />}
        title="Custom Integration"
        description="Seamlessly integrate with your existing systems and infrastructure."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Eye className="h-4 w-4 text-viewr-purple-light" />}
        title="24/7 Monitoring"
        description="Round-the-clock surveillance and real-time threat detection."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-viewr-purple-light" />}
        title="AI-Powered Analytics"
        description="Intelligent video analysis to identify patterns and anomalies."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<VideoIcon className="h-4 w-4 text-viewr-purple-light" />}
        title="Multi-Location Support"
        description="Manage security across multiple sites from a single dashboard."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-viewr-deep-purple/30 p-2 md:rounded-3xl md:p-3 group hover:border-viewr-purple/50 transition-all duration-300">
        <GlowingEffect
          spread={40}
          glow={false}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
          className="group-hover:opacity-100"
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-black/20 backdrop-blur-sm border border-viewr-deep-purple/20 group-hover:bg-black/30 transition-all duration-300">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-viewr-deep-purple/40 p-2 group-hover:border-viewr-purple/60 transition-colors duration-300">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-white group-hover:text-viewr-purple-light transition-colors duration-300">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
