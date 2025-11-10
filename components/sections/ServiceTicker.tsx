"use client";

import { useMemo } from "react";
import { Asterisk } from "lucide-react";

type Props = {
  items?: string[];
  speedSec?: number;
  direction?: "left" | "right";
  className?: string;
  bgClassName?: string;
};

function cx(...cls: Array<string | undefined>) {
  return cls.filter(Boolean).join(" ");
}

export default function ServicesTicker({
  items = ["App Development", "Website Development", "Pixel Perfect", "React Expert", "App Development", "Website Development", "Pixel Perfect", "React Expert", "App Development", "Website Development", "Pixel Perfect", "React Expert"],
  speedSec = 28,
  direction = "left",
  className,
  bgClassName = "bg-[#119DA4]",
}: Props) {
  const track = useMemo(() => [...items, ...items], [items]);

  return (
    <section
      aria-label="Services ticker"
      className={cx("relative z-20 w-full overflow-hidden", className)}
    >
      <div className={cx("group relative z-20 w-full py-3 text-white", bgClassName)}>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 [mask-image:linear-gradient(to_right,black,transparent)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 [mask-image:linear-gradient(to_left,black,transparent)]" />

        <div
          className={cx(
            "ticker-track flex w-max items-center gap-8 pr-8",
            "group-hover:[animation-play-state:paused]"
          )}
          style={{
            animation: `ticker ${speedSec}s linear infinite`,
            animationDirection: direction === "right" ? "reverse" : "normal",
          }}
        >
          {track.map((label, i) => (
            <div key={`${label}-${i}`} className="flex items-center gap-8">
              <span className="whitespace-nowrap text-sm font-semibold tracking-wide">
                {label}
              </span>
              <Asterisk aria-hidden className="h-5 w-5 opacity-70" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
