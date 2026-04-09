type Lang = 'es' | 'en'

interface Props {
  lang: Lang
}

export default function Process({ lang }: Props) {
  const steps = [
    lang === 'es' ? 'Descubrimiento y estrategia' : 'Discovery & strategy',
    lang === 'es' ? 'Wireframes y diseño visual' : 'Wireframes & visual design',
    lang === 'es' ? 'Desarrollo y optimización' : 'Development & optimization',
    lang === 'es' ? 'Entrega, medición y mejora' : 'Delivery, measurement & improvement',
  ]

  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center text-center lg:text-left">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-white/45">{lang === 'es' ? 'Proceso' : 'Process'}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {lang === 'es'
              ? 'Un flujo claro entre diseño, desarrollo y resultado final.'
              : 'A clear flow between design, development and final result.'}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
            {lang === 'es'
              ? 'Trabajamos con una lógica simple: entender el objetivo, diseñar con intención y construir una experiencia sólida, rápida y lista para destacar.'
              : 'We work with a simple logic: understand the goal, design with intention and build a solid, fast experience ready to stand out.'}
          </p>
        </div>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="animate-on-scroll flex items-center gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-sm font-semibold text-white/80">
                0{index + 1}
              </div>
              <div className="text-base font-medium text-white/85">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
