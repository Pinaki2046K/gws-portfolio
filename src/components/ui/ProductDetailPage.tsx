"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { CheckCircle2, ArrowRight, Zap, Settings, BarChart3 } from "lucide-react";

export interface ProductDetailData {
  title: string;
  subtitle: string;
  heroImage: string;
  tag: string;
  breadcrumbLabel: string;
  description: string[];
  howItWorks: string;
  features: string[];
  advantages: string[];
  applications: string[];
  specifications?: { label: string; value: string }[];
  images: string[];
}

export default function ProductDetailPage({ data }: { data: ProductDetailData }) {
  return (
    <>
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Products & Services", href: "/products" },
          { label: data.breadcrumbLabel },
        ]}
        image={data.heroImage}
        tag={data.tag}
      />

      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main grid */}
          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {/* Left — description */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-mono text-primary-400 tracking-[0.3em] uppercase block mb-4">
                  Overview
                </span>
                <h2 className="font-display text-3xl font-bold text-white mb-5 leading-tight">
                  About This <span className="gradient-text">Technology</span>
                </h2>
                {data.description.map((para, i) => (
                  <p key={i} className="text-white/55 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </motion.div>

              {/* How it works */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl glass border border-primary-500/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-5 h-5 text-accent-400" />
                  <h3 className="font-semibold text-white">How It Works</h3>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{data.howItWorks}</p>
              </motion.div>

              {/* Image gallery */}
              <div className="grid grid-cols-2 gap-4">
                {data.images.slice(0, 2).map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative rounded-2xl overflow-hidden h-48"
                  >
                    <Image src={img} alt={data.title} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl glass border border-white/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-4 h-4 text-primary-400" />
                  <h3 className="font-semibold text-white text-sm">Key Features</h3>
                </div>
                <ul className="space-y-2.5">
                  {data.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/55 text-xs leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Applications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl glass border border-white/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-4 h-4 text-primary-400" />
                  <h3 className="font-semibold text-white text-sm">Applications</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.applications.map((app) => (
                    <span
                      key={app}
                      className="px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-mono text-primary-300"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Specifications */}
              {data.specifications && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 rounded-2xl glass border border-white/5"
                >
                  <h3 className="font-semibold text-white text-sm mb-4">Specifications</h3>
                  <div className="space-y-3">
                    {data.specifications.map((spec) => (
                      <div key={spec.label} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
                        <span className="text-xs text-white/40 font-mono">{spec.label}</span>
                        <span className="text-xs text-accent-400 font-mono font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-white section-heading">
                Advantages
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.advantages.map((adv, i) => (
                <motion.div
                  key={adv}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 p-4 rounded-xl glass border border-white/5 hover:border-primary-500/20 transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-accent-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-400" />
                  </div>
                  <span className="text-sm text-white/60">{adv}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-10 rounded-3xl glass border border-primary-500/20"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Get a Custom Quote
            </h3>
            <p className="text-white/50 mb-6">
              Tell us your requirements and we'll design the perfect system for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-2xl font-semibold text-white"
            >
              <span>Contact Our Engineers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
