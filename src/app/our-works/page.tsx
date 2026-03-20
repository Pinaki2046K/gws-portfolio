import type { Metadata } from "next";
import OurWorksClient from "./OurWorksClient";

export const metadata: Metadata = {
  title: "Our Works | Global Water Systems",
  description:
    "Explore the water treatment projects delivered by Global Water Systems across Tamil Nadu.",
};

export default function OurWorksPage() {
  return <OurWorksClient />;
}
