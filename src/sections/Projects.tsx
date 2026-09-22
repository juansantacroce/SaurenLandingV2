import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectWepoint from './projects/ProjectWepoint';
import ProjectCard from './projects/ProjectCard';
import { staggerContainer, viewportOnce } from '../lib/motion';
import logoDinter from '../assets/logos/LogoDinter.webp';
import logoMomentos from '../assets/logos/LogoMomentos.webp';
import logoCaddy from '../assets/logos/LogoCaddy.webp';
import logoDacapo from '../assets/logos/LogoDacapo.webp';
import logoManicop from '../assets/logos/LogoManicop.png';
import logoIndyec from '../assets/logos/LogoIndyec.svg';

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
            description="Sistema de gestión para una distribuidora de publicaciones y coleccionables: desde el ingreso de mercadería hasta la asignación masiva a cientos de puntos de venta, con un motor propio que sugiere cantidades según el historial de cada cliente. Integrado en tiempo real con el operador logístico mediante una arquitectura orientada a eventos."
            tags={['Laravel', 'React', 'TypeScript', 'RabbitMQ', 'MySQL']}
          />
          <ProjectCard
            name="Momentos"
            logo={logoMomentos}
            description="Plataforma de e-commerce B2B/B2C sobre PrestaShop para un distribuidor mayorista líder en jugueterías, integrada en tiempo real con su ERP contable y su operador logístico: facturas, notas de crédito y órdenes de compra se sincronizan automáticamente entre los tres sistemas."
            tags={['PrestaShop', 'PHP', 'MySQL', 'React', 'TypeScript']}
          />
          <ProjectCard
            name="Caddy"
            logo={logoCaddy}
            description="App web/mobile de envíos para Caddy, abarcando desde la solicitud del envío hasta la entrega del paquete, con seguimiento en tiempo real."
            tags={['Software a medida', 'Mobile']}
          />
          <ProjectCard
            name="Ticketera"
            logoText="Ticketlify"
            logoTextColor="#6C5CE7"
            description="Plataforma de venta y gestión de entradas para eventos: checkout con Mercado Pago, tickets con código QR único, validación de acceso por cámara y reserva temporal de asientos para evitar sobreventa. Arquitectura modular por dominio, preparada para escalar a microservicios."
            tags={['Java', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Mercado Pago']}
          />
          <ProjectCard
            name="Dacapo"
            logo={logoDacapo}
            description="Sistema de gestión integral para una escuela de música: agenda de clases, liquidación automática de honorarios docentes, seguimiento del progreso de cada alumno y facturación electrónica AFIP. Incluye una plataforma de entrenamiento auditivo con IA generativa y una app móvil única para profesores y alumnos."
            tags={['Django', 'React', 'React Native', 'IA']}
          />
          <ProjectCard
            name="Indyec"
            logo={logoIndyec}
            description="App web progresiva (PWA) para la gestión integral de una clínica especializada en nefrología y cardiología: historia clínica digital, seguimiento de sesiones de diálisis, agenda de turnos, control de stock de insumos y consentimientos informados digitales. Instalable en Android e iOS sin pasar por tiendas de apps, con soporte offline y diseño mobile-first."
            tags={['React', 'TypeScript', 'PWA', 'Laravel', 'MySQL']}
          />
          <ProjectCard
            name="Manicop"
            logo={logoManicop}
            logoClassName="h-14 w-auto max-w-[160px] object-contain"
            description="Módulo de carga horaria sobre Odoo 18 Enterprise para digitalizar la gestión de mano de obra operativa en planta: supervisores asignan operarios por turno y sector, y el sistema imputa costos automáticamente a las órdenes de fabricación según reglas configurables por kilos producidos, unidades o consumo de ingrediente."
            tags={['Odoo 18', 'Python', 'ERP', 'Fabricación']}
          />
        </motion.div>
      </div>
    </section>
  );
}
