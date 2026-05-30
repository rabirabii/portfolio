"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const DESKTOP_CURSOR_QUERY =
  "(hover: hover) and (pointer: fine) and (min-width: 1024px)";

export function CustomCursor() {
  const pathName = usePathname();
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isDesktopCursorEnabled, setIsDesktopCursorEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 38 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 38 });

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_CURSOR_QUERY);

    const syncCursorAvailability = () => {
      window.requestAnimationFrame(() => {
        setIsDesktopCursorEnabled(mediaQuery.matches);

        if (!mediaQuery.matches) {
          setIsHovering(false);
          setIsInverted(false);
          mouseX.set(-100);
          mouseY.set(-100);
        }
      });
    };

    syncCursorAvailability();
    mediaQuery.addEventListener("change", syncCursorAvailability);

    return () => {
      mediaQuery.removeEventListener("change", syncCursorAvailability);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!isDesktopCursorEnabled) return;

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest("a, button, [data-cursor-target]")) {
        setIsHovering(true);
      }

      if (target.closest("[data-cursor-invert]")) {
        setIsInverted(true);
      }
    };

    const handleOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest("a, button, [data-cursor-target]")) {
        setIsHovering(false);
      }

      if (target.closest("[data-cursor-invert]")) {
        setIsInverted(false);
      }
    };

    const handlePointerDown = () => {
      setIsHovering(false);
      setIsInverted(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isDesktopCursorEnabled, mouseX, mouseY]);

  useEffect(() => {
    if (!isDesktopCursorEnabled) return;

    const frame = window.requestAnimationFrame(() => {
      setIsHovering(false);
      setIsInverted(false);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [isDesktopCursorEnabled, pathName]);

  if (!isDesktopCursorEnabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className={`mission-cursor ${isInverted ? "mission-cursor--inverted" : ""}`}
      style={{
        x: springX,
        y: springY,
      }}
    >
      <span className="mission-cursor-horizontal" />
      <span className="mission-cursor-vertical" />
      <span
        className={`mission-cursor-dot ${
          isHovering ? "mission-cursor-dot--active" : ""
        }`}
      />
    </motion.div>
  );
}
