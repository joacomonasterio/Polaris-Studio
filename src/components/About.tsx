import type { Lang } from '../i18n'
import { translations } from '../i18n'
import Reveal from './Reveal'

interface Props {
  lang: Lang
}

// Cut-out portraits (transparent background) cropped to the same 4:5 framing:
// same face size and position in both, so the cards match
const team = [
  { id: 'catalina' as const, name: 'Catalina Armentano', image: '/catalina.webp' },
  { id: 'joaquin' as const, name: 'Joaquín Monasterio', image: '/joaquin.webp' },
]

export default function About({ lang }: Props) {
  const t = translations[lang].team

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <p className="text-sm uppercase tracking-[0.24em] text-white/45">{t.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.heading}</h2>
      </div>

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {team.map((member) => (
          <Reveal key={member.id}>
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-transparent">
              {/* Soft glow behind the head, stronger on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(217,70,239,0.12),transparent_60%)] opacity-60 transition-opacity duration-700 group-hover:opacity-100"
              />
              <img
                src={member.image}
                alt={member.name}
                width={800}
                height={1000}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 motion-reduce:group-hover:scale-100 [@media(hover:hover)_and_(pointer:fine)]:grayscale"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-left">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-white/70">{t.members[member.id].role}</p>
                <p className="mt-0.5 text-xs text-white/45">{t.members[member.id].study}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
