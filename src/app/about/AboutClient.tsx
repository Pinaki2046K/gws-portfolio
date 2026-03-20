"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { CheckCircle2, Users, Briefcase, HeartHandshake, Globe2 } from "lucide-react";

const industries = [
  "Tannery",
  "Dyeing / Textile Industry",
  "Food Processing",
  "Dairy / Milk Industry",
  "Paper & Pulp Industry",
  "Pharmaceuticals",
  "Distilleries",
  "Metal Finishing",
  "Refineries",
  "Fertilizers",
  "Ice Cream Industry",
  "Leather Industry",
];

const domesticServices = [
  "Domestic Water Treatment & Solid Waste Management",
  "Residential Waste Water Treatment",
  "RO Plant & Other Domestic Services",
];

const timeline = [
  {
    year: "Inception",
    title: "Company Founded",
    desc: "Global Water Systems was established with a vision to provide clean water solutions for all.",
  },
  {
    year: "Growth",
    title: "Government Contracts",
    desc: "Secured major projects with Tamil Nadu government hospitals and PWD.",
  },
  {
    year: "Expansion",
    title: "Industrial Clients",
    desc: "Expanded scope to serve pharma, textile, and food processing industries.",
  },
  {
    year: "Today",
    title: "Pan Tamil Nadu Presence",
    desc: "Delivering turnkey water treatment projects across 15+ districts in Tamil Nadu.",
  },
];

const sectors = [
  "Residential",
  "Gated Communities",
  "Hotels",
  "Educational Institutions",
  "Industries",
  "Medical Colleges & Hospitals",
  "Government Sectors",
];

export default function AboutClient() {
  return (
    <>
      <PageHero
        title="About Global Water Systems"
        subtitle="A decade of integrated water and wastewater engineering, built on a foundation of quality, sustainability, and customer commitment."
        breadcrumbs={[{ label: "About Us" }]}
        image="https://images.unsplash.com/photo-1565715101968-43e03d9c2b6b?w=1920&q=80"
        tag="Who We Are"
      />

      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-24 rounded-3xl bg-green-600 overflow-hidden relative"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-500/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-green-800/30 rounded-full blur-2xl pointer-events-none" />

            <div className="relative grid lg:grid-cols-2 gap-0">
              <div className="p-10 lg:p-14">
                <span className="text-sm font-mono text-green-200 tracking-[0.3em] uppercase block mb-4">
                  About Us
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  End-to-End Water Treatment{" "}
                  <span className="text-green-200">Solutions</span>
                </h2>
                <p className="text-green-100 text-base leading-relaxed mb-6">
                  Global Water Systems delivers end-to-end water treatment solutions
                  for residential, gated communities, hotels, educational institutions,
                  industries, medical colleges and hospitals &amp; government sectors.
                </p>
                <p className="text-green-100 text-base leading-relaxed mb-8">
                  Two decades of water treatment experience with{" "}
                  <span className="font-bold text-white">14,000 satisfied clients</span>{" "}
                  across India in various sectors.
                </p>

                <div className="flex flex-wrap gap-2">
                  {sectors.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-full bg-green-500/40 border border-green-400/50 text-sm text-green-100 font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px bg-green-500/30 border-l border-green-500/30">
                {[
                  { value: "20+", label: "Years of Experience", icon: Globe2 },
                  { value: "14,000+", label: "Satisfied Clients", icon: HeartHandshake },
                  { value: "100+", label: "Govt. Institutions", icon: Briefcase },
                  { value: "38+", label: "Districts Covered", icon: Users },
                ].map(({ value, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center p-8 bg-green-700/40 hover:bg-green-700/60 transition-colors duration-300 text-center"
                  >
                    <Icon className="w-6 h-6 text-green-300 mb-3" />
                    <div className="font-display text-3xl font-bold text-white mb-1">{value}</div>
                    <div className="text-green-200 text-xs font-mono uppercase tracking-wider">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* rest of code unchanged */}

        </div>
      </section>
    </>
  );
}