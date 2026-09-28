import type { Lang } from '../i18n'
import { translations } from '../i18n'
import Reveal from './Reveal'

interface Props {
  lang: Lang
}

const team = [
  {
    id: 'catalina' as const,
    name: 'Catalina Armentano',
    image: '/catalina.webp',
    objectPosition: 'center 30%',
  },
  {
    id: 'joaquin' as const,
    name: 'Joaquín Monasterio',
    image: '/joaquin.webp',
    objectPosition: 'center',
  },
]

export default function About({ lang }: Props) {
  const t = translations[lang].team

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <p className="text-sm uppercase tracking-[0.24em] text-white/45">{t.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.heading}</h2>
      </div>

      <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-8">
        {team.map((member) => (
          <Reveal key={member.id}>
            <div className="flex flex-col items-center text-center rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-14 py-10 gap-6 transition-all duration-300 hover:scale-[1.06] hover:border-white/20 hover:bg-white/[0.06] motion-reduce:hover:scale-100">
              <img
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                loading="lazy"
                className="h-32 w-32 rounded-full object-cover border border-white/10"
                style={{ objectPosition: member.objectPosition }}
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-white/50 mt-1">{t.members[member.id].role}</p>
                <p className="text-xs text-white/30 mt-1">{t.members[member.id].study}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
