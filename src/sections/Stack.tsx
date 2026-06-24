import { motion } from 'framer-motion';
import {
  SiLaravel,
  SiReact,
  SiTypescript,
  SiMysql,
  SiRabbitmq,
  SiDocker,
} from 'react-icons/si';
import SectionHeading from '../components/ui/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const stack = [
  { name: 'Laravel', icon: SiLaravel },
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'MySQL', icon: SiMysql },
  { name: 'RabbitMQ', icon: SiRabbitmq },
  { name: 'Docker', icon: SiDocker },
];

export default function Stack() {
  return (
    <section id="stack" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tecnología"
          title="El Stack que Usamos"
          accentWord="Usamos"
          subtitle="Herramientas probadas en producción, elegidas por robustez, escalabilidad y mantenibilidad a largo plazo."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-3 gap-4 md:grid-cols-6"
        >
          {stack.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.04]"
            >
              <Icon className="h-8 w-8 text-white/55 transition-colors group-hover:text-accent" />
              <span className="text-xs font-medium text-white/45">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
