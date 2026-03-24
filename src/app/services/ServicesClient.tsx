"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { ArrowRight, CalendarDays, ShieldCheck, Wrench } from "lucide-react";

const services = [
  {
    icon: CalendarDays,
    title: "Annual Maintenance Contract",
    desc: "Scheduled quarterly visits, preventive maintenance, water quality testing, and priority support — all under one annual plan.",
    href: "/services/annual-maintenance",
    color: "bg-green-500",
    tags: ["Quarterly Visits", "Preventive Care", "Priority Support"],
    highlights: [
      "4 scheduled visits per year",
      "Water quality & TDS monitoring",
      "Full system inspection",
      "Detailed service reports",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Comprehensive Maintenance Contract",
    desc: "Our most complete coverage — parts, labour, emergency support, and compliance documentation all included in one contract.",
    href: "/services/comprehensive-maintenance",
    color: "bg-green-600",
    tags: ["Parts Included", "Labour Covered", "Compliance Docs"],
    highlights: [
      "Bi-monthly preventive maintenance",
      "Spare parts & consumables included",
      "24/7 emergency support",
      "TNPCB compliance documentation",
    ],
  },
  {
    icon: Wrench,
    title: "Breakdown Call / Call Basis",
    desc: "On-demand repair and emergency support — no contract needed. We respond fast when your plant needs urgent attention.",
    href: "/services/breakdown-call",
    color: "bg-green-700",
    tags: ["On-Demand", "Emergency Response", "No Contract"],
    highlights: [
      "Same-day response for emergencies",
      "Pay only when you need us",
      "Experienced field engineers",
      "All plant types covered",
    ],
  },
];

export default function ServicesClient() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="From scheduled preventive maintenance to emergency breakdown support — we keep your water treatment plant running at peak performance."
        breadcrumbs={[{ label: "Services" }]}
        image="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1920&q=80"
        tag="Maintenance & Support"
      />

      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
              What We Offer
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950 mb-4">
              Service Plans for Every Need
            </h2>
            <p className="text-green-700 text-base leading-relaxed">
              Whether you need a structured annual plan or one-time emergency support,
              Global Water Systems has a service option tailored for you.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-white border border-green-100 hover:border-green-400 shadow-sm hover:shadow-xl hover:shadow-green-100 transition-all duration-500 flex flex-col"
              >
                {/* Card header */}
                <div className={`${service.color} p-8`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-green-100 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Card body */}
                <div className="p-8 flex flex-col flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-green-100 border border-green-200 text-xs font-mono text-green-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 flex-1">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                        <span className="text-green-700 text-base">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="mt-8 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-base transition-all duration-200 shadow-md shadow-green-500/20 hover:shadow-lg group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-green-600 overflow-hidden relative"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-500/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-green-800/30 rounded-full blur-2xl pointer-events-none" />
            <div className="relative p-12 text-center">
              <h3 className="font-display text-3xl font-bold text-white mb-4">
                {"Not sure which plan suits you?"}
              </h3>
              <p className="text-green-100 text-base mb-8 max-w-xl mx-auto">
                {"Talk to our engineers — we'll assess your plant and recommend the right service plan for your needs and budget."}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-green-50 rounded-2xl font-semibold text-green-800 text-base shadow-lg shadow-green-900/20 hover:shadow-xl transition-all duration-200"
                >
                  <span>Talk to an Engineer</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                
                  href="tel:+918489918512"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-500/50 backdrop-blur-sm rounded-2xl font-semibold text-white text-base border border-green-300/40 hover:border-green-200 hover:bg-green-500/70 transition-all duration-200"
                >
                  <span>+91 8489918512</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}