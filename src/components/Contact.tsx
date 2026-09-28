import { useState } from 'react'
import type { Lang } from '../i18n'
import { translations } from '../i18n'

interface Props {
  lang: Lang
}

export default function Contact({ lang }: Props) {
  const t = translations[lang].contact
  const [projectType, setProjectType] = useState('')
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('loading')
    const form = e.currentTarget
    try {
      const res = await fetch('https://formspree.io/f/mvzvdzgw', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setFormState('success')
        form.reset()
        setProjectType('')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <p className="text-sm uppercase tracking-[0.24em] text-white/45">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.heading}</h2>
          <p className="mt-4 text-white/70">{t.description}</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-xs text-white/50 uppercase tracking-widest">
                {t.nameLabel}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder={t.namePlaceholder}
                className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-xs text-white/50 uppercase tracking-widest">
                {t.emailLabel}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                placeholder={t.emailPlaceholder}
                className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4 w-full">
            <span className="text-xs text-white/50 uppercase tracking-widest">{t.projectTypeLabel}</span>
            <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label={t.projectTypeLabel}>
              {t.projectTypes.map((option) => (
                <label
                  key={option.value}
                  className={`cursor-pointer text-center rounded-xl border px-4 py-3 text-sm transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-white/60 ${
                    projectType === option.value
                      ? 'border-white/40 bg-white/15 text-white font-medium'
                      : 'border-white/10 bg-white/[0.05] text-white/50 hover:bg-white/10 hover:text-white/70'
                  }`}
                >
                  <input
                    type="radio"
                    name="project_type"
                    value={option.value}
                    checked={projectType === option.value}
                    onChange={() => setProjectType(option.value)}
                    required
                    className="sr-only"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="contact-message" className="text-xs text-white/50 uppercase tracking-widest">
              {t.messageLabel}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              placeholder={t.messagePlaceholder}
              className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={formState === 'loading' || formState === 'success'}
            className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-bg transition hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 motion-reduce:hover:scale-100"
          >
            {formState === 'loading' ? t.submitLoading : formState === 'success' ? t.submitSuccess : t.submitIdle}
          </button>

          {formState === 'success' && (
            <p className="mt-4 text-center text-sm text-white/60">{t.successMessage}</p>
          )}
          {formState === 'error' && (
            <p className="mt-4 text-center text-sm text-red-400">{t.errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  )
}
