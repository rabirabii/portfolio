"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Interstitial } from "./Interstitial";
import { MicrofilmExit } from "./MicrofilmExit";

type PageTransitionProps = {
  children: ReactNode;
  caseId?: string;
};

export function PageTransition({
  children,
  caseId = "INDEX",
}: PageTransitionProps) {
  const [showInterstitial, setShowInterstitial] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowInterstitial(false);
    }, 200);

    return () => window.clearTimeout(timer);
  }, []);

  if (showInterstitial) {
    return <Interstitial caseId={caseId} />;
  }

  return <MicrofilmExit>{children}</MicrofilmExit>;
}
