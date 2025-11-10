"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiLaravel,
  SiMysql,
  SiGithub
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";
import { BsFiletypeSql } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";

type Item = {
  name: string;
  percent: number;
  Icon: IconType;
  color?: string;
};

type Props = {
  items?: Item[];
  maxVisible?: number;
  rowHeight?: number;
};

const DEFAULT_ITEMS: Item[] = [
  { name: "HTML", percent: 100, Icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", percent: 90, Icon: SiCss3, color: "text-[#1572B6]" },
  {
    name: "Javascript",
    percent: 90,
    Icon: SiJavascript,
    color: "text-[#F7DF1E]",
  },
  {
    name: "Typescript",
    percent: 80,
    Icon: SiTypescript,
    color: "text-[#3178C6]",
  },
  { name: "React", percent: 85, Icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", percent: 80, Icon: SiNextdotjs, color: "text-white" },
  {
    name: "Tailwind",
    percent: 90,
    Icon: SiTailwindcss,
    color: "text-[#38BDF8]",
  },
  { name: "Node.js", percent: 80, Icon: SiNodedotjs, color: "text-[#3C873A]" },
  { name: "C#", percent: 70, Icon: TbBrandCSharp, color: "text-[#672079]" },
  { name: ".NET", percent: 65, Icon: AiOutlineDotNet, color: "text-[#512BD4]" },
  { name: "Python", percent: 70, Icon: SiPython, color: "text-[#3776AB]" },
  { name: "Laravel", percent: 80, Icon: SiLaravel, color: "text-[#FF2D20]" },
  { name: "MySQL", percent: 75, Icon: SiMysql, color: "text-[#4479A1]" },
  { name: "SQL Server Management Studio", percent: 70, Icon: BsFiletypeSql, color: "text-[#F29111]" },
  { name: "Azure DevOps", percent: 80, Icon: VscAzure, color: "text-[#0089D6]" },
  { name: "GitHub / Git", percent: 85, Icon: SiGithub, color: "text-white" },
];

export default function Tools({
  items = DEFAULT_ITEMS,
  maxVisible = 6,
  rowHeight = 64,
}: Props) {
  return (
    <section id="skill" className="relative z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              <span className="block">Tools I Use to</span>
              <span className="block">Build</span>
            </h2>
            <p className="mt-5 text-white/70">
              From code to design — here’s the tech that helps me turn ideas
              into real products.
            </p>
          </div>

          <div className="relative md:border-l md:border-white/10 md:pl-10">
            <ul
              dir="rtl"
              className="skill-scroll divide-y divide-white/10 overflow-y-auto pl-3"
              style={{ maxHeight: maxVisible * rowHeight }}
            >
              {items.map(({ name, percent, Icon, color }) => (
                <li
                  key={name}
                  dir="ltr"
                  className="flex h-16 items-center justify-between py-0"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/5">
                      <Icon
                        className={`h-5 w-5 ${color ?? "text-[#25CED1]"}`}
                      />
                    </div>
                    <span className="truncate text-base font-semibold">
                      {name}
                    </span>
                  </div>
                  <span className="ml-4 shrink-0 text-sm font-semibold text-white/80">
                    {percent}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Button
            asChild
            className="rounded-md bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-5 min-w-[200px] justify-center shadow-lg shadow-cyan-500/20"
          >
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Hire Me
            </Link>
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .skill-scroll::-webkit-scrollbar {
          width: 10px;
        }
        .skill-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.22);
          border-radius: 9999px;
        }
        .skill-scroll:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </section>
  );
}
