"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";

export interface WorkDetail {
  title: string;
  subtitle: string;
  heroImage: string;
  tag: string;
  breadcrumbLabel: string;
  breadcrumbParentHref: string;
  description: string[];
  features: string[];
  applications: string[];
  images: string[];
  process?: { step: string; title: string; desc: string }[];
}

interface Props {
  data: WorkDetail;
}

export default function WorkDetailPage({ data }: Props) {
  return (
    <>
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Our Works", href: data.breadcrumbParentHref },
          { label: data.breadcrumbLabel },
        ]}
        image={data.heroImage}
        tag={data.tag}
      />

      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Description */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-4">
                Overview
              </span>
              <h2 className="font-display text-3xl font-bold text-green-950 mb-6 leading-tight">
                Technical Excellence in{" "}
                <span className="text-green-500">Every Project</span>
              </h2>
              {data.description.map((para, i) => (
                <p key={i} className="text-green-700 text-base leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Key Features */}
              <div className="p-6 rounded-2xl bg-white border border-green-100 shadow-sm mb-6">
                <h3 className="font-semibold text-green-900 text-base mb-4 font-display">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {data.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-green-700 text-base">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="p-6 rounded-2xl bg-white border border-green-100 shadow-sm">
                <h3 className="font-semibold text-green-900 text-base mb-4 font-display">
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.applications.map((app) => (
                    <span
                      key={app}
                      className="px-3 py-1.5 rounded-full bg-green-100 border border-green-200 text-sm font-mono text-green-700"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image gallery */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden ${
                    i === 0 ? "md:col-span-2 h-72" : "h-48"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${data.title} ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process steps */}
          {data.process && (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold text-green-950">
                  Our Process
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.process.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-white border border-green-100 hover:border-green-400 hover:shadow-md hover:shadow-green-100 transition-all duration-300 relative"
                  >
                    <div className="font-display text-5xl font-bold text-green-100 absolute top-4 right-4">
                      {step.step}
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-semibold text-green-900 text-base mb-2">
                        {step.title}
                      </h4>
                      <p className="text-green-700 text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-10 rounded-3xl bg-green-600 border border-green-500"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Interested in This Solution?
            </h3>
            <p className="text-green-100 text-base mb-6">
              Contact us for a site assessment and customised proposal.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-green-50 rounded-2xl font-semibold text-green-800 text-base shadow-lg shadow-green-900/20 hover:shadow-xl transition-all duration-200"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
}