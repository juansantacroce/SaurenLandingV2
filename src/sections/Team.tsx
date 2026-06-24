import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { fadeUp, viewportOnce } from '../lib/motion';

const companies = ['MercadoLibre', 'Globant', 'Naranja'];

export default function Team() {
  return (
    <section id="nosotros" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Nosotros"
          title="Equipo Ágil, Impacto Grande"
          accentWord="Grande"
          subtitle="Somos un equipo en Córdoba, Argentina — sin capas de management, hablando directo con quien va a usar el software."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12"
        >
          <p className="mb-6 text-base leading-relaxed text-white/65 md:text-lg">
            Profesionales que han trabajado en empresas como{' '}
            {companies.map((c, i) => (
              <span key={c}>
                <span className="font-[NexaHeavy] text-accent">{c}</span>
                {i < companies.length - 1 ? ', ' : ' '}
              </span>
            ))}
            y otras compañías de tecnología reconocidas internacionalmente.
          </p>
          <p className="mb-6 text-base italic leading-relaxed text-white/45">
            Cubrimos el ciclo completo de desarrollo: análisis, diseño, implementación, testing
            y despliegue. Trabajamos con tecnologías modernas como React, TypeScript, Node.js,
            Java, PHP y AWS.
          </p>
          <p className="text-base leading-relaxed text-white/55">
            Aplicamos <span className="font-medium text-white">metodologías ágiles</span>,
            pruebas automatizadas y las mejores prácticas de la industria para garantizar
            calidad y transparencia en cada proyecto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
