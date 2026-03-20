"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { products } from "@/lib/productsData";
import { ArrowRight } from "lucide-react";

export default function ProductsClient() {
  return (
    <>
      <PageHero
        title="Products & Services"
        subtitle="A complete portfolio of water and wastewater treatment technologies — engineered for performance, built for reliability."
        breadcrumbs={[{ label: "Products & Services" }]}
        image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
        tag="Technology Portfolio"
      />

      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  href={product.href}
                  className="group block rounded-2xl overflow-hidden glass border border-white/5 hover:border-primary-500/30 transition-all duration-500 card-hover h-full"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
                    <div className="absolute top-4 left-4 text-2xl">{product.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {product.shortDesc}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-primary-500/10 text-xs font-mono text-primary-300 border border-primary-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary-400 group-hover:text-accent-400 transition-colors">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
