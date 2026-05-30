"use client";

import Lenis from "lenis";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/cases";
import { HeroNavbar } from "@/components/ui/Navbar";
import { PageTransition } from "./transition/PageTransition";
import { CaseFileCard } from "./components/CaseFileCard";

export function WorkIndex({ cases }: { cases: CaseStudy[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const lenis = new Lenis({
      orientation: "horizontal",
      gestureOrientation: "both",
      smoothWheel: true,
      wheelMultiplier: 1.2,
      lerp: 0.08,
      wrapper: containerRef.current,
      content: trackRef.current,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      const index = Math.round(scroll / 380) + 1;
      setCurrentIndex(Math.min(cases.length, Math.max(1, index)));
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [cases.length]);

  return (
    <PageTransition caseId="INDEX">
      <main className="relative h-dvh overflow-hidden bg-[#f4f1ea] text-[#1e1e1e]">
        <HeroNavbar cvPath="/cv/wahyu-budiman-cv.pdf" />

        <div className="absolute top-[52px] left-8 z-20 font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/40 uppercase">
          CASE FILES // {cases.length} OPERATIONS ON RECORD
        </div>

        <div
          ref={containerRef}
          className="scrollbar-hide h-dvh overflow-hidden"
        >
          <div ref={trackRef} className="flex h-dvh flex-row">
            <div className="flex h-dvh w-[280px] min-w-[280px] flex-col justify-end gap-4 border-r-[0.5px] border-[#2b2b2b]/15 p-8">
              <div className="mission-section-marker">ARCHIVE INDEX</div>
              <div className="h-px w-full bg-[#2b2b2b]/12" />
              <div className="font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/35 uppercase">
                TOTAL OPERATIONS: {String(cases.length).padStart(2, "0")}
              </div>
              <div className="font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/35 uppercase">
                CLEARANCE: GRANTED
              </div>
              <Link href="/" className="mission-action-link mt-8">
                ← RETURN_TO_BASE
              </Link>
            </div>

            {cases.map((caseStudy) => (
              <CaseFileCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}

            <div className="flex h-dvh w-[160px] min-w-[160px] flex-col justify-end p-8">
              <div className="rotate-90 font-mission-mono text-[9px] tracking-widest whitespace-nowrap text-[#2b2b2b]/20 uppercase">
                END OF ARCHIVE
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-8 z-20 font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/25 uppercase">
          SCROLL TO BROWSE ARCHIVES →
        </div>
        <div className="absolute right-8 bottom-5 z-20 font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/25 uppercase">
          {String(currentIndex).padStart(2, "0")}/
          {String(cases.length).padStart(2, "0")}
        </div>

        <div className="mission-paper-grain" />
        <div className="mission-scanlines" />
        <div className="mission-vignette" />
      </main>
    </PageTransition>
  );
}
