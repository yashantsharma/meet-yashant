"use client";

import { skills } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillChip } from "@/components/ui/skill-chip";

export function SkillsSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Skills"
            title="Capabilities honed across contexts"
            description="Transferable strengths that compound — not siloed expertise tied to one industry."
            align="center"
          />
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill} delay={i * 0.04} className="inline-block">
                <SkillChip skill={skill} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
