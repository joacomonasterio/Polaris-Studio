import './App.css'
import { useState, useEffect } from 'react'

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState<'es' | 'en'>('es')
    useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  

  
  const services = [
  {
    title: lang === 'es' ? 'UX/UI Design' : 'UX/UI Design',
    description: lang === 'es'
      ? 'Diseñamos interfaces claras, modernas y centradas en conversión para productos digitales, startups y negocios que quieren verse premium.'
      : 'We design clear, modern interfaces focused on conversion for digital products, startups and businesses that want to look premium.',
  },
  {
    title: lang === 'es' ? 'Desarrollo Web' : 'Web Development',
    description: lang === 'es'
      ? 'Construimos landing pages y experiencias web rápidas, escalables y responsive con foco en performance y resultados.'
      : 'We build fast, scalable and responsive landing pages and web experiences focused on performance and results.',
  },
  {
    title: lang === 'es' ? 'Desarrollo de Aplicaciones' : 'App Development',
    description: lang === 'es'
      ? 'Unimos estrategia, diseño y desarrollo para transformar ideas en productos listos para crecer.'
      : 'We combine strategy, design and development to transform ideas into products ready to scale.',
  },
]
    const process = [
  lang === 'es' ? 'Descubrimiento y estrategia' : 'Discovery & strategy',
  lang === 'es' ? 'Wireframes y diseño visual' : 'Wireframes & visual design',
  lang === 'es' ? 'Desarrollo y optimización' : 'Development & optimization',
  lang === 'es' ? 'Entrega, medición y mejora' : 'Delivery, measurement & improvement',
]
  const projects = [
  {
    name: 'FitTrack',
    type: lang === 'es' ? 'App · Fitness & Training' : 'App · Fitness & Training',
    description: lang === 'es'
      ? 'Aplicación de seguimiento de entrenamiento y progreso fitness.'
      : 'Fitness tracking app for workouts and progress monitoring.',
    image: '/fittrack.png',
  },
  {
    name: 'NextDrive',
    type: lang === 'es' ? 'Plataforma · Renta de Autos' : 'Platform · Car Rental',
    description: lang === 'es'
      ? 'Plataforma digital para la renta de vehículos con experiencia moderna.'
      : 'Digital platform for vehicle rental with a modern experience.',
    image: '/nextdrive.png',
  },
  {
    name: 'Nubira',
    type: lang === 'es' ? 'Web · Estética' : 'Web · Beauty Salon',
    description: lang === 'es'
      ? 'Sitio web para estética profesional con foco en imagen de marca.'
      : 'Website for a professional beauty salon focused on brand image.',
    image: '/nubira.png',
  },
]

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white antialiased">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <header className={`sticky top-0 z-50 border-b border-white/10 transition-all duration-300 ${
    scrollY > 40
    ? 'bg-neutral-950/80 backdrop-blur-xl'
    : 'bg-transparent border-transparent'
    }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-sm font-medium tracking-[0.22em] text-white/70 uppercase hover:text-white transition">
            Polaris
          </a>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
  <a href="#services" className="transition hover:text-white">
    {lang === 'es' ? 'Servicios' : 'Services'}
  </a>
  <a href="#process" className="transition hover:text-white">
    {lang === 'es' ? 'Proceso' : 'Process'}
  </a>
  <a href="#work" className="transition hover:text-white">
    {lang === 'es' ? 'Proyectos' : 'Projects'}
  </a>
  <a href="#contact" className="transition hover:text-white">
    {lang === 'es' ? 'Contacto' : 'Contact'}
  </a>
