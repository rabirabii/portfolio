/* eslint-disable react/jsx-no-comment-textnodes */
import { HeroNavbar } from "@/components/ui/Navbar";
import { BiometricScan } from "./components/BiometricScan";
import { PersonnelFile } from "./components/PersonnelFile";
import { OperationalPhilosophy } from "./components/OperationalPhilosophy";

export function AboutPage() {
  const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#f4f1ea] text-[#1e1e1e]">
      <HeroNavbar cvPath="/cv/wahyu-budiman-cv.pdf" />

      <div>
        <div className="mission-classified-banner">
          <span className="mission-classified-banner-marker">
            CLASSIFICATION: RESTRICTED — PARTIAL DECLASSIFICATION
          </span>
          <span className="mission-classified-bannner-body">
            PERSONNEL RECORDS ARE RELEASED ON A NEED-TO-KNOW BASIS. SOME
            OPERATIONAL DETAILS REMAIN SEALED PENDING REVIEW.
          </span>
          <span className="mission-classified-banner-meta">
            ACCESS LOGGED: {timestamp} // CLEARANCE: TEMPORARY
          </span>
        </div>
        <section className="mx-auto max-w-[1100px] px-8 py-16">
          <div className="mb-12 border-b-0.5px border-[#2b2b2b]/12 pb-3">
            <div className="flex items-center justify-between gap-6 font-mission-mono text-[9px] tracking-widest uppercase">
              <span className="text-[#2b2b2b]/40">PERSONNEL FILE</span>
              <span className="text-right text-[#2b2b2b]/30">
                FILE REF: WB-001
              </span>
            </div>
          </div>

          <div className="grid gap-16 md:grid-cols-[320px_1fr]">
            <aside>
              <BiometricScan />
              <PersonnelFile />
            </aside>

            <OperationalPhilosophy />
          </div>
        </section>
      </div>
      <div className="mission-paper-grain" />
      <div className="mission-scanlines" />
      <div className="mission-vignette" />
    </main>
  );
}
