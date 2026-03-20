import WorkDetailPage from "@/components/ui/WorkDetailPage";

const data = {
  title: "Sewage & Effluent Treatment Plant",
  subtitle:
    "Compliant STP and ETP solutions protecting the environment and meeting all regulatory discharge standards.",
  heroImage:
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80",
  tag: "Our Works",
  breadcrumbLabel: "Sewage & Effluent Treatment",
  breadcrumbParentHref: "/our-works",
  description: [
    "Our Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP) are engineered to handle the most complex waste streams — from domestic sewage to highly loaded industrial effluents. We ensure treated water meets or exceeds TNPCB and CPCB norms.",
    "With expertise across industries including textiles, tanneries, food processing, and pharmaceuticals, we design treatment trains that combine physical, chemical, and biological processes for maximum contaminant removal.",
  ],
  features: [
    "Bar screen and grit chamber for primary treatment",
    "Equalization tank with aeration",
    "Biological treatment via Extended Aeration / MBBR / SAFF",
    "Secondary clarifier with sludge recycling",
    "Tertiary treatment: sand filtration + UV or chlorination",
    "Sludge dewatering via filter press or centrifuge",
    "SCADA monitoring and automated dosing",
  ],
  applications: [
    "Hospitals & Clinics",
    "Textile Industry",
    "Tanneries",
    "Food Processing",
    "Dairy Industry",
    "Residential Townships",
    "Commercial Complexes",
  ],
  images: [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&q=80",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80",
  ],
  process: [
    { step: "01", title: "Characterisation", desc: "Effluent sampling and treatability study." },
    { step: "02", title: "Process Design", desc: "Selection of optimal treatment technology." },
    { step: "03", title: "Construction", desc: "Civil, mechanical and electrical works." },
    { step: "04", title: "Compliance", desc: "Regulatory testing and TNPCB clearance." },
  ],
};

export default function SewageTreatmentPage() {
  return <WorkDetailPage data={data} />;
}
