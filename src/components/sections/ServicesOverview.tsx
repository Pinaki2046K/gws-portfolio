"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Water Treatment Plant",
    description:
      "Advanced filtration and purification systems for industrial and domestic water supply, ensuring safe and clean water.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80",
    href: "/our-works/water-treatment",
    tag: "Our Works",
  },
  {
    title: "Sewage & Effluent Treatment",
    description:
      "Comprehensive STP and ETP solutions meeting regulatory standards, protecting the environment from industrial discharge.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    href: "/our-works/sewage-effluent",
    tag: "Our Works",
  },
  {
    title: "Zero Discharge Plant",
    description:
      "Closed-loop systems that eliminate liquid discharge through advanced evaporation and crystallization technology.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    href: "/our-works/zero-discharge",
    tag: "Our Works",
  },
  {
    title: "Sea Water Desalination",
    description:
      "High-efficiency reverse osmosis systems converting seawater to potable water for coastal industries and municipalities.",
    image:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&q=80",
    href: "/products/desalination",
    tag: "Products",
  },
  {
    title: "Multi Stage Biological Treatment",
    description:
      "Innovative biological processes using MBBR, SAFF, and ASP technologies for effective organic waste removal.",
    image:
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&q=80",
    href: "/our-works/multi-stage-bio",
    tag: "Our Works",
  },
  {
    title: "RO Plant & Demineralization",
    description:
      "Custom-designed RO and DM plants for pharmaceutical, power, and food processing industries.",
    image:
      "https://images.unsplash.com/photo-1580974852861-8eb7c7f9b0c2?w=600&q=80",
    href: "/products/demineralization",
    tag: "Products",
  },
];

export default function ServicesOverview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 bg-navy-900 relative overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono text-primary-400 tracking-[0.3em] uppercase block mb-3">
              What We Do
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 section-heading">
              Our Core Services
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              From clean water supply to zero liquid discharge, we offer
              complete environmental engineering solutions tailored to your
              needs.
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block rounded-2xl overflow-hidden glass border border-white/5 hover:border-primary-500/30 transition-all duration-500 card-hover"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-xs font-mono text-accent-400">
                      {service.tag}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-400 group-hover:text-accent-400 transition-colors">
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
            className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-2xl font-semibold text-white"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
