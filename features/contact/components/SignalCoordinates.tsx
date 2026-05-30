"use client";

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
    value: "wahyu[at]domain.com", // [INSERT actual email]
    href: "mailto:wahyu@domain.com", // [INSERT actual email]
    copyValue: "wahyu@domain.com", // [INSERT actual email]
  },
  {
    label: "LINKEDIN",
    value: "/in/wahyubdmn/", // [INSERT actual LinkedIn handle]
    href: "https://www.linkedin.com/in/wahyubdmn/", // [INSERT actual LinkedIn URL]
    copyValue: "https://www.linkedin.com/in/wahyubdmn/", // [INSERT actual LinkedIn URL]
  },
  {
    label: "GITHUB",
    value: "/wahyubudiman", // [INSERT actual GitHub handle]
    href: "https://github.com/wahyubudiman", // [INSERT actual GitHub URL]
    copyValue: "https://github.com/wahyubudiman", // [INSERT actual GitHub URL]
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
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(coordinate.copyValue);
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1500);
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
        {copied ? "COPIED" : "COPY"}
      </button>
    </div>
  );
}
