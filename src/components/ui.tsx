import VMark from './VMark';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleClassName?: string;
  description?: string;
  align?: 'left' | 'center';
};

const SectionHeading = ({
  eyebrow,
  title,
  titleClassName = '',
  description,
  align = 'center',
}: SectionHeadingProps) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const alignClsr = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`mb-12 sm:mb-16 ${alignClass}`}>
      <p className={`eyebrow-brass mb-4 ${align === 'center' ? 'text-center' : ''}`}>
        — {eyebrow}
      </p>
      <h2 className={`text-balance text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] ${alignClsr} max-w-3xl ${titleClassName}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-[var(--color-text-secondary)] leading-relaxed text-base sm:text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export { SectionHeading, VMark };