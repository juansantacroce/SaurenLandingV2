import type { ReactNode } from 'react';
import { clsx } from '../../lib/clsx';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-white hover:text-black shadow-[0_0_0_1px_rgba(237,28,36,0.4)]',
  outline:
    'border border-white/25 text-white hover:border-accent hover:text-accent',
  ghost: 'text-white/80 hover:text-accent',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className,
  target,
  rel,
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-[NexaHeavy] uppercase tracking-wide transition-all duration-300 active:scale-95',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
