type RedactedProps = {
  width?: string;
  className?: string;
};

export function Redacted({ width = "80px", className = "" }: RedactedProps) {
  return (
    <span
      aria-label="[REDACTED]"
      className={`mission-redact ${className}`}
      style={{ width }}
    />
  );
}
