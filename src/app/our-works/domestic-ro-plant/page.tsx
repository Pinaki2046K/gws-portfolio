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

          {/* ── About Us Intro Banner ── */}
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

          {/* ── Intro grid ── */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
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
              <div className="absolute -bottom-6 -right-4 bg-white border border-green-200 shadow-xl shadow-green-100 rounded-2xl p-4 text-center">
                <div className="font-display text-3xl font-bold text-green-500">20+</div>
                <div className="text-xs text-green-600 font-mono uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                Our Story
              </span>
              <h2 className="font-display text-4xl font-bold text-green-950 mb-6 leading-tight">
                Integrated Solutions for a{" "}
                <span className="text-green-500">Water-Secure World</span>
              </h2>
              <p className="text-green-700 text-base leading-relaxed mb-4">
                Global Water Systems provides Environmental Services, Consultancy
                Services, Design, Erection and Commissioning of RO Plants, Softeners,
                Pressure Sand Filters, Activated Carbon Filters, Iron Removal Filters,
                Effluent Treatment Plants (ETP), Sewage Treatment Plants (STP), Hydro
                Pneumatic Systems, and Water Treatment Chemicals.
              </p>
              <p className="text-green-700 text-base leading-relaxed mb-6">
                We specialize in Water, Wastewater, and Industrial Effluent Systems and
                offer integrated solutions for customer satisfaction. Our company has two
                decades of experience executing turnkey projects — for Industry, Home,
                Colleges, Hospitals, Educational Institutions, and Club Projects.
              </p>
              <div className="p-5 rounded-2xl bg-green-100 border border-green-200">
                <p className="text-base text-green-900 font-semibold mb-1">Quality Policy</p>
                <p className="text-base text-green-700 italic">
                  &quot;Committed for Consistent Technology Upgradation &amp; Pure Environment&quot;
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Management & Operational Team ── */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                Our People
              </span>
              <h2 className="font-display text-4xl font-bold text-green-950">
                The Team Behind the Water
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Management */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl overflow-hidden border border-green-100 shadow-sm bg-white"
              >
                <div className="bg-green-600 px-8 py-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold text-white font-display">
                    M
                  </div>
                  <div>
                    <p className="text-green-200 text-xs font-mono uppercase tracking-widest mb-0.5">
                      Management Team
                    </p>
                    <h3 className="font-display text-xl font-bold text-white">
                      A. Maraimozhi
                    </h3>
                    <p className="text-green-200 text-sm">BTech Chem, MBA — Proprietor</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-green-700 text-base leading-relaxed mb-6">
                    With a Chemical Engineering background and an MBA, Mr. Maraimozhi
                    brings strong technical expertise and strategic vision to Global Water
                    Systems — driving excellence across various sectors in India for more
                    than two decades.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Chemical Engineering", "MBA", "2+ Decades Experience", "Pan India"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-green-50 border border-green-200 text-sm font-mono text-green-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Operational */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl overflow-hidden border border-green-100 shadow-sm bg-white"
              >
                <div className="bg-green-700 px-8 py-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-green-200 text-xs font-mono uppercase tracking-widest mb-0.5">
                      Operational Team
                    </p>
                    <h3 className="font-display text-xl font-bold text-white">
                      Our Workforce
                    </h3>
                    <p className="text-green-200 text-sm">Admin · Sales · Service Support</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-green-700 text-base leading-relaxed mb-6">
                    At Global Water Systems, we believe in the satisfaction of our customers
                    by fulfilling their water treatment needs. With our strong admin, sales,
                    and service support network across India, we have reached a client base
                    of{" "}
                    <span className="font-bold text-green-900">14,000+ satisfied customers</span>.
                  </p>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { label: "Admin", desc: "Strong backend ops" },
                      { label: "Sales", desc: "Pan India reach" },
                      { label: "Service", desc: "24/7 support" },
                    ].map(({ label, desc }) => (
                      <div
                        key={label}
                        className="p-3 rounded-xl bg-green-50 border border-green-100"
                      >
                        <div className="font-semibold text-green-900 text-base mb-0.5">{label}</div>
                        <div className="text-green-600 text-xs">{desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Scope of Services ── */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                Scope of Services
              </span>
              <h2 className="font-display text-4xl font-bold text-green-950">
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
                className="p-8 rounded-2xl bg-white border border-green-100 shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-green-950 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm font-mono text-green-600">
                    A
                  </span>
                  Domestic
                </h3>
                <ul className="space-y-3">
                  {domesticServices.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-green-700 text-base">{s}</span>
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
                className="p-8 rounded-2xl bg-white border border-green-100 shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-green-950 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm font-mono text-green-600">
                    B
                  </span>
                  Industry — Turnkey Solutions
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {industries.map((ind) => (
                    <div key={ind} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                      <span className="text-green-700 text-sm">{ind}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Timeline ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                Our Journey
              </span>
              <h2 className="font-display text-4xl font-bold text-green-950">
                Growth Through Excellence
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-400/60 via-green-300/30 to-transparent hidden md:block" />
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
                      <div className="inline-block p-6 rounded-2xl bg-white border border-green-100 hover:border-green-400 hover:shadow-md hover:shadow-green-100 transition-all duration-300">
                        <span className="text-sm font-mono text-green-600 tracking-wider uppercase">
                          {item.year}
                        </span>
                        <h3 className="font-semibold text-green-950 text-base mt-1 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-green-700 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-green-500 border-4 border-green-50 flex-shrink-0 relative z-10" />
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