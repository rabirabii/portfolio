import { AboutPage } from "@/features/about/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personnel File",
  description:
    "Personnel file for Wahyu Budiman: System Analyst, Product Engineer, and builder of operational systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Personnel File — Wahyu Budiman",
    description:
      "Partial declassification of Wahyu Budiman's operating philosophy, field attributes, and project record.",
    url: "/about",
  },
};
export default function Page() {
  return <AboutPage />;
}
