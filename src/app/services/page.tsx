import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | Global Water Systems",
  description:
    "Explore our complete range of maintenance and service contracts — Annual Maintenance, Comprehensive Maintenance, and Breakdown Call support.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}