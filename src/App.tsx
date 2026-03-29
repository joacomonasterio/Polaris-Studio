import './App.css'

export default function App() {
  const services = [
    {
      title: 'UX/UI Design',
      description:
        'Diseñamos interfaces claras, modernas y centradas en conversión para productos digitales, startups y negocios que quieren verse premium.',
    },
    {
      title: 'Desarrollo Web',
      description:
        'Construimos landing pages y experiencias web rápidas, escalables y responsive con foco en performance y resultados.',
    },
    {
      title: 'Desarrolo de Aplicaciones',
      description:
        'Unimos estrategia, diseño y desarrollo para transformar ideas en productos listos para crecer.',
    },
  ]

  const process = [
    'Descubrimiento y estrategia',
    'Wireframes y diseño visual',
    'Desarrollo y optimización',
    'Entrega, medición y mejora',
  ]

  const projects = [
    {
      name: 'LaunchFlow',
      type: 'Landing para startup',
      summary:
        'Diseño y desarrollo de una página enfocada en captar leads con una estética moderna y estructura de alta conversión.',
    },
    {
      name: 'StudioPeak',
      type: 'Web para servicio premium',
      summary:
        'Experiencia visual elegante para presentar servicios, generar confianza y facilitar el contacto.',
    },
    {
      name: 'NovaStack',
      type: 'Producto digital',
      summary:
        'Interfaz moderna con storytelling visual para comunicar valor, diferenciar marca y mejorar percepción de producto.',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <span className="text-sm font-medium tracking-[0.22em] text-white/70 uppercase">
              Polaris
            </span>
          </div>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">
              Servicios
            </a>
            <a href="#process" className="transition hover:text-white">
              Proceso
            </a>
            <a href="#work" className="transition hover:text-white">
              Proyectos
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contacto
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-neutral-950"
          >
            Hablemos
          </a>
        </div>
      </header>

      <main className="relative">
  <section className="mx-auto flex max-w-7xl justify-center px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-28">
    <div className="mx-auto max-w-3xl text-center">
      
      <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
        UX/UI + Desarrollo Full Stack
      </div>

      <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
        Somos Polaris.
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
        Agencia de desarrollo de software que diseña y construye productos digitales.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href="#contact"
          className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:scale-[1.02]"
        >
          Comenzar proyecto
        </a>
      </div>

      <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8 text-center text-sm">
        <div>
          <div className="text-2xl font-semibold">Claridad</div>
          <div className="mt-1 text-white/60">Diseño centrado en usuario</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">Performance</div>
          <div className="mt-1 text-white/60">Implementación moderna</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">Crecimientos</div>
          <div className="mt-1 text-white/60">Resultados que escalan</div>
        </div>
      </div>

    </div>
  </section>

        <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-4">
            {['Diseño estratégico', 'Desarrollo moderno', 'Responsive', 'Optimización visual'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-sm text-white/70">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">Servicios</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              ¿Tu negocio está listo para da el siguiente paso digital?
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="mb-5 h-11 w-11 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/45">Proceso</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Un flujo claro entre diseño, desarrollo y resultado final.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
                Trabajamos con una lógica simple: entender el objetivo, diseñar con intención y construir una experiencia sólida, rápida y lista para destacar.
              </p>
            </div>
            <div className="space-y-4">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
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

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">Contacto</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Hablemos de tu proyecto</h2>
            <p className="mt-4 text-white/70">Enviar email a hola@tuagencia.com o escríbeme por Whatsapp</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="mailto:hola@tuagencia.com" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20">Enviar email</a>
              <a href="https://wa.me/000000000" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20">Abrir Whatsapp</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
