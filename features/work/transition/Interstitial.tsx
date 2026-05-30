"use client";

type InterstitialProps = {
  caseId: string;
};

export function Interstitial({ caseId }: InterstitialProps) {
  return (
    <div className="mission-interstitial">
      {">"} RETRIEVING ARCHIVE: {caseId}...
    </div>
  );
}
