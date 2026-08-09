type VMarkProps = {
  className?: string;
};

/**
 * Signature: the angular V of the mark, drawn as a technical / blueprint
 * glyph. Used sparingly — the single memorable element of the system.
 */
const VMark = ({ className = '' }: VMarkProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 120 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left leg */}
      <path
        d="M6 90 L60 6"
        stroke="rgba(216,164,85,0.75)"
        strokeWidth="1.5"
      />
      {/* Right leg */}
      <path
        d="M114 90 L60 6"
        stroke="rgba(216,164,85,0.28)"
        strokeWidth="1.5"
      />
      {/* Vertex node */}
      <circle cx="60" cy="6" r="3" fill="rgba(216,164,85,0.95)" />
      {/* Corner node */}
      <circle cx="6" cy="90" r="2" fill="rgba(216,164,85,0.6)" />
      {/* Baseline */}
      <line x1="6" y1="90" x2="114" y2="90" stroke="rgba(180,190,205,0.25)" />
      {/* Crosshair along left leg */}
      <line
        x1="33"
        y1="12"
        x2="14"
        y2="42"
        stroke="rgba(180,190,205,0.35)"
        strokeDasharray="2 4"
      />
      <line
        x1="60"
        y1="6"
        x2="60"
        y2="90"
        stroke="rgba(180,190,205,0.18)"
        strokeDasharray="1 5"
      />
    </svg>
  );
};

export default VMark;