"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";

const STEP_COUNT = 12;
const STEP_DURATION_MS = 180;
const DEGREES_PER_STEP = 360 / STEP_COUNT;

export function OrbitalCenterpiece() {
  const [rotationStep, setRotationStep] = useState(0);

  useAnimationFrame((elapsed) => {
    const nextStep = Math.floor(elapsed / STEP_DURATION_MS) % STEP_COUNT;
    setRotationStep((currentStep) =>
      currentStep === nextStep ? currentStep : nextStep,
    );
  });

  return (
    <motion.svg
      aria-hidden="true"
      className="mission-orbit"
      viewBox="0 0 360 360"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.45 }}
    >
      <circle cx="180" cy="180" r="2.5" fill="#2b2b2b" opacity="0.32" />
      <g
        transform={`rotate(${rotationStep * DEGREES_PER_STEP} 180 180)`}
        className="mission-orbit-stepped"
      >
        <ellipse cx="180" cy="180" rx="148" ry="42" />
        <ellipse
          cx="180"
          cy="180"
          rx="148"
          ry="42"
          transform="rotate(58 180 180)"
        />
        <ellipse
          cx="180"
          cy="180"
          rx="148"
          ry="42"
          transform="rotate(118 180 180)"
        />
        <circle cx="180" cy="180" r="82" />
        <path d="M76 180H284" />
        <path d="M180 76V284" />
      </g>
      <g className="mission-orbit-ticks">
        <path d="M180 24V46" />
        <path d="M180 314V336" />
        <path d="M24 180H46" />
        <path d="M314 180H336" />
      </g>
    </motion.svg>
  );
}
