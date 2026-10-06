import { useEffect, useRef } from 'react'
import type { Lang } from '../i18n'
import { translations } from '../i18n'

const FRAME_COUNT = 12

function TunnelFrame({ lines, index }: { lines: string[]; index: number }) {
  const accent = index % 2 === 0 ? 'rgba(217,70,239,0.55)' : 'rgba(34,211,238,0.5)'
  return (
    <div
      className="tunnel-frame absolute left-[-230px] top-[-150px] h-[300px] w-[460px] overflow-hidden rounded-2xl border bg-[#07080d]/70 p-4 font-mono text-[11px] leading-5 text-white/75 backdrop-blur-[2px]"
      style={{
        borderColor: accent,
        boxShadow: `0 0 36px -10px ${accent}`,
        animationDelay: `${-(index / FRAME_COUNT) * 12}s`,
      }}
    >
      {lines.map((line, i) => (
        <div key={i} className="whitespace-pre">
          <span className="mr-3 select-none text-white/25">{i + 1}</span>
          {line}
        </div>
      ))}
    </div>
  )
}

interface Props {
  lang: Lang
}

export default function CodeScene({ lang }: Props) {
  const { snippets, terminal } = translations[lang].hero
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handleScroll = () => {
      const progress = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1)
      stage.style.setProperty('--scroll-p', progress.toFixed(3))
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 origin-center scale-[0.6] [perspective:900px] sm:scale-100">
        <div
          ref={stageRef}
          className="absolute inset-0 transition-transform duration-300 ease-out motion-reduce:transition-none [transform-style:preserve-3d]"
          style={{
            transform:
              'rotateX(calc(var(--scroll-p, 0) * 28deg)) rotateZ(calc(var(--scroll-p, 0) * 120deg))',
          }}
        >
          <div className="absolute left-1/2 top-1/2 h-0 w-0 [transform-style:preserve-3d] motion-reduce:hidden">
            {Array.from({ length: FRAME_COUNT }, (_, i) => (
              <TunnelFrame key={i} index={i} lines={snippets[i % snippets.length]} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,6,10,0.75)_0%,rgba(5,6,10,0.25)_40%,transparent_70%)]" />
      <div className="scanlines absolute inset-0 opacity-70 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#05060a_85%)]" />

      <div className="absolute bottom-28 left-6 hidden w-72 rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-[11px] leading-5 text-emerald-300/80 backdrop-blur-md lg:block">
        {terminal.map((line, i) => (
          <div key={i} className="type-line overflow-hidden whitespace-nowrap" style={{ animationDelay: `${i * 1.1}s` }}>
            {line}
          </div>
        ))}
        <span className="caret inline-block h-3 w-1.5 bg-emerald-300/80 align-middle" />
      </div>
    </div>
  )
}
