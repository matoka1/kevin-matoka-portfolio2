/*
 * DESIGN: Clinical Modernism meets African Precision
 * Career: Dark navy background, vertical timeline with gold connector rail
 * Alternating left/right layout on desktop, single column on mobile
 */
import { motion } from "framer-motion";

const timeline = [
  {
    period: "2023 – Present",
    title: "Head of Department, School of Nursing",
    org: "Nakuru College of Health Science and Management",
    location: "Nakuru, Kenya",
    type: "Leadership",
    icon: "fa-building-columns",
    color: "#C9A84C",
    points: [
      "Lead curriculum development and academic quality assurance for the nursing program",
      "Supervise clinical placements for 500+ nursing students across partner hospitals",
      "Facilitate BLS, ATLS, and ACLS certification training for staff and students",
      "Coordinate research activities and community health outreach programs",
    ],
  },
  {
    period: "2022 – 2023",
    title: "Registered Nursing Officer",
    org: "Nakuru Level 5 Hospital",
    location: "Nakuru, Kenya",
    type: "Clinical",
    icon: "fa-hospital",
    color: "#4A90D9",
    points: [
      "Provided comprehensive patient care in medical-surgical and emergency units",
      "Conducted patient assessments, developed care plans, and monitored outcomes",
      "Collaborated with multidisciplinary teams to deliver evidence-based care",
      "Maintained 98% patient satisfaction scores through compassionate care delivery",
    ],
  },
  {
    period: "2021 – 2022",
    title: "Intern Nursing Officer",
    org: "Kenyatta National Hospital",
    location: "Nairobi, Kenya",
    type: "Clinical",
    icon: "fa-stethoscope",
    color: "#5CB85C",
    points: [
      "Completed rotations in ICU, Emergency, Pediatrics, and Obstetrics & Gynecology",
      "Gained hands-on experience in critical care and advanced life support",
      "Participated in quality improvement initiatives and patient safety programs",
      "Received commendation for exceptional clinical performance and professionalism",
    ],
  },
  {
    period: "2017 – 2021",
    title: "BSc. Nursing (Hons)",
    org: "Kenya Methodist University",
    location: "Meru, Kenya",
    type: "Education",
    icon: "fa-graduation-cap",
    color: "#E67E22",
    points: [
      "Graduated with honors in Bachelor of Science in Nursing",
      "Specialized coursework in health informatics and healthcare management",
      "Active member of the university's health technology innovation club",
      "Completed research project on digital health adoption in rural Kenya",
    ],
  },
];

const typeColors: Record<string, string> = {
  Leadership: "#C9A84C",
  Clinical: "#4A90D9",
  Education: "#E67E22",
};

export default function Career() {
  return (
    <section id="career" className="py-24" style={{ background: "#0D1B2A" }}>
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest font-['DM_Sans']">
            My Journey
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-white mt-2 gold-rule-center">
            Career Timeline
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto font-['DM_Sans'] font-light">
            A progressive journey from clinical practice to academic leadership,
            with technology woven throughout.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 lg:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative flex flex-col lg:flex-row ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-start lg:items-center gap-6`}
              >
                {/* Content card */}
                <div className={`flex-1 pl-12 lg:pl-0 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                  <div
                    className={`bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/8 transition-colors duration-300 backdrop-blur-sm ${
                      i % 2 === 0 ? "lg:ml-auto" : ""
                    }`}
                    style={{ maxWidth: "480px" }}
                  >
                    {/* Header */}
                    <div className={`flex items-start gap-3 mb-3 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm font-['DM_Sans']"
                          style={{ background: `${typeColors[item.type]}20`, color: typeColors[item.type] }}
                        >
                          {item.type}
                        </span>
                        <h3 className="font-['Playfair_Display'] text-xl font-bold text-white mt-2">
                          {item.title}
                        </h3>
                        <p className="text-[#C9A84C] text-sm font-medium font-['DM_Sans'] mt-0.5">
                          {item.org}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-white/40 text-xs font-['DM_Sans']">
                            <i className="fas fa-calendar-alt mr-1.5" />{item.period}
                          </span>
                          <span className="text-white/40 text-xs font-['DM_Sans']">
                            <i className="fas fa-location-dot mr-1.5" />{item.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Points */}
                    <ul className={`mt-4 space-y-2 ${i % 2 === 0 ? "lg:text-right" : ""}`}>
                      {item.points.map(pt => (
                        <li
                          key={pt}
                          className={`text-white/60 text-sm font-['DM_Sans'] font-light leading-relaxed flex gap-2 ${
                            i % 2 === 0 ? "lg:flex-row-reverse" : ""
                          }`}
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: item.color }}
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-6 lg:top-1/2 lg:-translate-y-1/2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 bg-[#0D1B2A]"
                    style={{ borderColor: item.color }}
                  >
                    <i className={`fas ${item.icon} text-sm`} style={{ color: item.color }} />
                  </div>
                </div>

                {/* Date label (opposite side on desktop) */}
                <div className={`hidden lg:flex flex-1 ${i % 2 === 0 ? "lg:pl-12" : "lg:pr-12 lg:justify-end"}`}>
                  <span className="text-[#C9A84C] font-['Playfair_Display'] text-lg font-semibold italic">
                    {item.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
