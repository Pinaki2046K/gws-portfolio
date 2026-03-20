import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Global Water Systems",
  description:
    "Learn about Global Water Systems — a decade of excellence in water and wastewater treatment across Tamil Nadu.",
};

export default function AboutPage() {
  return <AboutClient />;
}
