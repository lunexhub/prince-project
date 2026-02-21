import { CheckCircle2, ArrowRight, Target, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "Every claim is reviewed with meticulous attention to ensure accuracy and compliance.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear, honest reporting on every claim — no surprises, no hidden processes.",
  },
  {
    icon: Heart,
    title: "Commitment",
    desc: "We treat your revenue as if it were our own — relentless in pursuit of every rand owed.",
  },
];

const team = [
  {
    initial: "H",
    name: "Humbulani Siligana",
    role: "Co-Founder & CEO",
    phone: "068 051 8757",
    bio: "Experienced medical biller and coder with deep expertise in claim submission, denial management, and regulatory compliance. Humbulani leads Vconsol's operational strategy and client relationships.",
  },
  {
    initial: "P",
    name: "Prince Ramanala",
    role: "Co-Founder",
    phone: "065 954 2950",
    bio: "A visionary co-founder dedicated to building scalable, compliant billing systems. Prince drives Vconsol's growth strategy and ensures every client receives exceptional service.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      <Navbar />

      {/* ═══ PAGE HERO ══════════════════════════════════════════════════════ */}
      <section className="gradient-section pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-electric" />
            <span className="text-electric font-body text-xs font-semibold tracking-[0.3em] uppercase">
              Our Story
            </span>
            <div className="h-px w-8 bg-electric" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            About <span className="text-stroke">Vconsol</span>
          </h1>
          <p className="text-primary-foreground/55 font-body text-xl max-w-2xl mx-auto leading-relaxed">
            Built by billing experts, for healthcare providers who deserve more than generic solutions.
          </p>
        </div>
      </section>

      {/* ═══ MISSION ════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-background overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-electric" />
              <span className="text-electric font-body text-xs font-semibold tracking-[0.25em] uppercase">
                Our Mission
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Redefining Medical Billing in South Africa
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Vhuthu Consolidation (Vconsol) aims to provide efficient and accurate medical claims submission services to healthcare providers, ensuring compliance with regulatory requirements and maximizing reimbursement. Our goal is to streamline the claims process, reduce administrative burdens, and improve cash flow for our clients.
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-10">
              We combine certified billing expertise with modern, secure technology to deliver a service
              that is transparent, compliant, and results-driven. Our clients trust us because we treat
              their revenue as our own responsibility.
            </p>
            <div className="flex flex-col gap-4">
              {[
                "HIPAA and regulatory compliance at every step",
                "Certified medical billers and coders on your account",
                "Secure, compliant technology and data handling",
                "Dedicated account management and reporting",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-electric shrink-0 mt-0.5" size={18} />
                  <span className="font-body text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="gradient-section rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-electric/10 rounded-full blur-3xl" />
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "5+", label: "Core Services" },
                { value: "98%", label: "Approval Rate" },
                { value: "100%", label: "HIPAA Compliant" },
                { value: "2025", label: "Est. Kempton Park" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-2xl p-6 text-center">
                  <p className="text-electric font-display text-3xl font-bold">{s.value}</p>
                  <p className="text-primary-foreground/50 font-body text-xs mt-1 uppercase tracking-wide">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 glass rounded-2xl p-6">
              <p className="text-primary-foreground/40 font-body text-xs uppercase tracking-widest mb-2">
                Our Location
              </p>
              <p className="text-primary-foreground font-body font-medium">
                46 Highveld Road
              </p>
              <p className="text-primary-foreground/60 font-body text-sm">Kempton Park, 1619</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BUSINESS OBJECTIVES ═══════════════════════════════════════════ */}
      <section className="py-28 bg-secondary/40 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-electric" />
              <span className="text-electric font-body text-xs font-semibold tracking-[0.25em] uppercase">
                Our Goals
              </span>
              <div className="h-px w-8 bg-electric" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">Business Objectives</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "High-Quality Service",
                desc: "Provide high-quality medical claims submission services to healthcare providers.",
              },
              {
                title: "Regulatory Compliance",
                desc: "Ensure compliance with HIPAA and other regulatory requirements.",
              },
              {
                title: "Long-Term Relationships",
                desc: "Build long-term relationships with clients through exceptional customer service.",
              },
              {
                title: "Industry Excellence",
                desc: "Stay up-to-date with industry developments and best practices.",
              },
            ].map((obj) => (
              <div
                key={obj.title}
                className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-deep hover:border-electric/20 transition-all"
              >
                <h3 className="font-display text-xl font-bold text-navy mb-3">{obj.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TARGET MARKET ══════════════════════════════════════════════════ */}
      <section className="py-28 bg-background overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-electric" />
              <span className="text-electric font-body text-xs font-semibold tracking-[0.25em] uppercase">
                Who We Serve
              </span>
              <div className="h-px w-8 bg-electric" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">Target Market</h2>
            <p className="text-muted-foreground font-body text-lg mt-4 max-w-2xl mx-auto">
              We specialize in serving healthcare providers across South Africa who need reliable, compliant medical billing solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Healthcare Providers",
                desc: "Doctors, hospitals, and clinics seeking efficient claims management.",
              },
              {
                title: "Medical Groups",
                desc: "Medical groups and practices requiring scalable billing solutions.",
              },
              {
                title: "Healthcare Facilities",
                desc: "Healthcare facilities looking for comprehensive billing support.",
              },
            ].map((market) => (
              <div
                key={market.title}
                className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-deep hover:border-electric/20 transition-all text-center"
              >
                <h3 className="font-display text-xl font-bold text-navy mb-3">{market.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{market.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUES ════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-secondary/40 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-electric" />
              <span className="text-electric font-body text-xs font-semibold tracking-[0.25em] uppercase">
                What Drives Us
              </span>
              <div className="h-px w-8 bg-electric" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group bg-card border border-border rounded-3xl p-10 shadow-card hover:shadow-deep hover:border-electric/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 gradient-electric rounded-2xl flex items-center justify-center glow-electric-sm mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy mb-3">{v.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ TEAM ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-background overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-electric" />
              <span className="text-electric font-body text-xs font-semibold tracking-[0.25em] uppercase">
                Leadership
              </span>
              <div className="h-px w-8 bg-electric" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">Meet the Founders</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-card border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-deep hover:border-electric/20 transition-all duration-300"
              >
                {/* Top strip */}
                <div className="gradient-section px-10 pt-10 pb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-electric/10 rounded-full blur-2xl" />
                  <div className="w-20 h-20 gradient-electric rounded-2xl flex items-center justify-center glow-electric-sm mb-4 group-hover:scale-105 transition-transform">
                    <span className="text-primary-foreground font-display font-bold text-3xl">
                      {member.initial}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-electric font-body text-sm font-medium">{member.role}</p>
                </div>
                {/* Content */}
                <div className="px-10 py-8">
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="gradient-electric text-primary-foreground font-body font-semibold text-sm px-6 py-3 rounded-full glow-electric-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                  >
                    📞 {member.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[133px] sm:w-[300px] sm:h-[200px] md:w-96 md:h-64 bg-electric/8 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Let's work together.
          </h2>
          <p className="text-primary-foreground/50 font-body text-lg mb-10">
            Reach out to our team and discover how Vconsol can transform your billing operations.
          </p>
          <Link
            to="/contact"
            className="gradient-electric text-primary-foreground font-body font-bold px-10 py-4 rounded-full glow-electric-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2 group"
          >
            Get in Touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
