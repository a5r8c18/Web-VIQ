import { type ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'brass' | 'outline';
  className?: string;
  onClick?: () => void;
}

const particles = [
  { key: 'p1', left: 16, top: 32, w: 2,   dur: 3.5, anim: 'particle-float-1' },
  { key: 'p2', left: 34, top: 58, w: 1.5, dur: 4.2, anim: 'particle-float-2' },
  { key: 'p3', left: 52, top: 26, w: 2.5, dur: 3.8, anim: 'particle-float-3' },
  { key: 'p4', left: 70, top: 62, w: 1.5, dur: 4.5, anim: 'particle-float-4' },
  { key: 'p5', left: 84, top: 36, w: 2,   dur: 3.2, anim: 'particle-float-5' },
];

const Button = ({
  href,
  children,
  variant = 'brass',
  className = '',
  onClick,
}: ButtonProps) => {
  const variantClass = variant === 'brass' ? 'btn-glass-brass' : 'btn-glass-outline';
  const glowClass    = variant === 'brass' ? 'btn-glow-brass'  : 'btn-glow-outline';
  const dotColor     = variant === 'brass'
    ? 'rgba(216, 164, 85, 0.55)'
    : 'rgba(255, 255, 255, 0.4)';

  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        btn-glass group relative inline-flex items-center justify-center gap-2
        px-8 py-3.5 font-mono text-xs uppercase tracking-[0.18em] font-semibold
        cursor-pointer select-none
        transition-all duration-500 ease-out
        hover:scale-[1.045] active:scale-[0.96]
        ${variantClass}
        ${className}
      `}
    >
      {/* ── glass highlight ─────────────────────────────────────────────── */}
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 45%, rgba(0,0,0,0.06) 100%)',
        }}
      />

      {/* ── floating particles ──────────────────────────────────────────── */}
      {particles.map((d) => (
        <span
          key={d.key}
          className="absolute rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            width: d.w,
            height: d.w,
            left: `${d.left}%`,
            top: `${d.top}%`,
            background: dotColor,
            animation: `${d.anim} ${d.dur}s ease-in-out infinite`,
            animationDelay: `${d.w * 0.25}s`,
          }}
        />
      ))}

      {/* ── shimmer sweep ───────────────────────────────────────────────── */}
      <span
        className="btn-shimmer-line absolute inset-y-0 left-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── label ───────────────────────────────────────────────────────── */}
      <span className={`relative z-10 inline-flex items-center gap-2 ${glowClass}`}>
        {children}
      </span>
    </a>
  );
};

export default Button;