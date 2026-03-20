"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  image?: string;
  tag?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  image = "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1920&q=80",
  tag,
}: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-green-900">

      {/* BG image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/50 via-green-900/70 to-green-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-transparent to-green-900/80" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#86efac"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6 text-sm"
          >
            <Link
              href="/"
              className="text-green-300/60 hover:text-green-200 transition-colors"
            >
              Home
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-green-500/50" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-green-300/60 hover:text-green-200 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-green-300 font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {tag && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-sm font-mono text-green-400 tracking-[0.3em] uppercase mb-4"
          >
            {tag}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-green-100/70 text-lg leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" className="w-full">
          <path
            fill="#f0fdf4"
            d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
          />
        </svg>
      </div>
    </section>
  );
}