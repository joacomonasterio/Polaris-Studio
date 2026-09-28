import type { Lang } from '../i18n'
import { translations } from '../i18n'
import Reveal from './Reveal'

interface Props {
  lang: Lang
}

export default function Process({ lang }: Props) {
  const t = translations[lang].process

  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center text-center lg:text-left">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-white/45">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.heading}</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/65">{t.description}</p>
        </div>
        <div className="space-y-4">
          {t.steps.map((step, index) => (
            <Reveal key={index}>
              <div className="flex items-center gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-sm font-semibold text-white/80">
                  0{index + 1}
                </div>
                <div className="text-base font-medium text-white/85">{step}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
