import { useState } from 'react'
import { useModalDialog } from '../hooks/useModalDialog'
import type { Lang } from '../i18n'
import { translations } from '../i18n'
import type { Project, ProjectMedia } from '../projects'
import Lightbox from './Lightbox'

interface Props {
  project: Project
  lang: Lang
  onClose: () => void
}

export default function ProjectModal({ project, lang, onClose }: Props) {
  const t = translations[lang].projects
  const copy = t.items[project.id]
  const dialogRef = useModalDialog({ lockScroll: true })
  const [enlarged, setEnlarged] = useState<number | null>(null)

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-modal-title"
      tabIndex={-1}
      onClose={onClose}
      onCancel={(e) => {
        // Esc with an enlarged image open closes just the image
        if (enlarged !== null) {
          e.preventDefault()
          setEnlarged(null)
        }
      }}
      onClick={(e) => {
        // Clicks on the backdrop target the <dialog> element itself
        if (e.target === e.currentTarget) onClose()
      }}
      className="project-dialog m-auto outline-none max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-900 p-0 text-white shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-4">
          <div>
            <h3 id="project-modal-title" className="text-xl font-semibold">
              {project.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/40">{copy.type}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="-mr-2 rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto">
          <div className="px-6 pt-6 sm:px-8 sm:pt-8">
            {copy.title && <h4 className="text-2xl font-semibold tracking-tight sm:text-3xl">{copy.title}</h4>}
            <div className={`space-y-4 text-sm leading-7 text-white/65 sm:text-base ${copy.title ? 'mt-4' : ''}`}>
              {(copy.details ?? [copy.description]).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-bg transition hover:scale-[1.02] motion-reduce:hover:scale-100"
              >
                {t.visitSite}
              </a>
            )}
          </div>

          {/*
            Justified collage: rows share a height and fill the full width, and each
            item keeps its own aspect ratio (flex-grow/basis proportional to it).
            max-width caps the row height at --row-max so a row with few items
            doesn't grow huge; such rows are centered instead.
          */}
          <div className="flex flex-wrap justify-center gap-3 px-6 pb-6 pt-6 [--row-h:140px] [--row-max:220px] sm:px-8 sm:pb-8 sm:[--row-h:270px] sm:[--row-max:340px]">
            {project.media.map((media, i) => {
              const ratio = media.width / media.height
              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl bg-black/40"
                  style={{
                    flexGrow: ratio,
                    flexBasis: `calc(${ratio} * var(--row-h))`,
                    maxWidth: `calc(${ratio} * var(--row-max))`,
                  }}
                >
                  {media.type === 'image' ? (
                    <button
                      type="button"
                      onClick={() => setEnlarged(i)}
                      aria-label={`${t.enlarge} ${i + 1}`}
                      className="group block w-full cursor-zoom-in overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60"
                    >
                      <MediaItem media={media} name={project.name} />
                    </button>
                  ) : (
                    <MediaItem media={media} name={project.name} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {enlarged !== null && (
        <Lightbox
          media={project.media}
          startIndex={enlarged}
          name={project.name}
          labels={{ close: t.close, previous: t.previous, next: t.next }}
          onClose={() => setEnlarged(null)}
        />
      )}
    </dialog>
  )
}

function MediaItem({ media, name }: { media: ProjectMedia; name: string }) {
  const style = { aspectRatio: `${media.width} / ${media.height}` }
  if (media.type === 'video') {
    return (
      <video
        src={media.src}
        poster={media.poster}
        controls
        playsInline
        preload="metadata"
        style={style}
        className="block w-full object-cover"
      />
    )
  }
  return (
    <img
      src={media.src}
      alt={media.alt ?? name}
      width={media.width}
      height={media.height}
      loading="lazy"
      style={style}
      className="block h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
    />
  )
}
