import { formatBand } from '../../scoring'

/*
 * Small accessible SVG charts for the progress dashboard (no chart library).
 * Each chart has a text summary for screen readers.
 */

const COLORS = ['#2c6fbb', '#d9822b', '#3f8f6b', '#b8476b', '#7a5bb5']

export interface Series {
  name: string
  points: Array<{ at: number; band: number }>
}

export function TrendChart({
  series,
  target,
  label,
  min = 4,
  max = 9,
}: {
  series: Series[]
  target?: number
  label: string
  min?: number
  max?: number
}) {
  const all = series.flatMap((s) => s.points)
  if (all.length === 0) return <p className="text-muted text-sm">No results yet.</p>
  const W = 560
  const H = 200
  const P = { l: 32, r: 12, t: 10, b: 24 }
  const t0 = Math.min(...all.map((p) => p.at))
  const t1 = Math.max(...all.map((p) => p.at))
  const x = (t: number) =>
    P.l + (t1 === t0 ? (W - P.l - P.r) / 2 : ((t - t0) / (t1 - t0)) * (W - P.l - P.r))
  const y = (b: number) => P.t + (1 - (b - min) / (max - min)) * (H - P.t - P.b)
  const summary = series
    .filter((s) => s.points.length)
    .map((s) => `${s.name}: ${s.points.map((p) => formatBand(p.band)).join(', ')}`)
    .join('. ')
  return (
    <figure>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label={`${label}. ${summary}`}
      >
        {Array.from({ length: max - min + 1 }, (_, i) => min + i).map((b) => (
          <g key={b}>
            <line x1={P.l} x2={W - P.r} y1={y(b)} y2={y(b)} stroke="var(--color-line)" />
            <text x={P.l - 6} y={y(b) + 4} textAnchor="end" fontSize={11} fill="var(--color-muted)">
              {b}
            </text>
          </g>
        ))}
        {target !== undefined && (
          <g>
            <line
              x1={P.l}
              x2={W - P.r}
              y1={y(target)}
              y2={y(target)}
              stroke="var(--color-success)"
              strokeDasharray="6 4"
              strokeWidth={1.5}
            />
            <text
              x={W - P.r}
              y={y(target) - 4}
              textAnchor="end"
              fontSize={11}
              fill="var(--color-success)"
            >
              target {formatBand(target)}
            </text>
          </g>
        )}
        {series.map((s, i) => {
          const c = COLORS[i % COLORS.length]
          if (s.points.length === 0) return null
          return (
            <g key={s.name}>
              <polyline
                fill="none"
                stroke={c}
                strokeWidth={2.5}
                points={s.points.map((p) => `${x(p.at)},${y(p.band)}`).join(' ')}
              />
              {s.points.map((p, j) => (
                <circle key={j} cx={x(p.at)} cy={y(p.band)} r={3.5} fill={c} />
              ))}
            </g>
          )
        })}
        <text x={P.l} y={H - 6} fontSize={11} fill="var(--color-muted)">
          {new Date(t0).toLocaleDateString()}
        </text>
        <text x={W - P.r} y={H - 6} fontSize={11} textAnchor="end" fill="var(--color-muted)">
          {new Date(t1).toLocaleDateString()}
        </text>
      </svg>
      {series.length > 1 && (
        <figcaption className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm" aria-hidden="true">
          {series.map((s, i) => (
            <span key={s.name} className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: COLORS[i % COLORS.length] }}
              />
              {s.name}
            </span>
          ))}
        </figcaption>
      )}
    </figure>
  )
}

/** Horizontal bars, 0–100%. */
export function PercentBars({
  rows,
}: {
  rows: Array<{ label: string; value: number; note?: string }>
}) {
  return (
    <ul className="grid gap-2">
      {rows.map((r) => {
        const pct = Math.round(r.value * 100)
        return (
          <li key={r.label} className="grid gap-1">
            <div className="flex justify-between gap-3 text-sm">
              <span>{r.label}</span>
              <span className="font-semibold tabular-nums">
                {pct}%{r.note ? <span className="text-muted font-normal"> · {r.note}</span> : null}
              </span>
            </div>
            <div
              className="bg-surface-2 h-2.5 overflow-hidden rounded-full"
              role="progressbar"
              aria-label={r.label}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={pct}
            >
              <div
                className={
                  pct >= 85
                    ? 'bg-success h-full'
                    : pct >= 70
                      ? 'bg-primary h-full'
                      : 'bg-accent h-full'
                }
                style={{ width: `${pct}%` }}
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
