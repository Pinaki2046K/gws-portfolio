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

const WEB3FORMS_ACCESS_KEY = "fbd51208-71e3-41fb-b707-4ffd98caa496";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "161, Grafton Street, VGN Monte Carlo, Guruswamy road, Nolambur, Chennai – 600 095",
    href: "",
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
];

const inputClass =
  "w-full bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-base text-green-900 placeholder-green-400 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-200";

const labelClass =
  "block text-xs font-mono text-green-600 uppercase tracking-wider mb-2";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

  const resetForm = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", organization: "", service: "", message: "" });
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

      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-mono text-green-600 tracking-[0.3em] uppercase block mb-3">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-green-950 mb-4">
              {"Let's Build Your "}
              <span className="text-green-500">Water Solution</span>
            </h2>
            <p className="text-green-700 text-base leading-relaxed">
              {"Whether you need a small domestic RO system or a large-scale industrial treatment plant, we're here to help."}
            </p>
          </motion.div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-3 p-5 rounded-2xl bg-white border border-green-100 shadow-sm hover:border-green-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs font-mono text-green-500 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-base text-green-800 hover:text-green-600 transition-colors leading-relaxed"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base text-green-800 leading-relaxed">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl border border-green-100 shadow-sm overflow-hidden">

              {/* Form header */}
              <div className="bg-green-600 px-8 py-6">
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  Send Us a Message
                </h3>
                <p className="text-green-200 text-sm">
                  {"Fields marked with * are required. We'll respond within 24 hours."}
                </p>
              </div>

              <div className="p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-green-950 mb-3">
                      Message Received!
                    </h3>
                    <p className="text-green-700 text-base mb-8 max-w-md mx-auto">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-50 border border-green-200 text-green-700 hover:bg-green-100 hover:border-green-400 transition-all duration-200 font-medium text-base"
                    >
                      Send another message →
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Phone + Organization */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Organization / Company</label>
                        <input
                          type="text"
                          name="organization"
                          value={form.organization}
                          onChange={handleChange}
                          placeholder="Your organization"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className={labelClass}>Service of Interest</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className={labelClass}>Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your requirements, capacity needed, location, etc."
                        required
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* GST + Submit */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                      <p className="text-sm font-mono text-green-600">
                        GST:{" "}
                        <span className="text-green-800 font-semibold">
                          33ANHPM8965G1ZM
                        </span>
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading}
                        className="flex items-center justify-center gap-3 px-10 py-4 bg-green-500 hover:bg-green-600 rounded-2xl font-semibold text-white text-base shadow-lg shadow-green-500/30 hover:shadow-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
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
                    </div>

                  </form>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}