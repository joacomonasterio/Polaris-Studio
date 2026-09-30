import { useState } from 'react'
import type { Lang } from '../i18n'
import { translations } from '../i18n'
import Reveal from './Reveal'

interface Props {
  lang: Lang
}

// Moves the spotlight (radial gradient) to the pointer position inside the card
function trackPointer(e: React.PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

export default function Process({ lang }: Props) {
  const t = translations[lang].process
  // Tapped/clicked step stays open; on devices with a mouse, hovering also opens a step
  const [openStep, setOpenStep] = useState<number | null>(null)

  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start text-center lg:text-left">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-white/45">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.heading}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/65 lg:mx-0">{t.description}</p>
        </div>
        <div className="space-y-4">
          {t.steps.map((step, index) => {
            const isOpen = openStep === index
            // Every "active" style is written twice: always-on when the step is open,
            // or only on hover (mouse devices) when it isn't. Tailwind needs the literal classes.
            return (
              <Reveal key={index}>
                <button
                  type="button"
                  onClick={() => setOpenStep(isOpen ? null : index)}
                  onPointerMove={trackPointer}
                  aria-expanded={isOpen}
                  className="group relative block w-full rounded-[1.5rem] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {/* Gradient border + glow, sitting 1px outside the card */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -inset-px rounded-[1.5rem] bg-gradient-to-r from-fuchsia-400/30 via-white/15 to-cyan-300/30 shadow-[0_0_32px_-12px_rgba(217,70,239,0.2)] transition-opacity duration-500 ${
                      isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  <span
                    className={`relative block overflow-hidden rounded-[1.5rem] border bg-[#0f1014] p-5 transition-colors duration-500 ${
                      isOpen ? 'border-transparent' : 'border-white/10 group-hover:border-transparent'
                    }`}
                  >
                    {/* Spotlight that follows the pointer */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          'radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.06), transparent 65%)',
                      }}
                    />
                    {/* Light sweep that crosses the card when it becomes active */}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-1000 ease-out ${
                        isOpen ? 'translate-x-[400%]' : '-translate-x-full group-hover:translate-x-[400%]'
                      }`}
                    />

                    <span className="relative flex items-center gap-5">
                      <span
                        className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border text-sm font-semibold transition duration-500 ${
                          isOpen
                            ? 'scale-110 border-white/20 text-white shadow-[0_0_16px_rgba(217,70,239,0.15)]'
                            : 'border-white/10 bg-white/[0.06] text-white/80 group-hover:scale-110 group-hover:border-white/20 group-hover:text-white group-hover:shadow-[0_0_16px_rgba(217,70,239,0.15)]'
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute inset-0 bg-gradient-to-br from-fuchsia-500/35 to-cyan-500/35 transition-opacity duration-500 ${
                            isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}
                        />
                        <span className="relative">0{index + 1}</span>
                      </span>
                      <span
                        className={`flex-1 text-base font-medium transition duration-500 ${
                          isOpen ? 'translate-x-1 text-white' : 'text-white/85 group-hover:translate-x-1 group-hover:text-white'
                        }`}
                      >
                        {step.title}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className={`shrink-0 transition duration-500 ${
                          isOpen ? 'rotate-180 text-white' : 'text-white/40 group-hover:rotate-180 group-hover:text-white'
                        }`}
                      >
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>

                    {/* grid-rows 0fr → 1fr animates the height of content with unknown size */}
                    <span
                      className={`relative grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] group-hover:grid-rows-[1fr]'
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span
                          className={`block pl-[4.25rem] pt-3 text-sm leading-6 text-white/65 transition duration-500 ${
                            isOpen
                              ? 'translate-y-0 opacity-100 blur-0 delay-150'
                              : 'translate-y-2 opacity-0 blur-sm group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0 group-hover:delay-150'
                          }`}
                        >
                          {step.description}
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
