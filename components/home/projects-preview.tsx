"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

export function ProjectsPreview() {
  const preview = projects.slice(0, 3);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Projects"
            title="Work that speaks for itself"
            description="Selected engagements across consulting, entrepreneurship, education, and social impact."
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {preview.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <GlassCard className="group relative flex h-full flex-col overflow-hidden p-6 md:p-8">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${project.gradient}`}
                />
                <div className="relative flex flex-1 flex-col">
                  <span className="mb-3 inline-flex w-fit rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/60">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-xs text-white/30">{project.organization}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/50">
                    {project.summary}
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
