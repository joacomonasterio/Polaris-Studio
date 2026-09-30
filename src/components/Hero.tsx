import type { Lang } from '../i18n'
import { translations } from '../i18n'
import Reveal from './Reveal'

interface Props {
  lang: Lang
}

export default function Hero({ lang }: Props) {
  const t = translations[lang]

  return (
    // Fills the first screen below the sticky header: content centered, highlights pinned to the bottom
    <section className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl md:min-h-[calc(100svh-3.5rem)] flex-col px-6 lg:px-8">
      <div className="flex flex-1 items-center justify-center py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              {t.hero.badge}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              {t.hero.title}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-8 text-white/70 sm:text-xl">
              {t.hero.description}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#contact"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-brand-bg transition hover:scale-[1.02] motion-reduce:hover:scale-100"
              >
                {t.hero.cta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={400}>
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-white/10 py-8 text-sm text-white/45">
          {t.highlights.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              {/* On mobile the list wraps in pairs, so skip the dot that would start the second line */}
              {index > 0 && (
                <span aria-hidden="true" className={`text-white/20 ${index % 2 === 0 ? 'hidden sm:inline' : ''}`}>
                  ·
                </span>
              )}
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
