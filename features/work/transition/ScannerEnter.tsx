"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type ScannerEnterProps = {
  children: ReactNode;
};

export function ScannerEnter({ children }: ScannerEnterProps) {
  const [visibleIndexes, setVisibleIndexes] = useState<Set<string>>(new Set());

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scan-index]"),
    );

    const timers = sections.map((section) => {
      const index = section.dataset.scanIndex;
      const top = section.getBoundingClientRect().top + window.scrollY;
      const pageHeight = Math.max(
        document.body.scrollHeight,
        window.innerHeight,
      );
      const ratio = top / pageHeight;
      const delay = Math.max(0, ratio * 320);

      return window.setTimeout(() => {
        if (!index) return;
        setVisibleIndexes((current) => new Set(current).add(index));
      }, delay);
    });
    return () => timers.forEach(window.clearTimeout);
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 z-[250] h-px w-full bg-[#2b2b2b]/30"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 0.32, ease: "linear" }}
      />
      <div data-visible-indexes={Array.from(visibleIndexes).join(" ")}>
        {children}
      </div>
    </>
  );
}
