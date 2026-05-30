"use client";

import { useMissionModal } from "@/hooks/UseMissionModal";
import { useState } from "react";

type Coordinate = {
  label: string;
  value: string;
  href: string;
  copyValue: string;
};

const COORDINATES: Coordinate[] = [
  {
    label: "EMAIL",
    value: "wahyubudiman0624@gmail.com",
    href: "mailto:wahyubudiman0624@gmail.com",
    copyValue: "wahyubudiman0624@gmail.com",
  },
  {
    label: "LINKEDIN",
    value: "/in/wahyubdmn/",
    href: "https://www.linkedin.com/in/wahyubdmn/",
    copyValue: "https://www.linkedin.com/in/wahyubdmn/",
  },
  {
    label: "GITHUB",
    value: "/wahyubudiman",
    href: "https://github.com/rabirabii",
    copyValue: "https://github.com/rabirabii",
  },
];

export function SignalCoordinates() {
  return (
    <div>
      {COORDINATES.map((coordinate) => (
        <CoordinateRow key={coordinate.label} coordinate={coordinate} />
      ))}
    </div>
  );
}

function CoordinateRow({ coordinate }: { coordinate: Coordinate }) {
  const { openModal } = useMissionModal();

  const handleCopy = () => {
    openModal("contact-copy", {
      label: coordinate.label,
      value: coordinate.value,
      copyValue: coordinate.copyValue,
    });
  };

  return (
    <div className="flex items-center justify-between gap-6 border-b-[0.5px] border-[#2b2b2b]/12 py-5">
      <div className="font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/40 uppercase">
        {coordinate.label}
      </div>

      <a
        href={coordinate.href}
        className="font-mission-mono text-[12px] text-[#1e1e1e]/70 transition-colors hover:text-[#1e1e1e]"
      >
        {coordinate.value}
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className="border-[0.5px] border-[#2b2b2b]/20 px-2 py-1 font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/30 uppercase transition-colors hover:border-[#2b2b2b]/40 hover:text-[#2b2b2b]/60"
      >
        COPY
      </button>
    </div>
  );
}
