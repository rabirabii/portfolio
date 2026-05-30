import { ContactPage } from "@/features/contact/ContactPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signal Channel",
  description:
    "Contact Wahyu Budiman for product engineering, systems analysis, and operational systems work.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Signal Channel — Wahyu Budiman",
    description:
      "Open a direct signal channel to Wahyu Budiman. Email, LinkedIn, GitHub, and transmission form available.",
    url: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
