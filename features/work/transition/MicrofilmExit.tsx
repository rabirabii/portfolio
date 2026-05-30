"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type MicrofilmExitProps = {
  children: ReactNode;
};

const variants: Variants = {
  initial: { y: 0, opacity: 1, scale: 1 },
  animate: { y: 0, opacity: 1, scale: 1 },
  exit: {
    y: "-8%",
    opacity: 0,
    scale: 0.985,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  },
};

export function MicrofilmExit({ children }: MicrofilmExitProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
