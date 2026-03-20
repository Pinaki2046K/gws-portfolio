"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Droplets,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { name: "Water Filtration Plant", href: "/products/water-filtration" },
  { name: "Water Softening Plant", href: "/products/water-softening" },
  { name: "Sea Water Desalination", href: "/products/desalination" },
  { name: "Sewage Treatment Plant", href: "/our-works/sewage-effluent" },
  { name: "Zero Discharge Plant", href: "/our-works/zero-discharge" },
  { name: "MBBR Technology", href: "/products/mbbr" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Works", href: "/our-works" },
  { name: "Products & Services", href: "/products" },
  { name: "Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-green-900 border-t border-green-700/50 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white leading-tight">
                  Global Water
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-green-300">
                  Systems
                </div>
              </div>
            </Link>

            <p className="text-green-200/70 text-sm leading-relaxed mb-6">
              Providing integrated water and wastewater treatment solutions for
              industry, institutions, and communities across India since over a
              decade.
            </p>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-300/60 font-mono">
                GST: 33ANHPM8965G1ZM
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 font-mono">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 text-sm text-green-200/60 hover:text-green-300 transition-colors group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="flex items-center gap-2 text-sm text-green-200/60 hover:text-green-300 transition-colors group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 font-mono">
              Contact
            </h4>

            <div className="space-y-4">

              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-green-200/60 leading-relaxed">
                  161, Grafton Street, VGN Monte Carlo, Guruswamy road,
                  Nolambur, Chennai - 600 095
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <div className="text-sm text-green-200/60">
                  <a
                    href="tel:+918489918512"
                    className="hover:text-green-300 transition-colors block"
                  >
                    +91 8489918512
                  </a>
                  <a
                    href="tel:+918489918513"
                    className="hover:text-green-300 transition-colors block"
                  >
                    +91 8489918513
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href="mailto:gwsmaraimozhi@gmail.com"
                  className="text-sm text-green-200/60 hover:text-green-300 transition-colors break-all"
                >
                  gwsmaraimozhi@gmail.com
                </a>
              </div>

              <div className="flex gap-3">
                <Globe className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href="https://www.gwscare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-200/60 hover:text-green-300 transition-colors"
                >
                  www.gwscare.com
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-green-300/50 text-sm font-mono">
            © {new Date().getFullYear()} Global Water Systems. All rights reserved.
          </p>
          <p className="text-green-300/40 text-xs">
            MD: Mr. MaraiMozhi | Chennai, Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  );
}