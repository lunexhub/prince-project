import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/WhatsApp Image 2026-02-20 at 17.38.22.jpeg";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/10 shadow-nav py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logoImage} 
            alt="Vhuthu Consolidation Logo" 
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <div className="hidden sm:block">
            <p className="text-primary-foreground font-display font-semibold text-base leading-none tracking-wide">
              Vhuthu
            </p>
            <p className="text-electric font-body text-[10px] tracking-[0.25em] uppercase mt-0.5">
              Consolidation
            </p>
          </div>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`relative px-4 py-2 font-body text-sm font-medium tracking-wide rounded-lg transition-colors duration-200 ${
                    active
                      ? "text-electric"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-lg bg-electric/10 border border-electric/20" />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:0659542950"
            className="font-body text-sm font-medium text-primary-foreground/60 hover:text-electric transition-colors"
          >
            065 954 2950
          </a>
          <Link
            to="/contact"
            className="gradient-electric text-primary-foreground font-body font-semibold text-sm px-5 py-2.5 rounded-full glow-electric-sm hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 py-5 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`font-body text-sm font-medium py-2 transition-colors ${
                location.pathname === link.to
                  ? "text-electric"
                  : "text-primary-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="gradient-electric text-primary-foreground font-body font-semibold text-sm px-5 py-3 rounded-full text-center mt-2"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
