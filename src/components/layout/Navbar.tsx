"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

const ourWorks = [
  { name: "Domestic RO Plant", href: "/our-works/domestic-ro-plant" },
  { name: "Water Treatment Plant", href: "/our-works/water-treatment" },
  { name: "Industrial RO Plants", href: "/our-works/industrial-ro-plant" },
];

const services = [
  { name: "Comprehensive Maintenance Contract", href: "/services/comprehensive-maintenance" },
  { name: "Annual Maintenance Contract", href: "/services/annual-maintenance" },
  { name: "Breakdown Call / Call Basis", href: "/services/breakdown-call" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Works", href: "/our-works", submenu: ourWorks },
  { name: "Services", href: "/services", submenu: services },
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
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-green-900/10 border-b border-green-100 py-3"
          : "bg-green-50/80 backdrop-blur-sm py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30"
            >
              <Droplets className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <div className="font-display text-xl font-bold leading-tight tracking-wide text-green-900 group-hover:text-green-600 transition-colors">
                Global Water
              </div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-green-600">
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
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-base font-medium transition-all duration-300",
                      link.name === "Contact Us"
                        ? "bg-green-500 hover:bg-green-600 px-5 py-2.5 rounded-xl font-semibold text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50"
                        : pathname === link.href
                          ? "text-green-600 bg-green-100"
                          : "text-green-800 hover:text-green-900 hover:bg-green-100"
                    )}
                  >
                    {link.name}
                    {link.submenu && (
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-300",
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
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl shadow-green-900/15 overflow-hidden border border-green-100"
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
                            className="flex items-center gap-3 px-5 py-3 text-base text-green-800 hover:text-green-900 hover:bg-green-50 transition-all duration-200 group border-b border-green-50 last:border-0"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-green-100 border border-green-200 text-green-800 hover:bg-green-200 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-white border-t border-green-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className={cn(
                        "flex-1 py-3 px-4 rounded-xl text-base font-medium transition-all",
                        pathname === link.href
                          ? "text-green-600 bg-green-100"
                          : "text-green-800 hover:text-green-900 hover:bg-green-50"
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
                        className="p-3 text-green-600"
                      >
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 transition-transform",
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
                        className="ml-4 pl-4 border-l-2 border-green-200 space-y-1 overflow-hidden"
                      >
                        {link.submenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block py-2.5 px-3 text-base text-green-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
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