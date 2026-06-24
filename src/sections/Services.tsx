import { motion } from 'framer-motion';
import { HiOutlineCodeBracket, HiOutlinePuzzlePiece, HiOutlineChartBarSquare } from 'react-icons/hi2';
import SectionHeading from '../components/ui/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const services = [
  {
    title: 'Desarrollo de Software a Medida',
    description:
      'Creamos plataformas robustas, e-commerce, portales B2B/B2C y aplicaciones móviles diseñadas para escalar con tu negocio.',
    icon: HiOutlineCodeBracket,
  },
  {
    title: 'Integraciones y Automatización',
    description:
      'Conectamos tus sistemas, automatizamos procesos complejos e implementamos flujos que eliminan el trabajo manual repetitivo.',
    icon: HiOutlinePuzzlePiece,
  },
  {
    title: 'Sistemas de Gestión',
    description:
      'Diseñamos e implementamos sistemas de gestión empresarial a medida, pensados para la operación real de tu equipo.',
    icon: HiOutlineChartBarSquare,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Servicios"
          title="Nuestras Capacidades"
          accentWord="Capacidades"
          subtitle="Combinamos experiencia técnica con las últimas innovaciones en IA para ofrecer soluciones end-to-end."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 md:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-white/[0.04]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-[NexaHeavy] text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
