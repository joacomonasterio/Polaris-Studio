# Polaris Studio

Landing page de Polaris Studio — agencia de diseño UX/UI y desarrollo web.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estructura

- `src/i18n.ts` — diccionario de textos ES/EN.
- `src/hooks/useLang.ts` — estado de idioma (persistido en `localStorage`, con fallback a `navigator.language`).
- `src/components/Reveal.tsx` — animación de aparición al hacer scroll (respeta `prefers-reduced-motion`).
- `src/components/` — secciones de la landing (Header, Hero, Services, Process, About, Projects, Contact, Footer).
