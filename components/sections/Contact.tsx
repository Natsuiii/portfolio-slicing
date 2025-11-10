"use client";

import { Mail, Instagram, Linkedin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GridBackground } from "@/components/GridBackground/GridBackground";
import { useState } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/owenn.tb";
const LINKEDIN_URL = "https://www.linkedin.com/in/owen-tb/";

type ContactSectionProps = {
  className?: string;
};

export function ContactSection({ className }: ContactSectionProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !email || !message) return;

    setShowSuccess(true);
    form.reset();
  };

  const handleBackToHome = () => {
    setShowSuccess(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      className={cn(
        "relative isolate overflow-hidden py-16 md:py-24",
        className
      )}
    >
      <div className="absolute inset-0 -z-30 bg-black" />
      <div className="absolute inset-x-0 bottom-0 -z-20 h-[70%] bg-gradient-to-t from-teal-500/70 via-teal-500/10 to-transparent" />
      <div
        className="
          absolute inset-0 -z-10 opacity-40
          [background-image:linear-gradient(to_right,rgba(15,23,42,0.9)_1px,transparent_1px)]
          [background-size:60px_100%]
        "
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row">
        <div className="w-full max-w-md rounded-xl border border-white/10 bg-black/80 p-8 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Let&apos;s <span className="text-teal-400">Build Something</span>
            <br />
            Great
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Got an idea, a project, or just want to connect? I&apos;m always
            open to new conversations.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="text-xs font-medium uppercase tracking-wide text-white/70">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="mt-2 w-full rounded-md border border-white/15 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="text-xs font-medium uppercase tracking-wide text-white/70">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mt-2 w-full rounded-md border border-white/15 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="text-xs font-medium uppercase tracking-wide text-white/70">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                placeholder="Enter your message"
                className="mt-2 w-full resize-none rounded-md border border-white/15 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
              />
            </div>

            <Button
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-slate-100"
            >
              <Mail className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>

        <div className="flex-1 text-sm text-white/80 lg:pt-4 flex flex-col justify-between">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                Address
              </h3>
              <div className="mt-2 border-t border-white/15 pt-3 text-sm text-white/70">
                Jakarta, Indonesia
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                Contact
              </h3>
              <div className="mt-2 border-t border-white/15 pt-3 text-sm text-white/70">
                (+62) 081324412618
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                Social Media
              </h3>
              <div className="mt-2 border-t border-white/15 pt-4 flex gap-3">
                {[
                  { Icon: Instagram, label: "Instagram", href: INSTAGRAM_URL },
                  { Icon: Linkedin, label: "LinkedIn", href: LINKEDIN_URL },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white/80 transition-colors hover:border-teal-400 hover:text-teal-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 self-start text-2xl font-extrabold uppercase tracking-[0.15em] text-white/80 sm:text-3xl">
            Get in touch
          </p>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <GridBackground className="w-[90%] max-w-md rounded-3xl px-10 py-12 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8">
                <div className="relative h-28 w-28">
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[#0f9da4]">
                    <Check className="h-10 w-10 text-white" />
                  </div>

                  <div className="absolute inset-3 rounded-full border border-white/15" />
                  <div className="absolute inset-6 rounded-full border border-white/10" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Thanks for Reaching Out!
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                I&apos;ve received your message and will get back to you
                shortly.
              </p>

              <button
                type="button"
                onClick={handleBackToHome}
                className="mt-8 w-full rounded-full bg-[#0f9da4] px-6 py-3 text-sm font-semibold text-white hover:bg-[#14b3bc] transition-colors"
              >
                Back to Home
              </button>
            </div>
          </GridBackground>
        </div>
      )}
    </section>
  );
}
