import Link from "next/link";
import { Mail, FileText } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/linkedin-icon";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-black">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-white/40">{siteConfig.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
            <Link
              href="/resume"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              aria-label="Resume"
            >
              <FileText className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row md:items-center">
          <p className="text-sm text-white/30">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/30">
            Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
