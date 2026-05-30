import Link from "next/link";

const rows = [
  ["SUBJECT", "WAHYU BUDIMAN"],
  ["DESIGNATION", "SYS_ANALYST / PROD_ENG"],
  ["ORIGIN", "JAKARTA, ID — 06°12'S 106°49'E"],
  ["STATUS", "AVAILABLE FOR DEPLOYMENT"],
  ["CLEARANCE", "GRANTED"],
  ["LAST_ACTIVE", "2026-Q2"],
];

export function PersonnelFile() {
  return (
    <div className="mt-8">
      {rows.map(([key, value]) => (
        <div key={key} className="mission-personnel-row">
          <span className="mission-personnel-key">{key}:</span>
          <span className="mission-personnel-value">{value}</span>
        </div>
      ))}

      <div className="mt-6 border-t-[0.5px] border-[#2b2b2b]/12 pt-6">
        <div className="mb-3 font-mission-mono text-[9px] tracking-widest text-[#2b2b2b]/35 uppercase">
          KNOWN OPERATIONS:
        </div>

        <Link href="/work/msdigit" className="mission-personnel-op-link">
          → MS-DIGI
        </Link>
        <Link href="/work/ecalmas" className="mission-personnel-op-link">
          → ECALMAS
        </Link>
        <Link href="/work/exit-clearance" className="mission-personnel-op-link">
          → EXIT-CLR [RESTRICTED]
        </Link>
      </div>
    </div>
  );
}
