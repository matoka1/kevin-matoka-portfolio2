/*
 * DESIGN: Clinical Modernism meets African Precision
 * Navbar: Dark navy glass effect on scroll, gold accent on active link
 * Logo: Playfair Display italic, gold accent on last name
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#career", label: "Career" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // Determine active section
      const sections = navLinks.map(l => document.querySelector(l.href));
      let current = "#home";
      sections.forEach(sec => {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 100) current = `#${sec.id}`;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: (el as HTMLElement).offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="font-['Playfair_Display'] text-xl font-bold italic text-white tracking-tight"
        >
          Kevin <span className="text-[#C9A84C]">Matoka</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-sm font-medium transition-colors duration-200 relative ${
                active === link.href
                  ? "text-[#C9A84C]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C9A84C]"
                />
              )}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="ml-2 px-5 py-2 bg-[#C9A84C] text-[#0D1B2A] text-sm font-semibold rounded-sm hover:bg-[#d4b660] transition-colors duration-200"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-lg`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden nav-glass border-t border-white/10"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left py-3 px-2 text-sm font-medium border-b border-white/10 transition-colors ${
                    active === link.href ? "text-[#C9A84C]" : "text-white/80"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="mt-3 px-5 py-2.5 bg-[#C9A84C] text-[#0D1B2A] text-sm font-semibold rounded-sm"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
