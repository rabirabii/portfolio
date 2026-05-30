/* eslint-disable react/jsx-no-comment-textnodes */
import { HeroNavbar } from "@/components/ui/Navbar";
import { SignalCoordinates } from "./components/SignalCoordinates";
import { TransmitForm } from "./components/TransmitForm";

export function ContactPage() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#f4f1ea] text-[#1e1e1e]">
      <HeroNavbar cvPath="/cv/wahyu-budiman-cv.pdf" />

      <section className="mx-auto max-w-[800px] px-4 py-10 pt-[calc(52px+2.5rem)] sm:px-8 sm:py-16 sm:pt-[calc(52px+4rem)]">
        <div className="mb-12 border-b-[0.5px] border-[#2b2b2b]/12 pb-3">
          <div className="flex items-center justify-between gap-6 font-mission-mono text-[9px] tracking-widest uppercase">
            <span className="text-[#2b2b2b]/40">SIGNAL CHANNEL</span>
            <span className="text-right text-[#2b2b2b]/30">CHANNEL: OPEN</span>
          </div>
        </div>

        <div className="mission-section-marker mb-8">
          // DIRECT COORDINATES — NO CLEARANCE REQUIRED
        </div>

        <SignalCoordinates />
        <TransmitForm />
      </section>

      <div className="mission-paper-grain" />
      <div className="mission-scanlines" />
      <div className="mission-vignette" />
    </main>
  );
}
