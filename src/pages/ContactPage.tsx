import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
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
              Reach Out
            </span>
            <div className="h-px w-8 bg-electric" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Get in <span className="text-stroke">Touch</span>
          </h1>
          <p className="text-primary-foreground/55 font-body text-xl max-w-xl mx-auto leading-relaxed">
            Whether you're ready to start or just exploring your options, our team is here to help.
          </p>
        </div>
      </section>

      {/* ═══ CONTACT LAYOUT ═════════════════════════════════════════════════ */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Left: info cards (2/5) */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Address */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-deep hover:border-electric/20 transition-all group">
                <div className="w-12 h-12 gradient-electric rounded-xl flex items-center justify-center glow-electric-sm mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <MapPin className="text-primary-foreground" size={20} />
                </div>
                <p className="font-body font-semibold text-navy text-sm uppercase tracking-wide mb-2">
                  Office Address
                </p>
                <p className="font-body text-muted-foreground text-base leading-relaxed">
                  46 Highveld Road<br />
                  Kempton Park, 1619
                </p>
              </div>

              {/* Hours */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-deep hover:border-electric/20 transition-all group">
                <div className="w-12 h-12 gradient-electric rounded-xl flex items-center justify-center glow-electric-sm mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Clock className="text-primary-foreground" size={20} />
                </div>
                <p className="font-body font-semibold text-navy text-sm uppercase tracking-wide mb-2">
                  Business Hours
                </p>
                <div className="flex flex-col gap-1">
                  <p className="font-body text-muted-foreground text-sm">Mon – Fri: 08:00 – 17:00</p>
                  <p className="font-body text-muted-foreground text-sm">Sat: 09:00 – 13:00</p>
                  <p className="font-body text-muted-foreground text-sm">Sun: Closed</p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-deep hover:border-electric/20 transition-all group">
                <div className="w-12 h-12 gradient-electric rounded-xl flex items-center justify-center glow-electric-sm mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Mail className="text-primary-foreground" size={20} />
                </div>
                <p className="font-body font-semibold text-navy text-sm uppercase tracking-wide mb-2">
                  Email
                </p>
                <p className="font-body text-muted-foreground text-sm">
                  info@vhuthuconsolidation.co.za
                </p>
              </div>
            </div>

            {/* Right: team contact (3/5) */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {/* Premium call-to-action panel */}
              <div className="gradient-section rounded-3xl p-10 relative overflow-hidden border border-electric/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-electric/5 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-electric font-body text-xs uppercase tracking-widest mb-3">
                    Call Us Directly
                  </p>
                  <h2 className="font-display text-3xl font-bold text-primary-foreground mb-3 leading-tight">
                    Speak to Our Team
                  </h2>
                  <p className="text-primary-foreground/50 font-body text-sm mb-10 max-w-md leading-relaxed">
                    Our founders are directly reachable. No call centres, no queues — just real
                    expertise, ready to help your practice thrive.
                  </p>

                  <div className="flex flex-col gap-5">
                    {[
                      { initial: "P", name: "Prince Ramanala", role: "Co-Founder", phone: "065 954 2950" },
                      { initial: "H", name: "Humbulani Siligana", role: "Co-Founder & CEO", phone: "068 051 8757" },
                    ].map((c) => (
                      <div
                        key={c.name}
                        className="glass rounded-2xl p-6 flex items-center gap-5 hover:border-electric/30 transition-colors group"
                      >
                        <div className="w-14 h-14 gradient-electric rounded-xl flex items-center justify-center glow-electric-sm shrink-0 group-hover:scale-105 transition-transform">
                          <span className="text-primary-foreground font-display font-bold text-xl">
                            {c.initial}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-primary-foreground font-body font-semibold text-sm">
                            {c.name}
                          </p>
                          <p className="text-electric font-body text-xs">{c.role}</p>
                        </div>
                        <a
                          href={`tel:${c.phone.replace(/\s/g, "")}`}
                          className="gradient-electric text-primary-foreground font-body font-semibold text-sm px-5 py-2.5 rounded-full glow-electric-sm hover:opacity-90 transition-opacity flex items-center gap-2 group"
                        >
                          <Phone size={14} />
                          {c.phone}
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap gap-6">
                      {["HIPAA Compliant", "Certified Experts", "South Africa"].map((tag) => (
                        <div key={tag} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                          <span className="text-primary-foreground/40 font-body text-xs tracking-wide">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
                <p className="font-body font-semibold text-navy text-sm uppercase tracking-wide mb-6">
                  What to Expect
                </p>
                <div className="flex flex-col gap-5">
                  {[
                    { step: "01", title: "Initial Consultation", desc: "We discuss your current billing process and identify areas for improvement." },
                    { step: "02", title: "Custom Strategy", desc: "We build a tailored billing plan specific to your practice type and payer mix." },
                    { step: "03", title: "Seamless Onboarding", desc: "Our team integrates with your workflow quickly and without disruption." },
                    { step: "04", title: "Ongoing Results", desc: "Regular reporting and continuous optimisation to keep your revenue growing." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5 items-start">
                      <span className="text-electric font-body font-bold text-xs shrink-0 mt-1 font-mono">{item.step}</span>
                      <div>
                        <p className="font-body font-semibold text-navy text-sm mb-1">{item.title}</p>
                        <p className="font-body text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
