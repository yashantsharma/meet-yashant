"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutNarrative } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

export function AboutSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="About"
            title="One capability, many contexts"
            description={aboutNarrative.intro}
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {aboutNarrative.pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.1}>
              <GlassCard className="h-full p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] ring-1 ring-white/10">
                  <span className="text-sm font-bold text-white/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {pillar.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10">
          <Link
            href="/journey"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            Explore my journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
