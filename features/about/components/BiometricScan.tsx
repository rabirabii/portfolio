export function BiometricScan() {
  return (
    <div className="flex flex-col items-center">
      <svg
        aria-hidden="true"
        viewBox="0 0 160 200"
        width="160"
        height="200"
        className="overflow-visible"
      >
        <path
          d="M80 32 C47 32 28 58 28 96"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M80 42 C54 42 38 64 38 98"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M80 52 C60 52 48 69 48 100"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M80 62 C66 62 58 74 58 101"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M80 72 C72 72 68 82 68 102"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M80 82 C77 82 75 89 75 103"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />

        <path
          d="M80 32 C113 32 132 58 132 96"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M80 42 C106 42 122 64 122 98"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M80 52 C100 52 112 69 112 100"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M80 62 C94 62 102 74 102 101"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M80 72 C88 72 92 82 92 102"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />

        <path
          d="M28 96 C28 142 50 170 80 170"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M38 98 C38 136 56 158 80 158"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M48 100 C48 130 62 146 80 146"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M132 96 C132 142 110 170 80 170"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M122 98 C122 136 104 158 80 158"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M112 100 C112 130 98 146 80 146"
          fill="none"
          stroke="#1e1e1e"
          strokeWidth="0.8"
          opacity="0.18"
        />

        <line
          className="mission-scanner-line"
          x1="0"
          y1="0"
          x2="160"
          y2="0"
          stroke="#1e1e1e"
          strokeWidth="0.5"
          opacity="0.35"
        />
      </svg>

      <div className="mt-4 text-center font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/35 uppercase">
        BIOMETRIC ID: UNREGISTERED
        <br />
        CLASSIFICATION: FIRST-GEN
        <span className="mission-type-cursor">_</span>
      </div>
    </div>
  );
}
