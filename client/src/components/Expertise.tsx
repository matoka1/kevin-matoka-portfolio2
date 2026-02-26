/*
 * DESIGN: Clinical Modernism meets African Precision
 * Expertise: Dark navy background with data-network image
 * Skill categories as cards with animated progress bars
 */
import { motion } from "framer-motion";

const SKILLS_BG = "https://private-us-east-1.manuscdn.com/sessionFile/M8GqHpUNMwu7qEkT26wLzm/sandbox/QWRY8GOH5mPNqTTdCo4fMW-img-3_1772122696000_na1fn_c2tpbGxzLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTThHcUhwVU5Nd3U3cUVrVDI2d0x6bS9zYW5kYm94L1FXUlk4R09INW1QTnFUVGRDbzRmTVctaW1nLTNfMTc3MjEyMjY5NjAwMF9uYTFmbl9jMnRwYkd4ekxXSm4uanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=U8WkjsXKOdaLJl7YqJ~Dcn1LnPbUO5vdlqmpPi3S-8bBFv1M5iCTT-w9eePi2c3PV517LGX1Zz4LnKkEDaN2xUE35lUDv3Fdrk3qINhU8oL3PcqQIkLXuFRW~SZGshQv2qaVRNVOFpJP2VWLl1zclE~X5NLZLFLbAOQrb1aqPAdfABhCSbTThb4oG23R03N0h2gQVLU53wpST3Yx0si5vGO5aNQi39f3GySCLohzHCcrYfWt~-Nt1gkFZKyBYRaJdnCLEyOit-~iNgBLbEFyoKEwzYthAibf3NpsYkonZCSmPHL--WV9apnTZc4K-0MPybwzxLRodwJmiLHbonYJZg__";

const skillCategories = [
  {
    icon: "fa-heartbeat",
    title: "Clinical Nursing",
    color: "#C9A84C",
    skills: [
      { name: "Patient Assessment", level: 95 },
      { name: "Emergency Care", level: 92 },
      { name: "Critical Care", level: 85 },
      { name: "Wound Management", level: 90 },
      { name: "Medication Administration", level: 95 },
    ],
  },
  {
    icon: "fa-laptop-medical",
    title: "Health Technology",
    color: "#4A90D9",
    skills: [
      { name: "EHR Systems", level: 90 },
      { name: "Health Informatics", level: 85 },
      { name: "Telemedicine", level: 75 },
      { name: "Clinical Data Analysis", level: 80 },
      { name: "Digital Health Tools", level: 82 },
    ],
  },
  {
    icon: "fa-code",
    title: "Software Engineering",
    color: "#5CB85C",
    skills: [
      { name: "Database Management", level: 80 },
      { name: "Web Development", level: 75 },
      { name: "Cybersecurity", level: 78 },
      { name: "Systems Analysis", level: 82 },
      { name: "API Integration", level: 70 },
    ],
  },
  {
    icon: "fa-chalkboard-teacher",
    title: "Leadership & Education",
    color: "#E67E22",
    skills: [
      { name: "Curriculum Development", level: 90 },
      { name: "Clinical Supervision", level: 92 },
      { name: "Team Leadership", level: 88 },
      { name: "Research & Publication", level: 75 },
      { name: "Community Outreach", level: 85 },
    ],
  },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-white/80 text-sm font-['DM_Sans']">{name}</span>
        <span className="text-white/50 text-xs font-['DM_Sans']">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0D1B2A" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${SKILLS_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/60 via-transparent to-[#0D1B2A]/60" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest font-['DM_Sans']">
            What I Do
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-white mt-2 gold-rule-center">
            Areas of Expertise
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto font-['DM_Sans'] font-light">
            A rare combination of clinical mastery and technical proficiency, enabling
            end-to-end healthcare innovation.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/8 transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center"
                  style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}40` }}
                >
                  <i className={`fas ${cat.icon} text-sm`} style={{ color: cat.color }} />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-white">
                  {cat.title}
                </h3>
              </div>
              {cat.skills.map(skill => (
                <SkillBar key={skill.name} {...skill} color={cat.color} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
