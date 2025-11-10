"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

type Experience = {
  role: string;
  period: string;
  company: string;
  description: string;
  logoSrc?: string;
};

const EXPERIENCES: Experience[] = [
  {
    role: "Fullstack Developer IT Division BINUS",
    period: "2024 – Present",
    company: "IT Division BINUS",
    logoSrc: "/assets/journey_image/binus.png",
    description:
      "Responsible for conducting coding according to the standardization of the application source code, the application design plan, and ensuring its timely completion.",
  },
  {
    role: "Fullstack Developer IT Division BINUS",
    period: "2024 – Present",
    company: "IT Division BINUS",
    logoSrc: "/assets/journey_image/binus.png",
    description:
      "Responsible for conducting coding according to the standardization of the application source code, the application design plan, and ensuring its timely completion.",
  },
  {
    role: "Fullstack Developer IT Division BINUS",
    period: "2024 – Present",
    company: "IT Division BINUS",
    logoSrc: "/assets/journey_image/binus.png",
    description:
      "Responsible for conducting coding according to the standardization of the application source code, the application design plan, and ensuring its timely completion.",
  },
  {
    role: "Fullstack Developer IT Division BINUS",
    period: "2024 – Present",
    company: "IT Division BINUS",
    logoSrc: "/assets/journey_image/binus.png",
    description:
      "Responsible for conducting coding according to the standardization of the application source code, the application design plan, and ensuring its timely completion.",
  },
  {
    role: "Fullstack Developer IT Division BINUS",
    period: "2024 – Present",
    company: "IT Division BINUS",
    logoSrc: "/assets/journey_image/binus.png",
    description:
      "Responsible for conducting coding according to the standardization of the application source code, the application design plan, and ensuring its timely completion.",
  },
  // nanti tinggal tambah lagi di sini...
];

export default function JourneySection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = EXPERIENCES.length;

  const scrollByCards = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const firstChild = track.firstElementChild as HTMLElement | null;
    // lebar kartu + gap (gap-6 = 24px)
    const baseWidth = firstChild?.offsetWidth ?? 336;
    const cardWidth = baseWidth + 24;

    const delta = direction === "next" ? cardWidth : -cardWidth;

    track.scrollBy({
      left: delta,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    setActiveIndex((prev) => {
      const next = Math.max(prev - 1, 0);
      if (next !== prev) {
        scrollByCards("prev");
      }
      return next;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const next = Math.min(prev + 1, total - 1);
      if (next !== prev) {
        scrollByCards("next");
      }
      return next;
    });
  };

  const progress = total <= 1 ? 1 : activeIndex / (total - 1 || 1);

  return (
    <section id="journey" className="relative z-30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            My Journey in Tech
          </h2>
          <p className="mt-3 text-sm text-white/70">
            From small gigs to real-world challenges — each experience helped me
            grow as a builder and problem-solver.
          </p>
        </div>

        <div
          ref={trackRef}
          className="
            journey-scroll
            flex gap-6 overflow-x-auto pr-2 pb-2
            snap-x snap-mandatory
          "
        >
          {EXPERIENCES.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>

        <div className="mt-6">
          <div className="h-[2px] w-full bg-white/15">
            <div
              className="h-[2px] bg-white transition-all"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <div className="mt-4 flex justify-start gap-3">
            <Button
              variant="outline"
              size="sm"
              disabled={activeIndex === 0}
              onClick={handlePrev}
              className="
                min-w-[120px]
                rounded-md border border-white/40
                bg-transparent
                px-6 py-2
                text-sm font-medium text-white
                hover:bg-white/10
                disabled:opacity-40
              "
            >
              Prev
            </Button>
            <Button
              size="sm"
              disabled={activeIndex === total - 1}
              onClick={handleNext}
              className="
                min-w-[120px]
                rounded-md border border-white/40
                bg-transparent
                px-6 py-2
                text-sm font-medium text-white
                hover:bg-white/10
                disabled:opacity-40
              "
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  role,
  period,
  company,
  description,
  logoSrc,
}: Experience) {
  return (
    <article
      className="
        snap-start
        relative flex-shrink-0
        w-full max-w-md
        rounded-md border border-white/20 bg-black/40 p-6
      "
    >
      <div className="absolute left-0 top-6 h-[52px] w-1 bg-[#119DA4]" />

      <div className="ml-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold">{role}</h3>
            <p className="mt-1 text-sm text-white/70">{period}</p>
          </div>
          <CalendarDays className="mt-1 h-4 w-4 text-white/70" />
        </div>

        <div className="mt-4 h-px w-full bg-white/10" />

        <p className="mt-4 text-sm leading-6 text-white/70">{description}</p>

        {logoSrc && (
          <div className="mt-6 h-8">
            <Image
              src={logoSrc}
              alt={company}
              width={100}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </div>
        )}
      </div>
    </article>
  );
}
