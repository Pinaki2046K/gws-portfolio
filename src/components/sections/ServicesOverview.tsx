"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Domestic RO Plant",
    description:
      "High-quality reverse osmosis systems designed for home and residential use, delivering pure, safe drinking water straight from your tap.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    href: "/products/domestic-ro",
    tag: "Products",
  },
  {
    title: "Water Treatment Plant – Domestic/Industry",
    description:
      "End-to-end water treatment solutions for both households and industries, converting raw water sources into clean, usable water for every application.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
    href: "/our-works/water-treatment",
    tag: "Our Works",
  },
  {
    title: "Industrial RO Plants",
    description:
      "Heavy-duty reverse osmosis systems built for large-scale industrial operations — ideal for process water, boiler feed, and pharmaceutical-grade purification.",
    image:
      "https://images.unsplash.com/photo-1581093196277-9f608bb3b511?w=600&q=80",
    href: "/products/industrial-ro",
    tag: "Products",
  },
];

export default function ServicesOverview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 bg-green-50 relative overflow-hidden">

      {/* Background gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
              What We Do
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-green-950 mb-4">
              Our Core Services
            </h2>
            <p className="text-green-700 text-base max-w-xl mx-auto leading-relaxed">
              From clean water supply to zero liquid discharge, we offer
              complete environmental engineering solutions tailored to your
              needs.
            </p>
          </motion.div>
        </div>

        {/* Services grid — 3 cards, centered */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block rounded-2xl overflow-hidden bg-white border border-green-100 hover:border-green-400 shadow-sm hover:shadow-lg hover:shadow-green-100 transition-all duration-500 h-full"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-green-500/90 border border-green-400 text-xs font-mono text-white">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-green-950 mb-2 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-green-700 text-base leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-base text-green-600 group-hover:text-green-500 font-medium transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 rounded-2xl font-semibold text-white text-base shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-200"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}