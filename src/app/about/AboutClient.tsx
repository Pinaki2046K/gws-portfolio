"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { CheckCircle2 } from "lucide-react";

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

      {/* About content */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Image mosaic */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&q=80"
                      alt="Water plant"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                      alt="Treatment"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-32 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=400&q=80"
                      alt="Engineers"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80"
                      alt="Plant"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 glass-dark border border-primary-500/30 rounded-2xl p-4 text-center shadow-xl">
                <div className="font-display text-3xl font-bold gradient-text">10+</div>
                <div className="text-xs text-white/50 font-mono uppercase tracking-wider">Years Experience</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-mono text-primary-400 tracking-[0.3em] uppercase block mb-3">
                Our Story
              </span>
              <h2 className="font-display text-4xl font-bold text-white mb-6 leading-tight">
                Integrated Solutions for a{" "}
                <span className="gradient-text">Water-Secure World</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Global Water Systems provides Environmental Services, Consultancy
                Services, Design, Erection and Commissioning of RO Plants, Softeners,
                Pressure Sand Filters, Activated Carbon Filters, Iron Removal Filters,
                Effluent Treatment Plants (ETP), Sewage Treatment Plants (STP), Hydro
                Pneumatic Systems, and Water Treatment Chemicals.
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                We specialize in Water, Wastewater, and Industrial Effluent Systems and
                offer integrated solutions for customer satisfaction. Our company has a
                decade of experience executing turnkey projects in this field — for
                Industry, Home, Colleges, Hospitals, Educational Institutions, and Club
                Projects.
              </p>
              <div className="p-5 rounded-2xl glass border border-primary-500/20">
                <p className="text-sm text-white/70 font-semibold mb-1">Quality Policy</p>
                <p className="text-sm text-white/50 italic">
                  "Committed for Consistent Technology Upgradation & Pure Environment"
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scope of Services */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs font-mono text-primary-400 tracking-[0.3em] uppercase block mb-3">
                Scope of Services
              </span>
              <h2 className="font-display text-4xl font-bold text-white section-heading">
                What We Serve
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Domestic */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl glass border border-white/5"
              >
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-sm font-mono text-primary-400">
                    A
                  </span>
                  Domestic
                </h3>
                <ul className="space-y-3">
                  {domesticServices.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/60 text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Industry */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-2xl glass border border-white/5"
              >
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-sm font-mono text-primary-400">
                    B
                  </span>
                  Industry — Turnkey Solutions
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {industries.map((ind) => (
                    <div key={ind} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-400/60 flex-shrink-0" />
                      <span className="text-white/60 text-xs">{ind}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs font-mono text-primary-400 tracking-[0.3em] uppercase block mb-3">
                Our Journey
              </span>
              <h2 className="font-display text-4xl font-bold text-white section-heading">
                Growth Through Excellence
              </h2>
            </motion.div>

            <div className="relative">
              {/* Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/30 to-transparent hidden md:block" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`flex items-center gap-8 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="inline-block p-6 rounded-2xl glass border border-white/5 hover:border-primary-500/30 transition-all">
                        <span className="text-xs font-mono text-primary-400 tracking-wider uppercase">
                          {item.year}
                        </span>
                        <h3 className="font-semibold text-white mt-1 mb-2">{item.title}</h3>
                        <p className="text-white/50 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    {/* Center dot */}
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-primary-500 border-4 border-navy-900 flex-shrink-0 relative z-10" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
