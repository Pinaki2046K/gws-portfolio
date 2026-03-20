"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { ArrowRight } from "lucide-react";

const works = [
  {
    title: "Domestic RO Plant",
    description:
      "High-quality reverse osmosis systems designed for home and residential use, delivering pure, safe drinking water. Available in 10, 25, 50, and 100 LPH capacities with UV, UF, Alkaline, Mineral Booster, and TDS Controller variants.",
    image: "/images/domestic.png",
    href: "/our-works/domestic-ro-plant",
    tags: ["RO", "UV", "UF"],
    stats: [
      { label: "Capacities Available", value: "4 Models" },
      { label: "Range", value: "10–100 LPH" },
    ],
  },
  {
    title: "Water Treatment Plant – Domestic/Industry",
    description:
      "End-to-end water treatment solutions for both households and industries, converting raw water sources — Well, Bore, Municipal and Corporation water — into clean, usable water for drinking, bathing, cooking, washing, dialysis and process applications.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    href: "/our-works/water-treatment",
    tags: ["Filtration", "Purification", "Industrial"],
    stats: [
      { label: "Plants Built", value: "100+" },
      { label: "Capacity Range", value: "500 LPH – 5 MLD" },
    ],
  },
  {
    title: "Industrial RO Plants",
    description:
      "Heavy-duty reverse osmosis systems built for large-scale industrial operations — ideal for process water, boiler feed, pharmaceutical-grade purification, and zero liquid discharge applications across Tamil Nadu.",
    image: "/images/industrial.png",
    href: "/our-works/sewage-effluent",
    tags: ["Industrial", "High-Capacity", "RO"],
    stats: [
      { label: "Plants Installed", value: "80+" },
      { label: "Industries Served", value: "12+" },
    ],
  },
];

export default function OurWorksClient() {
  return (
    <>
      <PageHero
        title="Our Works"
        subtitle="A showcase of turnkey water and wastewater treatment projects delivered across Tamil Nadu — from hospitals to industries."
        breadcrumbs={[{ label: "Our Works" }]}
        image="https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=1920&q=80"
        tag="Project Portfolio"
      />

      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {works.map((work, i) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Link
                    href={work.href}
                    className="group block relative rounded-3xl overflow-hidden h-72 lg:h-96 shadow-lg shadow-green-100"
                  >
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent" />
                    {/* Tags overlay */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-green-500/80 backdrop-blur-sm border border-green-400/50 text-xs font-mono text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
                    {String(i + 1).padStart(2, "0")} / Works
                  </span>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950 mb-4 leading-tight">
                    {work.title}
                  </h2>
                  <p className="text-green-700 text-base leading-relaxed mb-6">
                    {work.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6 mb-8">
                    {work.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="p-4 rounded-xl bg-white border border-green-100 flex-1 text-center shadow-sm hover:border-green-300 transition-colors"
                      >
                        <div className="font-display text-2xl font-bold text-green-500">
                          {stat.value}
                        </div>
                        <div className="text-sm text-green-600 font-mono mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href={work.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-white shadow-lg shadow-green-500/30 hover:shadow-xl transition-all duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}