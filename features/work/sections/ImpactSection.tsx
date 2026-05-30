import Link from "next/link";
import type { CaseStudy } from "@/lib/cases";
import { CASES } from "@/lib/cases";

type ImpactSectionProps = {
  caseStudy: CaseStudy;
  isClassified?: boolean;
};

export function ImpactSection({ caseStudy }: ImpactSectionProps) {
  const nextCase = caseStudy.next
    ? CASES.find((item) => item.id === caseStudy.next)
    : undefined;

  return (
    <section
      data-scan-index="3"
      className="min-h-screen w-full border-b-[0.5px] border-[#2b2b2b]/10 px-4 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-[900px]">
        <div className="mission-work-section-header">04 — IMPACT</div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {caseStudy.impact.metrics.map((metric, index) => (
            <div
              key={`${caseStudy.id}-metric-${index}`}
              className="border-b-[0.5px] border-[#2b2b2b]/10 pb-6 md:border-b-0 md:pb-0"
            >
              {metric.value === "█████" ? (
                <div className="font-mission-mono text-[28px] leading-none tracking-widest text-[#1e1e1e]/60">
                  {metric.value}
                </div>
              ) : (
                <div className="mission-work-metric-value">{metric.value}</div>
              )}

              <div className="mission-work-metric-label">{metric.label}</div>
            </div>
          ))}
        </div>

        <div>
          <div className="mb-3 font-mission-mono text-[9px] tracking-[0.22em] text-[#2b2b2b]/40 uppercase">
            FIELD ASSESSMENT
          </div>

          <p className="mission-brief-copy max-w-[640px] italic">
            {caseStudy.impact.qualitative}
          </p>
        </div>

        {nextCase ? (
          <div className="mt-16 border-t-[0.5px] border-[#2b2b2b]/15 pt-8">
            <div className="mb-4 font-mission-mono text-[9px] tracking-[0.22em] text-[#2b2b2b]/40 uppercase">
              NEXT OPERATION:
            </div>

            <div className="font-mission-display text-[28px] leading-none tracking-[0.08em] text-[#1e1e1e] uppercase">
              {nextCase.codename}
            </div>

            <Link
              href={`/work/${nextCase.id}`}
              className="mission-action-link mt-6 inline-block"
            >
              → INITIALIZE_{nextCase.id.toUpperCase()}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
