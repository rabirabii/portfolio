export type ModalConfig = {
  header: string;
  status: string;
  title: string;
  body?: string;
  cancel: string;
  confirm: string;
  success: string;
};

export const modalCopy: Record<string, ModalConfig> = {
  "cv-download": {
    header: "// SYSTEM PROMPT — DOWNLOAD",
    status: "PREPARING DOCUMENT...",
    title: "RETRIEVE PERSONNEL FILE",
    body: "Curriculum Vitae — Wahyu Budiman\nCompiled: 2026 // Format: PDF",
    cancel: "ABORT",
    confirm: "→ DOWNLOAD_FILE",
    success: "DOWNLOAD CLEARANCE GRANTED",
  },
  "contact-copy": {
    header: "// SYSTEM PROMPT — SIGNAL COPY",
    status: "COORDINATE LOCKED",
    title: "COPY SIGNAL COORDINATE",
    cancel: "ABORT",
    confirm: "→ COPY_TO_CLIPBOARD",
    success: "COORDINATE COPIED — READY FOR TRANSMISSION",
  },
  transmit: {
    header: "// SYSTEM PROMPT — TRANSMISSION",
    status: "SIGNAL READY FOR TRANSMISSION",
    title: "INITIALIZE TRANSMISSION",
    body: "Review your signal before transmitting.\nThis action will open your default mail client.",
    cancel: "ABORT",
    confirm: "→ TRANSMIT_SIGNAL",
    success: "TRANSMISSION DISPATCHED — AWAITING RESPONSE",
  },
};
