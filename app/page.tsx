import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
