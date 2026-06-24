import { motion } from 'framer-motion';
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/ui/ContactForm';
import { fadeUp, viewportOnce } from '../lib/motion';

const contactInfo = [
  { icon: HiOutlinePhone, text: '+54 (351) 733‑6655' },
  { icon: HiOutlineEnvelope, text: 'ventas@sauren.ar' },
  { icon: HiOutlineMapPin, text: 'Hugo A. García 1603, Córdoba, Argentina' },
];

export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contacto"
          title="¿Hablamos?"
          accentWord="Hablamos?"
          subtitle="Completá el formulario o escribinos directo. Estamos listos para impulsar tu proyecto."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
            <h3 className="mb-5 text-lg font-[NexaHeavy] text-white">Escribinos</h3>
            <ContactForm />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
            <h3 className="mb-1 text-lg font-[NexaHeavy] text-white">Datos de Contacto</h3>
            {contactInfo.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-white/65">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm">{text}</span>
              </div>
            ))}
            <a
              href="https://wa.me/5493517336655?text=¡Hola!%20Me%20interesa%20una%20auditoría%20de%20software%20gratuita."
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-[NexaHeavy] uppercase tracking-wide text-white transition-all hover:bg-white hover:text-black"
            >
              Escribinos por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
