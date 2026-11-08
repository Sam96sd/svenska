import { type Diagram } from '../../content/schema'

const FILL = {
  plain: 'var(--color-surface)',
  soft: 'var(--color-surface-2)',
  water: 'color-mix(in srgb, var(--color-primary) 22%, var(--color-surface))',
  green: 'color-mix(in srgb, var(--color-success) 22%, var(--color-surface))',
}

/** Maps, plans and labelling diagrams, drawn from data so they work in light and dark mode. */
export function DiagramView({
  diagram,
  answered = {},
}: {
  diagram: Diagram
  answered?: Record<number, string>
}) {
  const { width, height } = diagram
  return (
    <figure className="bg-surface-2 border-line overflow-hidden rounded-2xl border p-2">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={diagram.description}
        className="h-auto w-full"
        style={{ maxHeight: 420 }}
      >
        <defs>
          <marker
            id="ielts-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="var(--color-ink)" />
          </marker>
        </defs>
        {diagram.items.map((it, i) => {
          switch (it.shape) {
            case 'rect':
              return (
                <g key={i}>
                  <rect
                    x={it.x}
                    y={it.y}
                    width={it.w}
                    height={it.h}
                    rx={6}
                    fill={FILL[it.tone]}
                    stroke="var(--color-muted)"
                    strokeWidth={1.2}
                  />
                  {it.label && (
                    <text
                      x={it.x + it.w / 2}
                      y={it.y + it.h / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={12}
                      fill="var(--color-ink)"
                    >
                      {it.label}
                    </text>
                  )}
                </g>
              )
            case 'circle':
              return (
                <g key={i}>
                  <circle
                    cx={it.cx}
                    cy={it.cy}
                    r={it.r}
                    fill={FILL[it.tone]}
                    stroke="var(--color-muted)"
                    strokeWidth={1.2}
                  />
                  {it.label && (
                    <text
                      x={it.cx}
                      y={it.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={12}
                      fill="var(--color-ink)"
                    >
                      {it.label}
                    </text>
                  )}
                </g>
              )
            case 'line':
              return (
                <line
                  key={i}
                  x1={it.x1}
                  y1={it.y1}
                  x2={it.x2}
                  y2={it.y2}
                  stroke="var(--color-ink)"
                  strokeWidth={1.5}
                  strokeDasharray={it.dashed ? '5 4' : undefined}
                  markerEnd={it.arrow ? 'url(#ielts-arrow)' : undefined}
                />
              )
            case 'path':
              return (
                <path
                  key={i}
                  d={it.d}
                  fill="none"
                  stroke={
                    it.tone === 'water'
                      ? 'color-mix(in srgb, var(--color-primary) 55%, transparent)'
                      : it.tone === 'road'
                        ? 'var(--color-line)'
                        : 'var(--color-ink)'
                  }
                  strokeWidth={it.tone === 'road' ? 14 : it.tone === 'water' ? 10 : 1.5}
                  strokeLinecap="round"
                />
              )
            case 'text':
              return (
                <text
                  key={i}
                  x={it.x}
                  y={it.y}
                  textAnchor={it.anchor}
                  fontSize={it.size}
                  fill="var(--color-ink)"
                >
                  {it.text}
                </text>
              )
            case 'marker':
              return (
                <g key={i}>
                  <circle cx={it.x} cy={it.y} r={12} fill="var(--color-ink)" />
                  <text
                    x={it.x}
                    y={it.y + 0.5}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={13}
                    fontWeight={700}
                    fill="var(--color-bg)"
                  >
                    {it.letter}
                  </text>
                </g>
              )
            case 'gap': {
              const value = answered[it.n]
              return (
                <g key={i}>
                  <rect
                    x={it.x - 46}
                    y={it.y - 13}
                    width={92}
                    height={26}
                    rx={6}
                    fill="var(--color-bg)"
                    stroke="var(--color-primary)"
                    strokeWidth={1.5}
                  />
                  <text
                    x={it.x}
                    y={it.y + 0.5}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={12}
                    fontWeight={700}
                    fill="var(--color-ink)"
                  >
                    {value
                      ? `${it.n}. ${value.length > 11 ? `${value.slice(0, 10)}…` : value}`
                      : it.n}
                  </text>
                </g>
              )
            }
          }
        })}
        {diagram.north && (
          <g transform={`translate(${width - 28}, 30)`} aria-hidden="true">
            <line
              x1={0}
              y1={14}
              x2={0}
              y2={-12}
              stroke="var(--color-ink)"
              strokeWidth={2}
              markerEnd="url(#ielts-arrow)"
            />
            <text
              x={0}
              y={28}
              textAnchor="middle"
              fontSize={12}
              fontWeight={700}
              fill="var(--color-ink)"
            >
              N
            </text>
          </g>
        )}
      </svg>
      <figcaption className="sr-only">{diagram.description}</figcaption>
    </figure>
  )
}
