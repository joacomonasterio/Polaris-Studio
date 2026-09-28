import type { Lang } from '../i18n'
import { translations } from '../i18n'
import Reveal from './Reveal'

interface Props {
  lang: Lang
}

const projects = [
  { id: 'fittrack' as const, name: 'FitTrack', image: '/fittrack.webp', width: 408, height: 612 },
  { id: 'nextdrive' as const, name: 'NextDrive', image: '/nextdrive.webp', width: 631, height: 396 },
  { id: 'nubira' as const, name: 'Nubira', image: '/nubira.webp', width: 669, height: 373 },
]

export default function Projects({ lang }: Props) {
  const t = translations[lang].projects

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.24em] text-white/45">{t.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.heading}</h2>
      </div>
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <Reveal key={project.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 py-10 last:border-b items-center group hover:bg-white/[0.02] rounded-2xl px-4 transition">
              <div className="flex justify-center">
                <img
                  src={project.image}
                  alt={project.name}
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  className="w-full max-h-[500px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs text-white/30 tracking-widest uppercase">0{i + 1}</span>
                <h3 className="text-4xl font-semibold text-white group-hover:text-fuchsia-400 transition leading-tight">
                  {project.name}
                </h3>
                <span className="text-xs text-white/40 uppercase tracking-widest">{t.items[project.id].type}</span>
                <p className="text-sm text-white/60 leading-relaxed mt-2">{t.items[project.id].description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
