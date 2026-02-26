/*
 * DESIGN: Clinical Modernism meets African Precision
 * Projects: Cream background, editorial card layout with hover lift
 * Gold accent on card borders and category tags
 */
import { motion } from "framer-motion";

const projects = [
  {
    icon: "fa-hospital",
    category: "Clinical Leadership",
    title: "Head of Department — School of Nursing",
    org: "Nakuru College of Health Science and Management",
    period: "2023 – Present",
    description:
      "Leading nursing education and curriculum development, overseeing clinical placements, and mentoring over 500 nursing students. Implemented competency-based assessment frameworks aligned with Kenya Nursing Council standards.",
    tags: ["Curriculum Design", "Clinical Supervision", "Leadership"],
    color: "#C9A84C",
  },
  {
    icon: "fa-shield-halved",
    category: "Health Informatics",
    title: "Healthcare Cybersecurity Initiative",
    org: "Personal Research Project",
    period: "2023",
    description:
      "Researched and documented cybersecurity vulnerabilities in Kenyan healthcare systems. Developed a framework for securing Electronic Health Records (EHR) and patient data in resource-limited settings.",
    tags: ["Cybersecurity", "EHR Systems", "Data Privacy"],
    color: "#4A90D9",
  },
  {
    icon: "fa-users",
    category: "Community Health",
    title: "Community Health Outreach Program",
    org: "Nakuru County Health Services",
    period: "2022 – 2023",
    description:
      "Coordinated health education campaigns reaching over 1,000 community members. Focused on maternal health, disease prevention, and health literacy in underserved communities around Nakuru County.",
    tags: ["Public Health", "Community Outreach", "Health Education"],
    color: "#5CB85C",
  },
  {
    icon: "fa-laptop-medical",
    category: "Digital Health",
    title: "Telemedicine Integration Study",
    org: "Kenya Methodist University",
    period: "2022",
    description:
      "Conducted a feasibility study on telemedicine adoption in rural Kenyan healthcare facilities. Identified key barriers and proposed a phased implementation roadmap for low-bandwidth environments.",
    tags: ["Telemedicine", "Research", "Rural Health"],
    color: "#E67E22",
  },
  {
    icon: "fa-database",
    category: "Health Technology",
    title: "Clinical Database Management System",
    org: "Personal Development Project",
    period: "2023",
    description:
      "Designed and developed a lightweight patient records management system tailored for small clinics in Kenya. Built with offline-first architecture to function in areas with unreliable internet connectivity.",
    tags: ["Database Design", "Software Development", "Health Tech"],
    color: "#9B59B6",
  },
  {
    icon: "fa-graduation-cap",
    category: "Education",
    title: "BLS & ACLS Training Facilitation",
    org: "Nakuru College of Health Sciences",
    period: "2023 – Present",
    description:
      "Certified facilitator for Basic Life Support and Advanced Cardiovascular Life Support training. Trained over 200 healthcare workers and students in emergency response protocols.",
    tags: ["BLS", "ACLS", "Emergency Training"],
    color: "#C9A84C",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#F5F0E8]">
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
            My Work
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#0D1B2A] mt-2 gold-rule">
            Projects & Impact
          </h2>
          <p className="text-[#0D1B2A]/60 mt-4 max-w-xl font-['DM_Sans'] font-light">
            A selection of clinical, educational, and technology initiatives that demonstrate
            the breadth of Kevin's impact across healthcare.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-sm p-6 shadow-sm border border-[#0D1B2A]/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-sm flex items-center justify-center"
                  style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                >
                  <i className={`fas ${project.icon} text-base`} style={{ color: project.color }} />
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm font-['DM_Sans']"
                  style={{ background: `${project.color}15`, color: project.color }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#0D1B2A] leading-snug">
                {project.title}
              </h3>
              <p className="text-[#C9A84C] text-xs font-semibold mt-1 font-['DM_Sans']">
                {project.org}
              </p>
              <p className="text-[#0D1B2A]/40 text-xs mt-0.5 font-['DM_Sans']">{project.period}</p>
              <p className="text-[#0D1B2A]/70 text-sm mt-3 leading-relaxed font-['DM_Sans'] font-light flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-[#0D1B2A]/5 text-[#0D1B2A]/60 rounded-sm font-['DM_Sans']"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
