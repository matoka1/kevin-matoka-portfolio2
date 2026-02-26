/*
 * DESIGN: Clinical Modernism meets African Precision
 * Scroll-to-top: Gold button, appears after scrolling 400px
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 bg-[#C9A84C] text-[#0D1B2A] rounded-sm flex items-center justify-center shadow-lg hover:bg-[#d4b660] transition-colors duration-200 hover:shadow-[#C9A84C]/30 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <i className="fas fa-chevron-up text-sm font-bold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
