import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';
import { clsx } from '../../lib/clsx';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  accentWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  accentWord,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const parts = accentWord ? title.split(accentWord) : [title];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={clsx(
        'mb-10 md:mb-16',
        align === 'center' ? 'text-center mx-auto' : 'text-left',
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full border border-accent/40 px-3 py-1 text-[11px] font-[NexaHeavy] uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-[NexaHeavy] leading-[1.08] text-white">
        {accentWord ? (
          <>
            {parts[0]}
            <span className="text-accent">{accentWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'mt-4 text-base md:text-lg text-white/60 leading-relaxed',
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl',
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
