import type { CaseStudy, Diagram } from "@/lib/cases";
import { DiagramViewer } from "../components/DiagramViewer";

type SolutionSectionProps = {
  caseStudy: CaseStudy;
  isClassified?: boolean;
};

function DiagramBlock({
  diagram,
  isClassified = false,
}: {
  diagram?: Diagram;
  isClassified?: boolean;
}) {
  if (!diagram) {
    return (
      <div className="mt-12 flex min-h-[200px] items-center justify-center border-[0.5px] border-[#2b2b2b]/12 p-6">
        <div className="font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/25 uppercase">
          ◊ DIAGRAM PENDING // EXPORT FROM FIGMA/EXCALIDRAW
        </div>
      </div>
    );
  }

  return (
    <figure className="mt-12 border-[0.5px] border-[#2b2b2b]/12 p-6">
      <img
        src={diagram.src}
        alt={diagram.alt}
        className="h-auto max-h-[520px] w-full object-contain"
      />
      <figcaption className="mt-3 font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/35 uppercase">
        {diagram.caption}
      </figcaption>
    </figure>
  );
}

export function SolutionSection({
  caseStudy,
  isClassified,
}: SolutionSectionProps) {
  return (
    <section
      data-scan-index="2"
      className="min-h-screen w-full border-b-[0.5px] border-[#2b2b2b]/10 px-4 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-[900px]">
        <div className="mission-work-section-header">03 — SOLUTION</div>

        <p className="mission-brief-copy max-w-[640px]">
          {caseStudy.solution.summary}
        </p>

        {isClassified && caseStudy.solution.diagram ? (
          <div className="mission-classified-figure mt-12">
            <div className="mission-classified-figure-bar" />
            <span className="mission-section-marker">
              [FIGURE REDACTED — CLEARANCE REQUIRED]
            </span>
            <span className="mt-2 font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/30 uppercase">
              {caseStudy.solution.diagram.caption}
            </span>
          </div>
        ) : (
          <DiagramViewer diagram={caseStudy.solution.diagram} />
        )}

        <div className="mt-12">
          <div className="mb-6 font-mission-mono text-[9px] tracking-[0.22em] text-[#2b2b2b]/40 uppercase">
            KEY DECISIONS // ARCHITECTURAL RECORD
          </div>

          <div className="space-y-3">
            {caseStudy.solution.keyDecisions.map((decision, index) =>
              decision.startsWith("[REDACTED") ? (
                <div
                  key={`${caseStudy.id}-decision-${index}`}
                  className="mission-redact-decision"
                >
                  <span className="font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/30">
                    [{String(index + 1).padStart(2, "0")}] {decision}
                  </span>
                </div>
              ) : (
                <div
                  key={`${caseStudy.id}-decision-${index}`}
                  className="border-l-[0.5px] border-[#2b2b2b]/15 pl-4 font-mission-mono text-[12px] leading-[1.9] text-[#1e1e1e]/70"
                >
                  <span className="mr-3 text-[#2b2b2b]/35">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  {decision}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-4 font-mission-mono text-[9px] tracking-[0.22em] text-[#2b2b2b]/40 uppercase">
            TECHNICAL STACK
          </div>

          <div className="flex flex-wrap gap-1">
            {caseStudy.stack.map((tag) => (
              <span key={tag} className="mission-work-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
