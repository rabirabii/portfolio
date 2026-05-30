"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  delay?: number;
  speed?: number;
};

export function TypewriterText({
  text,
  delay = 0,
  speed = 24,
}: TypewriterTextProps) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      const reducedMotionTimer = window.setTimeout(() => {
        setVisibleCharacters(text.length);
      }, 0);

      return () => {
        window.clearTimeout(reducedMotionTimer);
      };
    }

    let intervalId: number | undefined;
    const resetTimer = window.setTimeout(() => {
      setVisibleCharacters(0);
    }, 0);
    const delayTimer = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setVisibleCharacters((currentCount) => {
          if (currentCount >= text.length) {
            if (intervalId !== undefined) {
              window.clearInterval(intervalId);
            }
            return currentCount;
          }

          return currentCount + 1;
        });
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(resetTimer);
      window.clearTimeout(delayTimer);
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay, speed, text]);

  return (
    <span aria-label={text}>
      {text.slice(0, visibleCharacters)}
      <span className="mission-type-cursor" aria-hidden="true">
        _
      </span>
    </span>
  );
}
