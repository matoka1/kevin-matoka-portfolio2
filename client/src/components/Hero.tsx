/*
 * DESIGN: Clinical Modernism meets African Precision
 * Hero: Full-viewport dark navy with ECG hero-bg image
 * Split layout: left text block, right circular portrait
 * ECG SVG line animates on load
 */
import { motion } from "framer-motion";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/M8GqHpUNMwu7qEkT26wLzm/sandbox/QWRY8GOH5mPNqTTdCo4fMW-img-1_1772122689000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTThHcUhwVU5Nd3U3cUVrVDI2d0x6bS9zYW5kYm94L1FXUlk4R09INW1QTnFUVGRDbzRmTVctaW1nLTFfMTc3MjEyMjY4OTAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qTR111pTJ~~sn1EvHJwuYXBKhOr0XTyxc4kKSQlvzAU1HPWazCwsihDq24VkgDoum4wBhsrMr1xFbpyaB-A2leF-gGDfa9uFsYxA1xAj2G5LzZrJIU8rZYXwWrvx~25tK7WlTATYzb7SEdFAdgtVCpgnFYfBz3MDIz5o~KoD2ru9wr5WffhijuVQPqF-72uB9wyRJl9W0gX~nooFMikvku7hXcP0wOnU85sEm3DAY~Uzj~Ojlm91Z10~A~08c4mpfq28-ba9rmjb85imC28w3yh~8ktIHLKGlKSx1XFhU8zocPZvoR7GQUNR2IqV7CsLpL4qNjkwEyzIznfc~kimTQ__";

const PROFILE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/M8GqHpUNMwu7qEkT26wLzm/sandbox/QWRY8GOH5mPNqTTdCo4fMW-img-4_1772122685000_na1fn_cHJvZmlsZS1wbGFjZWhvbGRlcg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTThHcUhwVU5Nd3U3cUVrVDI2d0x6bS9zYW5kYm94L1FXUlk4R09INW1QTnFUVGRDbzRmTVctaW1nLTRfMTc3MjEyMjY4NTAwMF9uYTFmbl9jSEp2Wm1sc1pTMXdiR0ZqWldodmJHUmxjZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Lh7Rr4gY8gUnSuGtrE0rOWZvv8ukSHv0YuLj1kVVaTBAD5V2B53U0T1wW2dU4u2ekobVEpmG6rstnwaKVVO2GWPgjk2Ey47Vox-7DcQm~ZmzHIjUHUsTqNPMKhcrckr2-wlrcN6kzY4JekJfLiSlROBEt9r0XIus~fzJYJ65uXjxBGqbaanm2KvwX1ZcJQsWguZhlIyIlFkziJV5-I4bEYH5lkzkafnJLSwKV66yfQ7TdYSAMOzM3ByrdebMB7SV6m90vo1pMkslUpHV~pfmB6A3e2R462ZenTvriXnOuWS8b2nR4txTrSf7TMSURIW0zAAOxEHiAIjcCtwbKMkFKw__";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 72, behavior: "smooth" });
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "#0D1B2A",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/80 to-transparent" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest font-['DM_Sans']">
                Nursing Officer · Healthcare Technologist · Educator
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-['Playfair_Display'] text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              Kevin <br />
              <span className="italic text-[#C9A84C]">Matoka</span>{" "}
              <span className="text-white">Tiong'i</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-white/70 text-lg leading-relaxed max-w-lg font-['DM_Sans'] font-light"
            >
              Bridging clinical excellence with technical innovation to build safer,
              more efficient, and data-driven healthcare systems in Kenya and beyond.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#projects")}
                className="px-7 py-3 bg-[#C9A84C] text-[#0D1B2A] font-semibold text-sm rounded-sm hover:bg-[#d4b660] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A84C]/30 hover:-translate-y-0.5"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-7 py-3 border border-white/30 text-white font-semibold text-sm rounded-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={item} className="mt-12 flex gap-8">
              {[
                { value: "2+", label: "Years Clinical" },
                { value: "500+", label: "Students Mentored" },
                { value: "98%", label: "Patient Satisfaction" },
              ].map(stat => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-['Playfair_Display'] text-3xl font-bold text-[#C9A84C]">
                    {stat.value}
                  </span>
                  <span className="text-white/50 text-xs mt-0.5 font-['DM_Sans']">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-[#C9A84C]/20" />
              <div className="absolute -inset-8 rounded-full border border-[#C9A84C]/10" />
              {/* Portrait circle */}
              <div
                className="portrait-ring relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#C9A84C]/60"
                style={{
                  boxShadow: "0 0 40px oklch(0.72 0.12 75 / 0.25)",
                }}
              >
                <img
                  src={PROFILE_IMG}
                  alt="Kevin Matoka — Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -left-8 bg-[#0D1B2A] border border-[#C9A84C]/40 rounded-sm px-4 py-2.5 shadow-xl"
              >
                <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider">
                  BSc. Nursing
                </p>
                <p className="text-white text-sm font-medium mt-0.5">
                  Kenya Methodist University
                </p>
              </motion.div>
              {/* Floating badge 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-4 -right-8 bg-[#0D1B2A] border border-[#C9A84C]/40 rounded-sm px-4 py-2.5 shadow-xl"
              >
                <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider">
                  Location
                </p>
                <p className="text-white text-sm font-medium mt-0.5">
                  Nakuru, Kenya
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ECG divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-16">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,30 L200,30 L220,30 L230,5 L240,55 L250,30 L260,30 L270,20 L280,40 L290,30 L400,30 L420,30 L430,5 L440,55 L450,30 L460,30 L470,20 L480,40 L490,30 L1200,30"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1.5"
            opacity="0.4"
            className="ecg-line"
          />
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#C9A84C] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
