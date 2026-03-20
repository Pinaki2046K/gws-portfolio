import ProductDetailPage from "@/components/ui/ProductDetailPage";

const data = {
  title: "Sea Water Desalination Plant",
  subtitle: "High-pressure SWRO systems converting seawater into clean, potable water for coastal communities and industries.",
  heroImage: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1920&q=80",
  tag: "Products & Services",
  breadcrumbLabel: "Sea Water Desalination Plant",
  description: [
    "Our Sea Water Reverse Osmosis (SWRO) Plants use high-pressure pumps and semi-permeable membranes to separate dissolved salts from seawater, producing fresh water suitable for drinking, industrial processes, or irrigation. With TDS levels of 35,000–45,000 mg/L in seawater, our SWRO systems achieve permeate quality below 500 mg/L.",
    "Each plant is engineered with an energy recovery device (ERD) to significantly reduce specific energy consumption, making it economical for continuous large-scale operation in coastal Tamil Nadu.",
  ],
  howItWorks:
    "Seawater is drawn in, pre-treated through coarse screens, media filters, and cartridge filters, then pressurised to 55–70 bar by high-pressure pumps. This pressurised water is forced across semi-permeable RO membranes. Fresh water (permeate) passes through while dissolved salts are concentrated and discharged as brine. An energy recovery device recaptures energy from the high-pressure brine to reduce power consumption.",
  features: [
    "Seawater intake and pre-filtration system",
    "High-pressure pumps (55–70 bar operating pressure)",
    "Sea water grade TFC spiral wound membranes",
    "Energy recovery device (Pressure Exchanger)",
    "Antiscalant and chemical dosing systems",
    "CIP (Clean-In-Place) system for membranes",
    "PLC automation with remote monitoring",
  ],
  advantages: [
    "Produces potable water from seawater",
    "Energy-efficient with pressure exchangers",
    "Modular skid-mounted design for rapid deployment",
    "Robust pre-treatment protects membranes",
    "High recovery rate (35–45%)",
    "Suitable for remote coastal locations",
  ],
  applications: ["Coastal Industries", "Municipal Water Supply", "Island Communities", "Power Plants", "Resorts & Hotels", "Desalination Parks"],
  specifications: [
    { label: "Feed TDS", value: "35,000 – 45,000 mg/L" },
    { label: "Permeate TDS", value: "< 500 mg/L" },
    { label: "Operating Pressure", value: "55 – 70 bar" },
    { label: "Recovery Rate", value: "35 – 45%" },
    { label: "Capacity Range", value: "5,000 – 10,00,000 LPD" },
  ],
  images: [
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80",
  ],
};

export default function DesalinationPage() {
  return <ProductDetailPage data={data} />;
}
