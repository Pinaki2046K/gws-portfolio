"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";

const services = [
  "Water Filtration Plant",
  "Water Softening Plant",
  "Demineralization Plant",
  "Sea Water Desalination",
  "Sewage Treatment Plant (STP)",
  "Effluent Treatment Plant (ETP)",
  "Zero Discharge Plant (ZLD)",
  "Moving Bed Bio Reactor (MBBR)",
  "SAFF Process",
  "Nano Filtration",
  "Multiple Effect Evaporation",
  "Other / General Enquiry",
];

// ─────────────────────────────────────────────
// Replace the value below with your Web3Forms
// access key from https://web3forms.com
// ─────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = "fbd51208-71e3-41fb-b707-4ffd98caa496";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          phone: form.phone,
          organization: form.organization,
          service: form.service,
          message: form.message,
          // Optional: customise the subject line of the email you receive
          subject: `New Enquiry from ${form.name} — ${form.service || "General"}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        toast.success("Message sent successfully!");
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a project in mind? Our engineers are ready to assess your requirements and provide a tailored solution."
        breadcrumbs={[{ label: "Contact Us" }]}
        image="https://images.unsplash.com/photo-1504892262-dac4ad67839c?w=1920&q=80"
        tag="Get In Touch"
      />

      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-mono text-primary-400 tracking-[0.3em] uppercase block mb-4">
                  Reach Us
                </span>
                <h2 className="font-display text-3xl font-bold text-white mb-6 leading-tight">
                  Let's Start a{" "}
                  <span className="gradient-text">Conversation</span>
                </h2>
                <p className="text-white/50 leading-relaxed mb-8">
                  Whether you need a small domestic RO system or a large-scale
                  industrial treatment plant, we're here to help. Reach out via
                  the form or contact us directly.
                </p>
              </motion.div>

              {/* Info cards */}
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value:
                    "161, Grafton Street, VGN Monte Carlo, Guruswamy road, Nolambur, Chennai – 600 095",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 8489918512 / +91 8489918513",
                  href: "tel:+918489918512",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "gwsmaraimozhi@gmail.com",
                  href: "mailto:gwsmaraimozhi@gmail.com",
                },
                {
                  icon: Globe,
                  label: "Website",
                  value: "www.gwscare.com",
                  href: "https://www.gwscare.com",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl glass border border-white/5 hover:border-primary-500/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/30 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 hover:text-accent-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/70 leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* GST */}
              <div className="px-5 py-3 rounded-xl glass border border-white/5">
                <span className="text-xs font-mono text-white/30">
                  GST No:{" "}
                  <span className="text-primary-300">33ANHPM8965G1ZM</span>
                </span>
              </div>
            </div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-8 rounded-3xl glass border border-white/5">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                      Message Received!
                    </h3>
                    <p className="text-white/50 mb-6">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          organization: "",
                          service: "",
                          message: "",
                        });
                      }}
                      className="text-sm text-primary-400 hover:text-accent-400 transition-colors font-mono"
                    >
                      Send another message →
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-1">
                        Send Us a Message
                      </h3>
                      <p className="text-white/40 text-sm">
                        Fields marked with * are required.
                      </p>
                    </div>

                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-primary-500/50 focus:bg-white/8 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-primary-500/50 focus:bg-white/8 transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone + Organization */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-primary-500/50 focus:bg-white/8 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                          Organization / Company
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={form.organization}
                          onChange={handleChange}
                          placeholder="Your organization"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-primary-500/50 focus:bg-white/8 transition-all"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                        Service of Interest
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="text-white/40">
                          Select a service...
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-navy-800">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your requirements, capacity needed, location, etc."
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-primary-500/50 focus:bg-white/8 transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 py-4 btn-primary rounded-2xl font-semibold text-white text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
