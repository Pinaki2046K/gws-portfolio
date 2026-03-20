import ProductDetailPage from "@/components/ui/ProductDetailPage";

const data = {
  title: "Water Softening Plant",
  subtitle: "Ion exchange resin-based softening systems eliminating hardness for boilers, cooling towers, and process applications.",
  heroImage: "https://images.unsplash.com/photo-1580974852861-8eb7c7f9b0c2?w=1920&q=80",
  tag: "Products & Services",
  breadcrumbLabel: "Water Softening Plant",
  description: [
    "Hard water containing dissolved calcium and magnesium causes scale buildup in boilers, heat exchangers, pipes, and cooling towers — drastically reducing efficiency and lifespan. Our Water Softening Plants use high-capacity cation exchange resin to replace hardness ions with sodium, delivering consistently soft water.",
    "We supply systems from small domestic units (100 LPH) to large industrial softeners handling millions of litres per day, with automatic or manual regeneration cycles tailored to your operation.",
  ],
  howItWorks:
    "Hard water flows through a pressure vessel filled with strong-acid cation exchange resin. The resin selectively captures Ca²⁺ and Mg²⁺ ions, replacing them with Na⁺ ions. When exhausted, the resin is regenerated with a sodium chloride (brine) solution, restoring its softening capacity for the next cycle.",
  features: [
    "High-capacity strong-acid cation resin",
    "Automatic or manual regeneration",
    "Brine tank with injector and controls",
    "FRP or MS vessel with internal distributors",
    "Hardness online monitoring option",
    "Multiple vessels for continuous supply",
    "Digital or mechanical timer-based control",
  ],
  advantages: [
    "Prevents scale formation in boilers and pipelines",
    "Extends equipment life significantly",
    "Reduces energy consumption in heat exchangers",
    "Lowers chemical dosing requirements",
    "Simple operation and low maintenance",
    "Fully automatic operation available",
  ],
  applications: ["Boilers", "Cooling Towers", "Laundries", "Hospitals", "Hotels", "Dairies", "Pharma"],
  specifications: [
    { label: "Capacity", value: "100 LPH – 5,00,000 LPH" },
    { label: "Inlet Hardness", value: "Up to 2000 ppm as CaCO₃" },
    { label: "Outlet Hardness", value: "< 5 ppm" },
    { label: "Regenerant", value: "Sodium Chloride (NaCl)" },
  ],
  images: [
    "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=600&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  ],
};

export default function WaterSofteningPage() {
  return <ProductDetailPage data={data} />;
}
