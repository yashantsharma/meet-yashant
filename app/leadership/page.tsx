"use client";

import {
  Brain,
  Heart,
  Layers,
  Lightbulb,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { AnimatedSection } from "@/components/ui/motion";
import { GlassCard } from "@/components/ui/glass-card";
import { leadershipPhilosophy } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Brain,
  Users,
  Zap,
  Lightbulb,
  Layers,
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        label="Leadership"
        title="How I think, lead, and deliver"
        description="A leadership philosophy shaped by education, entrepreneurship, and enterprise consulting — grounded in human behavior and systems design."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leadershipPhilosophy.map((item, i) => {
              const Icon = iconMap[item.icon] || Heart;
              return (
                <AnimatedSection key={item.id} delay={i * 0.08}>
                  <GlassCard className="group h-full p-8 transition-all duration-500 hover:border-violet-500/20">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/10 ring-1 ring-white/10 transition-all duration-500 group-hover:from-violet-500/30 group-hover:to-blue-500/20">
                      <Icon className="h-6 w-6 text-violet-300/80" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/50 md:text-base">
                      {item.description}
                    </p>
                  </GlassCard>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="mt-16">
            <GlassCard className="p-8 md:p-12">
              <blockquote className="text-center">
                <p className="text-xl font-medium leading-relaxed text-white/80 md:text-2xl md:leading-relaxed">
                  &ldquo;Leadership isn&apos;t about having all the answers. It&apos;s about
                  understanding the system, aligning the people, and creating the
                  conditions for execution.&rdquo;
                </p>
                <footer className="mt-6 text-sm text-white/40">
                  — Yashant Sharma
                </footer>
              </blockquote>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
