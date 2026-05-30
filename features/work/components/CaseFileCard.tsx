"use client";

import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/cases";
import { Redacted } from "./Redacted";
import { AnimatePresence, motion } from "framer-motion";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ/_.-:";

function ClassifiedReveal({
  isHovered,
  delay = 0,
  children,
  redactedWidth,
  className = "",
}: {
  isHovered: boolean;
  delay?: number;
  children: ReactNode;
  redactedWidth: string;
  className?: string;
}) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {isHovered ? (
        <motion.span
          key="revealed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, delay }}
          className={className}
        >
          {children}
        </motion.span>
      ) : (
        <motion.span
          key="redacted"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Redacted width={redactedWidth} />
        </motion.span>
      )}
    </AnimatePresence>
  );
}

export function CaseFileCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const [title, setTitle] = useState(caseStudy.mission);
  const frameRef = useRef<number | null>(null);
  const isClassified = caseStudy.classification === "CLASSIFIED";
  const [isHovered, setIsHovered] = useState(false);
  const [isStackExpanded, setIsStackExpanded] = useState(false);

  const stackTagClassName = isClassified
    ? "mission-work-tag transition-colors group-hover:border-[#2b2b2b]/35 group-hover:text-[#1e1e1e]/70"
    : "mission-work-tag transition-colors group-hover:border-[#f4f1ea]/20 group-hover:text-[#f4f1ea]/55";

  const startScramble = () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);

    const startedAt = performance.now();
    const duration = 300;

    const tick = (time: number) => {
      const progress = Math.min(1, (time - startedAt) / duration);

      setTitle(
        caseStudy.mission
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index / caseStudy.mission.length < progress) return char;
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join(""),
      );

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setTitle(caseStudy.mission);
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(tick);
  };

  const STACK_LIMIT = 5;
  const hasOverflowStack = caseStudy.stack.length > STACK_LIMIT;
  const visibleStack = isStackExpanded
    ? caseStudy.stack
    : caseStudy.stack.slice(0, STACK_LIMIT);
  const hiddenStackCount = Math.max(0, caseStudy.stack.length - STACK_LIMIT);
  return (
    <Link
      href={`/work/${caseStudy.id}`}
      data-cursor-invert={!isClassified ? "true" : undefined}
      onMouseEnter={() => {
        setIsHovered(true);
        if (!isClassified) startScramble();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsStackExpanded(false);
      }}
      className={`group flex min-h-[520px] w-full flex-col justify-between border-b-[0.5px] border-[#2b2b2b]/12 bg-[#f4f1ea] px-6 py-7 transition-colors duration-200 sm:h-dvh sm:w-[380px] sm:min-w-[380px] sm:border-r-[0.5px] sm:border-b-0 sm:px-7 sm:py-8 ${
        isClassified
          ? "hover:bg-[#f4f1ea]"
          : "hover:border-[#f4f1ea]/12 hover:bg-[#1e1e1e]"
      }`}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => {
        window.setTimeout(() => setIsHovered(false), 900);
      }}
    >
      <div>
        <div className="flex justify-between gap-4 font-mission-mono text-[9px] tracking-widest uppercase">
          <span className="text-[#2b2b2b]/40 transition-colors group-hover:text-[#f4f1ea]/40">
            FILE_ID: {caseStudy.caseId}
          </span>
          <span className="text-right text-[#2b2b2b]/30 transition-colors group-hover:text-[#f4f1ea]/30">
            {isClassified ? (
              <ClassifiedReveal
                isHovered={isHovered}
                delay={0.24}
                redactedWidth="72px"
                className="font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/30 uppercase"
              >
                ARCHIVE_DATE: {caseStudy.archiveDate}
              </ClassifiedReveal>
            ) : (
              <>ARCHIVE_DATE: {caseStudy.archiveDate}</>
            )}
          </span>
        </div>
        <div className="mt-3 mb-4 border-t-[0.5px] border-[#2b2b2b]/12 transition-colors group-hover:border-[#f4f1ea]/12" />
      </div>
      {isClassified ? (
        <div className="flex flex-col gap-3">
          <div className="font-mission-display text-[clamp(20px,5vw,26px)] leading-[1.1] tracking-[0.06em] ...">
            {caseStudy.index}
          </div>

          <div className="font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/40 uppercase">
            CODENAME: {caseStudy.caseId}
          </div>

          <div className="font-mission-display text-[22px] leading-[1.1] tracking-[0.06em] text-[#1e1e1e] uppercase">
            <ClassifiedReveal
              isHovered={isHovered}
              delay={0}
              redactedWidth="180px"
              className="font-mission-display text-[22px] leading-[1.1] tracking-[0.06em] text-[#1e1e1e] uppercase"
            >
              {caseStudy.mission}
            </ClassifiedReveal>
          </div>

          <div className="mt-4 font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/40 uppercase">
            VECTOR:
          </div>

          <div className="font-mission-mono text-[11px] tracking-wide text-[#1e1e1e]/70 uppercase">
            <ClassifiedReveal
              isHovered={isHovered}
              delay={0.16}
              redactedWidth="220px"
            >
              {caseStudy.vector}
            </ClassifiedReveal>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-1 flex-col justify-center gap-3">
            <div className="font-mission-display text-[52px] leading-none text-[#2b2b2b]/8 transition-colors group-hover:text-[#f4f1ea]/10">
              {caseStudy.index}
            </div>
            <div className="font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/40 uppercase transition-colors group-hover:text-[#f4f1ea]/40">
              CODENAME: {caseStudy.caseId}
            </div>
            <h2 className="font-mission-display text-[22px] leading-[1.1] tracking-[0.06em] text-[#1e1e1e] uppercase transition-colors group-hover:text-[#f4f1ea]">
              {title}
            </h2>
            <div className="mt-4 font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/40 uppercase transition-colors group-hover:text-[#f4f1ea]/40">
              VECTOR:
            </div>
            <div className="font-mission-mono text-[11px] tracking-wide text-[#1e1e1e]/70 uppercase transition-colors group-hover:text-[#f4f1ea]/70">
              {caseStudy.vector}
            </div>
          </div>
        </>
      )}
      <div>
        <div className="grid grid-cols-2 gap-4 font-mission-mono text-[9px] tracking-widest uppercase">
          <div className="text-[#2b2b2b]/45 transition-colors group-hover:text-[#f4f1ea]/45">
            CLEARANCE: {caseStudy.clearance}
          </div>
          {isClassified ? (
            <div className="text-right text-[#2b2b2b]/45">
              STATUS: {caseStudy.status}
              <br />
              <span className="text-[#2b2b2b]/35">ACCESS: RESTRICTED</span>
            </div>
          ) : (
            <div className="text-right text-[#2b2b2b]/45 transition-colors group-hover:text-[#f4f1ea]/45">
              STATUS: {caseStudy.status}
              <br />
              <span className="text-[#2b2b2b]/35 transition-colors group-hover:text-[#f4f1ea]/35">
                ORBIT: {caseStudy.orbit}
              </span>
            </div>
          )}
        </div>

        <div className="mt-5 border-t-[0.5px] border-[#2b2b2b]/12 pt-4 transition-colors group-hover:border-[#f4f1ea]/12">
          <div className="flex flex-wrap gap-1">
            {visibleStack.map((tag, index) =>
              isClassified && index > 2 ? (
                <span key={`${tag}-${index}`} className={stackTagClassName}>
                  {isHovered ? (
                    tag
                  ) : (
                    <Redacted
                      width="48px"
                      className="mission-card-redact-inline"
                    />
                  )}
                </span>
              ) : (
                <span key={tag} className={stackTagClassName}>
                  {tag}
                </span>
              ),
            )}
            {hasOverflowStack ? (
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setIsStackExpanded((current) => !current);
                }}
                className={
                  isClassified
                    ? "mission-stack-manifest"
                    : "mission-stack-manifest mission-stack-manifest--public"
                }
              >
                {isStackExpanded
                  ? "COLLAPSE"
                  : `+${String(hiddenStackCount).padStart(2, "0")} MANIFEST`}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}
