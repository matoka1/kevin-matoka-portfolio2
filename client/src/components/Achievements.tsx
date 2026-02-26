/*
 * DESIGN: Clinical Modernism meets African Precision
 * Achievements: Cream background, horizontal scrolling achievement cards
 * Gold accent numbers, dark navy text
 */
import { motion } from "framer-motion";

const achievements = [
  {
    icon: "fa-award",
    value: "BLS",
    label: "Basic Life Support",
    issuer: "American Heart Association",
    color: "#C9A84C",
  },
  {
    icon: "fa-shield-heart",
    value: "ATLS",
    label: "Advanced Trauma Life Support",
    issuer: "American College of Surgeons",
    color: "#4A90D9",
  },
  {
    icon: "fa-heart-pulse",
    value: "ACLS",
    label: "Advanced Cardiovascular Life Support",
    issuer: "American Heart Association",
    color: "#E74C3C",
  },
  {
    icon: "fa-shield-halved",
    value: "CyberSec",
    label: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    color: "#5CB85C",
  },
  {
    icon: "fa-graduation-cap",
    value: "BSc",
    label: "Bachelor of Science in Nursing",
    issuer: "Kenya Methodist University",
    color: "#9B59B6",
  },
];

const impactNumbers = [
  { value: "500+", label: "Nursing Students Mentored", icon: "fa-user-graduate" },
  { value: "1,000+", label: "Community Members Served", icon: "fa-people-group" },
  { value: "200+", label: "Healthcare Workers Trained", icon: "fa-stethoscope" },
  { value: "98%", label: "Patient Satisfaction Rate", icon: "fa-heart" },
  { value: "4+", label: "Years in Healthcare", icon: "fa-calendar-check" },
  { value: "2", label: "Hospitals Served", icon: "fa-hospital" },
];

export default function Achievements() {
  return (
    <section className="py-20 bg-white border-t border-[#0D1B2A]/5">
      <div className="container">
        {/* Impact Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest font-['DM_Sans']">
            By The Numbers
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#0D1B2A] mt-2 gold-rule-center">
            Impact & Reach
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {impactNumbers.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="flex flex-col items-center text-center p-5 rounded-sm bg-[#F5F0E8] border border-[#0D1B2A]/5 hover:border-[#C9A84C]/30 hover:shadow-md transition-all duration-300"
            >
              <i className={`fas ${item.icon} text-[#C9A84C] text-xl mb-3`} />
              <span className="font-['Playfair_Display'] text-3xl font-bold text-[#0D1B2A]">
                {item.value}
              </span>
              <p className="text-[#0D1B2A]/60 text-xs mt-1 font-['DM_Sans'] leading-snug">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest font-['DM_Sans']">
            Credentials
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#0D1B2A] mt-2 gold-rule-center">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.value}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center text-center p-6 rounded-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: `${ach.color}30`, background: `${ach.color}08` }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                style={{ background: `${ach.color}20`, border: `1px solid ${ach.color}40` }}
              >
                <i className={`fas ${ach.icon} text-base`} style={{ color: ach.color }} />
              </div>
              <span
                className="font-['Playfair_Display'] text-2xl font-bold"
                style={{ color: ach.color }}
              >
                {ach.value}
              </span>
              <p className="text-[#0D1B2A] text-sm font-semibold mt-1 font-['DM_Sans'] leading-snug">
                {ach.label}
              </p>
              <p className="text-[#0D1B2A]/40 text-xs mt-1 font-['DM_Sans']">{ach.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
