import type { Lang } from '../i18n'
import { translations } from '../i18n'
import Reveal from './Reveal'

interface Props {
  lang: Lang
}

export default function Hero({ lang }: Props) {
  const t = translations[lang].hero

  return (
    <section className="mx-auto flex max-w-7xl justify-center px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            {t.badge}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            {t.title}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            {t.description}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-brand-bg transition hover:scale-[1.02] motion-reduce:hover:scale-100"
            >
              {t.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
