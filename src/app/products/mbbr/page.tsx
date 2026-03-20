import ProductDetailPage from "@/components/ui/ProductDetailPage";

const data = {
  title: "Moving Bed Bio Reactor (MBBR)",
  subtitle: "High-performance attached-growth biological treatment combining the advantages of activated sludge and biofilm technology.",
  heroImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80",
  tag: "Products & Services",
  breadcrumbLabel: "Moving Bed Bio Reactor (MBBR)",
  description: [
    "The Moving Bed Bio Reactor (MBBR) is an innovative biological wastewater treatment technology that uses small, buoyant plastic carriers as a moving medium for microbial biofilm growth. These carriers float freely in the aeration tank, providing enormous surface area (up to 500 m²/m³ of media) for biofilm attachment.",
    "MBBR is compact, robust against shock loads, requires no sludge return, and can be easily retrofitted into existing tanks, making it highly attractive for upgrading existing systems or building new plants with a smaller footprint.",
  ],
  howItWorks:
    "Plastic polyethylene carriers (typically 10–25 mm diameter) are added to the aeration tank at 30–70% fill ratio. Aeration from diffusers at the tank bottom keeps carriers in constant motion. Aerobic bacteria colonise the carrier surfaces as biofilm. The biofilm degrades organic pollutants as wastewater flows through. Carriers are retained in the tank by stainless steel sieves, while treated water overflows to a clarifier or membrane system.",
  features: [
    "High-density polyethylene (HDPE) biofilm carriers",
    "Large effective surface area (200–500 m²/m³)",
    "Fine bubble diffuser aeration system",
    "SS sieve screens to retain media",
    "No sludge return required",
    "Bioaugmentation capability for enhanced removal",
    "Modular — stackable for capacity expansion",
  ],
  advantages: [
    "Compact footprint — 50% smaller than conventional ASP",
    "High biomass concentration improves treatment efficiency",
    "Excellent shock load tolerance",
    "No bulking or foaming issues from sludge",
    "Easy upgrade path for existing STP/ETP",
    "Nitrification and denitrification possible",
  ],
  applications: ["Municipal STP", "Hospital Effluent", "Food & Beverage", "Dairy", "Residential Townships", "Retrofit Upgrades"],
  specifications: [
    { label: "Carrier Fill Ratio", value: "30 – 70% volume" },
    { label: "Specific Surface Area", value: "200 – 500 m²/m³" },
    { label: "BOD Removal", value: "> 95%" },
    { label: "HRT", value: "4 – 12 hours" },
    { label: "DO Maintained", value: "2 – 4 mg/L" },
  ],
  images: [
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80",
  ],
};

export default function MBBRPage() {
  return <ProductDetailPage data={data} />;
}
