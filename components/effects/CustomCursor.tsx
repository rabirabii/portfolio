"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export function CustomCursor() {
  const pathName = usePathname();
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 38 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 38 });

  useEffect(() => {
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
  }, [mouseX, mouseY]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsHovering(false);
      setIsInverted(false);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathName]);

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
