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
      "Comprehensive water treatment facilities combining filtration, softening, and purification to deliver safe drinking and process water for industries, hospitals, and government institutions.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80",
    href: "/our-works/water-treatment",
    tags: ["Filtration", "Purification", "Industrial"],
    stats: [
      { label: "Plants Built", value: "100+" },
      { label: "Capacity Range", value: "500 LPH – 5 MLD" },
    ],
  },
  {
    title: "Sewage & Effluent Treatment Plant",
    description:
      "State-of-the-art STP and ETP plants ensuring compliance with TNPCB and CPCB standards. We handle organic, chemical, and industrial effluent with advanced biological and chemical processes.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    href: "/our-works/sewage-effluent",
    tags: ["STP", "ETP", "Compliance"],
    stats: [
      { label: "Plants Installed", value: "80+" },
      { label: "Industries Served", value: "12+" },
    ],
  },
  {
    title: "Zero Discharge Plant",
    description:
      "Advanced zero liquid discharge (ZLD) systems using multiple effect evaporation and crystallisation technology — meeting the most stringent environmental discharge norms.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    href: "/our-works/zero-discharge",
    tags: ["ZLD", "MEE", "Crystallizer"],
    stats: [
      { label: "ZLD Plants", value: "30+" },
      { label: "Recovery Rate", value: "99%+" },
    ],
  },
  {
    title: "Multi Stage Biological Treatment",
    description:
      "Innovative biological treatment systems using ASP, MBBR, and SAFF technologies for maximum organic load removal at minimal operational cost.",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&q=80",
    href: "/our-works/multi-stage-bio",
    tags: ["MBBR", "ASP", "SAFF"],
    stats: [
      { label: "Bio Plants", value: "50+" },
      { label: "BOD Removal", value: "98%+" },
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

      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
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
                  <Link href={work.href} className="group block relative rounded-3xl overflow-hidden h-72 lg:h-96">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                    {/* Tags overlay */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 text-xs font-mono text-accent-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <span className="text-xs font-mono text-primary-400 tracking-[0.3em] uppercase block mb-3">
                    {String(i + 1).padStart(2, "0")} / Works
                  </span>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {work.title}
                  </h2>
                  <p className="text-white/50 leading-relaxed mb-6">{work.description}</p>

                  {/* Stats */}
                  <div className="flex gap-6 mb-8">
                    {work.stats.map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl glass border border-white/5 flex-1 text-center">
                        <div className="font-display text-2xl font-bold gradient-text">{stat.value}</div>
                        <div className="text-xs text-white/40 font-mono mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href={work.href}
                      className="inline-flex items-center gap-2 px-6 py-3 btn-primary rounded-xl font-semibold text-white"
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
