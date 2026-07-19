import { cn } from "@/lib/utils";

type SkillChipProps = {
  skill: string;
  className?: string;
};

export function SkillChip({ skill, className }: SkillChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.07] hover:text-white",
        className
      )}
    >
      {skill}
    </span>
  );
}
