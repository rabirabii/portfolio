"use client";

import { ModalPayload } from "@/hooks/UseMissionModal";
import { modalCopy } from "@/lib/missionConstants";
import { AnimatePresence, useReducedMotion, motion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

type MissionModalProps = {
  modal: ModalPayload | null;
  isSuccess: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
};

function getContactBody(label: string) {
  if (label === "EMAIL")
    return "Direct transmission channel. No clearance required.";
  if (label === "LINKEDIN")
    return "Professional network coordinate. Publicly accessible.";
  if (label === "GITHUB") return "Code repository index. Open archive.";
  return "Signal coordinate. Channel available.";
}

export function MissionModal({
  modal,
  isSuccess,
  onClose,
  onConfirm,
}: MissionModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const content = modal ? modalCopy[modal.type] : null;

  const bodyCopy = useMemo(() => {
    if (!modal || !content) return "";
    if (modal.type === "contact-copy") {
      return getContactBody(modal.data.label ?? "");
    }

    return content.body ?? "";
  }, [modal, content]);

  const readout = useMemo(() => {
    if (!modal) return [];

    if (modal.type === "cv-download") {
      return [
        ["FILE", "WB-CV-2026.PDF"],
        ["SIZE", "[INSERT approx file size once known]"],
        ["ACCESS", "CLEARED — NO RESTRICTIONS"],
        ["TIMESTAMP", modal.data.timestamp],
      ];
    }

    if (modal.type === "contact-copy") {
      return [
        ["CHANNEL", modal.data.label],
        ["VALUE", modal.data.value],
        ["STATUS", "CHANNEL OPEN"],
        ["TIMESTAMP", modal.data.timestamp],
      ];
    }

    return [
      ["FROM", `${modal.data.designation} // ${modal.data.origin}`],
      ["CHANNEL", "EMAIL GATEWAY"],
      ["ENCRYPT", "STANDARD"],
      ["TIMESTAMP", modal.data.timestamp],
    ];
  }, [modal]);

  useEffect(() => {
    if (!modal) return;

    const frame = window.requestAnimationFrame(() => {
      const firstFocusable = panelRef.current?.querySelector<HTMLElement>(
        "button, [href], input, textarea, select, [tabindex]:not([tabindex='-1'])",
      );

      firstFocusable?.focus();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [modal]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;

    const focusable = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>(
        "button, [href], input, textarea, select, [tabindex]:not([tabindex='-1'])",
      ) ?? [],
    );

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };
  return (
    <AnimatePresence>
      {modal && content ? (
        <motion.div
          className="fixed inset-0 z-[900] flex items-center justify-center bg-[rgba(30,30,30,0.72)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.18,
            ease: "easeOut",
          }}
          onMouseDown={onClose}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onMouseDown={(event) => event.stopPropagation()}
            onKeyDown={handleKeyDown}
            className="relative w-[min(480px,calc(100vw-48px))] overflow-hidden border-[0.5px] border-[rgba(43,43,43,0.25)] bg-[#f4f1ea] outline-none"
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : -12,
            }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.22,
              ease: "easeOut",
            }}
          >
            <div className="flex h-8 items-center justify-between border-b-[0.5px] border-[rgba(43,43,43,0.15)] bg-[rgba(43,43,43,0.04)] px-4">
              <div className="font-mission-mono text-[9px] tracking-widest text-[rgba(43,43,43,0.45)] uppercase">
                {content.header}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="font-mission-mono text-[9px] tracking-widest text-[rgba(43,43,43,0.45)] uppercase transition-colors hover:text-[rgba(43,43,43,0.8)]"
              >
                ✕
              </button>
            </div>

            <div className="relative flex flex-col gap-5 px-6 pt-7 pb-6">
              <div className="flex items-center gap-3">
                <span className="mission-type-cursor h-[6px] w-[6px] rounded-full bg-[#1e1e1e]" />
                <span className="font-mission-mono text-[10px] tracking-widest text-[rgba(43,43,43,0.6)] uppercase">
                  {content.status}
                </span>
              </div>

              <div
                className="font-mission-display text-[#1e1e1e] uppercase"
                style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  letterSpacing: "0.08em",
                  lineHeight: 1.1,
                }}
              >
                {content.title}
              </div>

              <p className="max-w-[380px] whitespace-pre-line font-mission-mono text-[11px] leading-[1.75] text-[rgba(43,43,43,0.65)]">
                {bodyCopy}
              </p>

              <div className="my-1 border-y-[0.5px] border-[rgba(43,43,43,0.1)] py-3 font-mission-mono text-[9px] leading-[1.9] tracking-widest text-[rgba(43,43,43,0.4)] uppercase">
                {readout.map(([key, value]) => (
                  <div key={key} className="grid grid-cols-[88px_1fr] gap-3">
                    <span>{key}:</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3">
                {isSuccess ? (
                  <div className="flex items-center gap-2 font-mission-mono text-[10px] tracking-widest text-[#1e1e1e] uppercase">
                    <span className="h-[6px] w-[6px] rounded-full bg-[#1e1e1e]" />
                    {content.success}
                  </div>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={onClose}
                      className="border-[0.5px] border-[rgba(43,43,43,0.2)] px-4 py-2 font-mission-mono text-[9px] tracking-widest text-[rgba(43,43,43,0.5)] uppercase transition-colors duration-150 hover:bg-[rgba(43,43,43,0.08)]"
                    >
                      {content.cancel}
                    </button>
                    <button
                      type="button"
                      onClick={onConfirm}
                      className="bg-[#1e1e1e] px-4 py-2 font-mission-mono text-[9px] tracking-widest text-[#f4f1ea] uppercase transition-colors duration-150 hover:bg-[#2b2b2b]"
                    >
                      {content.confirm}
                    </button>
                  </>
                )}
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='0.42'/%3E%3C/svg%3E\")",
                backgroundSize: "180px 180px",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, rgba(30,30,30,0.24) 0, rgba(30,30,30,0.24) 0.5px, transparent 0.5px, transparent 4px)",
              }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
