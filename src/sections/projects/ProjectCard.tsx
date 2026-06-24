import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

interface ProjectCardProps {
  name: string;
  logo?: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({ name, logo, description, tags }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-white/[0.04]"
    >
      <div className="mb-5 flex h-12 items-center">
        {logo ? (
          <img
            src={logo}
            alt={name}
            className="h-9 w-auto max-w-[140px] object-contain grayscale brightness-200 transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100"
          />
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
