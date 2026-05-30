import Link from "next/link";

type HeroNavbarProps = {
  cvPath: string;
};

export function HeroNavbar({ cvPath }: HeroNavbarProps) {
  return (
    <nav className="mission-nav">
      <Link href="/" className="mission-nav-logo">
        W.B.
      </Link>

      <div className="mission-nav-links">
        <Link href="/work" className="mission-nav-link">
          CASE FILES
        </Link>
        <Link href="/about" className="mission-nav-link">
          DOSSIER
        </Link>
        <Link href="/contact" className="mission-nav-link">
          SIGNAL
        </Link>
        <a href={cvPath} download className="mission-cv-link">
          ↓ DOWNLOAD CV
        </a>
      </div>
    </nav>
  );
}