</nav>

        {/* SELECTOR DE IDIOMA */}
        <div className="flex items-center gap-1 text-sm mr-2">
          <button
            onClick={() => setLang('es')}
            className={`px-1 transition ${lang === 'es' ? 'text-white font-medium' : 'text-white/40 hover:text-white/70'}`}
          >
            ES
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => setLang('en')}
            className={`px-1 transition ${lang === 'en' ? 'text-white font-medium' : 'text-white/40 hover:text-white/70'}`}
          >
            EN
          </button>
        </div>

          {/* BOTÓN HAMBURGUESA */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

{/* MENU MOBILE */}
        {menuOpen && (
  <div className="md:hidden absolute left-3 right-3 top-16 z-50 rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl p-2 shadow-xl">
    {[
      { label: 'Servicios', href: '#services' },
      { label: 'Proceso', href: '#process' },
      { label: 'Contacto', href: '#contact' },
    ].map((item) => (
        <a
        key={item.label}
        href={item.href}
        onClick={() => setMenuOpen(false)}
        className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-white/70 hover:bg-white/5 hover:text-white transition"
      >
        {item.label}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    ))}
    <div className="mx-4 mt-1 mb-2 pt-2 border-t border-white/10">
        <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="block w-full text-center rounded-xl bg-white text-neutral-950 text-sm font-semibold py-2.5 transition hover:bg-white/90"
      >
        Comenzar proyecto
      </a>
    </div>
  </div>
)}
  

        </header>

      <main className="relative">
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
      ?     'Agencia de desarrollo de software que diseña y construye productos digitales.'
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

        <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-4">
            {(lang === 'es'
  ? ['Diseño estratégico', 'Desarrollo moderno', 'Responsive', 'Optimización visual']
  : ['Strategic design', 'Modern development', 'Responsive', 'Visual optimization']).map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-sm text-white/70">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">{lang === 'es' ? 'Servicios' : 'Services'}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {lang === 'es'
  ? '¿Tu negocio está listo para dar el siguiente paso digital?'
  : 'Is your business ready to take the next digital step?'}
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
          

          <div className="mx-auto mt-16 max-w-5xl">
            <p className="text-center text-xs uppercase tracking-[0.24em] text-white/30 mb-8">
              {lang === 'es' ? 'Tecnologías que usamos' : 'Technologies we use'}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
              ].map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 group">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="h-10 w-10 transition duration-300 group-hover:scale-125"
                  />
                  <span className="text-xs text-white/30 group-hover:text-white/60 transition">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </section>

        

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
        
        <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">{lang === 'es' ? 'Proyectos' : 'Projects'}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {lang === 'es' ? 'Trabajo que habla por sí solo.' : 'Work that speaks for itself.'}
            </h2>
          </div>
          <div className="flex flex-col">
            {projects.map((project, i) => (
  <div
    key={project.name}
    className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 py-10 last:border-b items-center group hover:bg-white/[0.02] rounded-2xl px-4 transition"
  >
    {/* IZQUIERDA — imagen */}
    <div className="flex justify-center">
      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="w-full max-h-[500px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="h-96 w-40 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/20 text-sm">
          Sin imagen
        </div>
      )}
    </div>

    {/* DERECHA — info */}
    <div className="flex flex-col gap-3">
      <span className="text-xs text-white/30 tracking-widest uppercase">0{i + 1}</span>
      <h3 className="text-4xl font-semibold text-white group-hover:text-fuchsia-400 transition leading-tight">
        {project.name}
      </h3>
      <span className="text-xs text-white/40 uppercase tracking-widest">{project.type}</span>
      <p className="text-sm text-white/60 leading-relaxed mt-2">{project.description}</p>
    </div>
  </div>
))}
          </div>  
    </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center ">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">{lang === 'es' ? 'Contacto' : 'Contact'}</p>
            {lang === 'es' ? '¿Tenés un proyecto en mente?' : 'Got a project in mind?'}
            <p className="mt-4 text-white/70">{lang === 'es' ? 'Contanos tu idea. Respondemos en menos de 24 horas.' : 'Tell us your idea. We respond in less than 24 hours.'}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="mailto:polaris.studio3031@gmail.com" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20">{lang === 'es' ? 'Enviar email' : 'Send email'}</a>
              <a href="https://wa.me/+5491166734266" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20">{lang === 'es' ? 'Abrir Whatsapp' : 'Open Whatsapp'}</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 px-6 py-8">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-white/40 sm:flex-row">
    <span className="font-medium tracking-[0.2em] uppercase text-white/60">Polaris</span>
    <span>{lang === 'es' ? '© 2026 Polaris Agency. Todos los derechos reservados.' : '© 2025 Polaris Agency. All rights reserved.'}</span>
    <div className="flex gap-6">
      <a href="#services" className="transition hover:text-white">
        {lang === 'es' ? 'Servicios' : 'Services'}
      </a>
      <a href="#process" className="transition hover:text-white">
      {lang === 'es' ? 'Proceso' : 'Process'}
      </a>
      <a href="#work" className="transition hover:text-white">
      {lang === 'es' ? 'Proyectos' : 'Projects'}
      </a>
      <a href="#contact" className="transition hover:text-white">
      {lang === 'es' ? 'Contacto' : 'Contact'}
      </a>
    </div>
  </div>
</footer>
    </div>
  )
}
