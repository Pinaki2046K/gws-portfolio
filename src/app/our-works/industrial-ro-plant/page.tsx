"use client";
import { useState, useCallback, useEffect } from "react";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  X,
  ZoomIn,
  Droplets,
  Gauge,
  Box,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

/* ── Product Data ── */
const capacities = [
  {
    lph: "250 LPH",
    ideal: "Schools, Restaurants & Small Labs",
    image: "/images/250lph-indus.png",
    color: "from-emerald-400 to-emerald-600",
    description:
      "Highly efficient and compact industrial RO system designed for small-scale commercial applications. It offers reliable, multi-stage water purification to remove up to 99% of dissolved solids, heavy metals, and microbes.",
    variants: ["FRP Skid", "SS Skid", "Semi-Automatic", "Pre-treatment Filter"],
    specs: {
      capacity: "250 Litres/Hour",
      tds: "Up to 3000 ppm",
      power: "1.5 HP (approx 1.1 kW)",
      footprint: "2.5 x 2 x 4.5 ft",
      membranes: "1x 4040 High-rejection",
      recovery: "Approx 50–60%",
    },
    highlights: [
      "Compact wall-mount or floor skid design",
      "Stainless steel high-pressure pump",
      "Pre-micron cartridge filter housing",
      "Raw water & high-pressure cut-off switches",
    ],
  },
  {
    lph: "500 LPH",
    ideal: "Offices, Hospitals & Medium Units",
    image: "/images/500lph-indus.png",
    color: "from-emerald-500 to-emerald-700",
    description:
      "Skid-mounted semi-automatic industrial RO system with advanced instrumentation. Delivers high-quality permeate water for various process applications and commercial drinking water requirements.",
    variants: ["SS 304 Skid", "PLC Automated", "Antiscalant Dosing", "UV Disinfection"],
    specs: {
      capacity: "500 Litres/Hour",
      tds: "Up to 3500 ppm",
      power: "2.0 HP (approx 1.5 kW)",
      footprint: "3 x 2 x 5 ft",
      membranes: "2x 4040 High-rejection",
      recovery: "Approx 55–65%",
    },
    highlights: [
      "Stainless steel (SS 304) skid structure",
      "Integrated sand and carbon media pre-treatment",
      "Rotameters for permeate and reject flow",
      "Automatic membrane flushing cycle",
    ],
  },
  {
    lph: "1000 LPH",
    ideal: "Large Schools, Boiler Feed & Apartments",
    image: "/images/1000lph-indus.png",
    color: "from-emerald-600 to-emerald-800",
    description:
      "Heavy-duty commercial RO system built for round-the-clock operations. Fully automated controls, online monitoring systems, and premium quality components ensure consistent pure water production.",
    variants: ["Full PLC Control", "SCADA Integration", "Dual Media Filter", "CIP System"],
    specs: {
      capacity: "1000 Litres/Hour",
      tds: "Up to 4000 ppm",
      power: "3.0 HP (approx 2.2 kW)",
      footprint: "4 x 2.5 x 5.5 ft",
      membranes: "4x 4040 High-rejection",
      recovery: "Approx 60–70%",
    },
    highlights: [
      "PLC controller with digital conductivity display",
      "Antiscalant dosing pump system included",
      "Multi-stage vertical high-pressure pump",
      "Comprehensive pressure gauges array",
    ],
  },
  {
    lph: "2000 LPH",
    ideal: "Chemical Plants, Textiles & Large Canteens",
    image: "/images/2000lph-indus.png",
    color: "from-teal-600 to-teal-800",
    description:
      "Highly customizable, high-flow industrial reverse osmosis system. Integrates high-rejection thin-film composite membranes and advanced control options for demanding process water standards.",
    variants: ["Touchscreen PLC", "SS 316 Piping", "IoT Remote Monitoring", "VFD Booster"],
    specs: {
      capacity: "2000 Litres/Hour",
      tds: "Up to 4500 ppm",
      power: "5.0 HP (approx 3.7 kW)",
      footprint: "5.5 x 3 x 6 ft",
      membranes: "2x 8040 High-rejection",
      recovery: "Approx 65–75%",
    },
    highlights: [
      "SCADA-ready control panel with touch screen interface",
      "Pneumatic or motorized auto control valves",
      "High-pressure piping in SS 316 grade",
      "Low feed pressure and dry run protection",
    ],
  },
  {
    lph: "6000 LPH",
    ideal: "Refineries, Power Plants & Municipal Supply",
    image: "/images/6000lph-indus.png",
    color: "from-teal-700 to-teal-900",
    description:
      "Premium enterprise-grade high-capacity RO plant designed for critical industrial utility and process applications. Built with energy-efficient recovery systems and advanced multi-membrane configurations.",
    variants: ["Energy Recovery Device", "VFD Controlled Pumps", "IoT Integration", "SS 316 Skid"],
    specs: {
      capacity: "6000 Litres/Hour",
      tds: "Up to 5000 ppm",
      power: "12.5 HP (approx 9.3 kW)",
      footprint: "8.5 x 4 x 6.5 ft",
      membranes: "6x 8040 High-rejection",
      recovery: "Approx 70–80%",
    },
    highlights: [
      "Energy Recovery Device (ERD) to minimize power draw",
      "Online remote monitoring & IoT integration",
      "Variable Frequency Drive (VFD) for booster pump",
      "Robust CIP (Clean-In-Place) integrated skid",
    ],
  },
];

