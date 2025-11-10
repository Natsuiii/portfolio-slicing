// components/sections/AboutSection.tsx
import Image from "next/image";
import Link from "next/link";
import { Code2, Globe, Component as ComponentIcon, Smartphone, Github, Linkedin, Instagram, Link2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            <span className="block">
              I turn ideas and designs into functional, accessible, and performant websites 
            </span>
            <span className="block text-[#25CED1]">
              using modern frontend technologies.
            </span>
          </h2>

          <div className="shrink-0">
            <div className="text-right text-sm text-white/70 mb-3">About Me</div>
            <div className="flex items-center justify-end gap-3">
              <Social icon={<Github className="h-4 w-4" />} href="#" />
              <Social icon={<Instagram className="h-4 w-4" />} href="#" />
              <Social icon={<Linkedin className="h-4 w-4" />} href="#" />
              <Social icon={<Link2 className="h-4 w-4" />} href="#" />
            </div>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-white/10" />

        <div className="grid gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10">
            <Image
              src="/about-filler.jpg"   
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Feature
              icon={<Code2 className="h-5 w-5 text-[#25CED1]" />}
              title="Frontend Development"
              desc="I build responsive, accessible, and scalable websites using modern frontend tools and best practices."
            />
            <Feature
              icon={<Globe className="h-5 w-5 text-[#25CED1]" />}
              title="Web Performance"
              desc="I optimize websites for speed and efficiency to ensure smooth experiences across all devices."
            />
            <Feature
              icon={<ComponentIcon className="h-5 w-5 text-[#25CED1]" />}
              title="Component Based UI"
              desc="Reusable UI components that are clean, maintainable, and aligned with design systems."
            />
            <Feature
              icon={<Smartphone className="h-5 w-5 text-[#25CED1]" />}
              title="Responsive Design"
              desc="Every layout adapts beautifully from mobile to desktop with careful spacing & typography."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Social({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition"
      target="_blank"
      rel="noreferrer"
      aria-label="Social link"
    >
      {icon}
    </Link>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-md border border-white/15 bg-white/5 p-2">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/70">{desc}</p>
      </div>
    </div>
  );
}
