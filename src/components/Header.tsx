import { useEffect, useRef, useState } from 'react'
import type { Lang } from '../i18n'
import { translations } from '../i18n'

interface Props {
  lang: Lang
  setLang: (l: Lang) => void
}

export default function Header({ lang, setLang }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const t = translations[lang]

  const navItems = [
    { href: '#services', label: t.nav.services },
    { href: '#process', label: t.nav.process },
    { href: '#about', label: t.nav.team },
    { href: '#work', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'bg-brand-bg/80 backdrop-blur-xl' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#"
          className="font-display text-sm font-semibold tracking-[0.22em] text-white/70 uppercase hover:text-white transition"
        >
          Polaris
        </a>
        <nav className="hidden gap-8 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 text-sm mr-2">
          <button
            onClick={() => setLang('es')}
            aria-pressed={lang === 'es'}
            className={`px-1 transition ${lang === 'es' ? 'text-white font-medium' : 'text-white/40 hover:text-white/70'}`}
          >
            ES
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
            className={`px-1 transition ${lang === 'en' ? 'text-white font-medium' : 'text-white/40 hover:text-white/70'}`}
          >
            EN
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute left-3 right-3 top-16 z-50 rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl p-2 shadow-xl"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-white/70 hover:bg-white/5 hover:text-white transition"
            >
              {item.label}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
