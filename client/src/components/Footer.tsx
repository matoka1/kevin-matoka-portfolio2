/*
 * DESIGN: Clinical Modernism meets African Precision
 * Footer: Deep navy, gold logo, minimal social links
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060E17] border-t border-white/5 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-['Playfair_Display'] text-xl font-bold italic text-white">
            Kevin <span className="text-[#C9A84C]">Matoka</span>
          </div>

          {/* Tagline */}
          <p className="text-white/40 text-sm font-['DM_Sans'] text-center">
            Clinical Leader & Healthcare Technologist · Nakuru, Kenya
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              title="LinkedIn"
              className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-all duration-200"
            >
              <i className="fab fa-linkedin text-sm" />
            </a>
            <a
              href="#"
              title="GitHub"
              className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-all duration-200"
            >
              <i className="fab fa-github text-sm" />
            </a>
            <a
              href="mailto:matokakevin98@gmail.com"
              title="Email"
              className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-all duration-200"
            >
              <i className="fas fa-envelope text-sm" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs font-['DM_Sans']">
            &copy; {year} Kevin Matoka Tiong'i. All rights reserved.
          </p>
          <p className="text-white/25 text-xs font-['DM_Sans']">
            Built with precision · Nakuru, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
