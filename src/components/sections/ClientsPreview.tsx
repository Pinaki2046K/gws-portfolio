"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";

const clientCategories = [
  {
    title: "Government Medical Colleges",
    count: "12+",
    examples: [
      "Madras Medical College",
      "Stanley Hospital",
      "Kilpauk Medical College",
      "Omandurar Hospital",
    ],
  },
  {
    title: "Private Hospitals",
    count: "5+",
    examples: [
      "Indira Medical College",
      "Sree Balaji Medical College",
      "Tagore Medical College",
      "JR Medical College",
    ],
  },
  {
    title: "Government Dialysis Centres",
    count: "10+",
    examples: ["Tirutani", "Avadi", "Gummidipondi", "Vellore"],
  },
  {
    title: "Government Sector (PWD/TNHB)",
    count: "20+",
    examples: ["High Court", "Secretariat", "MLA Hostel", "State Guest House"],
  },
];

export default function ClientsPreview() {
  return (
    <section className="py-28 bg-green-50 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/40 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
              Our Clients
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-green-950 mb-4">
              Trusted Across Tamil Nadu
            </h2>
            <p className="text-green-700 text-base max-w-xl mx-auto">
              We proudly serve government institutions, hospitals, colleges, and
              industrial clients across the state.
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clientCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-green-100 hover:border-green-400 hover:shadow-lg hover:shadow-green-100 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                  <Building2 className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-display text-2xl font-bold text-green-500">
                  {cat.count}
                </span>
              </div>
              <h3 className="font-semibold text-green-950 text-base mb-3">
                {cat.title}
              </h3>
              <ul className="space-y-1.5">
                {cat.examples.map((ex) => (
                  <li
                    key={ex}
                    className="flex items-center gap-2 text-sm text-green-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    {ex}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold text-base shadow-lg shadow-green-500/30 hover:shadow-xl transition-all duration-200"
            >
              <span>View Full Client List</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}