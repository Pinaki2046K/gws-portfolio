"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import {
  ArrowRight,
  Phone,
  Zap,
  Clock,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  BadgeCheck,
  HeadphonesIcon,
  MapPin,
} from "lucide-react";

const emergencyTypes = [
  {
    icon: AlertTriangle,
    title: "RO Membrane Failure",
    desc: "Sudden drop in output water quality or flow rate due to membrane damage or fouling.",
    response: "4–6 hrs",
  },
  {
    icon: Zap,
    title: "Pump or Motor Breakdown",
    desc: "High-pressure pump failure, motor burnout, or sudden loss of system pressure.",
    response: "4–6 hrs",
  },
  {
    icon: AlertTriangle,
    title: "Electrical & Control Failure",
    desc: "Panel faults, sensor errors, PLC failures, or complete system shutdown.",
    response: "6–8 hrs",
  },
  {
    icon: Zap,
    title: "Chemical Dosing Issues",
    desc: "Antiscalant or disinfectant dosing system failure affecting water quality.",
    response: "4–6 hrs",
  },
  {
    icon: AlertTriangle,
    title: "Pipe Leaks & Valve Failure",
    desc: "Major leaks, burst pipes, or valve seizure causing system downtime.",
    response: "Same day",
  },
  {
    icon: Zap,
    title: "STP / ETP Breakdown",
    desc: "Biological system failure, blower breakdown, or sludge overflow emergencies.",
    response: "6–8 hrs",
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "Fast Response",
    desc: "We guarantee on-site arrival within 4–8 hours of your call.",
  },
  {
    icon: Wrench,
    title: "Carry Spares",
    desc: "Engineers arrive with common spare parts — no delays.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Engineers",
    desc: "Experienced technicians across 500+ installations.",
  },
  {
    icon: HeadphonesIcon,
    title: "Remote Diagnosis",
    desc: "Quick troubleshooting over call before dispatch.",
  },
];

const process = [
  {
    step: "01",
    title: "Call Us",
    desc: "Call or fill the form with your issue.",
  },
  {
    step: "02",
    title: "Remote Assessment",
    desc: "Engineer assesses severity and guides initial steps.",
  },
  {
    step: "03",
    title: "On-Site Visit",
    desc: "Engineer dispatched with tools and parts.",
  },
  {
    step: "04",
    title: "Repair & Report",
    desc: "Fix, test, and provide report.",
  },
];

const coveredSystems = [
  "RO Plants",
  "STP",
  "ETP",
  "Water Softening",
  "DM Plants",
  "ZLD",
  "MBBR & SAFF",
  "Desalination",
  "Hydro Pneumatic",
  "Chemical Dosing",
  "UV & UF",
  "Filter Press",
];

export default function BreakdownCallPage() {
  return (
    <>
      <PageHero
        title="Breakdown Call / Call Basis"
        subtitle="Plant down? We respond fast — no contract needed."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Breakdown Call / Call Basis" },
        ]}
        image="https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=1920&q=80"
        tag="Emergency Support"
      />

      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Emergency CTA */}
          <motion.div className="mb-20 rounded-3xl bg-green-600 p-10">
            <h2 className="text-3xl font-bold text-white mb-6">
              Plant Down? Call Now
            </h2>

            <div className="flex gap-4 flex-wrap">
              <a
                href="tel:+918489918512"
                className="bg-white text-green-800 px-6 py-3 rounded-xl font-bold flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +91 8489918512
              </a>

              <a
                href="tel:+918489918513"
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +91 8489918513
              </a>
            </div>
          </motion.div>

          {/* Emergency Types */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {emergencyTypes.map((e) => (
              <div key={e.title} className="p-6 bg-white rounded-xl border">
                <e.icon className="w-6 h-6 text-green-600 mb-3" />
                <h3 className="font-semibold">{e.title}</h3>
                <p className="text-sm text-gray-600">{e.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Bottom */}
          <div className="text-center bg-green-600 p-10 rounded-2xl">
            <h3 className="text-white text-2xl font-bold mb-4">
              Need Emergency Support?
            </h3>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="tel:+918489918512"
                className="bg-white text-green-800 px-6 py-3 rounded-xl font-bold"
              >
                Call Now
              </a>

              <Link
                href="/contact"
                className="bg-green-500 text-white px-6 py-3 rounded-xl"
              >
                Contact Form
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}