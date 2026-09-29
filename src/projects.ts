import type { translations } from './i18n'

// Texts (type + description, ES/EN) live in i18n.ts under projects.items[id]
export type ProjectId = keyof (typeof translations)['es']['projects']['items']

// width/height are the file's pixel size: the modal collage uses them to keep each item's shape
export type ProjectMedia =
  | { type: 'image'; src: string; width: number; height: number; alt?: string }
  | { type: 'video'; src: string; width: number; height: number; poster?: string }

export interface Project {
  id: ProjectId
  name: string
  /** Image shown in the projects list; maxHeight (px) shrinks it below the default 440px */
  cover: { src: string; width: number; height: number; maxHeight?: number }
  /** Images and videos shown in the modal gallery, in order */
  media: ProjectMedia[]
  /** Optional link to the live site / store / case study */
  url?: string
}

export const projects: Project[] = [
  {
    id: 'inne',
    name: 'Inné Patisserie',
    cover: { src: '/inne.webp', width: 483, height: 940 },
    media: [
      { type: 'image', src: '/inne.webp', width: 483, height: 940 },
      { type: 'image', src: '/inne-2.webp', width: 1362, height: 1362 },
      { type: 'image', src: '/inne-3.webp', width: 1486, height: 1490 },
      { type: 'image', src: '/inne-4.webp', width: 1512, height: 1513, alt: 'Logo de Inné' },
    ],
  },
  {
    id: 'apulmon',
    name: 'A pulmón',
    cover: { src: '/apulmon.webp', width: 767, height: 855, maxHeight: 320 },
    media: [
      { type: 'image', src: '/apulmon.webp', width: 767, height: 855, alt: 'Logo de A pulmón' },
      { type: 'video', src: '/apulmon-video.mp4', width: 720, height: 1560, poster: '/apulmon-video-poster.webp' },
      { type: 'image', src: '/apulmon-manual-portada.webp', width: 1600, height: 901, alt: 'Manual de marca de A pulmón: portada' },
      { type: 'image', src: '/apulmon-manual-historia.webp', width: 1600, height: 869, alt: 'Manual de marca de A pulmón: historia de marca' },
      { type: 'image', src: '/apulmon-manual-logo.webp', width: 1600, height: 894, alt: 'Manual de marca de A pulmón: logo principal' },
      { type: 'image', src: '/apulmon-manual-color.webp', width: 1600, height: 900, alt: 'Manual de marca de A pulmón: color' },
      { type: 'image', src: '/apulmon-manual-tipografia.webp', width: 1600, height: 894, alt: 'Manual de marca de A pulmón: tipografía' },
      { type: 'image', src: '/apulmon-manual-voz.webp', width: 1600, height: 893, alt: 'Manual de marca de A pulmón: voz y tono' },
    ],
  },
  {
    id: 'telriv',
    name: 'Telriv',
    cover: { src: '/telriv.webp', width: 975, height: 567, maxHeight: 260 },
    media: [
      { type: 'image', src: '/telriv.webp', width: 975, height: 567, alt: 'Sistema de Telriv: dashboard' },
      { type: 'video', src: '/telriv-video.mp4', width: 704, height: 480, poster: '/telriv-video-poster.webp' },
    ],
  },
  {
    id: 'zenia',
    name: 'Zenia Imports',
    cover: { src: '/zenia.webp', width: 483, height: 939 },
    media: [
      { type: 'image', src: '/zenia.webp', width: 483, height: 939, alt: 'Zenia Imports: inicio' },
      { type: 'image', src: '/zenia-2.webp', width: 483, height: 939, alt: 'Zenia Imports: catálogo' },
      { type: 'image', src: '/zenia-3.webp', width: 490, height: 953, alt: 'Zenia Imports: dónde encontrarnos' },
    ],
  },
]
