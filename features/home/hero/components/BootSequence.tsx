"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type BootPhase = "poetry" | "flash" | "reveal";

type BootSequenceProps = {
  nav: ReactNode;
  grid: ReactNode;
  orbit: ReactNode;
  telemetry: ReactNode;
  brief: ReactNode;
  name: ReactNode;
  overlays?: ReactNode;
};

const poetryLines = [
  "we were born to pursue knowledge",
  "for we were all born with nought",
  "before we were given a language",
  "our hands reach out, without being taught",
];
const payloadVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.28,
      delayChildren: 0.08,
    },
  },
};

const infrastructureVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const telemetryVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const briefVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: "easeOut" },
  },
};

const nameVariants: Variants = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 95,
      damping: 18,
      mass: 1.4,
    },
  },
};

export function BootSequence({
  nav,
  grid,
  orbit,
  telemetry,
  brief,
  name,
  overlays,
}: BootSequenceProps) {
  const [phase, setPhase] = useState<BootPhase>("poetry");
  const [typedCharacters, setTypedCharacters] = useState(0);

  const poetryText = poetryLines.join("\n");

  useEffect(() => {
    const characterTimer = window.setInterval(() => {
      setTypedCharacters((current) => {
        if (current >= poetryText.length) {
          if (characterTimer !== undefined) {
            window.clearInterval(characterTimer);
          }
          return current;
        }

        return current + 1;
      });
    }, 18);

    const flashTimer = window.setTimeout(() => {
      setPhase("flash");
    }, 4200);

    const revealTimer = window.setTimeout(() => {
      setPhase("reveal");
    }, 4400);

    return () => {
      if (characterTimer !== undefined) {
        window.clearInterval(characterTimer);
      }

      window.clearTimeout(flashTimer);
      window.clearTimeout(revealTimer);
    };
  }, [poetryText.length]);

  return (
    <>
      <AnimatePresence mode="wait">
        {phase === "poetry" ? (
          <motion.div
            key="poetry"
            className="mission-poetry-terminal"
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <pre>
              {poetryText.slice(0, typedCharacters)}
              <span className="mission-type-cursor">_</span>
            </pre>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "flash" ? (
          <motion.div
            key="flash"
            className="mission-crt-flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.82, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, times: [0, 0.18, 1] }}
          />
        ) : null}
      </AnimatePresence>

      {phase === "reveal" ? (
        <motion.div
          className="mission-payload"
          variants={payloadVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mission-infrastructure-reveal"
            variants={infrastructureVariants}
          >
            {grid}
            {orbit}
          </motion.div>

          <motion.div
            className="mission-telemetry-reveal"
            variants={telemetryVariants}
          >
            {nav}
            {telemetry}
          </motion.div>

          <motion.div className="mission-brief-reveal" variants={briefVariants}>
            {brief}
          </motion.div>

          <motion.div className="mission-name-reveal" variants={nameVariants}>
            {name}
          </motion.div>

          {overlays}
        </motion.div>
      ) : null}
    </>
  );
}
