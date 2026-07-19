import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { TimelinePreview } from "@/components/home/timeline-preview";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { LeadershipPreview } from "@/components/home/leadership-preview";
import { SkillsSection } from "@/components/home/skills-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TimelinePreview />
      <ProjectsPreview />
      <LeadershipPreview />
      <SkillsSection />
    </>
  );
}
