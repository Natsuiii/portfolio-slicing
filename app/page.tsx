// app/page.tsx
import { SiteHeader } from "@/components/Header/Header";
import About from "@/components/sections/About";
import Compare from "@/components/sections/Compare";
import { ContactSection } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import ProjectsSection from "@/components/sections/ProjectsSections";
import { QuestionsSection } from "@/components/sections/Questions";
import ServicesTicker  from "@/components/sections/ServiceTicker";
import Tools from "@/components/sections/Tools";
import TrustedVoicesSection from "@/components/sections/TrustedVoices";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <ServicesTicker />
      <About />
      <Tools maxVisible={6} rowHeight={64}/>
      <Compare />
      <ProjectsSection />
      <Journey />
      <TrustedVoicesSection />
      <QuestionsSection />
      <ContactSection />
    </main>
  );
}
