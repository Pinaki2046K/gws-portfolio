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
    <section className="py-28 bg-white relative overflow-hidden">

      {/* Subtle background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920&q=80"
          alt="Water"
          fill
          className="object-cover opacity-[0.03]"
        />
      </div>

      {/* Background blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-50 rounded-full blur-3xl opacity-80 pointer-events-none" />

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
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                Why Choose Us
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-green-950 mb-6 leading-tight">
                Committed to{" "}
                <span className="text-green-500">Excellence</span> in Every
                Drop
              </h2>
              <p className="text-green-700 text-base leading-relaxed mb-8">
                Global Water Systems specializes in delivering integrated water
                and wastewater solutions. We combine process technology
                engineering with project management capability to create
                quantifiable benefits for our customers — from homes and
                colleges to large industrial complexes.
              </p>

              {/* Quote box */}
              <div className="p-5 rounded-2xl bg-green-50 border border-green-200">
                <p className="text-green-800 text-base italic leading-relaxed">
                  "Our Quality Policy starts and ends with the customer as a
                  Focus Point. Ensure Maximum Customer Satisfaction by adhering
                  to quality standards in the technologies, products, and
                  services that we deliver."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-sm font-bold text-white">
                    M
                  </div>
                  <div>
                    <div className="text-green-900 text-base font-semibold">
                      Mr. MaraiMozhi
                    </div>
                    <div className="text-green-600 text-sm">
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
                className="p-5 rounded-2xl bg-green-50 border border-green-100 hover:border-green-400 hover:bg-white hover:shadow-md hover:shadow-green-100 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center mb-3 group-hover:bg-green-500 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-semibold text-green-950 text-base mb-1.5">
                  {feature.title}
                </h4>
                <p className="text-green-700 text-sm leading-relaxed">
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