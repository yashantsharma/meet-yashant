"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { timeline } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function TimelinePreview() {
  const preview = timeline.filter((item) => !item.isFuture);

  return (
    <section className="relative border-y border-white/[0.04] bg-white/[0.01] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Career Timeline"
            title="A deliberate path of building"
            description="Every step intentional — building transferable skills across industries, not changing careers."
          />
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-2">
            {preview.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.08} className="flex-1">
                <div className="group text-center">
                  <div className="mx-auto mb-3 flex h-3 w-3 items-center justify-center rounded-full bg-white/80 ring-4 ring-black transition-transform group-hover:scale-125" />
                  <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                    {item.period}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">{item.title}</p>
                </div>
                {i < preview.length - 1 && (
                  <div className="mx-auto my-2 h-6 w-px bg-white/10 md:hidden" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="mt-12 text-center">
          <Link
            href="/journey"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            View full journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
