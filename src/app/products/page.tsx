import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products & Services | Global Water Systems",
  description:
    "Explore our complete range of water treatment products: filtration, softening, desalination, MBBR, SAFF, nano filtration and more.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
