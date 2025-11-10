import Link from "next/link";
import { GridBackground } from "@/components/GridBackground/GridBackground";
import Lanyard from "@/components/Lanyard/Lanyard";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative z-30 overflow-hidden">
      <GridBackground className="py-32 md:py-36 min-h-[100vh]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
          <div className="text-left">
            <p className="text-sm text-cyan-200/90">
              Hi, I'm Owen Tamashi Buntoro
            </p>

            <h1 className="mt-3 text-5xl font-extrabold leading-[1.1] text-white sm:text-6xl">
              FRONT <span className="italic text-cyan-300">END</span>
              <br />
              DEVELOPER
            </h1>

            <p className="mt-5 max-w-xl text-base text-white/70">
              Passionate about frontend development, I focus on crafting digital
              products that are visually polished, performance-optimized, and
              deliver a consistent experience across all platforms.
            </p>

            <div className="mt-8">
              <Button asChild className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 min-w-[180px] justify-center shadow-lg shadow-cyan-500/20">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Hire Me
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Lanyard position={[0, 0, 20]}/>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
