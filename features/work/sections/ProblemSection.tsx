import type { CaseStudy } from "@/lib/cases";

type ProblemSectionProps = {
  caseStudy: CaseStudy;
  isClassified?: boolean;
};

export function ProblemSection({ caseStudy }: ProblemSectionProps) {
  return (
    <section
      data-scan-index="0"
      className="min-h-screen w-full border-b-[0.5px] border-[#2b2b2b]/10 px-4 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto grid max-w-[900px] gap-16 md:grid-cols-2">
        <div>
          <div className="mission-work-section-header">01 — PROBLEM</div>

          <div className="mb-3 font-mission-mono text-[9px] tracking-[0.22em] text-[#2b2b2b]/40 uppercase">
            CONTEXT
          </div>

          <p className="mission-brief-copy">{caseStudy.problem.context}</p>
        </div>

        <div>
          <div className="mb-6 font-mission-mono text-[9px] tracking-[0.22em] text-[#2b2b2b]/40 uppercase">
            PAIN POINTS // IDENTIFIED FRICTION
          </div>

          <div className="space-y-3">
            {caseStudy.problem.painPoints.map((point, index) => (
              <div
                key={`${caseStudy.id}-pain-${index}`}
                className="border-l-[0.5px] border-[#2b2b2b]/15 pl-4 font-mission-mono text-[12px] leading-[1.9] text-[#1e1e1e]/70"
              >
                <span className="mr-3 text-[#2b2b2b]/35">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
