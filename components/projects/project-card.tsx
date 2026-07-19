"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { type Project } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <GlassCard
        hover={false}
        className={cn(
          "group cursor-pointer overflow-hidden transition-all duration-500",
          expanded && "border-white/[0.14] bg-white/[0.05]"
        )}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left"
          aria-expanded={expanded}
        >
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              project.gradient,
              expanded && "opacity-100"
            )}
          />
          <div className="relative p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/60">
                    {project.category}
                  </span>
                  <span className="text-xs text-white/30">{project.organization}</span>
                </div>
                <h3 className="text-xl font-semibold text-white md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50 md:text-base">
                  {project.summary}
                </p>
              </div>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]"
              >
                <ChevronDown className="h-4 w-4 text-white/60" />
              </motion.div>
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 grid gap-6 border-t border-white/[0.06] pt-6 md:grid-cols-2">
                    <DetailBlock label="Challenge" content={project.challenge} />
                    <DetailBlock label="Approach" content={project.approach} />
                    <DetailBlock label="Impact" content={project.impact} />
                    <DetailBlock
                      label="Lessons Learned"
                      content={project.lessons}
                      accent
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </GlassCard>
    </motion.div>
  );
}

function DetailBlock({
  label,
  content,
  accent = false,
}: {
  label: string;
  content: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p
        className={cn(
          "mb-2 text-xs font-medium uppercase tracking-[0.15em]",
          accent ? "text-violet-400/80" : "text-white/40"
        )}
      >
        {label}
      </p>
      <p className="text-sm leading-relaxed text-white/60">{content}</p>
    </div>
  );
}
