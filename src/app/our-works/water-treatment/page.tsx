import WorkDetailPage from "@/components/ui/WorkDetailPage";

const data = {
  title: "Water Treatment Plant",
  subtitle:
    "Advanced water purification systems designed for industrial, institutional, and municipal applications.",
  heroImage:
    "/images/indus-hero.png",
  tag: "Our Works=80",
  breadcrumbLabel: "Water Treatment Plant",
  breadcrumbParentHref: "/our-works",
  description: [
    "Global Water Systems designs and commissions comprehensive Water Treatment Plants that deliver safe, clean water for a variety of end uses. Our solutions integrate pressure sand filters, activated carbon filters, iron removal filters, softeners, and reverse osmosis systems into a seamless process train.",
    "Every plant we build is custom-engineered to meet the specific feed water quality and end-use requirements of our clients — from government hospitals requiring ultrapure water for dialysis, to large industrial complexes needing high-volume process water.",
  ],
  features: [
    "Pressure Sand Filter (PSF) for suspended solids removal",
    "Activated Carbon Filter (ACF) for chlorine and odour removal",
    "Iron Removal Filter for high-iron borewell water",
    "Multi-grade sand filtration with automatic backwash",
    "UV sterilisation and micron cartridge filtration",
    "PLC-based automation for unattended operation",
    "High-efficiency energy recovery systems",
  ],
  applications: [
    "Hospitals & Healthcare",
    "Government Institutions",
    "Food & Beverage",
    "Pharmaceuticals",
    "Educational Institutions",
    "Residential Complexes",
    "Hotels & Resorts",
  ],
  images: [
    "/images/indus.png",
    "/images/indus-2.png",
    "/images/indus-3.png",
    "/images/indus-4.png",
    
    
  ],
  process: [
    { step: "01", title: "Site Survey", desc: "Feed water analysis and requirement assessment." },
    { step: "02", title: "Design", desc: "Custom process design and equipment selection." },
    { step: "03", title: "Installation", desc: "Turnkey erection and piping by our trained team." },
    { step: "04", title: "Commissioning", desc: "Testing, validation, and operator training." },
  ],
};

export default function WaterTreatmentPage() {
  return <WorkDetailPage data={data} />;
}
