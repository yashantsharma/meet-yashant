import { PageHero } from "@/components/ui/page-hero";
import { TimelineItem } from "@/components/journey/timeline-item";
import { AnimatedSection } from "@/components/ui/motion";
import { aboutNarrative, timeline } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";

export const metadata = {
  title: "Journey",
};

export default function JourneyPage() {
  return (
    <>
      <PageHero
        label="Journey"
        title="Building transferable capabilities"
        description="From education and psychology to entrepreneurship, consulting, and strategy — every experience reflects the same core capability."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <GlassCard className="mb-16 p-8 md:p-12">
              <p className="text-lg leading-relaxed text-white/60 md:text-xl md:leading-relaxed">
                {aboutNarrative.intro}
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {aboutNarrative.pillars.map((pillar) => (
                  <div key={pillar.title}>
                    <h3 className="font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>

          <div className="mx-auto max-w-3xl">
            {timeline.map((item, i) => (
              <TimelineItem
                key={item.id}
                title={item.title}
                period={item.period}
                description={item.description}
                highlight={item.highlight}
                isFuture={item.isFuture}
                index={i}
                isLast={i === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
