import type { ReactNode } from 'react';

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-accent/50 hover:text-white">
      {children}
    </span>
  );
}
