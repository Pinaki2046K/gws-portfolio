import ProductDetailPage from "@/components/ui/ProductDetailPage";

const data = {
  title: "Demineralization Plant",
  subtitle: "High-purity DM water for pharmaceutical, power generation, and precision manufacturing applications.",
  heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  tag: "Products & Services",
  breadcrumbLabel: "Demineralization",
  description: [
    "Demineralization (DM) Plants use a two-bed or mixed-bed ion exchange system to remove virtually all dissolved mineral salts from water, producing high-purity water with conductivity as low as 0.1 µS/cm. This ultrapure water is essential for boilers, pharmaceuticals, electronics, and laboratory applications.",
    "Global Water Systems supplies both two-bed (cation + anion) DM plants and mixed-bed polishers depending on the required purity level and flow rate.",
  ],
  howItWorks:
    "Feed water first passes through a strong acid cation (SAC) resin bed, which exchanges cations (Ca²⁺, Mg²⁺, Na⁺) for H⁺ ions. It then flows through a strong base anion (SBA) resin bed, exchanging anions (Cl⁻, SO₄²⁻, SiO₂) for OH⁻ ions. The H⁺ and OH⁻ combine to form pure water (H₂O). A mixed-bed polisher may be added for ultra-high purity.",
  features: [
    "Two-bed SAC + SBA ion exchange system",
    "Mixed-bed polisher for ultra-high purity",
    "Automatic regeneration with acid and caustic",
    "Online conductivity and TDS monitoring",
    "Degasser tower for CO₂ removal",
    "FRP vessels with internal distribution systems",
    "Chemical dosing systems included",
  ],
  advantages: [
    "Achieves conductivity < 0.1 µS/cm",
    "Removes silica, chlorides, sulfates completely",
    "Reduces boiler scale and corrosion",
    "Automated regeneration minimises downtime",
    "Modular design for easy scale-up",
    "Long resin life with proper pre-treatment",
  ],
  applications: ["Power Plants", "Pharmaceuticals", "Boilers", "Electronics", "Laboratories", "Chemical Industry"],
  specifications: [
    { label: "Capacity", value: "100 LPH – 50,000 LPH" },
    { label: "Outlet Conductivity", value: "< 1 µS/cm (two-bed)" },
    { label: "Mixed-Bed Purity", value: "< 0.1 µS/cm" },
    { label: "Silica Removal", value: "> 99.9%" },
  ],
  images: [
    "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=600&q=80",
    "https://images.unsplash.com/photo-1580974852861-8eb7c7f9b0c2?w=600&q=80",
  ],
};

export default function DemineralizationPage() {
  return <ProductDetailPage data={data} />;
}
