import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl",
        hover &&
          "transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.05]",
        className
      )}
    >
      {children}
    </div>
  );
}
