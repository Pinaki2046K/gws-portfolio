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
              Let&apos;s Build Your{" "}
              <span className="text-green-500">Water Solution</span>
            </h2>
            <p className="text-green-700 text-base leading-relaxed">
              Whether you need a small domestic RO system or a large-scale industrial
              treatment plant, we&apos;re here to help.
            </p>
          </motion.div>

          {/* rest unchanged */}
        </div>
      </section>
    </>
  );
}