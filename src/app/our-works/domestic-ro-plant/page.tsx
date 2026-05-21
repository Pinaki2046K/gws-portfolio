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
    lph: "10 LPH",
    ideal: "Small homes & studios",
    image: "/images/10lph.png",
    color: "from-green-400 to-green-600",
    description:
      "Compact wall-mounted RO purifier ideal for small households. Multi-stage purification with UV, UF and mineral enrichment options.",
    variants: ["UV", "UF", "Alkaline", "Mineral Booster", "TDS Controller"],
    specs: {
      capacity: "10 Litres/Hour",
      tds: "Up to 2000 ppm",
      power: "36W",
      tank: "8–10 L storage",
      dimensions: "Compact wall-mount",
      warranty: "1 Year",
    },
    highlights: [
      "Wall-mount & countertop options",
      "LED filter-life indicator",
      "Food-grade ABS body",
      "Auto shut-off valve",
    ],
  },
  {
    lph: "25 LPH",
    ideal: "Apartments & small offices",
    image: "/images/25-lph-indus.png",
    color: "from-green-500 to-green-700",
    description:
      "Semi-commercial grade RO system with stainless steel frame, perfect for apartments, small offices, and clinics requiring higher output.",
    variants: ["UV", "UF", "Alkaline", "Mineral Booster", "TDS Controller"],
    specs: {
      capacity: "25 Litres/Hour",
      tds: "Up to 2500 ppm",
      power: "60W",
      tank: "25–50 L storage",
      dimensions: "SS Frame mounted",
      warranty: "1 Year",
    },
    highlights: [
      "Stainless steel frame",
      "Commercial-grade membranes",
      "Pressure gauge included",
      "Low-maintenance design",
    ],
  },
  {
    lph: "50 LPH",
    ideal: "Clinics, canteens & hostels",
    image: "/images/50lph.png",
    color: "from-green-600 to-green-800",
    description:
      "Mid-capacity RO plant suitable for schools, hostels, canteens, and small commercial establishments with continuous water demand.",
    variants: ["UV", "UF", "Alkaline", "Mineral Booster", "TDS Controller"],
    specs: {
      capacity: "50 Litres/Hour",
      tds: "Up to 3000 ppm",
      power: "120W",
      tank: "50–100 L storage",
      dimensions: "Wall/floor mount",
      warranty: "1 Year",
    },
    highlights: [
      "Handles high TDS water",
      "Auto-flush membrane system",
      "Multi-port output option",
      "Durable PVC piping",
    ],
  },
  {
    lph: "100 LPH",
    ideal: "Gated communities & institutions",
    image: "/images/100lph.png",
    color: "from-green-700 to-green-900",
    description:
      "High-capacity domestic RO system designed for large families, gated communities, educational institutions, and community halls.",
    variants: ["UV", "UF", "Alkaline", "Mineral Booster", "TDS Controller"],
    specs: {
      capacity: "100 Litres/Hour",
      tds: "Up to 3500 ppm",
      power: "250W",
      tank: "100–200 L storage",
      dimensions: "Floor-standing unit",
      warranty: "1 Year",
    },
    highlights: [
      "High-rejection RO membrane",
      "Multi-point distribution",
      "Digital TDS display",
      "Heavy-duty pump motor",
    ],
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

const specIcons: Record<string, React.ElementType> = {
  capacity: Droplets,
  tds: Gauge,
  power: Zap,
  tank: Box,
  dimensions: Box,
  warranty: Shield,
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
                Domestic RO Plant
              </span>
              <h2 className="font-display text-3xl font-bold text-green-950 mb-2">
                {product.lph} RO System
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
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {Object.entries(product.specs).map(([key, value], i) => {
                    const Icon = specIcons[key] || Droplets;
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
                  Key Highlights
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
                  Available Variants
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
export default function DomesticROPlantPage() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof capacities)[0] | null
  >(null);

  const closeLightbox = useCallback(() => setSelectedProduct(null), []);

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

          {/* Capacity Cards */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-4"
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                Available Models
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950">
                Choose Your Capacity
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-green-600 text-sm mb-12 flex items-center justify-center gap-2"
            >
              <ZoomIn className="w-4 h-4" />
              <span>Click on any model to view details & specifications</span>
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capacities.map((cap, i) => (
                <motion.div
                  key={cap.lph}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <button
                    onClick={() => setSelectedProduct(cap)}
                    className="group w-full text-left rounded-3xl overflow-hidden bg-white border border-green-100 shadow-sm hover:shadow-xl hover:shadow-green-100 hover:border-green-300 transition-all duration-500 cursor-pointer"
                  >
                    {/* Image area */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-100 via-green-50 to-white">
                      <Image
                        src={cap.image}
                        alt={`${cap.lph} RO Plant`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain object-center p-4 group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 via-transparent to-transparent" />

                      {/* Zoom hint — appears on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Capacity badge */}
                      <div className="absolute bottom-4 left-4">
                        <span
                          className={`inline-block px-5 py-2 rounded-full bg-gradient-to-r ${cap.color} text-white font-display text-2xl font-bold shadow-lg`}
                        >
                          {cap.lph}
                        </span>
                      </div>

                      {/* Ideal-for tag */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-green-700 text-xs font-mono shadow-sm">
                          {cap.ideal}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-green-700 text-sm leading-relaxed mb-4 line-clamp-2">
                        {cap.description}
                      </p>

                      {/* Quick specs row */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="flex items-center gap-1.5 text-xs text-green-600">
                          <Droplets className="w-3.5 h-3.5" />
                          <span>{cap.specs.capacity}</span>
                        </div>
                        <div className="w-px h-3 bg-green-200" />
                        <div className="flex items-center gap-1.5 text-xs text-green-600">
                          <Gauge className="w-3.5 h-3.5" />
                          <span>{cap.specs.tds}</span>
                        </div>
                        <div className="w-px h-3 bg-green-200" />
                        <div className="flex items-center gap-1.5 text-xs text-green-600">
                          <Zap className="w-3.5 h-3.5" />
                          <span>{cap.specs.power}</span>
                        </div>
                      </div>

                      {/* Variants */}
                      <div className="flex flex-wrap gap-1.5">
                        {cap.variants.map((variant) => (
                          <span
                            key={variant}
                            className="px-2.5 py-1 rounded-full bg-green-50 border border-green-100 text-xs text-green-700 font-medium"
                          >
                            {variant}
                          </span>
                        ))}
                      </div>

                      {/* View details link */}
                      <div className="mt-5 flex items-center gap-2 text-sm text-green-600 group-hover:text-green-500 font-medium transition-colors">
                        <ZoomIn className="w-4 h-4" />
                        <span>View Details & Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </button>
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
                {
                  step: "01",
                  title: "Pre-Filter",
                  desc: "Sediment and carbon pre-filtration to remove suspended particles and chlorine.",
                },
                {
                  step: "02",
                  title: "RO Membrane",
                  desc: "High-rejection RO membrane removes dissolved salts, heavy metals and bacteria.",
                },
                {
                  step: "03",
                  title: "UV / UF",
                  desc: "UV sterilisation and ultrafiltration eliminates viruses and residual microbes.",
                },
                {
                  step: "04",
                  title: "Post Polish",
                  desc: "Final activated carbon polishing for taste, odour and pure output water.",
                },
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
                    <h4 className="font-semibold text-green-900 text-base mb-2">
                      {step.title}
                    </h4>
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
              Tell us your requirements and we&apos;ll recommend the right
              capacity and variant for you.
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