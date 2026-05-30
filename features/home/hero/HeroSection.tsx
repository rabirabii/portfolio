import Link from "next/link";

import { HeroBackgroundGrid } from "./components/HeroBackgroundGrid";
import { HeroNavbar } from "../../../components/ui/Navbar";
import { OrbitalCenterpiece } from "./components/OrbitalCenterpiece";
import { BootSequence } from "./components/BootSequence";

const MISSION_OBJECTIVE =
  "MISSION OBJECTIVE: TRANSFORM AMBIGUITY INTO OPERATIONAL SYSTEMS";
const INTRO_TEXT =
  "I solve complex business and technical problems by turning scattered signals into clear, usable systems.";
const ROLE_TEXT = "SYSTEM ANALYST / PRODUCT ENGINEER";
const TELEMETRY_TEXT = "COORD: 06°12'S 106°49'E // STATUS: ORBITAL";
const DOCUMENT_REF = "DOC. REF: WB-2026 // CLASSIFIED: CLEARANCE GRANTED";
const CV_PATH = "/cv/wahyu-budiman-cv.pdf";
const SYSTEM_READOUT =
  "SIGNAL: BUSINESS LOGIC // PAYLOAD: PRODUCT SYSTEMS // VECTOR: ANALYSIS → EXECUTION";
export function HeroSection() {
  const telemetry = (
    <>
      <div className="mission-meta mission-meta-left">
        <span className="hidden sm:inline">{DOCUMENT_REF}</span>
        <span className="sm:hidden">
          DOC. REF: WB-2026 // CLEARANCE GRANTED
        </span>
      </div>

      <div className="mission-meta mission-meta-center">{SYSTEM_READOUT}</div>
      <div className="mission-meta mission-meta-right">{TELEMETRY_TEXT}</div>
    </>
  );

  const brief = (
    <div className="mission-brief">
      <div className="mission-section-marker">{"// 01 - INTRO"}</div>
      <div className="mission-objective">{MISSION_OBJECTIVE}</div>
      <p className="mission-brief-copy">{INTRO_TEXT}</p>
      <Link href="/work" className="mission-action-link">
        → INITIALIZE_SYSTEM_OVERVIEW
      </Link>
      <div className="mission-stamp" aria-hidden="true">
        CLEARED
      </div>
    </div>
  );

  const name = (
    <div className="mission-name-cluster">
      <div className="mission-role">
        <span className="mission-role-accent">◆</span>
        <span>{ROLE_TEXT}</span>
      </div>

      <h1 className="mission-name">WAHYU BUDIMAN</h1>
    </div>
  );

  const overlays = (
    <>
      <div className="mission-paper-grain" />
      <div className="mission-scanlines" />
      <div className="mission-vignette" />
    </>
  );

  return (
    <section className="mission-hero">
      <BootSequence
        nav={<HeroNavbar cvPath={CV_PATH} />}
        grid={<HeroBackgroundGrid />}
        orbit={
          <>
            <div className="mission-orbit-desktop">
              <OrbitalCenterpiece />
            </div>
            <div className="mission-mobile-axis" aria-hidden="true">
              <div className="mission-mobile-axis-line" />
              <div className="mission-mobile-axis-readout mission-mobile-axis-readout-top">
                <span>VECTOR</span>
                <span>06.12S</span>
              </div>
              <div className="mission-mobile-axis-tape">
                <span>SYS</span>
                <span>ANL</span>
                <span>PRD</span>
                <span>ENG</span>
                <span>WB</span>
              </div>
              <div className="mission-mobile-axis-readout mission-mobile-axis-readout-bottom">
                <span>106.49E</span>
                <span>ORBITAL</span>
              </div>
            </div>
          </>
        }
        telemetry={telemetry}
        brief={brief}
        name={name}
        overlays={overlays}
      />
    </section>
  );
}
