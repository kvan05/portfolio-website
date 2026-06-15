import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Roadmap } from "@/components/sections/Roadmap";
import { Statistics } from "@/components/sections/Statistics";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { TechSphere } from "@/components/sections/TechSphere";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Roadmap />
      <Statistics />
      <WhyWorkWithMe />
      <TechSphere />
      <Contact />
    </div>
  );
}
