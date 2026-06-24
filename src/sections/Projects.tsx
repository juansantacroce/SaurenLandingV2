import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectWepoint from './projects/ProjectWepoint';
import ProjectCard from './projects/ProjectCard';
import { staggerContainer, viewportOnce } from '../lib/motion';
import logoDinter from '../assets/logos/LogoDinter.webp';
import logoMomentos from '../assets/logos/LogoMomentos.webp';
import logoCaddy from '../assets/logos/LogoCaddy.webp';

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Proyectos"
          title="Trabajo Real, Resultados Reales"
          accentWord="Reales"
          subtitle="Algunos de los proyectos que desarrollamos y mantenemos para clientes en distintos sectores."
        />

        <div className="mb-6">
          <ProjectWepoint />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 md:grid-cols-3"
        >
          <ProjectCard
            name="Dinter"
            logo={logoDinter}
            description="Soluciones de software a medida para optimizar la operación de Dinter, con foco en eficiencia y escalabilidad."
            tags={['Software a medida']}
          />
          <ProjectCard
            name="Momentos"
            logo={logoMomentos}
            description="Plataforma de e-commerce B2B/B2C construida sobre PrestaShop para un cliente líder en jugueterías, con sincronización de inventario en tiempo real vía API con su ERP."
            tags={['PrestaShop', 'PHP', 'MySQL', 'React', 'TypeScript']}
          />
          <ProjectCard
            name="Caddy"
            logo={logoCaddy}
            description="App web/mobile de envíos para Caddy, abarcando desde la solicitud del envío hasta la entrega del paquete."
            tags={['Software a medida', 'Mobile']}
          />
        </motion.div>
      </div>
    </section>
  );
}
