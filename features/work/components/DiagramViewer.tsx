"use client";

import { Diagram } from "@/lib/cases";
import { useEffect, useState } from "react";

type DiagramViewerProps = {
  diagram?: Diagram;
  emptyLabel?: string;
  noOuterSpacing?: boolean;
};

export function DiagramViewer({
  diagram,
  emptyLabel = "◊ DIAGRAM PENDING ",
  noOuterSpacing = false,
}: DiagramViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key === "+" || event.key === "=") {
        setZoom((current) => Math.min(2, current + 0.25));
      }

      if (event.key === "-") {
        setZoom((current) => Math.max(0.75, current - 0.25));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!diagram) {
    return <div className="mission-diagram-empty">{emptyLabel}</div>;
  }

  return (
    <div className={noOuterSpacing ? "" : "mt-12"}>
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={() => {
            setZoom(1);
            setIsOpen(true);
          }}
          className="mission-diagram-toggle"
        >
          OPEN VIEWER +
        </button>
      </div>

      <figure className="mission-diagram-frame">
        <div className="mission-diagram-scroll">
          <img
            src={diagram.src}
            alt={diagram.alt}
            className="mission-diagram-image"
          />
        </div>

        <figcaption className="mt-3 font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/35 uppercase">
          {diagram.caption}
        </figcaption>
      </figure>

      {isOpen ? (
        <div
          className="mission-diagram-modal"
          role="dialog"
          aria-modal="true"
          aria-label={diagram.caption}
        >
          <div className="mission-diagram-modal-header">
            <span>{diagram.caption}</span>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  setZoom((current) => Math.max(0.75, current - 0.25))
                }
                className="mission-diagram-toggle"
              >
                ZOOM -
              </button>
              <button
                type="button"
                onClick={() =>
                  setZoom((current) => Math.min(2, current + 0.25))
                }
                className="mission-diagram-toggle"
              >
                ZOOM +
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mission-diagram-toggle"
              >
                CLOSE
              </button>
            </div>
          </div>

          <div className="mission-diagram-modal-body">
            <img
              src={diagram.src}
              alt={diagram.alt}
              className="mission-diagram-modal-image"
              style={{ width: `${1400 * zoom}px` }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
