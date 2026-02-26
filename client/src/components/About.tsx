/*
 * DESIGN: Clinical Modernism meets African Precision
 * About: Light cream background, asymmetric layout
 * Left: editorial text with gold accents; Right: stat cards on navy
 */
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const certifications = [
  { icon: "fa-heart-pulse", label: "BLS", full: "Basic Life Support" },
  { icon: "fa-kit-medical", label: "ATLS", full: "Advanced Trauma Life Support" },
  { icon: "fa-heart-circle-check", label: "ACLS", full: "Advanced Cardiovascular Life Support" },
  { icon: "fa-shield-halved", label: "Cybersec", full: "Cybersecurity Essentials" },
];

const stats = [
  { value: "2+", label: "Years Clinical Experience" },
  { value: "500+", label: "Students Mentored" },
  { value: "1000+", label: "Community Members Served" },
  { value: "98%", label: "Patient Satisfaction" },
];

const highlights = [
  { icon: "fa-graduation-cap", text: "BSc. Nursing, Kenya Methodist University" },
  { icon: "fa-location-dot", text: "Based in Nakuru, Kenya" },
  { icon: "fa-language", text: "Fluent: English & Swahili" },
  { icon: "fa-code", text: "Software Engineering & Database Management" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-[#F5F0E8]">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest font-['DM_Sans']">
            Who I Am
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#0D1B2A] mt-2 gold-rule">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Text (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <p className="text-[#0D1B2A]/80 text-lg leading-relaxed font-['DM_Sans'] font-light">
              I am a detail-oriented and results-driven Nursing Officer with over{" "}
              <strong className="font-semibold text-[#0D1B2A]">2 years of progressive clinical and leadership experience</strong>{" "}
              across diverse healthcare settings. Currently serving as{" "}
              <strong className="font-semibold text-[#0D1B2A]">Head of Department, School of Nursing</strong>{" "}
              at Nakuru College of Health Science and Management.
            </p>

            <div className="mt-6 pl-5 border-l-2 border-[#C9A84C]">
              <p className="text-[#0D1B2A]/80 text-base leading-relaxed font-['DM_Sans']">
                <strong className="text-[#0D1B2A] font-semibold">My unique value:</strong> I combine hands-on clinical expertise
                with technical skills in software engineering, database management, and cybersecurity.
                This dual competency allows me to translate clinical workflows into technical requirements,
                design secure health applications, and implement systems that improve patient care.
              </p>
            </div>

            <p className="mt-6 text-[#0D1B2A]/70 text-base leading-relaxed font-['DM_Sans'] font-light">
              Certified in Basic Life Support (BLS), Advanced Trauma Life Support (ATLS),
              Advanced Cardiovascular Life Support (ACLS), and Cybersecurity Essentials.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 bg-white rounded-sm px-4 py-3 shadow-sm border border-[#0D1B2A]/5"
                >
                  <i className={`fas ${h.icon} text-[#C9A84C] text-sm w-4`} />
                  <span className="text-[#0D1B2A]/80 text-sm font-['DM_Sans']">{h.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <p className="text-[#0D1B2A]/50 text-xs uppercase tracking-widest font-semibold mb-4 font-['DM_Sans']">
                Certifications
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.map(cert => (
                  <div
                    key={cert.label}
                    title={cert.full}
                    className="flex items-center gap-2 bg-[#0D1B2A] text-white px-4 py-2 rounded-sm text-sm font-medium font-['DM_Sans'] hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition-colors duration-200 cursor-default"
                  >
                    <i className={`fas ${cert.icon} text-xs`} />
                    {cert.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                className={`rounded-sm p-6 flex flex-col justify-between ${
                  i % 2 === 0
                    ? "bg-[#0D1B2A] text-white"
                    : "bg-[#C9A84C] text-[#0D1B2A]"
                }`}
                style={{ minHeight: "140px" }}
              >
                <span
                  className={`font-['Playfair_Display'] text-4xl font-bold ${
                    i % 2 === 0 ? "text-[#C9A84C]" : "text-[#0D1B2A]"
                  }`}
                >
                  {stat.value}
                </span>
                <p
                  className={`text-sm font-['DM_Sans'] mt-2 leading-snug ${
                    i % 2 === 0 ? "text-white/70" : "text-[#0D1B2A]/80"
                  }`}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
