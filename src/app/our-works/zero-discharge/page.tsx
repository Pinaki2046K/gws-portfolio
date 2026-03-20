import WorkDetailPage from "@/components/ui/WorkDetailPage";

const data = {
  title: "Zero Discharge Plant",
  subtitle:
    "Eliminating liquid waste entirely through closed-loop evaporation and crystallisation technology.",
  heroImage:
    "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1920&q=80",
  tag: "Our Works",
  breadcrumbLabel: "Zero Discharge Plant",
  breadcrumbParentHref: "/our-works",
  description: [
    "Zero Liquid Discharge (ZLD) plants represent the gold standard in industrial wastewater management. Our ZLD systems use Multiple Effect Evaporation (MEE) combined with crystallisers to recover over 99% of water from treated effluent, leaving only dry solid waste.",
    "This technology is especially critical for textile dyeing units, tanneries, and pharmaceuticals operating in ecologically sensitive zones where any liquid discharge is prohibited.",
  ],
  features: [
    "Multiple Effect Evaporation (MEE) system",
    "Agitated Thin Film Dryer (ATFD) for salt recovery",
    "Crystalliser for zero liquid discharge",
    "High-efficiency mechanical vapour recompression (MVR)",
    "Anti-scaling and anti-fouling protection",
    "Fully automated PLC / SCADA control",
    "Minimum steam consumption design",
  ],
  applications: [
    "Textile Dyeing Units",
    "Tanneries",
    "Pharmaceuticals",
    "Distilleries",
    "Chemical Industries",
    "Regulated Industrial Zones",
  ],
  images: [
    "https://images.unsplash.com/photo-1580974852861-8eb7c7f9b0c2?w=800&q=80",
    "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=400&q=80",
    "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=400&q=80",
  ],
  process: [
    { step: "01", title: "Pre-Treatment", desc: "Effluent treatment to meet evaporator feed specifications." },
    { step: "02", title: "Evaporation", desc: "MEE system concentrates the feed to slurry." },
    { step: "03", title: "Crystallisation", desc: "Crystalliser converts slurry to crystallised salts." },
    { step: "04", title: "Recovery", desc: "Condensate recovered as reuse-quality water." },
  ],
};

export default function ZeroDischargePage() {
  return <WorkDetailPage data={data} />;
}
