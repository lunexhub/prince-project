import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <footer className="bg-navy-deep border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 gradient-electric rounded-xl flex items-center justify-center glow-electric-sm">
                <span className="text-primary-foreground font-display font-bold text-sm">V</span>
              </div>
              <div>
                <p className="text-primary-foreground font-display font-semibold">Vhuthu Consolidation</p>
                <p className="text-electric font-body text-[10px] tracking-[0.2em] uppercase">Vconsol</p>
              </div>
            </div>
            <p className="text-primary-foreground/40 font-body text-sm leading-relaxed max-w-xs">
              Premium medical billing services that streamline your practice and maximize reimbursements.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-primary-foreground/30 font-body text-xs uppercase tracking-widest mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/60 hover:text-electric font-body text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-primary-foreground/30 font-body text-xs uppercase tracking-widest mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-primary-foreground/40 font-body text-xs">Prince Ramanala</p>
                <a href="tel:0659542950" className="text-electric font-body text-sm font-semibold hover:underline">
                  065 954 2950
                </a>
              </div>
              <div>
                <p className="text-primary-foreground/40 font-body text-xs">Humbulani Siligana</p>
                <a href="tel:0680518757" className="text-electric font-body text-sm font-semibold hover:underline">
                  068 051 8757
                </a>
              </div>
              <p className="text-primary-foreground/40 font-body text-xs mt-2 leading-relaxed">
                46 Highveld Road<br />Kempton Park, 1619
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/25 font-body text-xs">
            © {new Date().getFullYear()} Vhuthu Consolidation (Vconsol). All rights reserved.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
          <p className="text-primary-foreground/25 font-body text-xs">
            Medical Billing Specialists · South Africa
          </p>
        </div>

        <div className="border-t border-white/5 pt-6 mt-4 text-center">
          <p className="text-primary-foreground/25 font-body text-xs">
            Built by{" "}
            <a
              href="https://www.lunexweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric hover:text-electric/80 transition-colors"
            >
              lunexweb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
