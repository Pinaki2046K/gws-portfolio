"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Settings, Leaf, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Decade of Expertise",
    description:
      "Over 10 years executing turnkey projects in water and wastewater treatment across Tamil Nadu.",
  },
  {
    icon: Users,
    title: "Diverse Clientele",
    description:
      "Trusted by government hospitals, colleges, industries, and municipalities alike.",
  },
  {
    icon: Settings,
    title: "Turnkey Solutions",
    description:
      "End-to-end project delivery: from design and engineering to installation and commissioning.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Zero discharge plants and biological treatment systems that protect the environment.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Dedicated after-sales service and maintenance support to ensure continuous operation.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assured",
    description:
      "Committed to consistent technology upgradation and pure environmental outcomes.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920&q=80"
          alt="Water"
          fill
          className="object-cover opacity-5"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-mono text-primary-400 tracking-[0.3em] uppercase block mb-3">
                Why Choose Us
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Committed to{" "}
                <span className="gradient-text">Excellence</span> in Every
                Drop
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Global Water Systems specializes in delivering integrated water
                and wastewater solutions. We combine process technology
                engineering with project management capability to create
                quantifiable benefits for our customers — from homes and
                colleges to large industrial complexes.
              </p>

              {/* Quote box */}
              <div className="p-5 rounded-2xl glass border border-primary-500/20">
                <p className="text-white/70 text-sm italic leading-relaxed">
                  "Our Quality Policy starts and ends with the customer as a
                  Focus Point. Ensure Maximum Customer Satisfaction by adhering
                  to quality standards in the technologies, products, and
                  services that we deliver."
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-xs font-bold">
                    M
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">
                      Mr. MaraiMozhi
                    </div>
                    <div className="text-white/40 text-xs">
                      Managing Director, GWS
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-2xl glass border border-white/5 hover:border-primary-500/30 transition-all group card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center mb-3 group-hover:bg-primary-500/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary-400" />
                </div>
                <h4 className="font-semibold text-white text-sm mb-1.5">
                  {feature.title}
                </h4>
                <p className="text-white/50 text-xs leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
