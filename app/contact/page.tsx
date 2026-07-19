"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/linkedin-icon";
import { PageHero } from "@/components/ui/page-hero";
import { AnimatedSection } from "@/components/ui/motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      formData.subject || "Contact from Meet Yashant"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="Contact"
        title="Let's connect"
        description="Whether it's a strategic challenge, a leadership conversation, or an opportunity to collaborate — I'd love to hear from you."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <GlassCard className="h-full p-8">
                  <h3 className="text-lg font-semibold text-white">
                    Get in touch
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    I&apos;m always open to meaningful conversations about
                    strategy, systems, leadership, and impact.
                  </p>

                  <div className="mt-8 space-y-6">
                    <ContactLink
                      icon={Mail}
                      label="Email"
                      value={siteConfig.email}
                      href={`mailto:${siteConfig.email}`}
                    />
                    <ContactLink
                      icon={LinkedInIcon}
                      label="LinkedIn"
                      value="Connect on LinkedIn"
                      href={siteConfig.linkedin}
                      external
                    />
                    <ContactLink
                      icon={MapPin}
                      label="Location"
                      value={siteConfig.location}
                    />
                  </div>
                </GlassCard>
              </AnimatedSection>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <GlassCard className="p-8 md:p-10">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center py-12 text-center"
                    >
                      <CheckCircle className="h-12 w-12 text-emerald-400" />
                      <h3 className="mt-4 text-xl font-semibold text-white">
                        Message ready to send
                      </h3>
                      <p className="mt-2 text-sm text-white/50">
                        Your email client should open shortly. If it didn&apos;t,
                        email me directly.
                      </p>
                      <Button
                        href={`mailto:${siteConfig.email}`}
                        variant="secondary"
                        className="mt-6"
                      >
                        Open Email Client
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <FormField
                          label="Name"
                          id="name"
                          value={formData.name}
                          onChange={(v) =>
                            setFormData({ ...formData, name: v })
                          }
                          required
                        />
                        <FormField
                          label="Email"
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(v) =>
                            setFormData({ ...formData, email: v })
                          }
                          required
                        />
                      </div>
                      <FormField
                        label="Subject"
                        id="subject"
                        value={formData.subject}
                        onChange={(v) =>
                          setFormData({ ...formData, subject: v })
                        }
                      />
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-medium text-white/60"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 backdrop-blur-sm transition-colors focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10"
                          placeholder="Tell me about your project or opportunity..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 shadow-[0_0_40px_-8px_rgba(255,255,255,0.3)] md:w-auto"
                      >
                        <Send className="h-4 w-4" />
                        Send Message
                      </button>
                    </form>
                  )}
                </GlassCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] ring-1 ring-white/10">
        <Icon className="h-4 w-4 text-white/60" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-white/40">
          {label}
        </p>
        <p className="mt-1 text-sm text-white/70">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return content;
}

function FormField({
  label,
  id,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-white/60"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 backdrop-blur-sm transition-colors focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10"
      />
    </div>
  );
}
