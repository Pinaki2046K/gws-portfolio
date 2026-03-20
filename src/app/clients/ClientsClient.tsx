"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { clientData } from "@/lib/clientsData";
import { Building2, CheckCircle2, ChevronDown } from "lucide-react";

const categoryIcons: Record<string, string> = {
  "govt-medical": "🏥",
  "private-medical": "🏨",
  "govt-dialysis": "💉",
  "private-dialysis": "🩺",
  "collector-office": "🏛️",
  "govt-sector": "🏗️",
  "govt-arts": "🎓",
  "central-govt": "🇮🇳",
};

export default function ClientsClient() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
      <PageHero
        title="Our Clients"
        subtitle="Trusted by government institutions, private hospitals, colleges, and industries across Tamil Nadu for over a decade."
        breadcrumbs={[{ label: "Clients" }]}
        image="https://images.unsplash.com/photo-1504892262-dac4ad67839c?w=1920&q=80"
        tag="Who We Work With"
      />

      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Government Hospitals", count: "12+" },
              { label: "Dialysis Centres", count: "12+" },
              { label: "Colleges & Universities", count: "9+" },
              { label: "Government Offices", count: "15+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl glass border border-white/5 text-center"
              >
                <div className="font-display text-3xl font-bold gradient-text mb-1">
                  {stat.count}
                </div>
                <div className="text-xs text-white/50 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client categories */}
          <div className="space-y-4">
            {clientData.map((category, catIdx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.05 }}
                className="rounded-2xl overflow-hidden border border-white/5 hover:border-primary-500/20 transition-all"
              >
                {/* Header (accordion trigger) */}
                <button
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === category.id ? null : category.id
                    )
                  }
                  className="w-full flex items-center justify-between p-6 glass text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{categoryIcons[category.id]}</span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white group-hover:text-accent-400 transition-colors">
                        {category.title}
                      </h3>
                      {category.subtitle && (
                        <p className="text-white/40 text-sm">{category.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {category.clients && (
                      <span className="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs text-primary-300 font-mono">
                        {category.clients.length} clients
                      </span>
                    )}
                    <ChevronDown
                      className={`w-5 h-5 text-white/40 transition-transform duration-300 ${
                        activeCategory === category.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion content */}
                <AnimatePresence>
                  {activeCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 bg-navy-900/50">
                        {/* Table for clients with id/name/location */}
                        {category.clients && (
                          <div className="overflow-x-auto rounded-xl border border-white/5">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b border-white/10">
                                  <th className="text-left px-4 py-3 text-xs font-mono text-white/30 uppercase tracking-wider w-12">
                                    S.No
                                  </th>
                                  <th className="text-left px-4 py-3 text-xs font-mono text-white/30 uppercase tracking-wider">
                                    Name of Institution
                                  </th>
                                  <th className="text-left px-4 py-3 text-xs font-mono text-white/30 uppercase tracking-wider">
                                    Location
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {category.clients.map((client, i) => (
                                  <motion.tr
                                    key={client.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    className="border-b border-white/5 last:border-0 hover:bg-primary-500/5 transition-colors"
                                  >
                                    <td className="px-4 py-3 text-sm text-white/30 font-mono">
                                      {client.id}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-white/70 flex items-center gap-2">
                                      <Building2 className="w-3.5 h-3.5 text-primary-500/50 flex-shrink-0" />
                                      {client.name}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-accent-400/70">
                                      {client.location}
                                    </td>
                                  </motion.tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {/* Simple list for items */}
                        {category.items && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {category.items.map((item, i) => (
                              <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5"
                              >
                                <CheckCircle2 className="w-4 h-4 text-accent-400 flex-shrink-0" />
                                <span className="text-sm text-white/70">{item}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
