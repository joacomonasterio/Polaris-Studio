type Lang = 'es' | 'en'

interface Props {
  lang: Lang
}

export default function Hero({ lang }: Props) {
  return (
    <section className="mx-auto flex max-w-7xl justify-center px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          {lang === 'es' ? 'UX/UI + Desarrollo Full Stack' : 'UX/UI + Full Stack Development'}
        </div>

        <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          {lang === 'es' ? 'Somos Polaris.' : 'We are Polaris.'}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
          {lang === 'es'
            ? 'Agencia de desarrollo de software que diseña y construye productos digitales.'
            : 'Software agency that designs and builds digital products.'}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:scale-[1.02]"
          >
            {lang === 'es' ? 'Comenzar proyecto' : 'Start a project'}
          </a>
        </div>
      </div>
    </section>
  )
}
