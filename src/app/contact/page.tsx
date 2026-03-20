import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Global Water Systems",
  description:
    "Get in touch with Global Water Systems for water treatment solutions, quotes, and project enquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
