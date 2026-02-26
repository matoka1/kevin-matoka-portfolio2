/*
 * DESIGN: Clinical Modernism meets African Precision
 * Contact: Kenyan night landscape background, dark overlay
 * Split layout: left contact info, right form
 */
import { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_BG = "https://private-us-east-1.manuscdn.com/sessionFile/M8GqHpUNMwu7qEkT26wLzm/sandbox/QWRY8GOH5mPNqTTdCo4fMW-img-5_1772122688000_na1fn_Y29udGFjdC1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTThHcUhwVU5Nd3U3cUVrVDI2d0x6bS9zYW5kYm94L1FXUlk4R09INW1QTnFUVGRDbzRmTVctaW1nLTVfMTc3MjEyMjY4ODAwMF9uYTFmbl9ZMjl1ZEdGamRDMWlady5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ab2gAk6~Kx45X~NNC4oWsIJZKNXeRmNFIDVN6WfsJ5qBP0UVlnY8RhFFTaen~ScXxOsUGUjRwCfPmLHU7HtEfmzATHxOuX080a36yHyhu2rBKulq8ydYLTFXsrqXRAkH-ip5P84yDZfTqdUQsiapqtWjUnwO1gpgAk6ObDJsCiDQYAdJlGl0vEpH6Y~GYwV7w6IZRbjjh~xkznDuG5pDHDKjb5tY2FIjuuEBaNQjzV7bEIOMnYqKjI6Fs1hJIti5kOUGEIb7iiwXxaI7f~hosMaHLC3keEQYjbQmsl-Dq~GapcXDQGoGxVNj9Zi8e~OANCYDf6NuU5Dqu9QyxdTzUA__";

const contactInfo = [
  {
    icon: "fa-envelope",
    label: "Email",
    value: "matokakevin98@gmail.com",
    href: "mailto:matokakevin98@gmail.com",
  },
  {
    icon: "fa-phone",
    label: "Phone",
    value: "+254 790 969 743",
    href: "tel:+254790969743",
  },
  {
    icon: "fa-location-dot",
    label: "Location",
    value: "Nakuru, Kenya",
    href: null,
  },
  {
    icon: "fa-linkedin",
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "#",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate submission
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${CONTACT_BG})` }}
      />
      <div className="absolute inset-0 bg-[#0D1B2A]/85" />

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
            Let's Connect
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-white mt-2 gold-rule-center">
            Get In Touch
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto font-['DM_Sans'] font-light">
            Whether you're looking to collaborate on a healthcare technology project,
            discuss clinical education, or simply connect — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Contact info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-sm px-5 py-4 hover:bg-white/8 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-sm bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                  <i className={`${info.icon.startsWith("fa-linkedin") ? "fab" : "fas"} ${info.icon} text-[#C9A84C] text-sm`} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider font-['DM_Sans']">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white text-sm font-medium font-['DM_Sans'] hover:text-[#C9A84C] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium font-['DM_Sans']">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability badge */}
            <div className="mt-2 flex items-center gap-3 px-5 py-4 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <p className="text-white/80 text-sm font-['DM_Sans']">
                Available for consulting, collaborations, and speaking engagements
              </p>
            </div>
          </motion.div>

          {/* Right: Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 bg-white/5 border border-white/10 rounded-sm"
              >
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center mb-4">
                  <i className="fas fa-check text-[#C9A84C] text-2xl" />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="text-white/60 mt-2 font-['DM_Sans'] font-light">
                  Thank you for reaching out. Kevin will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-sm p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider font-['DM_Sans'] block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-white/8 border border-white/15 rounded-sm px-4 py-3 text-white text-sm font-['DM_Sans'] placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                      placeholder="e.g. Dr. Jane Wanjiku"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider font-['DM_Sans'] block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-white/8 border border-white/15 rounded-sm px-4 py-3 text-white text-sm font-['DM_Sans'] placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider font-['DM_Sans'] block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="w-full bg-white/8 border border-white/15 rounded-sm px-4 py-3 text-white text-sm font-['DM_Sans'] placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                    placeholder="e.g. Collaboration Opportunity"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider font-['DM_Sans'] block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-white/8 border border-white/15 rounded-sm px-4 py-3 text-white text-sm font-['DM_Sans'] placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/60 transition-colors resize-none"
                    placeholder="Tell Kevin about your project, question, or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 bg-[#C9A84C] text-[#0D1B2A] font-semibold text-sm font-['DM_Sans'] rounded-sm hover:bg-[#d4b660] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A84C]/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <>
                      <i className="fas fa-spinner fa-spin text-sm" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane text-sm" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
