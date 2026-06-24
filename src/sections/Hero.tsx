import { motion } from 'framer-motion';
import Particles from '../components/effects/Particles';
import RotatingText from '../components/effects/RotatingText';
import MobileWordSwitcher from '../components/effects/MobileWordSwitcher';
import Button from '../components/ui/Button';
import { scrollToSection } from '../lib/useActiveSection';

const textsList = [
  'Inteligencia Artificial',
  'Software a Medida',
  'Automatización',
  'Innovación Constante',
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-24 md:pt-32"
    >
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ED1C24', '#ffffff']}
          particleCount={90}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={90}
          alphaParticles
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-[NexaHeavy] uppercase tracking-[0.16em] text-accent"
        >
          Software house · Córdoba, Argentina
        </motion.span>

        <h1 className="text-[2.6rem] font-[NexaHeavy] leading-[1.08] text-white sm:text-6xl md:min-h-[9rem] md:text-7xl">
          Impulsa tu negocio con
          <br />
          <span className="hidden md:flex md:justify-center">
            <RotatingText
              texts={textsList}
              mainClassName="text-accent"
              staggerFrom="center"
              staggerDuration={0.02}
              rotationInterval={3000}
              transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.5 }}
            />
          </span>
        </h1>

        <div className="mt-3">
          <MobileWordSwitcher words={textsList} />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
        >
          Transformamos empresas combinando desarrollo tecnológico de primer nivel, IA aplicada
          y consultoría estratégica para llevar tu eficiencia al siguiente nivel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button
            href="https://wa.me/5493517336655?text=¡Hola!%20Me%20interesa%20una%20auditoría%20de%20software%20gratuita."
            target="_blank"
            rel="noreferrer"
          >
            Potenciar mi negocio
          </Button>
          <Button href="#servicios" variant="outline" onClick={() => scrollToSection('servicios')}>
            Nuestros servicios
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
