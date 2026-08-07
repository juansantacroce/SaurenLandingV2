import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

interface ProjectCardProps {
  name: string;
  logo?: string;
  logoText?: string;
  logoTextColor?: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({
  name,
  logo,
  logoText,
  logoTextColor = '#1A1A1A',
  description,
  tags,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-white/[0.04]"
    >
      <div className="mb-5 flex h-16 items-center justify-center">
        {logo ? (
          <div className="inline-flex items-center justify-center rounded-xl bg-white/95 px-5 py-3">
            <img
              src={logo}
              alt={name}
              className="h-10 w-auto max-w-[160px] object-contain"
            />
          </div>
        ) : logoText ? (
          <div className="inline-flex items-center justify-center rounded-xl bg-white/95 px-5 py-3">
            <span
              className="text-2xl tracking-tight"
              style={{ fontFamily: 'StretchPro', color: logoTextColor }}
            >
              {logoText}
            </span>
          </div>
        ) : (
          <span className="text-xl font-[NexaHeavy] text-white">{name}</span>
        )}
      </div>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-white/55">{description}</p>
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
    </motion.div>
  );
}
