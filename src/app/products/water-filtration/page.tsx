import ProductDetailPage from "@/components/ui/ProductDetailPage";

const data = {
  title: "Water Filtration Plant",
  subtitle: "Multi-stage filtration solutions for turbidity removal, chemical reduction, and safe drinking water production.",
  heroImage: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=1920&q=80",
  tag: "Products & Services",
  breadcrumbLabel: "Water Filtration Plant",
  description: [
    "Our Water Filtration Plants use a combination of physical and chemical filtration stages to remove suspended solids, turbidity, iron, manganese, chlorine, and organic compounds from raw water sources including borewells, rivers, and municipal supply.",
    "Each system is custom-designed based on inlet water quality analysis and the desired treated water parameters, ensuring optimal performance for your specific application.",
  ],
  howItWorks:
    "Raw water passes through a Pressure Sand Filter (PSF) to remove large suspended particles, followed by an Activated Carbon Filter (ACF) for chlorine, colour, and odour removal. An Iron Removal Filter (IRF) eliminates dissolved iron through aeration and oxidation. A final micron cartridge filter and optional UV steriliser ensure pathogen-free, clear water.",
  features: [
    "Pressure Sand Filter (PSF) with graded silica sand",
    "Activated Carbon Filter for chlorine & organics",
    "Iron & Manganese Removal Filter",
    "Multi-grade filtration media",
    "Automatic backwash control",
    "FRP or MS pressure vessels",
    "Low pressure drop design",
  ],
  advantages: [
    "Removes 99%+ of suspended solids",
    "Significant turbidity reduction",
    "Reduces chlorine taste and odour",
    "Low maintenance with automated backwash",
    "Modular design for easy capacity expansion",
    "Energy-efficient operation",
  ],
  applications: ["Hospitals", "Hotels", "Schools", "Industries", "Government", "Residential"],
  specifications: [
    { label: "Capacity", value: "500 LPH – 5,00,000 LPH" },
    { label: "Inlet Turbidity", value: "Up to 50 NTU" },
    { label: "Outlet Turbidity", value: "< 1 NTU" },
    { label: "Vessel Material", value: "FRP / MS Epoxy" },
  ],
  images: [
    "https://images.unsplash.com/photo-1580974852861-8eb7c7f9b0c2?w=600&q=80",
    "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&q=80",
  ],
};

export default function WaterFiltrationPage() {
  return <ProductDetailPage data={data} />;
}
