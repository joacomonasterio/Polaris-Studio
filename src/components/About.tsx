type Lang = 'es' | 'en'

interface Props {
  lang: Lang
}

const team = [
  {
    name: 'Catalina Armentano',
    role: { es: 'Diseñadora UX/UI', en: 'UX/UI Designer' },
    study: { es: 'Diseño Multimedia y de Interacción', en: 'Multimedia & Interaction Design' },
    image: '/catalina.jpg',
    objectPosition: 'center 30%',
  },
  {
    name: 'Joaquín Monasterio',
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    study: { es: 'Ingeniería en Informática', en: 'Computer Engineering' },
    image: '/joaquin.jpg',
    objectPosition: 'center',
  },
]

export default function About({ lang }: Props) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <p className="text-sm uppercase tracking-[0.24em] text-white/45">
          {lang === 'es' ? 'Equipo' : 'Team'}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {lang === 'es' ? 'Las personas detrás de Polaris.' : 'The people behind Polaris.'}
        </h2>
      </div>

      <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-8">
        {team.map((member) => (
          <div key={member.name} className="animate-on-scroll">
            <div className="flex flex-col items-center text-center rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-14 py-10 gap-6 transition-all duration-300 hover:scale-[1.06] hover:border-white/20 hover:bg-white/[0.06]">
              <img
                src={member.image}
                alt={member.name}
                className="h-32 w-32 rounded-full object-cover border border-white/10"
                style={{ objectPosition: member.objectPosition }}
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-white/50 mt-1">{member.role[lang]}</p>
                <p className="text-xs text-white/30 mt-1">{member.study[lang]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
