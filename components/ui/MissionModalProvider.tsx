"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { MissionModal } from "./MissionModal";
import {
  MissionModalContext,
  type ModalPayload,
  type ModalType,
} from "@/hooks/UseMissionModal";

function getTimestamp() {
  return new Date().toISOString().slice(0, 19).replace("T", " ");
}

export function MissionModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalPayload | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const closeModal = useCallback(() => {
    setModal(null);
    setIsSuccess(false);
  }, []);

  const openModal = useCallback(
    (type: ModalType, data: Record<string, string> = {}) => {
      setIsSuccess(false);
      setModal({
        type,
        data: {
          ...data,
          timestamp: getTimestamp(),
        },
      });
    },
    [],
  );

  const confirmModal = useCallback(async () => {
    if (!modal) return;

    if (modal.type === "cv-download") {
      const link = document.createElement("a");
      link.href = "/cv/wahyu-budiman-cv.pdf";
      link.download = "WB-CV-2026.pdf";
      link.click();
    }

    if (modal.type === "contact-copy") {
      await navigator.clipboard.writeText(modal.data.copyValue ?? "");
    }

    if (modal.type === "transmit") {
      const subject = encodeURIComponent(
        `TRANSMISSION: ${modal.data.designation}`,
      );
      const body = encodeURIComponent(
        `FROM: ${modal.data.designation}\nORIGIN: ${modal.data.origin}\n\n${modal.data.transmission}`,
      );

      // [INSERT_EMAIL]
      window.open(`mailto:wahyu@domain.com?subject=${subject}&body=${body}`);

      window.dispatchEvent(
        new CustomEvent("mission-modal:transmit-sent", {
          detail: { timestamp: getTimestamp() },
        }),
      );
    }

    setIsSuccess(true);

    window.setTimeout(() => {
      closeModal();
    }, 1800);
  }, [closeModal, modal]);

  useEffect(() => {
    if (!modal) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeModal, modal]);

  const value = useMemo(
    () => ({
      modal,
      isSuccess,
      openModal,
      closeModal,
      confirmModal,
    }),
    [closeModal, confirmModal, isSuccess, modal, openModal],
  );

  return (
    <MissionModalContext.Provider value={value}>
      {children}
      <MissionModal
        modal={modal}
        isSuccess={isSuccess}
        onClose={closeModal}
        onConfirm={confirmModal}
      />
    </MissionModalContext.Provider>
  );
}
