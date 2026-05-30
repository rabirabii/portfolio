import type { CaseStudy, Diagram } from "@/lib/cases";
import { ProcessDiagramSwitcher } from "../components/ProcessDiagramSwitcher";

type ProcessSectionProps = {
  caseStudy: CaseStudy;
  isClassified?: boolean;
};


export function ProcessSection({
  caseStudy,
  isClassified = false,
}: ProcessSectionProps) {
  return (
    <section
      data-scan-index="1"
      className="min-h-screen w-full border-b-[0.5px] border-[#2b2b2b]/10 px-4 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-[900px]">
        <div className="mission-work-section-header">02 — PROCESS</div>

        <p className="mission-brief-copy max-w-[640px]">
          {caseStudy.process.summary}
        </p>

        {isClassified && caseStudy.process.diagram ? (
          <div className="mission-classified-figure mt-12">
            <div className="mission-classified-figure-bar" />
            <span className="mission-section-marker">
              [FIGURE REDACTED — CLEARANCE REQUIRED]
            </span>
            <span className="mt-2 font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/30 uppercase">
              {caseStudy.process.diagram.caption}
            </span>
          </div>
        ) : (
          <ProcessDiagramSwitcher
            flowDiagram={caseStudy.process.diagram}
            sequenceDiagrams={caseStudy.process.sequenceDiagrams}
          />
        )}
      </div>
    </section>
  );
}
