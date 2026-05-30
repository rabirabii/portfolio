"use client";

import { createContext, useContext } from "react";

export type ModalType = "cv-download" | "contact-copy" | "transmit";

export type ModalPayload = {
  type: ModalType;
  data: Record<string, string>;
};

type MissionModalContextValue = {
  modal: ModalPayload | null;
  isSuccess: boolean;
  openModal: (type: ModalType, data?: Record<string, string>) => void;
  closeModal: () => void;
  confirmModal: (data?: Record<string, string>) => Promise<void>;
};

export const MissionModalContext =
  createContext<MissionModalContextValue | null>(null);

export function useMissionModal() {
  const context = useContext(MissionModalContext);

  if (!context) {
    throw new Error("useMissionModal must be used inside MissionModalProvider");
  }

  return context;
}
