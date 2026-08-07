import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const stats = [
  { n: '6', l: 'Plataformas en producción' },
  { n: '+220.000', l: 'Movimientos operativos gestionados (Wepoint)' },
  { n: '+7.700', l: 'Comprobantes sincronizados automáticamente (Momentos)' },
  { n: 'MercadoLibre · Globant · Naranja', l: 'Empresas donde trabajó el equipo' },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-white/[0.015] px-6 py-12 md:py-14">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-6"
      >
        {stats.map((stat) => (
          <motion.div key={stat.l} variants={fadeUp} className="text-center md:text-left">
            <div className="font-[NexaHeavy] text-xl leading-tight text-white sm:text-2xl">
              {stat.n}
            </div>
            <div className="mt-1.5 text-[11px] leading-snug text-white/45">{stat.l}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
