"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock,
  Wrench,
  CheckCircle2,
  BadgeCheck,
  Users,
  BarChart3,
  Settings,
  FileText,
  Zap,
} from "lucide-react";

const coverage = [
  {
    icon: Wrench,
    title: "Parts & Labour",
    desc: "All spare parts, consumables, and engineer labour costs are fully covered under the contract — no hidden charges.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Support",
    desc: "Round-the-clock emergency support with guaranteed on-site response within 4 hours for critical failures.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Maintenance",
    desc: "Bi-monthly scheduled visits covering full system inspection, cleaning, calibration, and performance testing.",
  },
  {
    icon: BarChart3,
    title: "Performance Monitoring",
    desc: "Monthly water quality reports, TDS tracking, and system efficiency analysis delivered to your inbox.",
  },
  {
    icon: FileText,
    title: "Compliance Documentation",
    desc: "We prepare and maintain all TNPCB and CPCB compliance records, certificates, and inspection documentation.",
  },
  {
    icon: Users,
    title: "Dedicated Engineer",
    desc: "A dedicated GWS engineer assigned to your account — familiar with your plant history and requirements.",
  },
];

const inclusions = [
  "Bi-monthly preventive maintenance visits (6/year)",
  "All spare parts and consumables included",
  "Filter cartridge and membrane replacement",
  "Chemical dosing system maintenance",
  "Motor, pump and blower servicing",
  "Electrical panel and PLC inspection",
  "Complete annual system overhaul",
  "Water quality and TDS testing every visit",
  "Sludge and backwash system servicing",
  "UV lamp and media replacement",
  "24/7 emergency breakdown support",
  "Monthly performance reports",
  "TNPCB compliance documentation",
  "Dedicated account engineer",
];

const exclusions = [
  "Major civil or structural repairs",
  "Damage caused by misuse or third-party interference",
  "Upgrades or capacity expansion works",
  "Power supply issues external to the plant",
];

const comparison = [
  { feature: "Scheduled Visits", amc: "4/year", cmc: "6/year" },
  { feature: "Parts & Consumables", amc: "Not included", cmc: "Fully included" },
  { feature: "Emergency Support", amc: "Priority response", cmc: "24/7 guaranteed" },
  { feature: "Annual Overhaul", amc: "Not included", cmc: "Included" },
  { feature: "Compliance Docs", amc: "Not included", cmc: "Fully managed" },
  { feature: "Dedicated Engineer", amc: "Not included", cmc: "Assigned" },
  { feature: "Monthly Reports", amc: "Not included", cmc: "Included" },
  { feature: "Response Time", amc: "24 hours", cmc: "4 hours" },
];

const process = [
  {
    step: "01",
    title: "Plant Audit",
    desc: "Our senior engineer conducts a full audit of your plant — condition, capacity, age, and current performance.",
  },
  {
    step: "02",
    title: "Custom Proposal",
    desc: "We prepare a detailed CMC proposal with scope, schedule, parts list, and transparent pricing.",
  },
  {
    step: "03",
    title: "Contract Signing",
    desc: "Sign the agreement and your dedicated engineer is assigned immediately — first visit within 7 days.",
  },
  {
    step: "04",
    title: "Ongoing Management",
    desc: "Sit back while we handle everything — maintenance, compliance, emergencies, and monthly reporting.",
  },
];

const suitedFor = [
  { icon: "🏥", label: "Hospitals & Medical Colleges" },
  { icon: "🏭", label: "Industrial Facilities" },
  { icon: "🏨", label: "Hotels & Resorts" },
  { icon: "🏗️", label: "Government Institutions" },
  { icon: "🎓", label: "Educational Campuses" },
  { icon: "🏘️", label: "Large Gated Communities" },
  { icon: "💊", label: "Pharmaceutical Plants" },
  { icon: "🥛", label: "Food & Dairy Industry" },
];

