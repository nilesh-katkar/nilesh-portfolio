import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <hr className="divider" />
      <Skills />
      <hr className="divider" />
      <Experience />
      <hr className="divider" />
      <Projects />
      <hr className="divider" />
      <Education />
      <hr className="divider" />
      <Contact />
      <footer>
        <p>nileshkatkar-dev · Built with care © 2026</p>
      </footer>
      {/* Scroll animations — runs after mount */}
      <ScrollReveal />
    </>
  );
}
