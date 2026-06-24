import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';
import BrowserFrame from '../../components/ui/BrowserFrame';
import dashboardCliente from '../../assets/images/WepointDashboard.png';
import logoWepoint from '../../assets/logos/LogoWepoint.webp';

const tags = ['Laravel', 'React', 'TypeScript', 'MySQL', 'Docker'];

export default function ProjectWepoint() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 md:grid-cols-2 md:items-center md:p-12"
    >
      <div className="order-2 md:order-1">
        <span className="mb-4 inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-[NexaHeavy] uppercase tracking-[0.16em] text-accent">
          Caso destacado
        </span>
        <div className="mb-5 flex items-center gap-3">
          <img src={logoWepoint} alt="Wepoint" className="h-7 w-auto" />
        </div>
        <p className="mb-6 text-base leading-relaxed text-white/60">
          Sistema integral de gestión empresarial desarrollado en Laravel, diseñado para
          optimizar procesos internos, mejorar la eficiencia operativa y ofrecer soluciones
          personalizadas a las necesidades de cada cliente. Incluye un portal de cliente y un
          panel administrativo para el equipo interno, ambos construidos en React y TypeScript.
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white/45"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="order-1 md:order-2">
        <BrowserFrame url="portal.wepoint.ar">
          <img src={dashboardCliente} alt="Portal del Cliente Wepoint — panel principal" className="w-full" />
        </BrowserFrame>
      </div>
    </motion.div>
  );
}
