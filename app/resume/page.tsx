"use client";

import { Download, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { AnimatedSection } from "@/components/ui/motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { SkillChip } from "@/components/ui/skill-chip";
import { resumeSections, skills, siteConfig } from "@/lib/data";

export default function ResumePage() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <>
      <PageHero
        label="Resume"
        title="Experience & credentials"
        description="A track record of building capabilities across education, entrepreneurship, and enterprise consulting."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-12 flex flex-wrap gap-4">
              <Button
                variant="primary"
                icon={Download}
                onClick={handleDownload}
              >
                Download Resume
              </Button>
              <Button
                href={`mailto:${siteConfig.email}?subject=Resume Request`}
                variant="secondary"
                icon={ExternalLink}
              >
                Request Full CV
              </Button>
            </div>
          </AnimatedSection>

          {/* Header card */}
          <AnimatedSection>
            <GlassCard className="mb-8 p-8 md:p-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-3xl font-semibold text-white">
                    {siteConfig.name}
                  </h2>
                  <p className="mt-2 text-white/50">{siteConfig.tagline}</p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/40">
                    {siteConfig.headline}
                  </p>
                </div>
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/10 ring-1 ring-white/10">
                  <span className="text-2xl font-bold text-white/70">YS</span>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Experience & Education */}
          {resumeSections.map((section, si) => (
            <AnimatedSection key={section.title} delay={si * 0.1}>
              <div className="mb-8">
                <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <GlassCard key={item.org} className="p-6 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h4 className="text-lg font-semibold text-white">
                            {item.role}
                          </h4>
                          <p className="text-sm text-violet-400/70">{item.org}</p>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/40">
                          {item.period}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm leading-relaxed text-white/50"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Skills */}
          <AnimatedSection>
            <div>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
