import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import { useLang } from './hooks/useLang'
import { translations } from './i18n'

export default function App() {
  const [lang, setLang] = useLang()
  const t = translations[lang]

  return (
    <div className="relative min-h-screen bg-brand-bg text-white antialiased">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <Header lang={lang} setLang={setLang} />

      <main className="relative">
        <Hero lang={lang} />

        <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-4">
            {t.highlights.map((item, index) => (
              <Reveal key={index}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-sm text-white/70 text-center">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Services lang={lang} />
        <Process lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  )
}
