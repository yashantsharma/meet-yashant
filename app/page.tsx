"use client";

import { useState } from "react";

import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { TimelinePreview } from "@/components/home/timeline-preview";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { LeadershipPreview } from "@/components/home/leadership-preview";
import { SkillsSection } from "@/components/home/skills-section";

import AskYashantButton from "@/components/AskYashantButton";
import ChatWindow from "@/components/ChatWindow";

export default function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <Hero />
      <AboutSection />
      <TimelinePreview />
      <ProjectsPreview />
      <LeadershipPreview />
      <SkillsSection />

      <AskYashantButton onClick={() => setChatOpen(true)} />

      <ChatWindow
        open={chatOpen}
        onClose={() => setChatOpen(false)}
      />
    </>
  );
}