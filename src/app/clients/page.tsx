import type { Metadata } from "next";
import ClientsClient from "./ClientsClient";

export const metadata: Metadata = {
  title: "Our Clients | Global Water Systems",
  description:
    "Global Water Systems serves government hospitals, private institutions, dialysis centres, colleges, and industrial clients across Tamil Nadu.",
};

export default function ClientsPage() {
  return <ClientsClient />;
}
