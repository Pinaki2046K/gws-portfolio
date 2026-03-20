import ProductDetailPage from "@/components/ui/ProductDetailPage";

const data = {
  title: "Multiple Effect Evaporation Plant with Crystallizer",
  subtitle:
    "Zero liquid discharge solutions using MEE and crystallization technology to recover water and eliminate effluent disposal.",
  heroImage:
    "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1920&q=80",
  tag: "Products & Services",
  breadcrumbLabel: "MEE with Crystallizer",
  description: [
    "Multiple Effect Evaporation (MEE) plants are the cornerstone of Zero Liquid Discharge (ZLD) systems. By evaporating water through a series of effects at progressively lower pressures, MEE achieves outstanding thermal efficiency while concentrating effluent to near-solid slurry.",
    "Combined with an Agitated Thin Film Dryer (ATFD) or Forced Circulation Crystallizer, our ZLD systems recover valuable salts as dry solids, leaving no liquid waste to discharge. This technology is mandated by environmental regulators for high-TDS industries such as textile dyeing, tanneries, and distilleries.",
  ],
  howItWorks:
    "Pre-treated effluent enters the first effect evaporator, heated by live steam. The vapour produced from the first effect serves as the heating medium for the second effect (operating at lower pressure/temperature), and so on through multiple effects. This cascade dramatically reduces steam consumption. The concentrated brine from the final effect is fed to a forced circulation crystallizer where salts precipitate out. A centrifuge or filter press separates the dry salt cake, and the condensate (clean water) is recycled back to the process.",
  features: [
    "2, 3, or 4-effect evaporation trains for steam economy",
    "Forced Circulation or Falling Film evaporator design",
    "Agitated Thin Film Dryer (ATFD) for salt recovery",
    "Mechanical Vapour Recompression (MVR) option",
    "Anti-scalant dosing and CIP provisions",
    "Full PLC/SCADA automation",
    "High-grade SS 316L wetted components",
  ],
  advantages: [
    "Achieves true Zero Liquid Discharge",
    "Recovers 95–99% of water for reuse",
    "Salts recovered as dry, disposable solids",
    "Meets TNPCB/CPCB ZLD mandates",
    "Reduces freshwater consumption significantly",
    "Modular design for future capacity scaling",
  ],
  applications: [
    "Textile Dyeing",
    "Tanneries",
    "Distilleries",
    "Pharmaceuticals",
    "Chemical Plants",
    "Refineries",
    "Fertilizer Plants",
  ],
  specifications: [
    { label: "Feed TDS Range", value: "5,000 – 1,50,000 mg/L" },
    { label: "Water Recovery", value: "95–99%" },
    { label: "Steam Economy", value: "2–3.5 kg water/kg steam" },
    { label: "Outlet", value: "Dry salt cake + condensate" },
  ],
  images: [
    "https://images.unsplash.com/photo-1580974852861-8eb7c7f9b0c2?w=600&q=80",
    "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=600&q=80",
  ],
};

export default function EvaporationPage() {
  return <ProductDetailPage data={data} />;
}
