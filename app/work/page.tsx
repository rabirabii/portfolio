import { WorkIndex } from "@/features/work/WorkIndex";
import { CASES } from "@/lib/cases";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Files",
  description:
    "Selected case files from Wahyu Budiman: KPI governance, calibration management, and professional transition governance.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Case Files — Wahyu Budiman",
    description:
      "Mission archives covering product engineering, systems analysis, governance platforms, and operational continuity.",
    url: "/work",
  },
};

export default function Page() {
  return <WorkIndex cases={CASES} />;
}
