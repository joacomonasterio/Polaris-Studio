import { useState, useEffect } from 'react'

type Lang = 'es' | 'en'

interface Props {
  lang: Lang
  setLang: (l: Lang) => void
}

export default function Header({ lang, setLang }: Props) {
  const [scrollY, setScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 transition-all duration-300 ${
      scrollY > 40
        ? 'bg-neutral-950/80 backdrop-blur-xl'
        : 'bg-transparent border-transparent'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-sm font-semibold tracking-[0.22em] text-white/70 uppercase hover:text-white transition">
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

      {menuOpen && (
        <div className="md:hidden absolute left-3 right-3 top-16 z-50 rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl p-2 shadow-xl">
          {[
            { label: lang === 'es' ? 'Servicios' : 'Services', href: '#services' },
            { label: lang === 'es' ? 'Proceso' : 'Process', href: '#process' },
            { label: lang === 'es' ? 'Proyectos' : 'Projects', href: '#work' },
            { label: lang === 'es' ? 'Contacto' : 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.href}
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
        </div>
      )}
    </header>
  )
}
