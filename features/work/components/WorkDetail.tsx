import Link from "next/link";
import type { CaseStudy } from "@/lib/cases";
import { HeroNavbar } from "@/components/ui/Navbar";

import { PageTransition } from "../transition/PageTransition";
import { ScannerEnter } from "../transition/ScannerEnter";
import { ProblemSection } from "../sections/ProblemSection";
import { ProcessSection } from "../sections/ProcessSection";
import { SolutionSection } from "../sections/SolutionSection";
import { ImpactSection } from "../sections/ImpactSection";
import { ClassifiedBanner } from "./ClassifiedBanner";

export function WorkDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  const isClassified = caseStudy.classification === "CLASSIFIED";
  return (
    <PageTransition caseId={caseStudy.caseId}>
      <main className="relative min-h-screen bg-[#f4f1ea] text-[#1e1e1e]">
        <HeroNavbar cvPath="/cv/wahyu-budiman-cv.pdf" />

        <div className="sticky top-[52px] z-20 flex h-10 items-center justify-between border-b-[0.5px] border-[#2b2b2b]/12 bg-[#f4f1ea]/80 px-8 backdrop-blur-sm">
          <Link href="/work" className="mission-action-link">
            ← CASE_FILES
          </Link>
          <div className="font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/50 uppercase">
            {caseStudy.codename}
          </div>
          <div className="font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/40 uppercase">
            STATUS: {caseStudy.status}
          </div>
        </div>
        {isClassified ? <ClassifiedBanner /> : null}
        <ScannerEnter>
          <ProblemSection caseStudy={caseStudy} isClassified={isClassified} />
          <ProcessSection caseStudy={caseStudy} isClassified={isClassified} />
          <SolutionSection caseStudy={caseStudy} isClassified={isClassified} />
          <ImpactSection caseStudy={caseStudy} isClassified={isClassified} />
        </ScannerEnter>

        <div className="px-8 py-8 font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/35 uppercase">
          END OF DOCUMENT // {caseStudy.caseId}
        </div>

        <div className="mission-paper-grain" />
        <div className="mission-scanlines" />
        <div className="mission-vignette" />
      </main>
    </PageTransition>
  );
}
