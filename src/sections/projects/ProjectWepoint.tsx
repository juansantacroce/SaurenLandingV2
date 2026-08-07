import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';
import BrowserFrame from '../../components/ui/BrowserFrame';
import dashboardCliente from '../../assets/images/WepointDashboard.png';
import logoWepoint from '../../assets/logos/LogoWepoint.webp';

const tags = ['Laravel', 'React', 'TypeScript', 'MySQL', 'WebSockets', 'Docker', 'AFIP'];

const stats = [
  { n: '+9.000', l: 'Paquetes despachados' },
  { n: '+12.000', l: 'Lotes gestionados' },
  { n: '+220.000', l: 'Movimientos trazados' },
];

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
        <div className="mb-4 inline-flex items-center rounded-xl bg-white/95 px-5 py-3.5">
          <img src={logoWepoint} alt="Wepoint" className="h-11 w-auto" />
        </div>
        <span className="mb-4 inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-[NexaHeavy] uppercase tracking-[0.16em] text-accent">
          Caso destacado
        </span>
        <p className="mb-6 text-base leading-relaxed text-white/60">
          Plataforma de fulfillment logístico (WMS) en producción, usada hoy por más de una
          decena de empresas para gestionar la operación completa de sus depósitos: recepción de
          mercadería, guardado posicionado, picking colaborativo en tiempo real entre varios
          operarios, control de calidad en el empaque y despacho clasificado por transportista.
          Incluye escaneo por cámara desde celulares —sin hardware dedicado— y facturación
          electrónica AFIP integrada. Cuenta con un portal de cliente y un panel administrativo
          para el equipo interno, ambos en React y TypeScript.
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white/45"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-6 border-t border-white/10 pt-5">
          {stats.map((stat) => (
            <div key={stat.l}>
              <div className="font-[NexaHeavy] text-xl text-white">{stat.n}</div>
              <div className="text-[10px] uppercase tracking-wide text-white/40">{stat.l}</div>
            </div>
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
