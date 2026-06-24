import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileWordSwitcherProps {
  words: string[];
  interval?: number;
}

export default function MobileWordSwitcher({ words, interval = 3000 }: MobileWordSwitcherProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <div className="flex w-full flex-col items-center gap-3 md:hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          layout
          initial={{ opacity: 0, scale: 0.82, y: 14, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.85, y: -10, filter: 'blur(8px)' }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, mass: 0.7 }}
          className="block max-w-[320px] text-center text-[2.35rem] font-[NexaHeavy] leading-[1.05] text-accent [text-shadow:0_0_28px_rgba(237,28,36,0.45)]"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>

      <div className="relative h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
        <motion.span
          key={index}
          className="absolute inset-y-0 left-0 rounded-full bg-accent"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: interval / 1000, ease: 'linear' }}
        />
      </div>
    </div>
  );
}
