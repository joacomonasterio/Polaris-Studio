import type { Lang } from '../i18n'
import { translations } from '../i18n'
import Reveal from './Reveal'

interface Props {
  lang: Lang
}

// Simple line icons (24×24, stroke = currentColor), one per service in the same order as the texts
const serviceIcons = [
  // UX/UI design: a window with a layout
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M9 9v11" />
  </>,
  // Web development: code brackets
  <>
    <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
  </>,
  // App development: a phone
  <>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M11 18.5h2" />
  </>,
]

const techs = [
  { name: 'React', src: '/icons/react.svg' },
  { name: 'Figma', src: '/icons/figma.svg' },
  { name: 'Node.js', src: '/icons/nodejs.svg' },
  { name: 'Next.js', src: '/icons/nextjs.svg' },
  { name: 'Tailwind', src: '/icons/tailwindcss.svg' },
  { name: 'TypeScript', src: '/icons/typescript.svg' },
]

export default function Services({ lang }: Props) {
  const t = translations[lang].services

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-white/45">{t.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.heading}</h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {t.items.map((service, index) => (
          <Reveal key={index} className="md:row-span-3 md:grid md:grid-rows-subgrid">
            <div className="group md:row-span-3 md:grid md:grid-rows-subgrid md:gap-0 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] motion-reduce:hover:translate-y-0">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 text-white/80">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {serviceIcons[index]}
                </svg>
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">{service.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-5xl">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-white/30 mb-8">{t.techEyebrow}</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mx-auto">
          {techs.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-2 group">
              <img
                src={tech.src}
                alt={tech.name}
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 transition duration-300 group-hover:scale-125 motion-reduce:group-hover:scale-100"
              />
              <span className="text-xs text-white/30 group-hover:text-white/60 transition">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
