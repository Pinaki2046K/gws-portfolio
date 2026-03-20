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
    <section className="py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono text-primary-400 tracking-[0.3em] uppercase block mb-3">
              Our Clients
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 section-heading">
              Trusted Across Tamil Nadu
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              We proudly serve government institutions, hospitals, colleges, and
              industrial clients across the state.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clientCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glass border border-white/5 hover:border-primary-500/30 transition-all card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary-400" />
                </div>
                <span className="font-display text-2xl font-bold gradient-text">
                  {cat.count}
                </span>
              </div>
              <h3 className="font-semibold text-white text-sm mb-3">
                {cat.title}
              </h3>
              <ul className="space-y-1.5">
                {cat.examples.map((ex) => (
                  <li
                    key={ex}
                    className="flex items-center gap-2 text-xs text-white/40"
                  >
                    <div className="w-1 h-1 rounded-full bg-accent-400/50" />
                    {ex}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-primary-500/30 text-primary-300 hover:bg-primary-500/10 transition-all font-semibold"
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