const specIcons: Record<string, React.ElementType> = {
  capacity: Droplets,
  tds: Gauge,
  power: Zap,
  footprint: Box,
  membranes: Box,
  recovery: Shield,
};

/* ── Lightbox Component ── */
function ProductLightbox({
  product,
  onClose,
}: {
  product: (typeof capacities)[0];
  onClose: () => void;
}) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-green-950/80 backdrop-blur-md" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl shadow-green-950/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-green-950/60 hover:bg-green-950/80 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left — Image */}
          <div className="relative bg-gradient-to-br from-green-100 via-green-50 to-white p-6 lg:p-10 flex items-center justify-center min-h-[350px] lg:min-h-[500px]">
            {/* Decorative blobs */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-green-300/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400/15 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full min-h-[300px] lg:min-h-[420px]"
            >
              <Image
                src={product.image}
                alt={`${product.lph} RO Plant`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center drop-shadow-xl"
                priority
              />
            </motion.div>

            {/* Capacity badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 left-6"
            >
              <span
                className={`inline-block px-5 py-2.5 rounded-2xl bg-gradient-to-r ${product.color} text-white font-display text-2xl font-bold shadow-lg`}
              >
                {product.lph}
              </span>
            </motion.div>
          </div>

          {/* Right — Details */}
          <div className="p-8 lg:p-10 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Header */}
              <span className="text-xs font-mono text-green-600 tracking-[0.3em] uppercase block mb-2">
                Industrial RO Plant
              </span>
              <h2 className="font-display text-3xl font-bold text-green-950 mb-2">
                {product.lph} System
              </h2>
              <p className="text-sm text-green-600 font-medium mb-4">
                Ideal for: {product.ideal}
              </p>
              <p className="text-green-700 text-base leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="font-semibold text-green-950 text-sm uppercase tracking-wider mb-3">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {Object.entries(product.specs).map(([key, value], i) => {
                    const Icon = specIcons[key] || Box;
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-green-50 border border-green-100"
                      >
                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-mono text-green-500 uppercase tracking-wider">
                            {key}
                          </div>
                          <div className="text-sm font-medium text-green-900 truncate">
                            {value}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="font-semibold text-green-950 text-sm uppercase tracking-wider mb-3">
                  Key Features
                </h3>
                <div className="space-y-2">
                  {product.highlights.map((h, i) => (
                    <motion.div
                      key={h}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.06 }}
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-green-700 text-sm">{h}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Variants */}
              <div className="mb-8">
                <h3 className="font-semibold text-green-950 text-sm uppercase tracking-wider mb-3">
                  Available Configurations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v, i) => (
                    <motion.span
                      key={v}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      className="px-3.5 py-1.5 rounded-full bg-green-100 border border-green-200 text-sm font-medium text-green-700 hover:bg-green-200 hover:border-green-300 transition-colors duration-200"
                    >
                      {v}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 hover:bg-green-600 rounded-2xl font-semibold text-white text-sm shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-200"
                >
                  <span>Get Quote for {product.lph}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Page Component ── */
export default function IndustrialROPlantPage() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof capacities)[0] | null
  >(null);

  const closeLightbox = useCallback(() => setSelectedProduct(null), []);

  return (
    <>
      <PageHero
        title="Industrial RO Plant"
        subtitle="Heavy-duty reverse osmosis systems built for large-scale industrial operations — delivering process-grade pure water consistently."
        breadcrumbs={[
          { label: "Our Works", href: "/products" },
          { label: "Industrial RO Plant" },
        ]}
        image="https://images.unsplash.com/photo-1581093196277-9f608bb3b511?w=1920&q=80"
        tag="Products"
      />

      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Description / Overview Section (Matching Screenshot) */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-4">
                Overview
              </span>
              <h2 className="font-display text-3xl font-bold text-green-950 mb-6 leading-tight">
                Technical Excellence in <span className="text-green-500">Every Project</span>
              </h2>
              <p className="text-green-700 text-base leading-relaxed mb-4">
                Industrial RO Plants from Global Water Systems are engineered for high-volume,
                continuous-duty water purification across demanding industrial environments. Using
                multi-stage reverse osmosis technology, our systems remove dissolved salts, heavy metals,
                organics, and microbial contaminants to produce water that meets process, boiler feed,
                and pharmaceutical-grade standards.
              </p>
              <p className="text-green-700 text-base leading-relaxed">
                Built with corrosion-resistant materials and automated controls, our industrial RO plants
                are designed for 24/7 operation with minimal downtime. Each system is custom-engineered
                based on feed water analysis, flow requirements, and end-use application.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-6 rounded-2xl bg-white border border-green-100 shadow-sm mb-6">
                <h3 className="font-semibold text-green-900 text-base mb-4 font-display">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {[
                    "Multi-stage high-pressure RO membrane arrays",
                    "Auto-flush and CIP (Clean-in-Place) system",
                    "Antiscalant dosing for membrane protection",
                    "PLC-based automation with SCADA integration",
                    "Stainless steel high-pressure pumps",
                    "Online TDS and conductivity monitoring",
                    "Energy recovery devices for high-flow systems",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-green-700 text-base">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-green-100 shadow-sm">
                <h3 className="font-semibold text-green-900 text-base mb-4 font-display">
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Pharmaceuticals",
                    "Boiler Feed Water",
                    "Food & Beverage",
                    "Textile Industry",
                    "Power Plants",
                    "Chemical Industry",
                    "Dialysis Centres",
                  ].map((app) => (
                    <span
                      key={app}
                      className="px-3 py-1.5 rounded-full bg-green-100 border border-green-200 text-sm font-mono text-green-700"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Gallery (Capacity Models) */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {capacities.map((plant, i) => (
                <motion.div
                  key={plant.lph}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative rounded-2xl overflow-hidden h-56 cursor-pointer group bg-white border border-green-100"
                  onClick={() => setSelectedProduct(plant)}
                >
                  <Image
                    src={plant.image}
                    alt={`${plant.lph} Industrial RO Plant`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent" />
                  
                  {/* Frosted zoom-in icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Overlaid capacity badge */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-lg bg-green-950/60 backdrop-blur-sm text-white text-xs font-semibold">
                      {plant.lph}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Process Section (Matching Screenshot) */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-green-950">
                Our Process
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Feed Analysis", desc: "Complete water quality testing and TDS characterisation." },
                { step: "02", title: "System Design", desc: "Custom RO train design based on flow rate and purity targets." },
                { step: "03", title: "Installation", desc: "Skid-mounted plant installation with piping and electrical works." },
                { step: "04", title: "Commissioning", desc: "Performance testing, operator training and handover." }
              ].map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-green-100 hover:border-green-400 hover:shadow-md hover:shadow-green-100 transition-all duration-300 relative"
                >
                  <div className="font-display text-5xl font-bold text-green-100 absolute top-4 right-4">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-semibold text-green-900 text-base mb-2">
                      {step.title}
                    </h4>
                    <p className="text-green-700 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Banner (Matching Screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-10 rounded-3xl bg-green-600 border border-green-500"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Interested in This Solution?
            </h3>
            <p className="text-green-100 text-base mb-6">
              Contact us for a site assessment and customised proposal.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-green-50 rounded-2xl font-semibold text-green-800 text-base shadow-lg shadow-green-900/20 hover:shadow-xl transition-all duration-200"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductLightbox
            product={selectedProduct}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
}