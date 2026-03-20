import ProductDetailPage from "@/components/ui/ProductDetailPage";

const data = {
  title: "Extended Aeration with Activated Sludge Process",
  subtitle: "Proven biological treatment technology for effective removal of BOD, COD, and suspended solids from sewage and effluent.",
  heroImage: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=1920&q=80",
  tag: "Products & Services",
  breadcrumbLabel: "Extended Aeration with ASP",
  description: [
    "The Extended Aeration Activated Sludge Process (EA-ASP) is one of the most widely used biological wastewater treatment methods. It achieves high BOD and suspended solids removal by maintaining a large population of aerobic microorganisms in a well-aerated tank, where they biodegrade organic pollutants.",
    "Global Water Systems designs ASP-based STPs and ETPs for domestic sewage, hospital wastewater, and low-to-medium strength industrial effluents. The extended aeration variant operates at a low food-to-microorganism ratio, producing minimal excess sludge.",
  ],
  howItWorks:
    "Screened and equalized wastewater enters the aeration tank, where compressed air from surface aerators or diffusers maintains dissolved oxygen above 2 mg/L. Aerobic bacteria oxidize dissolved organics and suspended material. The mixed liquor then flows to a secondary clarifier, where biomass settles. A portion of the settled sludge is returned to the aeration tank to maintain biomass concentration; excess sludge is periodically wasted and dewatered.",
  features: [
    "Equalization tank with coarse bubble aeration",
    "Extended aeration tank with surface or diffused aerators",
    "Lamella or tube settlers in secondary clarifier",
    "Sludge return and wasting system",
    "Automatic DO monitoring and blower control",
    "Tertiary sand filter and UV/chlorination",
    "Sludge dewatering press or drying beds",
  ],
  advantages: [
    "Proven and reliable technology",
    "BOD removal efficiency > 95%",
    "Minimal excess sludge generation",
    "Suitable for variable load conditions",
    "Low capital cost vs. membrane systems",
    "Simple operation and maintenance",
  ],
  applications: ["Municipal Sewage", "Hospitals", "Colleges", "Residential Townships", "Hotels", "Food Processing"],
  specifications: [
    { label: "BOD Removal", value: "> 95%" },
    { label: "COD Removal", value: "> 85%" },
    { label: "SS Removal", value: "> 90%" },
    { label: "MLSS Range", value: "2,000 – 4,000 mg/L" },
    { label: "HRT (Aeration)", value: "16 – 24 hours" },
  ],
  images: [
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    "https://images.unsplash.com/photo-1504892262-dac4ad67839c?w=600&q=80",
  ],
};

export default function ExtendedAerationPage() {
  return <ProductDetailPage data={data} />;
}
