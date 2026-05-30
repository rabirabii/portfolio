import { HeroSection } from "@/features/home/hero/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Wahyu Budiman is a Jakarta-based System Analyst and Product Engineer focused on transforming scattered business signals into usable operational systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wahyu Budiman — System Analyst / Product Engineer",
    description:
      "A classified Apollo-era portfolio archive for product engineering, systems analysis, and operational governance.",
    url: "/",
  },
};

export default function Home() {
  return <HeroSection />;
}
