import { useEffect, useRef, useState } from 'react'
import type { ProjectMedia } from '../projects'

interface Props {
  media: ProjectMedia[]
  startIndex: number
  name: string
  labels: { close: string; previous: string; next: string }
  onClose: () => void
}

const SWIPE_THRESHOLD = 50

/** Enlarged media viewer that covers the project modal it's rendered in. */
export default function Lightbox({ media, startIndex, name, labels, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const [index, setIndex] = useState(startIndex)
  // Captured on first render so focus can go back to the thumbnail that opened it
  const [opener] = useState(() => document.activeElement as HTMLElement | null)

  const count = media.length
  const current = media[index]
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count)

  useEffect(() => {
    panelRef.current?.focus()
    return () => opener?.focus({ preventScroll: true })
  }, [opener])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      // Close only the viewer, not the whole project modal
      e.preventDefault()
      e.stopPropagation()
      onClose()
      return
    }
    // Let arrow keys seek inside a focused video instead of changing items
    if (count < 2 || e.target instanceof HTMLVideoElement) return
    if (e.key === 'ArrowRight') go(1)
    if (e.key === 'ArrowLeft') go(-1)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || count < 2) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(dx) > SWIPE_THRESHOLD) go(dx < 0 ? 1 : -1)
  }

  return (
    <div
      ref={panelRef}
      role="group"
      aria-label={name}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      className="lightbox-panel absolute inset-0 z-10 bg-neutral-950/95 outline-none"
    >
      <div
        className="flex h-full w-full items-center justify-center p-4 sm:p-14"
        onClick={(e) => {
          // Clicking the empty area around the media closes the viewer
          if (e.target === e.currentTarget) onClose()
        }}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={handleTouchEnd}
      >
        {current.type === 'video' ? (
          <video
            key={index}
            src={current.src}
            poster={current.poster}
            controls
            playsInline
            autoPlay
            className="max-h-full max-w-full rounded-xl"
          />
        ) : (
          <img
            key={index}
            src={current.src}
            alt={current.alt ?? name}
            className="max-h-full max-w-full rounded-xl object-contain"
          />
        )}
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label={labels.close}
        className="absolute right-3 top-3 rounded-full bg-black/50 p-2.5 text-white/80 transition hover:bg-black/70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {count > 1 && (
        <>
          <ArrowButton direction="left" label={labels.previous} onClick={() => go(-1)} />
          <ArrowButton direction="right" label={labels.next} onClick={() => go(1)} />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white/80">
            {index + 1} / {count}
          </span>
        </>
      )}
    </div>
  )
}

function ArrowButton({ direction, label, onClick }: { direction: 'left' | 'right'; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === 'left' ? 'left-3' : 'right-3'
      } rounded-full bg-black/50 p-3 text-white/80 transition hover:bg-black/70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60`}
    >
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
        <path
          d={direction === 'left' ? 'M11 4L6 9l5 5' : 'M7 4l5 5-5 5'}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
