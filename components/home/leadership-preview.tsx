"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Heart,
  Layers,
  Lightbulb,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { leadershipPhilosophy } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Brain,
  Users,
  Zap,
  Lightbulb,
  Layers,
};

export function LeadershipPreview() {
  const preview = leadershipPhilosophy.slice(0, 3);

  return (
    <section className="relative border-y border-white/[0.04] bg-white/[0.01] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Leadership"
            title="How I lead and solve"
            description="A philosophy built from education, entrepreneurship, and enterprise consulting."
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {preview.map((item, i) => {
            const Icon = iconMap[item.icon] || Heart;
            return (
              <AnimatedSection key={item.id} delay={i * 0.1}>
                <GlassCard className="h-full p-8">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/10 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-violet-300/80" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="mt-10">
          <Link
            href="/leadership"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            Read full philosophy
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
