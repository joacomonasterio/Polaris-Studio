type Lang = 'es' | 'en'

interface Props {
  lang: Lang
}

export default function Projects({ lang }: Props) {
  const projects = [
    {
      name: 'FitTrack',
      type: 'App · Fitness & Training',
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
            className="animate-on-scroll grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 py-10 last:border-b items-center group hover:bg-white/[0.02] rounded-2xl px-4 transition"
          >
            <div className="flex justify-center">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full max-h-[500px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="h-96 w-40 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/20 text-sm">
                  {lang === 'es' ? 'Sin imagen' : 'No image'}
                </div>
              )}
            </div>
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
  )
}
