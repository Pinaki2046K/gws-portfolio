"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-green-700">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
          alt="Water"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-700/70 to-green-600/60" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-mono text-green-200 tracking-[0.3em] uppercase block mb-4">
            Ready to Get Started?
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Build Your{" "}
            <span className="text-green-200">Water Solution</span> Together
          </h2>
          <p className="text-green-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether it's a domestic RO system or a large-scale industrial
            effluent treatment plant, our team is ready to design and deliver
            the perfect solution for your requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-green-50 rounded-2xl font-semibold text-green-800 text-lg shadow-lg shadow-green-900/30 hover:shadow-xl transition-all duration-200"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <a
                href="tel:+918489918512"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600/50 backdrop-blur-sm rounded-2xl font-semibold text-white text-lg border border-green-300/40 hover:border-green-200 hover:bg-green-600/70 transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-green-200" />
                <span>+91 8489918512</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}