import { ImageResponse } from "next/og";

export const alt = "Wahyu Budiman — System Analyst / Product Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f4f1ea",
        color: "#1e1e1e",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px",
        fontFamily: "Helvetica Neue, Arial, sans-serif",
        border: "1px solid rgba(43,43,43,0.18)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          opacity: 0.55,
        }}
      >
        <span>DOC. REF: WB-2026</span>
        <span>CLASSIFIED: CLEARANCE GRANTED</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 112,
            lineHeight: 0.9,
            letterSpacing: "0.08em",
            fontWeight: 900,
            textTransform: "uppercase",
          }}
        >
          <span>WAHYU</span>
          <span>BUDIMAN</span>
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.72,
          }}
        >
          System Analyst / Product Engineer
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 18,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          opacity: 0.45,
        }}
      >
        <span>COORD: 06°12&apos;S 106°49&apos;E</span>
        <span>STATUS: ORBITAL</span>
      </div>
    </div>,
    size,
  );
}
