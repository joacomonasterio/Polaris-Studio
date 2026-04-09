type Lang = 'es' | 'en'

interface Props {
  lang: Lang
}

export default function Services({ lang }: Props) {
  const services = [
    {
      title: lang === 'es' ? 'Diseño UX/UI' : 'UX/UI Design',
      description: lang === 'es'
        ? 'Diseñamos interfaces claras, modernas y centradas en conversión para productos digitales, startups y negocios que quieren verse premium.'
        : 'We design clear, modern interfaces focused on conversions for digital products, startups and businesses that want to look premium.',
    },
    {
      title: lang === 'es' ? 'Desarrollo Web' : 'Web Development',
      description: lang === 'es'
        ? 'Construimos landing pages y experiencias web rápidas, escalables y responsive con foco en performance y resultados.'
        : 'We build fast, scalable and responsive landing pages and web experiences focused on performance and results.',
    },
    {
      title: lang === 'es' ? 'Desarrollo de Aplicaciones' : 'App Development',
      description: lang === 'es'
        ? 'Unimos estrategia, diseño y desarrollo para transformar ideas en productos listos para crecer.'
        : 'We combine strategy, design, and development to transform ideas into products ready to scale.',
    },
  ]

  const techs = [
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  ]

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-white/45">{lang === 'es' ? 'Servicios' : 'Services'}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {lang === 'es'
            ? '¿Tu negocio está listo para dar el siguiente paso digital?'
            : 'Is your business ready to take the next digital step?'}
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="animate-on-scroll group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
          >
            <div className="mb-5 h-11 w-11 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/65">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-24 max-w-5xl">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-white/30 mb-8">
          {lang === 'es' ? 'Tecnologías que usamos' : 'Technologies we use'}
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mx-auto">
          {techs.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-2 group">
              <img
                src={tech.src}
                alt={tech.name}
                className="h-10 w-10 transition duration-300 group-hover:scale-125"
              />
              <span className="text-xs text-white/30 group-hover:text-white/60 transition">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
