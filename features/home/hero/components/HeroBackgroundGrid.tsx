const verticalMarks = ["25%", "50%", "75%"];
const horizontalMarks = ["25%", "50%", "75%"];

export function HeroBackgroundGrid() {
  return (
    <div aria-hidden="true" className="mission-grid">
      <div className="mission-grid-frame" />

      {verticalMarks.map((left) => (
        <div
          key={`vertical-${left}`}
          className="mission-grid-line mission-grid-line-vertical"
          style={{ left }}
        />
      ))}

      {horizontalMarks.map((top) => (
        <div
          key={`horizontal-${top}`}
          className="mission-grid-line mission-grid-line-horizontal"
          style={{ top }}
        />
      ))}

      {verticalMarks.flatMap((left) =>
        horizontalMarks.map((top) => (
          <span
            key={`${left}-${top}`}
            className="mission-crosshair"
            style={{ left, top }}
          >
            +
          </span>
        )),
      )}

      <span className="mission-corner-mark mission-corner-mark-tl">⌜</span>
      <span className="mission-corner-mark mission-corner-mark-tr">⌝</span>
      <span className="mission-corner-mark mission-corner-mark-bl">⌞</span>
      <span className="mission-corner-mark mission-corner-mark-br">⌟</span>
    </div>
  );
}
