"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useMissionModal } from "@/hooks/UseMissionModal";

type MobileNavProps = {
  onClose: () => void;
};

const contentReveal: Variants = {
  hidden: { opacity: 0, y: -4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.08, delay: 0.22, ease: "linear" },
  },
};

const menuReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.24,
      staggerChildren: 0.045,
    },
  },
};

const menuItemReveal: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.08, ease: "linear" },
  },
};

export function MobileNav({ onClose }: MobileNavProps) {
  const { openModal } = useMissionModal();

  return (
    <motion.div
      className="mission-mobile-nav"
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 1 }}
      animate={{
        clipPath: [
          "inset(0 0 100% 0)",
          "inset(0 0 72% 0)",
          "inset(0 0 72% 0)",
          "inset(0 0 38% 0)",
          "inset(0 0 38% 0)",
          "inset(0 0 0% 0)",
        ],
      }}
      exit={{
        clipPath: [
          "inset(0 0 0% 0)",
          "inset(0 0 42% 0)",
          "inset(0 0 42% 0)",
          "inset(0 0 100% 0)",
        ],
      }}
      transition={{ duration: 0.24, ease: "linear" }}
    >
      <div className="mission-mobile-nav-solid" aria-hidden="true" />

      <motion.div
        aria-hidden="true"
        className="mission-mobile-nav-crt-line"
        initial={{ y: "-8%" }}
        animate={{ y: ["-8%", "28%", "28%", "64%", "64%", "108%"] }}
        exit={{ y: ["108%", "48%", "48%", "-8%"] }}
        transition={{ duration: 0.24, ease: "linear" }}
      />

      <motion.div
        className="mission-mobile-nav-header relative z-[120]"
        variants={contentReveal}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Link href="/" onClick={onClose} className="mission-nav-logo">
          W.B.
        </Link>

        <button type="button" onClick={onClose} className="mission-power-switch">
          [ ON ]
        </button>
      </motion.div>

      <motion.div
        className="mission-mobile-nav-list relative z-[120] flex flex-col px-8 pt-12"
        variants={menuReveal}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div variants={menuItemReveal}>
          <Link href="/" onClick={onClose} className="mission-mobile-nav-link">
            → BASE
          </Link>
        </motion.div>
        <motion.div variants={menuItemReveal}>
          <Link
            href="/work"
            onClick={onClose}
            className="mission-mobile-nav-link"
          >
            → CASE_FILES
          </Link>
        </motion.div>
        <motion.div variants={menuItemReveal}>
          <Link
            href="/about"
            onClick={onClose}
            className="mission-mobile-nav-link"
          >
            → DOSSIER
          </Link>
        </motion.div>
        <motion.div variants={menuItemReveal}>
          <Link
            href="/contact"
            onClick={onClose}
            className="mission-mobile-nav-link"
          >
            → SIGNAL
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="mission-mobile-nav-footer relative z-[120] mt-auto px-8 pb-8"
        variants={contentReveal}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <button
          type="button"
          onClick={() => openModal("cv-download")}
          className="mission-mobile-cv-link"
        >
          ↓ DOWNLOAD_CV
        </button>

        <div className="mt-6 font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/30 uppercase">
          COORD: 06°12&apos;S 106°49&apos;E // STATUS: ORBITAL
        </div>
      </motion.div>

      <div className="mission-paper-grain" />
      <div className="mission-scanlines" />
      <div className="mission-vignette" />
    </motion.div>
  );
}
