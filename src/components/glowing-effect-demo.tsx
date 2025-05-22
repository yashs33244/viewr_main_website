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
      <div className="relative h-full rounded-2xl border border-viewr-deep-purple/40 p-2 md:rounded-3xl md:p-3 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-viewr-purple/30">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_rgba(89,72,180,0.1)]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-viewr-purple/30 p-2 bg-black/60">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-muted-foreground md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
