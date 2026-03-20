"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-navy-800">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
          alt="Water"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/80 to-primary-900/40" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-mono text-accent-400 tracking-[0.3em] uppercase block mb-4">
            Ready to Get Started?
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Build Your{" "}
            <span className="gradient-text">Water Solution</span> Together
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether it's a domestic RO system or a large-scale industrial
            effluent treatment plant, our team is ready to design and deliver
            the perfect solution for your requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-2xl font-semibold text-white text-lg"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <a
                href="tel:+918489918512"
                className="inline-flex items-center gap-2 px-8 py-4 glass rounded-2xl font-semibold text-white text-lg border border-white/20 hover:border-accent-400/50 transition-all"
              >
                <Phone className="w-5 h-5 text-accent-400" />
                <span>+91 8489918512</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
