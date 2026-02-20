import { FileText, Search, ShieldX, RefreshCw, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: FileText,
    title: "Medical Claims Submission",
    tagline: "Precise. Timely. Maximised.",
    description:
      "We handle the complete submission process for medical claims — from data capture to transmission — ensuring every claim is accurate, complete, and submitted promptly to reduce payment delays.",
    features: [
      "Electronic and paper claim submission",
      "ICD-10 and CPT coding review",
      "Pre-submission audit and scrubbing",
      "Real-time eligibility verification",
    ],
  },
  {
    icon: Search,
    title: "Claim Tracking & Follow-up",
    tagline: "Never Lose a Claim Again.",
    description:
      "Proactive, consistent follow-up on all submitted claims. We monitor claim status across payers, identify delays early, and take action before small issues become costly write-offs.",
    features: [
      "Real-time claim status monitoring",
      "Payer-specific follow-up protocols",
      "Ageing report management",
      "Detailed progress reporting",
    ],
  },
  {
    icon: ShieldX,
    title: "Denial Management",
    tagline: "Recover What's Rightfully Yours.",
    description:
      "Our team analyses denied claims to identify root causes, correct errors, and resubmit — recovering revenue that would otherwise be lost to avoidable denials.",
    features: [
      "Root cause denial analysis",
      "Denial trend reporting",
      "Corrected claim resubmission",
      "Payer negotiation support",
    ],
  },
  {
    icon: RefreshCw,
    title: "Appeals & Resubmissions",
    tagline: "Fight Every Denied Claim.",
    description:
      "When claims are unfairly denied, we build compelling appeal cases with clinical documentation, regulatory references, and payer-specific knowledge to overturn decisions.",
    features: [
      "Clinical appeal letter drafting",
      "Regulatory and contractual references",
      "Peer-to-peer review coordination",
      "Multi-level appeal tracking",
    ],
  },
  {
    icon: BookOpen,
    title: "Compliance Consulting",
    tagline: "Stay Protected. Stay Compliant.",
    description:
      "We provide guidance on HIPAA regulations, coding compliance, and documentation standards — keeping your practice audit-ready and reducing legal exposure.",
    features: [
      "HIPAA compliance audits",
      "Staff billing education",
      "Documentation standards review",
      "Regulatory change updates",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ═══ PAGE HERO ══════════════════════════════════════════════════════ */}
      <section className="gradient-section pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-electric" />
            <span className="text-electric font-body text-xs font-semibold tracking-[0.3em] uppercase">
              What We Offer
            </span>
            <div className="h-px w-8 bg-electric" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Our <span className="text-stroke">Services</span>
          </h1>
          <p className="text-primary-foreground/55 font-body text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive medical billing solutions — from first submission to final payment — designed
            to maximise your revenue and reduce administrative stress.
          </p>
        </div>
      </section>

      {/* ═══ SERVICES LIST ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-8">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={svc.title}
                  className={`group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-deep transition-all duration-500`}
                >
                  {/* Color block */}
                  <div
                    className={`gradient-section p-10 md:p-14 flex flex-col justify-between relative overflow-hidden ${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-electric/10 rounded-full blur-3xl" />
                    <div>
                      <div className="w-14 h-14 gradient-electric rounded-2xl flex items-center justify-center glow-electric-sm mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="text-primary-foreground" size={24} />
                      </div>
                      <p className="text-electric font-body text-xs uppercase tracking-widest mb-2">{svc.tagline}</p>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4 leading-tight">
                        {svc.title}
                      </h2>
                      <p className="text-primary-foreground/55 font-body text-sm leading-relaxed">
                        {svc.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-8 text-electric font-body text-sm font-semibold">
                      <span>Service {String(i + 1).padStart(2, "0")}</span>
                      <div className="flex-1 h-px bg-electric/30" />
                    </div>
                  </div>

                  {/* Features block */}
                  <div
                    className={`bg-card p-10 md:p-14 flex flex-col justify-center ${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <p className="text-muted-foreground font-body text-xs uppercase tracking-widest mb-6">
                      What's included
                    </p>
                    <ul className="flex flex-col gap-5">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-4">
                          <CheckCircle2
                            className="text-electric shrink-0 mt-0.5"
                            size={18}
                          />
                          <span className="font-body text-foreground text-base">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-electric/8 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to get started?
          </h2>
          <p className="text-primary-foreground/50 font-body text-lg mb-10">
            Contact us today and let's build a billing strategy that works for your practice.
          </p>
          <Link
            to="/contact"
            className="gradient-electric text-primary-foreground font-body font-bold px-10 py-4 rounded-full glow-electric-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2 group"
          >
            Contact Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
