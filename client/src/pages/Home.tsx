/*
 * DESIGN: Clinical Modernism meets African Precision
 * Home: Assembles all sections in order
 * Sections alternate dark navy / cream backgrounds
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Achievements />
      <Career />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
