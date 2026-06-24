import { motion } from 'framer-motion';
import {
  HiOutlineHome,
  HiOutlineSparkles,
  HiOutlineRectangleStack,
  HiOutlineCpuChip,
  HiOutlineChatBubbleLeftRight,
} from 'react-icons/hi2';
import { scrollToSection, useActiveSection } from '../../lib/useActiveSection';
import { clsx } from '../../lib/clsx';

const tabs = [
  { id: 'inicio', label: 'Inicio', icon: HiOutlineHome },
  { id: 'servicios', label: 'Servicios', icon: HiOutlineSparkles },
  { id: 'proyectos', label: 'Proyectos', icon: HiOutlineRectangleStack },
  { id: 'stack', label: 'Stack', icon: HiOutlineCpuChip },
  { id: 'contacto', label: 'Contacto', icon: HiOutlineChatBubbleLeftRight },
];

export default function MobileNav() {
  const active = useActiveSection(tabs.map((t) => t.id));

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:hidden">
      <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-black/80 px-1.5 py-1.5 shadow-2xl shadow-black/60 backdrop-blur-xl">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className="relative flex flex-col items-center justify-center px-1"
              aria-label={tab.label}
            >
              <span
                className={clsx(
                  'relative flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300',
                  isActive ? 'text-white' : 'text-white/45',
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
                <Icon className="relative z-10 h-5 w-5" />
              </span>
              <span
                className={clsx(
                  'text-[9px] font-medium leading-none transition-opacity',
                  isActive ? 'opacity-100 text-white' : 'opacity-0 h-0',
                )}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
