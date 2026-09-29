import { useState } from 'react'
import type { Lang } from '../i18n'
import { translations } from '../i18n'
import { projects, type Project } from '../projects'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'

interface Props {
  lang: Lang
}

export default function Projects({ lang }: Props) {
  const t = translations[lang].projects
  const [openProject, setOpenProject] = useState<Project | null>(null)

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.24em] text-white/45">{t.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.heading}</h2>
      </div>
      <div className="flex flex-col border-b border-white/10">
        {projects.map((project, i) => (
          <Reveal key={project.id}>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 py-10 items-center group hover:bg-white/[0.02] rounded-2xl px-4 transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-white/60">
              <div className="flex items-center justify-center md:h-[440px]">
                <img
                  src={project.cover.src}
                  alt={project.name}
                  width={project.cover.width}
                  height={project.cover.height}
                  loading="lazy"
                  style={{ maxHeight: project.cover.maxHeight }}
                  className="w-full max-h-[440px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs text-white/30 tracking-widest uppercase">0{i + 1}</span>
                <h3 className="text-4xl font-semibold text-white group-hover:text-fuchsia-400 transition leading-tight">
                  {/* The ::after overlay makes the whole row clickable */}
                  <button
                    type="button"
                    onClick={() => setOpenProject(project)}
                    className="text-left focus:outline-none after:absolute after:inset-0 after:rounded-2xl after:content-['']"
                  >
                    {project.name}
                  </button>
                </h3>
                <span className="text-xs text-white/40 uppercase tracking-widest">{t.items[project.id].type}</span>
                <p className="text-sm text-white/60 leading-relaxed mt-2">{t.items[project.id].description}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm text-white/50 group-hover:text-white transition">
                  {t.viewProject}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {openProject && (
        <ProjectModal
          key={openProject.id}
          project={openProject}
          lang={lang}
          onClose={() => setOpenProject(null)}
        />
      )}
    </section>
  )
}
