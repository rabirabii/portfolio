/* eslint-disable react/jsx-no-comment-textnodes */
export function ClassifiedBanner() {
  const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);

  return (
    <div className="mission-classified-banner">
      <span className="mission-classified-banner-marker">
        ⚠ CLASSIFICATION: RESTRICTED
      </span>
      <span className="mission-classified-banner-body">
        THIS DOCUMENT HAS BEEN PARTIALLY DECLASSIFIED. SOME SECTIONS REMAIN
        REDACTED PENDING FULL CLEARANCE REVIEW.
      </span>
      <span className="mission-classified-banner-meta">
        ACCESS LOGGED: {timestamp} // SESSION: TEMPORARY
      </span>
    </div>
  );
}
