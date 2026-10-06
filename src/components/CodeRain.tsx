const RAIN_CHARS = '01{}<>/;=()[]#$%&*+ｱｲｳｴｵｶｷｸｹｺ'

const RAIN_COLUMNS = Array.from({ length: 28 }, (_, i) => ({
  left: `${(i / 28) * 100 + 1}%`,
  duration: `${7 + ((i * 37) % 9)}s`,
  delay: `${-((i * 53) % 14)}s`,
  text: Array.from({ length: 36 }, (_, j) => RAIN_CHARS[(i * 7 + j * 13) % RAIN_CHARS.length]).join('\n'),
}))

export default function CodeRain() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.14] motion-reduce:hidden">
        {RAIN_COLUMNS.map((col, i) => (
          <div key={i} className="absolute top-0 h-full overflow-hidden" style={{ left: col.left }}>
            <pre
              className="rain-col whitespace-pre font-mono text-[11px] leading-4 text-cyan-300"
              style={{ animationDuration: col.duration, animationDelay: col.delay }}
            >
              {col.text}
            </pre>
          </div>
        ))}
      </div>
      <div className="scanlines absolute inset-0 opacity-25" />
    </div>
  )
}
