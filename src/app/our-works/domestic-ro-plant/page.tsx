"use client";
import WorkDetailPage from "@/components/ui/WorkDetailPage";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const capacities = [
  {
    lph: "10 LPH",
    ideal: "Small homes & studios",
    image: "/images/10lph.png",
    color: "from-green-400 to-green-600",
    variants: ["UV", "UF", "Alkaline", "Mineral Booster", "TDS Controller"],
  },
  {
    lph: "25 LPH",
    ideal: "Apartments & small offices",
    image: "/images/10lph.png",
    color: "from-green-500 to-green-700",
    variants: ["UV", "UF", "Alkaline", "Mineral Booster", "TDS Controller"],
  },
  {
    lph: "50 LPH",
    ideal: "Clinics, canteens & hostels",
    image: "/images/10lph.png",
    color: "from-green-600 to-green-800",
    variants: ["UV", "UF", "Alkaline", "Mineral Booster", "TDS Controller"],
  },
  {
    lph: "100 LPH",
    ideal: "Gated communities & institutions",
    image: "/images/10lph.png",
    color: "from-green-700 to-green-900",
    variants: ["UV", "UF", "Alkaline", "Mineral Booster", "TDS Controller"],
  },
];

const features = [
  "Multi-stage RO + UV + UF purification",
  "Handles TDS up to 2000 ppm",
  "Compact wall-mounted or under-sink design",
  "Auto shut-off and low water pressure cut-off",
  "Food-grade materials throughout",
  "Easy filter replacement with tool-free access",
  "LED indicators for filter life and water quality",
];

export default function DomesticROPlantPage() {
  return (
    <>
      <PageHero
        title="Domestic RO Plant"
        subtitle="Pure, safe drinking water for your home — compact, efficient, and built to last."
        breadcrumbs={[
          { label: "Products & Services", href: "/products" },
          { label: "Domestic RO Plant" },
        ]}
        image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
        tag="Products"
      />

      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
              Overview
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950 mb-5">
              About This <span className="text-green-500">Technology</span>
            </h2>
            <p className="text-green-700 text-base leading-relaxed mb-4">
              A Domestic RO Plant uses advanced Reverse Osmosis membrane technology
              to remove dissolved salts, heavy metals, bacteria, and other
              contaminants from tap, borewell, or municipal water — delivering
              clean, safe drinking water right at your home.
            </p>
            <p className="text-green-700 text-base leading-relaxed">
              Our domestic RO systems are compact, easy to install, and require
              minimal maintenance. Designed for Indian water conditions, they
              effectively handle high TDS, hardness, and microbial contamination.
            </p>
          </motion.div>

          {/* ── Capacity Cards ── */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                Available Models
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950">
                Choose Your Capacity
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capacities.map((cap, i) => (
                <motion.div
                  key={cap.lph}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-3xl overflow-hidden bg-white border border-green-100 shadow-sm hover:shadow-xl hover:shadow-green-100 hover:border-green-300 transition-all duration-500"
                >
                  {/* Image placeholder */}
                  <div className="relative h-56 overflow-hidden bg-green-100">
                    <Image
                      src={cap.image}
                      alt={`${cap.lph} RO Plant`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent" />
                    {/* LPH badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className={`inline-block px-5 py-2 rounded-full bg-gradient-to-r ${cap.color} text-white font-display text-2xl font-bold shadow-lg`}>
                        {cap.lph}
                      </span>
                    </div>
                    {/* Ideal for tag */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 rounded-full bg-white/90 text-green-700 text-xs font-mono">
                        {cap.ideal}
                      </span>
                    </div>
                  </div>

                  {/* Variants */}
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-green-950 mb-4">
                      Available Variants
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {cap.variants.map((variant, vi) => (
                        <div
                          key={variant}
                          className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-100 hover:border-green-300 hover:bg-green-100 transition-all duration-200"
                        >
                          <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                            {vi + 1}
                          </div>
                          <span className="text-green-800 text-base font-medium">{variant}</span>
                          <CheckCircle2 className="w-4 h-4 text-green-400 ml-auto" />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl font-bold text-green-950">
                Key Features
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-green-100 hover:border-green-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span className="text-base text-green-700">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl font-bold text-green-950">
                Purification Process
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Pre-Filter", desc: "Sediment and carbon pre-filtration to remove suspended particles and chlorine." },
                { step: "02", title: "RO Membrane", desc: "High-rejection RO membrane removes dissolved salts, heavy metals and bacteria." },
                { step: "03", title: "UV / UF", desc: "UV sterilisation and ultrafiltration eliminates viruses and residual microbes." },
                { step: "04", title: "Post Polish", desc: "Final activated carbon polishing for taste, odour and pure output water." },
              ].map((step, i) => (
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
                    <p className="text-green-700 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-10 rounded-3xl bg-green-600 border border-green-500"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Get a Custom Quote
            </h3>
            <p className="text-green-100 text-base mb-6">
              Tell us your requirements and we&apos;ll recommend the right capacity and variant for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-green-50 rounded-2xl font-semibold text-green-800 text-base shadow-lg shadow-green-900/20 hover:shadow-xl transition-all duration-200"
            >
              <span>Contact Our Engineers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
}