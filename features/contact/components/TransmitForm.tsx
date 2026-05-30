/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "sent";

export function TransmitForm() {
  const [state, setState] = useState<FormState>("idle");
  const [designation, setDesignation] = useState("");
  const [origin, setOrigin] = useState("");
  const [transmission, setTransmission] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleTransmit = () => {
    setState("sending");

    const subject = encodeURIComponent(
      `TRANSMISSION: ${designation || "UNKNOWN DESIGNATION"}`,
    );
    const body = encodeURIComponent(
      `DESIGNATION: ${designation}\nORIGIN: ${origin}\n\n${transmission}`,
    );

    // [INSERT actual email]
    window.location.href = `mailto:wahyu@domain.com?subject=${subject}&body=${body}`;

    const sentAt = new Date().toISOString().replace("T", " ").slice(0, 19);
    setTimestamp(sentAt);
    setState("sent");
  };

  if (state === "sent") {
    return (
      <div className="mt-12 border-t-[0.5px] border-[#2b2b2b]/12 pt-8 font-mission-mono text-[11px] leading-[2] tracking-widest text-[#2b2b2b]/60 uppercase">
        TRANSMISSION RECEIVED.
        <br />
        SIGNAL LOGGED: {timestamp}
        <br />
        RESPONSE ESTIMATED: 24–48H
      </div>
    );
  }

  return (
    <div className="mt-12 border-t-[0.5px] border-[#2b2b2b]/12 pt-8">
      <div className="mission-section-marker mb-6">
        // OPTIONAL — OPEN A TRANSMISSION
      </div>

      <Field label="DESIGNATION">
        <input
          value={designation}
          onChange={(event) => setDesignation(event.target.value)}
          placeholder="YOUR NAME // ROLE"
          className="mission-transmit-field"
        />
      </Field>

      <Field label="ORIGIN">
        <input
          value={origin}
          onChange={(event) => setOrigin(event.target.value)}
          placeholder="ORGANIZATION OR LOCATION"
          className="mission-transmit-field"
        />
      </Field>

      <Field label="TRANSMISSION">
        <textarea
          value={transmission}
          onChange={(event) => setTransmission(event.target.value)}
          rows={5}
          placeholder="STATE YOUR SIGNAL..."
          className="mission-transmit-field resize-none"
        />
      </Field>

      <button
        type="button"
        disabled={state === "sending"}
        onClick={handleTransmit}
        className="border-[0.5px] border-[#2b2b2b]/35 px-6 py-3 font-mission-mono text-[10px] tracking-widest text-[#1e1e1e] uppercase transition-colors duration-200 hover:bg-[#1e1e1e] hover:text-[#f4f1ea] disabled:opacity-40"
      >
        {state === "sending" ? "TRANSMITTING..." : "→ TRANSMIT_SIGNAL"}
      </button>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <label className="mb-2 block font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/35 uppercase">
        {label}
      </label>
      {children}
    </div>
  );
}
