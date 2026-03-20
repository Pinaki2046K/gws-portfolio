import ProductDetailPage from "@/components/ui/ProductDetailPage";

const data = {
  title: "Submerged Aerobic Fixed Film Process (SAFF)",
  subtitle: "Fixed-film aerobic biological treatment delivering consistent performance even under variable load conditions.",
  heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80",
  tag: "Products & Services",
  breadcrumbLabel: "Submerged Aerobic Fixed Film Process (SAFF)",
  description: [
    "The Submerged Aerobic Fixed Film (SAFF) process uses a structured fixed media submerged in the aeration tank to support biofilm growth. Unlike MBBR, the media is stationary, and wastewater flows through the void spaces of the media as air is supplied from below.",
    "SAFF is particularly valued for its robustness under variable and shock loads, low excess sludge production, and the ability to achieve high treatment efficiency in a compact reactor. It is widely deployed in hospital STPs, hotel sewage systems, and urban residential complexes.",
  ],
  howItWorks:
    "Structured honeycomb or corrugated fixed media modules are installed within the aeration tank. Wastewater flows upward or downward through the media while air is diffused from fine-bubble diffusers below the media. Aerobic bacteria form a stable biofilm on the media surface. The close proximity of biofilm to flowing wastewater ensures highly efficient mass transfer of oxygen and nutrients, achieving high BOD and suspended solid removal. Treated water overflows to a secondary clarifier.",
  features: [
    "Fixed structured PVC honeycomb or corrugated media",
    "Fine or coarse bubble diffuser aeration",
    "High void ratio (> 95%) minimises clogging",
    "No mechanical mixing required",
    "Stainless steel support structure for media",
    "Optional pre-anoxic zone for denitrification",
    "Low-noise surface aerator option available",
  ],
  advantages: [
    "Stable performance under fluctuating loads",
    "Lower sludge generation than ASP",
    "No moving parts in the reactor",
    "Compact reactor with high volumetric load",
    "Easy to operate and maintain",
    "Can be built inside RCC tanks — no additional vessels",
  ],
  applications: ["Hospitals", "Hotels & Resorts", "Residential Complexes", "Colleges", "Small Industries", "STPs up to 5 MLD"],
  specifications: [
    { label: "BOD Removal", value: "> 95%" },
    { label: "COD Removal", value: "> 85%" },
    { label: "Media Void Ratio", value: "> 95%" },
    { label: "Volumetric BOD Load", value: "1 – 3 kg BOD/m³/day" },
    { label: "HRT", value: "6 – 16 hours" },
  ],
  images: [
    "https://images.unsplash.com/photo-1504892262-dac4ad67839c?w=600&q=80",
    "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&q=80",
  ],
};

export default function SAFFPage() {
  return <ProductDetailPage data={data} />;
}
