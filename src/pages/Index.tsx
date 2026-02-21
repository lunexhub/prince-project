import { Link } from "react-router-dom";
import { ArrowRight, FileText, Search, ShieldX, RefreshCw, BookOpen } from "lucide-react";
import heroPremium from "@/assets/hero-premium.jpg";
import { useCountUp } from "@/hooks/useCountUp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Stats strip component ──────────────────────────────────────────────────
const stats = [
  { icon: FileText, label: "Claims Processed", end: 500, suffix: "+", desc: "medical claims submitted" },
  { icon: Search,   label: "Success Rate",      end: 98,  suffix: "%", desc: "claim approval rate" },
  { icon: ShieldX,  label: "Denials Resolved",  end: 95,  suffix: "%", desc: "denial recovery rate" },
  { icon: BookOpen, label: "Compliance Score",  end: 100, suffix: "%", desc: "HIPAA compliant" },
];

const StatCard = ({ icon: Icon, label, end, suffix, desc }: (typeof stats)[0]) => {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="flex flex-col items-center text-center group">
      <div className="relative mb-5">
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-60 scale-125" />
        <div className="relative w-16 h-16 gradient-electric rounded-2xl flex items-center justify-center glow-electric-sm group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-0">
          <Icon className="text-primary-foreground" size={26} />
        </div>
        {/* Floating number badge */}
        <div className="absolute -top-3 -right-3 gradient-electric rounded-full w-8 h-8 flex items-center justify-center shadow-deep animate-float">
          <span className="text-primary-foreground font-body font-bold text-[10px]">
            {count}{suffix}
          </span>
        </div>
      </div>
      <p className="text-primary-foreground font-display text-4xl font-bold leading-none mb-1">
        {count}
        <span className="text-electric">{suffix}</span>
      </p>
      <p className="text-primary-foreground/70 font-body text-sm font-medium mt-1">{label}</p>
      <p className="text-primary-foreground/35 font-body text-xs mt-0.5">{desc}</p>
    </div>
  );
};

// ── Services preview ───────────────────────────────────────────────────────
const servicesPrev = [
  { icon: FileText, title: "Claims Submission",     blurb: "Accurate, timely claim submission for maximum reimbursement." },
  { icon: Search,   title: "Tracking & Follow-up",  blurb: "Proactive monitoring to accelerate your payment timelines." },
  { icon: ShieldX,  title: "Denial Management",     blurb: "Strategic resolution of denied claims to recover revenue." },
  { icon: RefreshCw,title: "Appeals & Resubmissions",blurb: "Expert handling of appeals to maximise financial outcomes." },
  { icon: BookOpen, title: "Compliance Consulting", blurb: "HIPAA guidance that keeps your practice protected." },
];

// ── Home page ──────────────────────────────────────────────────────────────
const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      <Navbar />

      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep">
        {/* BG image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroPremium})` }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(216_85%_5%)] via-[hsl(216_85%_5%/0.9)] to-[hsl(216_85%_5%/0.3)]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-60" />
        {/* Orb */}
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-electric/8 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="animate-fade-up flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-electric" />
              <span className="text-electric font-body text-xs font-semibold tracking-[0.3em] uppercase">
                Trusted Medical Billing Specialists
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up-1 font-display leading-[1.05] mb-8">
              <span className="block text-primary-foreground text-4xl sm:text-5xl md:text-7xl font-semibold">
                Medical Billing
              </span>
              <span className="block text-stroke text-5xl sm:text-6xl md:text-8xl font-bold mt-1">
                MADE SIMPLE.
              </span>
            </h1>

            {/* Sub */}
            <p className="animate-fade-up-2 text-primary-foreground/60 font-body text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Vhuthu Consolidation delivers accurate, compliant, and efficient medical claims management —
              so healthcare providers can focus on what matters most: patient care.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-3 flex flex-wrap gap-4 mb-16">
              <Link
                to="/services"
                className="gradient-electric text-primary-foreground font-body font-semibold px-8 py-4 rounded-full glow-electric-sm hover:opacity-90 transition-all flex items-center gap-2 group"
              >
                Explore Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="glass border border-white/15 text-primary-foreground hover:border-electric/40 font-body font-semibold px-8 py-4 rounded-full transition-all"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust bar */}
            <div className="animate-fade-up-4 flex flex-wrap gap-6">
              {["HIPAA Compliant", "Certified Billers", "South Africa"].map((tag) => (
                <div key={tag} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                  <span className="text-primary-foreground/50 font-body text-xs tracking-wide">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/30">
          <span className="font-body text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-electric/60 to-transparent" />
        </div>
      </section>

      {/* ═══ STATS STRIP ═══════════════════════════════════════════════════ */}
      <section className="gradient-section py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ══════════════════════════════════════════════ */}
      <section className="py-28 bg-background overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-electric" />
                <span className="text-electric font-body text-xs font-semibold tracking-[0.25em] uppercase">What We Do</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">
                Our Services
              </h2>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 text-electric font-body text-sm font-semibold hover:gap-3 transition-all group"
            >
              View all services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesPrev.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="group glass-light rounded-2xl p-8 shadow-card hover:shadow-deep border border-border hover:border-electric/20 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="w-12 h-12 gradient-electric rounded-xl flex items-center justify-center mb-6 glow-electric-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="text-primary-foreground" size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy mb-3">{svc.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{svc.blurb}</p>
                </div>
              );
            })}

            {/* CTA card */}
            <div className="gradient-section rounded-2xl p-8 border border-electric/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-full blur-2xl" />
              <p className="text-electric font-body text-xs uppercase tracking-widest mb-3">Ready?</p>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4 leading-tight">
                Simplify Your Billing Today
              </h3>
              <p className="text-primary-foreground/50 font-body text-sm mb-8">
                Partner with Vconsol and watch your reimbursements grow.
              </p>
              <Link
                to="/contact"
                className="gradient-electric text-primary-foreground font-body font-semibold text-sm px-6 py-3 rounded-full glow-electric-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2 group"
              >
                Get in Touch <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[300px] bg-electric/8 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-electric font-body text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Get Started Today
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Revenue Deserves{" "}
            <span className="text-stroke">Expert Care.</span>
          </h2>
          <p className="text-primary-foreground/50 font-body text-lg mb-10 max-w-xl mx-auto">
            Let Vhuthu Consolidation handle the complexity of medical billing while you focus on your patients.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="gradient-electric text-primary-foreground font-body font-bold px-10 py-4 rounded-full glow-electric-sm hover:opacity-90 transition-opacity"
            >
              Contact Us Now
            </Link>
            <Link
              to="/about"
              className="glass border border-white/15 text-primary-foreground hover:border-electric/40 font-body font-semibold px-10 py-4 rounded-full transition-all"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
