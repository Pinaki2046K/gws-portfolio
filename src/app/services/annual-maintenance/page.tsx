"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  CalendarDays,
  Wrench,
  ShieldCheck,
  Clock,
  BadgeCheck,
  AlertCircle,
} from "lucide-react";

const inclusions = [
  "Scheduled preventive maintenance visits (quarterly)",
  "Filter and membrane inspection & cleaning",
  "Chemical dosing system check and calibration",
  "Motor, pump and blower performance check",
  "Electrical panel and control system inspection",
  "Water quality testing and TDS monitoring",
  "Sludge and backwash system servicing",
  "Full service report after every visit",
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "System Longevity",
    desc: "Regular servicing extends the life of your RO membranes, pumps, and filters by up to 40%.",
  },
  {
    icon: CalendarDays,
    title: "Planned Visits",
    desc: "Pre-scheduled quarterly visits so your operations are never disrupted unexpectedly.",
  },
  {
    icon: Clock,
    title: "Priority Response",
    desc: "AMC customers get priority service calls with a guaranteed 24-hour response time.",
  },
  {
    icon: Wrench,
    title: "Expert Technicians",
    desc: "Certified GWS engineers with hands-on experience across 500+ plant installations.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance Ready",
    desc: "We ensure your plant meets TNPCB and CPCB discharge standards at all times.",
  },
  {
    icon: AlertCircle,
    title: "Early Detection",
    desc: "Preventive checks catch faults early — saving you from costly emergency repairs.",
  },
];

const plans = [
  {
    name: "Basic AMC",
    visits: "2 visits / year",
    color: "border-green-200",
    headerColor: "bg-green-50",
    badge: "",
    features: [
      "Bi-annual preventive maintenance",
      "Water quality testing",
      "Filter inspection & cleaning",
      "Service report after each visit",
      "Email support",
    ],
  },
  {
    name: "Standard AMC",
    visits: "4 visits / year",
    color: "border-green-400",
    headerColor: "bg-green-600",
    badge: "Most Popular",
    features: [
      "Quarterly preventive maintenance",
      "Water quality & TDS monitoring",
      "Full system inspection",
      "Chemical dosing calibration",
      "Priority phone support",
      "Detailed service reports",
    ],
  },
  {
    name: "Premium AMC",
    visits: "6 visits / year",
    color: "border-green-300",
    headerColor: "bg-green-800",
    badge: "Best Value",
    features: [
      "Bi-monthly preventive maintenance",
      "Complete system overhaul once a year",
      "Spare parts (consumables) included",
      "24/7 emergency support",
      "Dedicated service engineer",
      "Monthly water quality reports",
      "TNPCB compliance documentation",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Site Assessment",
    desc: "Our engineer visits your site to assess the plant capacity, condition, and service requirements.",
  },
  {
    step: "02",
    title: "Custom Proposal",
    desc: "We prepare a tailored AMC proposal with visit schedule, scope of work, and pricing.",
  },
  {
    step: "03",
    title: "Agreement Signing",
    desc: "Sign the AMC agreement and get your first maintenance visit scheduled immediately.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    desc: "Sit back while our team keeps your plant running at peak performance year-round.",
  },
];

export default function AnnualMaintenancePage() {
  return (
    <>
      <PageHero
        title="Annual Maintenance Contract"
        subtitle="Keep your water treatment plant running at peak performance all year round — with scheduled visits, expert care, and priority support."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Annual Maintenance Contract" },
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
              What is an AMC?
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950 mb-5">
              Proactive Care for Your{" "}
              <span className="text-green-500">Water Plant</span>
            </h2>
            <p className="text-green-700 text-base leading-relaxed mb-4">
              An Annual Maintenance Contract (AMC) with Global Water Systems gives
              you peace of mind — knowing your RO plant, STP, ETP, or water treatment
              system is being monitored and maintained by the same experts who built it.
            </p>
            <p className="text-green-700 text-base leading-relaxed">
              Whether you run a hospital, hotel, gated community, or industrial facility,
              our AMC plans are designed to prevent breakdowns, extend equipment life,
              and keep your water quality consistently high.
            </p>
          </motion.div>

          {/* ── Benefits ── */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                Why Choose AMC
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950">
                Benefits of Our AMC
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-green-100 hover:border-green-400 hover:shadow-lg hover:shadow-green-50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors duration-300">
                    <b.icon className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-green-950 text-base mb-2">{b.title}</h3>
                  <p className="text-green-700 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Plans ── */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                Pricing Tiers
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950">
                Choose Your AMC Plan
              </h2>
              <p className="text-green-700 text-base mt-4 max-w-xl mx-auto">
                All plans are customisable. Contact us for a site-specific quote.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-3xl overflow-hidden border-2 ${plan.color} bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col`}
                >
                  {/* Card header */}
                  <div className={`${plan.headerColor} px-8 py-7 relative`}>
                    {plan.badge && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-mono">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className={`font-display text-2xl font-bold mb-1 ${plan.headerColor === "bg-green-50" ? "text-green-950" : "text-white"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm font-mono ${plan.headerColor === "bg-green-50" ? "text-green-600" : "text-green-200"}`}>
                      {plan.visits}
                    </p>
                  </div>

                  {/* Card body */}
                  <div className="p-8 flex flex-col flex-1">
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-green-700 text-base">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-8 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-base transition-all duration-200 shadow-md shadow-green-500/20 hover:shadow-lg"
                    >
                      <span>Get a Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── What's Included ── */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                  Scope of Work
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950 mb-6">
                  {"What's Included in Every AMC Visit"}
                </h2>
                <p className="text-green-700 text-base leading-relaxed mb-8">
                  Every scheduled maintenance visit by our certified engineers covers
                  a comprehensive checklist to ensure your plant operates at full
                  efficiency and within compliance norms.
                </p>
                <ul className="space-y-3">
                  {inclusions.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-green-700 text-base">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right side stat card */}
              <div className="space-y-4">
                {[
                  { value: "500+", label: "Plants Under AMC", sub: "Across Tamil Nadu" },
                  { value: "24hr", label: "Response Guarantee", sub: "For AMC customers" },
                  { value: "98%", label: "Uptime Achieved", sub: "For contracted plants" },
                  { value: "20+", label: "Years Experience", sub: "In water treatment" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-green-100 hover:border-green-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-xl font-bold text-white">{stat.value}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-950 text-base">{stat.label}</div>
                      <div className="text-green-600 text-sm">{stat.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                How It Works
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950">
                Getting Started is Simple
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

          {/* ── CTA ── */}
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
                Ready to Protect Your Investment?
              </h3>

              <p className="text-green-100 text-base mb-8 max-w-xl mx-auto">
                Get in touch today and our team will assess your plant and recommend
                the right AMC plan for your needs and budget.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-green-50 rounded-2xl font-semibold text-green-800 text-base shadow-lg shadow-green-900/20 hover:shadow-xl transition-all duration-200"
                >
                  <span>Request a Quote</span>
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