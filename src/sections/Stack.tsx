import {
  SiLaravel,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSpringboot,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiDocker,
  SiGithubactions,
  SiMercadopago,
  SiAuth0,
} from 'react-icons/si';
import SectionHeading from '../components/ui/SectionHeading';

const stack = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Redis', icon: SiRedis },
  { name: 'RabbitMQ', icon: SiRabbitmq },
  { name: 'Docker', icon: SiDocker },
  { name: 'CI/CD', icon: SiGithubactions },
  { name: 'Mercado Pago', icon: SiMercadopago },
  { name: 'Auth0', icon: SiAuth0 },
];

const trackItems = [...stack, ...stack];

export default function Stack() {
  return (
    <section id="stack" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tecnología"
          title="El Stack que Usamos"
          accentWord="Usamos"
          subtitle="Un stack elegido por proyecto, no por moda: distintas tecnologías según la escala y criticidad de cada sistema, probadas en producción."
        />

        <div
          className="marquee-wrapper relative overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div className="marquee-track flex w-max gap-4">
            {trackItems.map(({ name, icon: Icon }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.04]"
              >
                <Icon className="h-7 w-7 shrink-0 text-white/55" />
                <span className="whitespace-nowrap text-sm font-medium text-white/60">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
