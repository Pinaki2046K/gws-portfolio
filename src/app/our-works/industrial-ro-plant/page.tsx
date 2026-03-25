import WorkDetailPage from "@/components/ui/WorkDetailPage";

const data = {
  title: "Industrial RO Plant",
  subtitle:
    "Heavy-duty reverse osmosis systems built for large-scale industrial operations — delivering process-grade pure water consistently.",
  heroImage:
    "https://images.unsplash.com/photo-1581093196277-9f608bb3b511?w=1920&q=80",
  tag: "Products",
  breadcrumbLabel: "Industrial RO Plant",
  breadcrumbParentHref: "/products",
  description: [
    "Industrial RO Plants from Global Water Systems are engineered for high-volume, continuous-duty water purification across demanding industrial environments. Using multi-stage reverse osmosis technology, our systems remove dissolved salts, heavy metals, organics, and microbial contaminants to produce water that meets process, boiler feed, and pharmaceutical-grade standards.",
    "Built with corrosion-resistant materials and automated controls, our industrial RO plants are designed for 24/7 operation with minimal downtime. Each system is custom-engineered based on feed water analysis, flow requirements, and end-use application.",
  ],
  features: [
    "Multi-stage high-pressure RO membrane arrays",
    "Auto-flush and CIP (Clean-in-Place) system",
    "Antiscalant dosing for membrane protection",
    "PLC-based automation with SCADA integration",
    "Stainless steel high-pressure pumps",
    "Online TDS and conductivity monitoring",
    "Energy recovery devices for high-flow systems",
  ],
  applications: [
    "Pharmaceuticals",
    "Boiler Feed Water",
    "Food & Beverage",
    "Textile Industry",
    "Power Plants",
    "Chemical Industry",
    "Dialysis Centres",
  ],
  images: [
    "/images/25-lph-indus.png",
    "/images/500-lph-indus.png",
    "/images/25-lph-indus-3.png",
  ],
  process: [
    { step: "01", title: "Feed Analysis", desc: "Complete water quality testing and TDS characterisation." },
    { step: "02", title: "System Design", desc: "Custom RO train design based on flow rate and purity targets." },
    { step: "03", title: "Installation", desc: "Skid-mounted plant installation with piping and electrical works." },
    { step: "04", title: "Commissioning", desc: "Performance testing, operator training and handover." },
  ],
};

export default function IndustrialROPlantPage() {
  return <WorkDetailPage data={data} />;
}