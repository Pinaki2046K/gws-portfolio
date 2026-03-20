"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  { name: "Water Filtration Plant", href: "/products/water-filtration" },
  { name: "Water Softening Plant", href: "/products/water-softening" },
  { name: "Demineralization", href: "/products/demineralization" },
  { name: "Sea Water Desalination Plant", href: "/products/desalination" },
  {
    name: "Extended Aeration with ASP",
    href: "/products/extended-aeration",
  },
  { name: "Moving Bed Bio Reactor (MBBR)", href: "/products/mbbr" },
  {
    name: "Submerged Aerobic Fixed Film Process (SAFF)",
    href: "/products/saff",
  },
  {
    name: "Nano Filtration for Textile Industry",
    href: "/products/nano-filtration",
  },
  {
    name: "Multiple Effect Evaporation Plant with Crystallizer",
    href: "/products/evaporation",
  },
];

const ourWorks = [
  { name: "Water Treatment Plant", href: "/our-works/water-treatment" },
  {
    name: "Sewage & Effluent Treatment Plant",
    href: "/our-works/sewage-effluent",
  },
  { name: "Zero Discharge Plant", href: "/our-works/zero-discharge" },
  {
    name: "Multi Stage Biological Treatment",
    href: "/our-works/multi-stage-bio",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Works", href: "/our-works", submenu: ourWorks },
  { name: "Products & Services", href: "/products", submenu: products },
  { name: "Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-dark shadow-2xl shadow-primary-900/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30"
            >
              <Droplets className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <div className="font-display text-lg font-bold leading-tight tracking-wide text-white group-hover:text-accent-400 transition-colors">
                Global Water
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary-300">
                Systems
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.submenu ? setActiveDropdown(link.name) : undefined
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.div
                  whileHover={{ scale: link.name === "Contact Us" ? 1.05 : 1 }}
                  whileTap={{ scale: link.name === "Contact Us" ? 0.98 : 1 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                      link.name === "Contact Us"
                        ? "btn-primary px-5 py-2.5 rounded-xl font-semibold text-white shadow-lg shadow-primary-500/40 hover:shadow-xl hover:shadow-primary-500/60"
                        : pathname === link.href
                          ? "text-accent-400 bg-primary-500/10"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.name}
                    {link.submenu && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-300",
                          activeDropdown === link.name ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </Link>
                </motion.div>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.submenu && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 glass-dark rounded-2xl shadow-2xl shadow-navy-900/80 overflow-hidden border border-primary-500/20"
                    >
                      {link.submenu.map((item, i) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-primary-500/10 transition-all duration-200 group border-b border-white/5 last:border-0"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-white"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-dark border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className={cn(
                        "flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all",
                        pathname === link.href
                          ? "text-accent-400 bg-primary-500/10"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <button
                        onClick={() =>
                          setMobileSubmenu(
                            mobileSubmenu === link.name ? null : link.name
                          )
                        }
                        className="p-3 text-white/60"
                      >
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            mobileSubmenu === link.name ? "rotate-180" : ""
                          )}
                        />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {link.submenu && mobileSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 pl-4 border-l border-primary-500/30 space-y-1 overflow-hidden"
                      >
                        {link.submenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block py-2.5 px-3 text-sm text-white/60 hover:text-accent-400 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}