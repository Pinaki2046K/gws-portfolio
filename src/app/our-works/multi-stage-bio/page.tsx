import WorkDetailPage from "@/components/ui/WorkDetailPage";

const data = {
  title: "Multi Stage Biological Treatment",
  subtitle:
    "Advanced biological processes for superior organic removal with low energy and operational cost.",
  heroImage:
    "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=1920&q=80",
  tag: "Our Works",
  breadcrumbLabel: "Multi Stage Biological Treatment",
  breadcrumbParentHref: "/our-works",
  description: [
    "Multi-stage biological treatment combines the best of activated sludge, attached growth, and fixed-film technologies to achieve superior BOD, COD, and nutrient removal. Our systems leverage ASP, MBBR, and SAFF processes to deliver consistently compliant treated effluent.",
    "The multi-stage approach provides robustness against load fluctuations, making it ideal for hospitals, townships, and food processing plants where wastewater quality varies throughout the day.",
  ],
  features: [
    "Extended Aeration with Activated Sludge Process (ASP)",
    "Moving Bed Bio Reactor (MBBR) with plastic media",
    "Submerged Aerobic Fixed Film (SAFF) process",
    "Nutrient removal (Nitrogen & Phosphorus)",
    "High biomass concentration with compact footprint",
    "Low excess sludge generation",
    "Modular and expandable design",
  ],
  applications: [
    "Municipal Sewage",
    "Hospital Wastewater",
    "Food & Beverage",
    "Dairy Industry",
    "Residential Townships",
    "Hotels & Resorts",
    "Educational Campuses",
  ],
  images: [
    "https://images.unsplash.com/photo-1504892262-dac4ad67839c?w=800&q=80",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&q=80",
  ],
  process: [
    { step: "01", title: "Primary", desc: "Screening, grit removal and flow equalisation." },
    { step: "02", title: "Biological", desc: "Multi-stage aerobic biological treatment." },
    { step: "03", title: "Secondary", desc: "Clarification and sludge management." },
    { step: "04", title: "Tertiary", desc: "Polishing filtration, disinfection and reuse." },
  ],
};

export default function MultiStageBioPage() {
  return <WorkDetailPage data={data} />;
}
