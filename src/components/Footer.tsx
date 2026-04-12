type Lang = 'es' | 'en'

interface Props {
  lang: Lang
}

export default function Footer({ lang }: Props) {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-white/40 sm:flex-row">
        <span className="font-medium tracking-[0.2em] uppercase text-white/60">Polaris</span>
        <span>{lang === 'es' ? `© ${new Date().getFullYear()} Polaris Studio. Todos los derechos reservados.` : `© ${new Date().getFullYear()} Polaris Studio. All rights reserved.`}</span>
        <div className="flex gap-6 items-center">
          <a href="https://instagram.com/polaris.studio__" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/40 hover:text-white/70 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://linkedin.com/company/polarisstuidio1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/40 hover:text-white/70 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
