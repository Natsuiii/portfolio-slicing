// components/sections/CompareSection.tsx
import { Check, X } from "lucide-react";
import { GridBackground } from "@/components/GridBackground/GridBackground";

const ROWS = [
  "React Expert",
  "Pixel Perfect",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Performance Optimization",
  "Responsive Website",
  "UI Design Proficiency (Figma)",
];

export default function CompareSection() {
  return (
    <GridBackground origin="bl" className="py-16 md:py-24 relative z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Not Your Typical Frontend Developer
          </h2>
          <p className="mt-3 text-sm text-white/70">
            I care about how it looks, how it works, and how it feels — all at once
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-md border border-white/10 bg-black/40">
          <table className="w-full table-fixed border-collapse">
            <colgroup>
              <col className="w-[44%]" />
              <col className="w-[28%]" />
              <col className="w-[28%]" />
            </colgroup>

            <thead>
              <tr className="text-left text-sm">
                <Th>Skill</Th>
                <Th className="bg-[#119DA4]/40">With Me</Th>
                <Th>Other</Th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {ROWS.map((label) => (
                <tr key={label} className="border-t border-white/10">
                  <Td className="py-5">{label}</Td>
                  <Td className="py-5 bg-[#119DA4]/40"><BadgeCheck /></Td>
                  <Td className="py-5"><BadgeX /></Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </GridBackground>
  );
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <th className={`px-6 py-4 font-semibold text-white/90 ${className}`}>{children}</th>;
}
function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-6 align-middle ${className}`}>{children}</td>;
}
function BadgeCheck() {
  return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#119DA4]/40"><Check className="h-4 w-4" /></span>;
}
function BadgeX() {
  return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-white/60"><X className="h-4 w-4" /></span>;
}
