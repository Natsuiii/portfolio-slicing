"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const questions = [
  {
    id: 1,
    question: "Do you work on freelance or remote projects?",
    answer:
      "Yes. I’m available for selected freelance and remote collaborations, especially for frontend-heavy projects where I can bring design and code together.",
    avatar: "",
  },
  {
    id: 2,
    question: "What technologies do you work with?",
    answer:
      "I mainly work with React, Next.js, TypeScript, Tailwind CSS, and modern tooling. I’m also comfortable working with APIs and common frontend libraries.",
    avatar: "",
  },
  {
    id: 3,
    question: "Can you convert Figma or Sketch designs into code?",
    answer:
      "Absolutely. I specialize in translating high-fidelity designs into clean, accessible, and responsive interfaces that match the design system.",
    avatar: "",
  },
  {
    id: 4,
    question: "Do you collaborate with backend developers or teams?",
    answer:
      "Yes. I often work closely with backend engineers, integrating REST or GraphQL APIs and aligning on data structures and flows.",
    avatar: "",
  },
  {
    id: 5,
    question: "Are you available for long-term engagements?",
    answer:
      "I’m open to long-term engagements if the project and team are a good fit, especially for products that need ongoing iteration and refinement.",
    avatar: "",
  },
];

export function QuestionsSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const scrollByCards = (direction: "prev" | "next") => {
    if (!trackRef.current) return;
    const cardWidth = 280;
    const delta = direction === "next" ? cardWidth : -cardWidth;
    trackRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20" id="faq">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Still Got Questions?
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-300">
            I&apos;ve listed answers to questions I often get as a frontend
            developer.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => scrollByCards("prev")}
            className="min-w-[120px] rounded-md border border-white/40 bg-transparent px-6 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Prev
          </Button>

          <Button
            type="button"
            size="sm"
            onClick={() => scrollByCards("next")}
            className="min-w-[120px] rounded-md border border-white/40 bg-transparent px-6 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="journey-scroll relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-4 pr-4 -ml-1 pl-1 journey-scroll"
        >
          {questions.map((item) => {
            const isActive = hoveredId === item.id;

            return (
              <motion.article
                key={item.id}
                layoutId={`question-card-${item.id}`}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={cn(
                  "relative group flex h-[360px] flex-col rounded-3xl border px-6 py-6",
                  "shadow-[0_0_0_1px_rgba(15,23,42,0.8)]",
                  "flex-[0_0_260px] border-transparent bg-transparent",
                  {
                    "flex-[0_0_400px] border-teal-400/80 bg-gradient-to-b from-teal-700 via-teal-800 to-slate-900":
                      isActive,
                  }
                )}
              >
                <div className="mb-6 flex min-h-[40px] items-center justify-between">
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full border",
                      isActive
                        ? "border-black/20 bg-black/25 text-teal-100 order-last"
                        : "border-slate-700 bg-slate-900/70 text-slate-400 order-first"
                    )}
                  >
                    <MessageCircle className="h-4 w-4" />
                  </motion.div>

                  <AnimatePresence>
                    {isActive && item.avatar && (
                      <motion.div
                        layout
                        className="order-first"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Image
                          src={item.avatar}
                          alt="Avatar"
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex-1" />

                <div>
                  <h3 className="mb-3 text-base font-semibold leading-snug text-white">
                    {item.question}
                  </h3>

                  <div className="mt-1">
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          key="answer"
                          initial={{ opacity: 0, height: 0, y: 10 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: 10 }}
                          transition={{ duration: 0.2, type: "tween" }}
                          className="text-sm leading-relaxed text-slate-50/95"
                        >
                          {item.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
