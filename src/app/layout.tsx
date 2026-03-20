import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Global Water Systems | Water Treatment Solutions",
  description:
    "Global Water Systems provides comprehensive water treatment solutions including RO Plants, ETP, STP, and industrial wastewater treatment across India.",
  keywords:
    "water treatment, RO plant, ETP, STP, sewage treatment, Chennai, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#041628",
              color: "#fff",
              border: "1px solid rgba(0,135,255,0.3)",
            },
          }}
        />
      </body>
    </html>
  );
}
