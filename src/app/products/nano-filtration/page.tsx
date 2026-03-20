import ProductDetailPage from "@/components/ui/ProductDetailPage";

const data = {
  title: "Nano Filtration for Textile Industry",
  subtitle: "Membrane-based nanofiltration systems for colour removal, water recovery, and salt separation in dyeing effluents.",
  heroImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1920&q=80",
  tag: "Products & Services",
  breadcrumbLabel: "Nano Filtration",
  description: [
    "The textile dyeing industry generates highly coloured, high-TDS effluent that is challenging and expensive to treat by conventional methods. Our Nanofiltration (NF) systems use semi-permeable polyamide membranes with pore sizes between 0.001–0.01 microns to selectively reject colour, heavy metals, and multivalent salts while permeating monovalent salts and water.",
    "This allows dye houses to recover and reuse both the permeate (clean water + sodium chloride) and the retentate (concentrated dye for reuse or disposal), dramatically reducing fresh water consumption and effluent discharge volumes.",
  ],
  howItWorks:
    "Pre-treated dye effluent is pressurised through spiral-wound NF membranes. The membrane rejects colour compounds, divalent salts (Na₂SO₄, MgSO₄), and large organic molecules, while allowing clean water and NaCl to pass through. The permeate is reused in the dyeing process; the concentrate is sent for further evaporation or disposal.",
  features: [
    "Spiral-wound polyamide NF membrane elements",
    "High colour rejection (>98%) for reactive dyes",
    "Recovery of 60–80% permeate as reusable water",
    "Separation of NaCl and Na₂SO₄",
    "High-pressure stainless steel housings",
    "Anti-fouling membrane pre-treatment system",
    "CIP (Clean-In-Place) system included",
  ],
  advantages: [
    "Reduces fresh water consumption by up to 70%",
    "Enables salt recovery and reuse in dyeing",
    "Reduces effluent discharge volume significantly",
    "Lowers overall effluent treatment cost",
    "Meets stringent TNPCB colour norms",
    "Compact skid-mounted system",
  ],
  applications: ["Textile Dyeing", "Printing Units", "Knitting Industries", "Yarn Dyeing", "Processing Mills"],
  specifications: [
    { label: "Capacity", value: "5 m³/hr – 500 m³/hr" },
    { label: "Colour Rejection", value: "> 98%" },
    { label: "Operating Pressure", value: "10–40 bar" },
    { label: "Recovery Rate", value: "60–80%" },
  ],
  images: [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
  ],
};

export default function NanoFiltrationPage() {
  return <ProductDetailPage data={data} />;
}
