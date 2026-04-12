import { useState } from 'react'

type Lang = 'es' | 'en'

interface Props {
  lang: Lang
}

export default function Contact({ lang }: Props) {
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
          <p className="text-sm uppercase tracking-[0.24em] text-white/45">{lang === 'es' ? 'Contacto' : 'Contact'}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {lang === 'es' ? '¿Tenés un proyecto en mente?' : 'Got a project in mind?'}
          </h2>
          <p className="mt-4 text-white/70">
            {lang === 'es' ? 'Contanos tu idea. Respondemos en menos de 24 horas.' : 'Tell us your idea. We respond in less than 24 hours.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-white/50 uppercase tracking-widest">
                {lang === 'es' ? 'Nombre' : 'Name'}
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder={lang === 'es' ? 'Tu nombre' : 'Your name'}
                className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-white/50 uppercase tracking-widest">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder={lang === 'es' ? 'tu@email.com' : 'your@email.com'}
                className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4 w-full">
            <label className="text-xs text-white/50 uppercase tracking-widest">
              {lang === 'es' ? 'Tipo de proyecto' : 'Project type'}
            </label>
            <input type="hidden" name="project_type" value={projectType} />
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'uxui', label: 'UX/UI Design' },
                { value: 'web', label: lang === 'es' ? 'Desarrollo Web' : 'Web Development' },
                { value: 'app', label: lang === 'es' ? 'Aplicación' : 'App' },
                { value: 'otro', label: lang === 'es' ? 'Otro' : 'Other' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setProjectType(option.value)}
                  className={`rounded-xl border px-4 py-3 text-sm transition ${
                    projectType === option.value
                      ? 'border-white/40 bg-white/15 text-white font-medium'
                      : 'border-white/10 bg-white/[0.05] text-white/50 hover:bg-white/10 hover:text-white/70'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xs text-white/50 uppercase tracking-widest">
              {lang === 'es' ? 'Mensaje' : 'Message'}
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder={lang === 'es' ? 'Contanos sobre tu proyecto...' : 'Tell us about your project...'}
              className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={formState === 'loading' || formState === 'success'}
            className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {formState === 'loading'
              ? (lang === 'es' ? 'Enviando...' : 'Sending...')
              : formState === 'success'
              ? (lang === 'es' ? 'Mensaje enviado' : 'Message sent')
              : (lang === 'es' ? 'Enviar mensaje' : 'Send message')}
          </button>

          {formState === 'success' && (
            <p className="mt-4 text-center text-sm text-white/60">
              {lang === 'es' ? '¡Gracias! Nos ponemos en contacto a la brevedad.' : "Thanks! We'll be in touch soon."}
            </p>
          )}
          {formState === 'error' && (
            <p className="mt-4 text-center text-sm text-red-400">
              {lang === 'es' ? 'Hubo un error. Intentá de nuevo.' : 'Something went wrong. Please try again.'}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
