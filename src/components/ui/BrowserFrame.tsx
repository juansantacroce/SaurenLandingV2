import type { ReactNode } from 'react';

export default function BrowserFrame({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] shadow-2xl shadow-black/50">
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#161616] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 text-center text-[11px] text-white/40">
          {url}
        </div>
      </div>
      <div className="bg-black">{children}</div>
    </div>
  );
}
