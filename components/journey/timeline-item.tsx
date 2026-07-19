"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  title: string;
  period: string;
  description: string;
  highlight: string;
  isFuture?: boolean;
  index: number;
  isLast?: boolean;
};

export function TimelineItem({
  title,
  period,
  description,
  highlight,
  isFuture = false,
  index,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex gap-6 md:gap-8"
    >
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ring-4 ring-black",
            isFuture
              ? "bg-gradient-to-br from-violet-500 to-blue-500"
              : "bg-white/80"
          )}
        >
          {isFuture && (
            <div className="absolute inset-0 animate-ping rounded-full bg-violet-500/40" />
          )}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-white/20 to-white/[0.04] min-h-[60px]" />
        )}
      </div>

      <GlassCard className={cn("mb-8 flex-1 p-6 md:p-8", isFuture && "border-violet-500/20")}>
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">
            {period}
          </span>
          {isFuture && (
            <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-400">
              Next Chapter
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-white md:text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/50 md:text-base">
          {description}
        </p>
        <p className="mt-4 text-sm font-medium text-white/70">{highlight}</p>
      </GlassCard>
    </motion.div>
  );
}
