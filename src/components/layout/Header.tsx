import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/images/logoBlanco.webp';
import { navItems } from '../../lib/nav';
import { scrollToSection, useActiveSection } from '../../lib/useActiveSection';
import { clsx } from '../../lib/clsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop header */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300',
          scrolled
            ? 'bg-black/70 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          <button onClick={() => scrollToSection('inicio')} className="shrink-0">
            <img src={logo} alt="Sauren" className="h-7 w-auto" />
          </button>

          <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-1.5 py-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={clsx(
                  'relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                  active === item.id ? 'text-white' : 'text-white/50 hover:text-white/80',
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          <a
            href="https://wa.me/5493517336655?text=¡Hola!%20Me%20interesa%20una%20auditoría%20de%20software%20gratuita."
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-2 text-sm font-[NexaHeavy] uppercase tracking-wide text-black transition-colors hover:bg-accent hover:text-white"
          >
            Hablemos
          </a>
        </div>
      </motion.header>

      {/* Mobile header */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300',
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-gradient-to-b from-black/60 to-transparent border-b border-transparent',
        )}
      >
        <div className="flex items-center justify-center py-5">
          <button onClick={() => scrollToSection('inicio')}>
            <img src={logo} alt="Sauren" className="h-9 w-auto" />
          </button>
        </div>
      </motion.header>
    </>
  );
}
