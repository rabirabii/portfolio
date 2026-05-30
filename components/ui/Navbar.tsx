"use client";
import { useMissionModal } from "@/hooks/UseMissionModal";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MobileNav } from "./MobileNav";

type HeroNavbarProps = {
  cvPath: string;
};

export function HeroNavbar({ cvPath }: HeroNavbarProps) {
  const { openModal } = useMissionModal();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <nav className="mission-nav">
        <Link href="/" className="mission-nav-logo">
          W.B.
        </Link>

        <div className="mission-nav-links hidden sm:flex">
          <Link href="/work" className="mission-nav-link">
            CASE FILES
          </Link>
          <Link href="/about" className="mission-nav-link">
            DOSSIER
          </Link>
          <Link href="/contact" className="mission-nav-link">
            SIGNAL
          </Link>
          <button
            type="button"
            data-modal="cv-download"
            onClick={() => openModal("cv-download")}
            className="mission-cv-link"
          >
            ↓ DOWNLOAD CV
          </button>
        </div>
        <button
          type="button"
          className="mission-power-switch sm:hidden"
          onClick={() => setIsMobileNavOpen((current) => !current)}
          aria-label={isMobileNavOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMobileNavOpen}
        >
          {isMobileNavOpen ? "[ ON ]" : "[ PWR ]"}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileNavOpen ? (
          <MobileNav onClose={() => setIsMobileNavOpen(false)} />
        ) : null}
      </AnimatePresence>
    </>
  );
}
