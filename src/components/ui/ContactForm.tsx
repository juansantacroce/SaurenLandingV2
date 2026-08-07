import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';

const inputClass =
  'w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-accent';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mrbeqpzp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ nombre: '', apellido: '', email: '', telefono: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400"
        >
          Formulario enviado con éxito.
        </motion.p>
      )}
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
        >
          Ocurrió un error al enviar. Probá de nuevo.
        </motion.p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className={inputClass}
        />
        <input
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClass}
        />
        <input
          name="telefono"
          type="tel"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <textarea
        name="mensaje"
        placeholder="Contanos sobre tu proyecto"
        rows={4}
        value={formData.mensaje}
        onChange={handleChange}
        required
        className={inputClass}
      />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-1 rounded-full bg-accent px-7 py-3.5 text-sm font-[NexaHeavy] uppercase tracking-wide text-white transition-all hover:bg-white hover:text-black disabled:opacity-60"
      >
        {status === 'sending' ? 'Enviando…' : 'Comencemos'}
      </button>

      <p className="text-center text-[11px] text-white/35">
        Al enviar este formulario aceptás nuestra{' '}
        <a href="/privacidad.html" className="underline hover:text-white/60">
          política de privacidad
        </a>
        .
      </p>
    </form>
  );
}
