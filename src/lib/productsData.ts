export interface Product {
  id: string;
  title: string;
  shortDesc: string;
  href: string;
  icon: string;
  image: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "water-filtration",
    title: "Water Filtration Plant",
    shortDesc: "Multi-stage filtration systems removing suspended solids, turbidity, and contaminants from raw water.",
    href: "/products/water-filtration",
    icon: "🔵",
    image: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=600&q=80",
    tags: ["PSF", "ACF", "Multi-Grade"],
  },
  {
    id: "water-softening",
    title: "Water Softening Plant",
    shortDesc: "Ion exchange resin-based systems removing hardness-causing calcium and magnesium ions.",
    href: "/products/water-softening",
    icon: "💧",
    image: "https://images.unsplash.com/photo-1580974852861-8eb7c7f9b0c2?w=600&q=80",
    tags: ["Ion Exchange", "Boilers", "Cooling Towers"],
  },
  {
    id: "demineralization",
    title: "Demineralization",
    shortDesc: "High-purity DM water systems for pharmaceutical, power, and electronics industries.",
    href: "/products/demineralization",
    icon: "⚗️",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tags: ["DM Plant", "High Purity", "Pharma"],
  },
  {
    id: "desalination",
    title: "Sea Water Desalination Plant",
    shortDesc: "High-pressure RO systems converting seawater to potable water for coastal industries.",
    href: "/products/desalination",
    icon: "🌊",
    image: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&q=80",
    tags: ["SWRO", "Coastal", "Municipal"],
  },
  {
    id: "extended-aeration",
    title: "Extended Aeration with ASP",
    shortDesc: "Activated Sludge Process for effective biological treatment of domestic and industrial sewage.",
    href: "/products/extended-aeration",
    icon: "🫧",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&q=80",
    tags: ["ASP", "Biological", "BOD Removal"],
  },
  {
    id: "mbbr",
    title: "Moving Bed Bio Reactor (MBBR)",
    shortDesc: "Compact MBBR technology with plastic media providing high surface area for biological treatment.",
    href: "/products/mbbr",
    icon: "🔬",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    tags: ["MBBR", "Media", "Compact"],
  },
  {
    id: "saff",
    title: "Submerged Aerobic Fixed Film (SAFF)",
    shortDesc: "Fixed-film aerobic technology for robust, shock-load tolerant biological treatment.",
    href: "/products/saff",
    icon: "🧬",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    tags: ["SAFF", "Fixed Film", "Robust"],
  },
  {
    id: "nano-filtration",
    title: "Nano Filtration for Textile Industry",
    shortDesc: "Nanofiltration membranes for colour removal and water recovery in dyeing units.",
    href: "/products/nano-filtration",
    icon: "🎨",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80",
    tags: ["NF Membrane", "Textile", "Colour Removal"],
  },
  {
    id: "evaporation",
    title: "Multiple Effect Evaporation with Crystallizer",
    shortDesc: "MEE and crystalliser systems for zero liquid discharge of concentrated industrial effluents.",
    href: "/products/evaporation",
    icon: "♨️",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80",
    tags: ["MEE", "ZLD", "Crystallizer"],
  },
];
