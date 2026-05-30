/* eslint-disable react/jsx-no-comment-textnodes */
import { TypewriterText } from "@/components/ui/TypewriterText";
import Link from "next/link";
import type { CSSProperties } from "react";

const PHILOSOPHY_LINES = `   Before a single line is written, three signals must be acquired: the
          origin of failure, the intended destination, and the terrain between
          them. A system is not built — it is recognized. The structure already
          exists in the problem. The work is to find it.
                The most effective interventions begin before the keyboard. Every
          system has users who inherited it, stakeholders who commissioned it,
          and operators who outlived its original intent. To build anything
          worth keeping, you must first become all three`;

export function OperationalPhilosophy() {
  return (
    <section>
      <h1
        className="mb-2 font-mission-display text-[#1e1e1e] uppercase"
        style={{
          fontSize: "clamp(36px, 4vw, 52px)",
          letterSpacing: "0.08em",
          lineHeight: 1,
        }}
      >
        WAHYU BUDIMAN
      </h1>

      <div className="mb-8 font-mission-mono text-[10px] tracking-widest text-[#2b2b2b]/55 uppercase">
        SYSTEM ANALYST / PRODUCT ENGINEER
      </div>

      <div className="mb-8 border-t-[0.5px] border-[#2b2b2b]/12" />

      <div className="mb-12">
        <div className="mission-section-marker mb-4">
          OPERATIONAL PHILOSOPHY
        </div>
        <p className="max-w-[520px] font-mission-mono text-[13px] leading-[1.9] text-[#1e1e1e]/80">
          <TypewriterText text={PHILOSOPHY_LINES} delay={400} speed={18} />
        </p>
      </div>

      <div className="mb-12">
        <div className="mission-section-marker mb-4">FIELD ATTRIBUTES</div>
        <div className="mb-2 font-mission-display text-[22px] leading-[1.2] tracking-[0.12em] text-[#1e1e1e] uppercase">
          SEEKER. BUILDER. OPERATOR. PIONEER.{" "}
        </div>
        <div className="font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/30">
          // self-assigned field designations — not a warning, a method
        </div>
      </div>

      <div>
        <div className="mission-section-marker mb-4">OPERATIONAL RECORD</div>

        <OperationalRow
          index="01"
          name="MS-DIGI"
          mission="KPI GOVERNANCE PLATFORM"
          status="DEPLOYED"
        />
        <OperationalRow
          index="02"
          name="EXIT-CLR"
          mission="GOVERNANCE & TRANSITION"
          status="CLOSED [RESTRICTED]"
          restricted
        />
      </div>

      <div className="mt-8 flex items-center justify-between border-t-[0.5px] border-[#2b2b2b]/12 pt-6">
        <Link href="/" className="mission-action-link">
          ← RETURN_TO_BASE
        </Link>
        <Link href="/contact" className="mission-action-link">
          INITIALIZE_SIGNAL_CHANNEL →
        </Link>
      </div>
    </section>
  );
}

function OperationalRow({
  index,
  name,
  mission,
  status,
  restricted = false,
}: {
  index: string;
  name: string;
  mission: string;
  status: string;
  restricted?: boolean;
}) {
  return (
    <div className="flex justify-between gap-4 border-b-[0.5px] border-[#2b2b2b]/10 py-3 font-mission-mono text-[10px] uppercase">
      <span className="text-[#2b2b2b]/30">[{index}]</span>
      <span className="text-[#1e1e1e]/70">{name}</span>
      <span className="text-[#2b2b2b]/45">{mission}</span>
      <span
        className={`text-right ${
          restricted ? "text-[#2b2b2b]/30" : "text-[#2b2b2b]/40"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