export default function ComprehensiveMaintenancePage() {
  return (
    <>
      <PageHero
        title="Comprehensive Maintenance Contract"
        subtitle="Our most complete service coverage — parts, labour, compliance, and 24/7 emergency support all under one contract."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Comprehensive Maintenance Contract" },
        ]}
        image="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1920&q=80"
        tag="Services"
      />

      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Intro ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
              Total Peace of Mind
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950 mb-5">
              The Most Complete{" "}
              <span className="text-green-500">Service Coverage</span>{" "}
              Available
            </h2>
            <p className="text-green-700 text-base leading-relaxed mb-4">
              The Comprehensive Maintenance Contract (CMC) is our premium service
              offering — designed for facilities where water treatment uptime is
              mission-critical. Hospitals, pharmaceutical plants, large industries,
              and government institutions rely on our CMC for zero-worry operations.
            </p>
            <p className="text-green-700 text-base leading-relaxed">
              Unlike a standard AMC, our CMC covers everything — spare parts,
              consumables, emergency response, compliance documentation, and a
              dedicated engineer who knows your plant inside out.
            </p>
          </motion.div>

          {/* ── Coverage Grid ── */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                What You Get
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950">
                Complete Coverage, Zero Worries
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverage.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-green-100 hover:border-green-400 hover:shadow-lg hover:shadow-green-50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-green-950 text-base mb-2">{item.title}</h3>
                  <p className="text-green-700 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Inclusions & Exclusions ── */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                Scope of Contract
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950">
                {"What's Included"}
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Inclusions */}
              <div className="lg:col-span-2 p-8 rounded-2xl bg-white border border-green-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-green-950">
                    Included in CMC
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {inclusions.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-green-700 text-sm leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Exclusions + Suited For */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-green-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-red-400" />
                    </div>
                    <h3 className="font-display text-base font-bold text-green-950">
                      Not Covered
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full border-2 border-red-300 flex-shrink-0 mt-0.5" />
                        <span className="text-green-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-green-600 border border-green-500">
                  <h3 className="font-display text-base font-bold text-white mb-4">
                    Best Suited For
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {suitedFor.slice(0, 6).map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 p-2 rounded-lg bg-green-500/30 border border-green-400/30"
                      >
                        <span className="text-base">{item.icon}</span>
                        <span className="text-green-100 text-xs leading-tight">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CMC vs AMC Comparison ── */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                Plan Comparison
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950">
                CMC vs AMC — Which Is Right for You?
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-green-100 shadow-sm bg-white"
            >
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-mono text-green-600 uppercase tracking-wider bg-green-50 border-b border-green-100 w-1/3">
                      Feature
                    </th>
                    <th className="text-center px-6 py-4 text-sm font-mono text-green-600 uppercase tracking-wider bg-green-50 border-b border-green-100">
                      Annual Maintenance Contract
                    </th>
                    <th className="text-center px-6 py-4 text-sm font-mono text-white uppercase tracking-wider bg-green-600 border-b border-green-500">
                      Comprehensive Maintenance Contract
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-white" : "bg-green-50/50"}
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-green-900 border-b border-green-50">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-sm text-green-700 text-center border-b border-green-50">
                        {row.amc}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-green-700 text-center border-b border-green-50 bg-green-50">
                        <span className="inline-flex items-center gap-1.5">
                          <BadgeCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {row.cmc}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center mt-8"
            >
              <Link
                href="/services/annual-maintenance"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-green-200 text-green-700 hover:border-green-400 hover:bg-green-50 font-medium text-base transition-all duration-200"
              >
                <span>View AMC Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium text-base shadow-lg shadow-green-500/30 transition-all duration-200"
              >
                <span>Get CMC Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* ── Process ── */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                Getting Started
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950">
                How to Enrol in CMC
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-green-100 hover:border-green-400 hover:shadow-md transition-all duration-300 relative"
                >
                  <div className="font-display text-5xl font-bold text-green-100 absolute top-4 right-4">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-semibold text-green-900 text-base mb-2">{step.title}</h4>
                    <p className="text-green-700 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Stats strip ── */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {[
                { value: "500+", label: "Plants Under Contract", icon: Settings },
                { value: "4 hrs", label: "Emergency Response", icon: Clock },
                { value: "99%", label: "Uptime Guaranteed", icon: ShieldCheck },
                { value: "20+", label: "Years Experience", icon: BadgeCheck },
              ].map(({ value, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-green-100 text-center hover:border-green-300 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="font-display text-3xl font-bold text-green-500 mb-1">{value}</div>
                  <div className="text-green-600 text-sm font-mono uppercase tracking-wider">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── CTA ── */}
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
                Ready for Total Coverage?
              </h3>
              <p className="text-green-100 text-base mb-8 max-w-xl mx-auto">
                {"Contact us today for a free plant audit and we'll prepare a custom CMC proposal tailored to your facility."}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-green-50 rounded-2xl font-semibold text-green-800 text-base shadow-lg shadow-green-900/20 hover:shadow-xl transition-all duration-200"
                >
                  <span>Get a Free Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                
                  href="tel:+918489918512"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-500/50 backdrop-blur-sm rounded-2xl font-semibold text-white text-base border border-green-300/40 hover:border-green-200 hover:bg-green-500/70 transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-green-200" />
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