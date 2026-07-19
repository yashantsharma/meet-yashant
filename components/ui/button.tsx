import Link from "next/link";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  download?: boolean;
  type?: "button" | "submit" | "reset";
};

export function Button({
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  children,
  className,
  download,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-white text-black hover:bg-white/90 shadow-[0_0_40px_-8px_rgba(255,255,255,0.3)]",
    secondary:
      "border border-white/20 bg-white/[0.05] text-white backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.08]",
    ghost: "text-white/70 hover:text-white hover:bg-white/[0.05]",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        download={download}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {Icon && <Icon className="h-4 w-4" />}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  );
}
