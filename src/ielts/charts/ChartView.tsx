import { ArrowDown, ArrowRight } from 'lucide-react'
import { type Chart, type SimpleChart } from '../content/schema'
import { DiagramView } from '../engine/questions/DiagramView'
import { chartAsText } from '../features/writing/taskInput'

/*
 * Academic Task 1 visuals drawn from JSON as SVG, in the plain style of the test paper.
 * Every chart also has its data in a visually hidden table for screen readers.
 */

/** Series colours: distinct in hue and lightness, readable in light and dark mode. */
const SERIES = ['#2c6fbb', '#d9822b', '#3f8f6b', '#b8476b', '#7a5bb5', '#7f8c99']
const DASH = [undefined, '6 4', '2 4', '10 4 2 4', undefined, '4 2']
const MARK = ['circle', 'square', 'triangle', 'diamond', 'circle', 'square'] as const

const W = 640
const H = 340
const PAD = { l: 56, r: 16, t: 16, b: 46 }

function niceMax(v: number): number {
  if (v <= 0) return 1
  const p = 10 ** Math.floor(Math.log10(v))
  const steps = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]
  return (steps.find((s) => s * p >= v) ?? 10) * p
}

function Axes({
  max,
  unit,
  yLabel,
  labels,
  band,
}: {
  max: number
  unit: string
  yLabel: string
  labels: string[]
  band: boolean
}) {
  const ticks = 5
  const plotW = W - PAD.l - PAD.r
  const plotH = H - PAD.t - PAD.b
  const x = (i: number) =>
    PAD.l +
    (band ? (plotW / labels.length) * (i + 0.5) : (plotW / Math.max(1, labels.length - 1)) * i)
  return (
    <g fontSize={12} fill="var(--color-ink)">
      {Array.from({ length: ticks + 1 }, (_, i) => {
        const v = (max / ticks) * i
        const y = PAD.t + plotH - (plotH / ticks) * i
        return (
          <g key={i}>
            <line x1={PAD.l} x2={W - PAD.r} y1={y} y2={y} stroke="var(--color-line)" />
            <text x={PAD.l - 6} y={y + 4} textAnchor="end">
              {Number.isInteger(v) ? v : v.toFixed(1)}
              {unit === '%' ? '%' : ''}
            </text>
          </g>
        )
      })}
      <line x1={PAD.l} x2={PAD.l} y1={PAD.t} y2={PAD.t + plotH} stroke="var(--color-ink)" />
      <line
        x1={PAD.l}
        x2={W - PAD.r}
        y1={PAD.t + plotH}
        y2={PAD.t + plotH}
        stroke="var(--color-ink)"
      />
      {labels.map((l, i) => (
        <text key={l + i} x={x(i)} y={H - PAD.b + 18} textAnchor="middle">
          {l}
        </text>
      ))}
      <text
        x={14}
        y={PAD.t + plotH / 2}
        transform={`rotate(-90 14 ${PAD.t + plotH / 2})`}
        textAnchor="middle"
        fontSize={12}
      >
        {yLabel}
      </text>
    </g>
  )
}

function Marker({
  kind,
  x,
  y,
  color,
}: {
  kind: (typeof MARK)[number]
  x: number
  y: number
  color: string
}) {
  if (kind === 'square') return <rect x={x - 4} y={y - 4} width={8} height={8} fill={color} />
  if (kind === 'triangle')
    return <path d={`M${x},${y - 5} L${x + 5},${y + 4} L${x - 5},${y + 4} z`} fill={color} />
  if (kind === 'diamond')
    return <path d={`M${x},${y - 5} L${x + 5},${y} L${x},${y + 5} L${x - 5},${y} z`} fill={color} />
  return <circle cx={x} cy={y} r={4} fill={color} />
}

function Legend({ names }: { names: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm" aria-hidden="true">
      {names.map((n, i) => (
        <li key={n} className="flex items-center gap-1.5">
          <svg width="26" height="10">
            <line
              x1="0"
              x2="26"
              y1="5"
              y2="5"
              stroke={SERIES[i % SERIES.length]}
              strokeWidth="3"
              strokeDasharray={DASH[i % DASH.length]}
            />
          </svg>
          {n}
        </li>
      ))}
    </ul>
  )
}

function LineChart({ c }: { c: Extract<SimpleChart, { kind: 'line' }> }) {
  const max = niceMax(Math.max(...c.series.flatMap((s) => s.values)))
  const plotW = W - PAD.l - PAD.r
  const plotH = H - PAD.t - PAD.b
  const x = (i: number) => PAD.l + (plotW / Math.max(1, c.xLabels.length - 1)) * i
  const y = (v: number) => PAD.t + plotH - (v / max) * plotH
  return (
    <>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden="true">
        <Axes max={max} unit={c.unit} yLabel={c.yLabel} labels={c.xLabels} band={false} />
        {c.series.map((s, si) => {
          const color = SERIES[si % SERIES.length]!
          return (
            <g key={s.name}>
              <polyline
                fill="none"
                stroke={color}
                strokeWidth={2.5}
                strokeDasharray={DASH[si % DASH.length]}
                points={s.values.map((v, i) => `${x(i)},${y(v)}`).join(' ')}
              />
              {s.values.map((v, i) => (
                <Marker key={i} kind={MARK[si % MARK.length]!} x={x(i)} y={y(v)} color={color} />
              ))}
            </g>
          )
        })}
      </svg>
      <Legend names={c.series.map((s) => s.name)} />
    </>
  )
}

function BarChart({ c }: { c: Extract<SimpleChart, { kind: 'bar' }> }) {
  const max = niceMax(Math.max(...c.series.flatMap((s) => s.values)))
  const plotW = W - PAD.l - PAD.r
  const plotH = H - PAD.t - PAD.b
  const groupW = plotW / c.categories.length
  const barW = Math.min(36, (groupW * 0.8) / c.series.length)
  return (
    <>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden="true">
        <Axes max={max} unit={c.unit} yLabel={c.yLabel} labels={c.categories} band />
        {c.categories.map((_, ci) =>
          c.series.map((s, si) => {
            const v = s.values[ci] ?? 0
            const h = (v / max) * plotH
            const x0 = PAD.l + groupW * ci + (groupW - barW * c.series.length) / 2 + barW * si
            return (
              <rect
                key={`${ci}-${si}`}
                x={x0}
                y={PAD.t + plotH - h}
                width={barW - 2}
                height={h}
                fill={SERIES[si % SERIES.length]}
                opacity={si % 2 ? 0.85 : 1}
              />
            )
          }),
        )}
      </svg>
      {c.series.length > 1 && <Legend names={c.series.map((s) => s.name)} />}
    </>
  )
}

function PieCharts({ c }: { c: Extract<SimpleChart, { kind: 'pie' }> }) {
  const names = [...new Set(c.pies.flatMap((p) => p.slices.map((s) => s.name)))]
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6" aria-hidden="true">
        {c.pies.map((p) => {
          const total = p.slices.reduce((a, s) => a + s.value, 0) || 1
          let angle = -Math.PI / 2
          return (
            <figure key={p.label} className="grid justify-items-center gap-1">
              <svg viewBox="-110 -110 220 220" width="220" height="220">
                {p.slices.map((s) => {
                  const a0 = angle
                  const a1 = angle + (s.value / total) * Math.PI * 2
                  angle = a1
                  const large = a1 - a0 > Math.PI ? 1 : 0
                  const mid = (a0 + a1) / 2
                  const color = SERIES[names.indexOf(s.name) % SERIES.length]
                  return (
                    <g key={s.name}>
                      <path
                        d={`M0,0 L${100 * Math.cos(a0)},${100 * Math.sin(a0)} A100,100 0 ${large} 1 ${100 * Math.cos(a1)},${100 * Math.sin(a1)} z`}
                        fill={color}
                        stroke="var(--color-surface)"
                        strokeWidth={2}
                      />
                      {s.value >= 6 && (
                        <text
                          x={62 * Math.cos(mid)}
                          y={62 * Math.sin(mid) + 4}
                          textAnchor="middle"
                          fontSize={13}
                          fontWeight={700}
                          fill="#fff"
                          stroke="rgb(0 0 0 / 0.55)"
                          strokeWidth={3}
                          paintOrder="stroke"
                        >
                          {s.value}%
                        </text>
                      )}
                    </g>
                  )
                })}
              </svg>
              <figcaption className="text-sm font-semibold">{p.label}</figcaption>
            </figure>
          )
        })}
      </div>
      <ul className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm" aria-hidden="true">
        {names.map((n, i) => (
          <li key={n} className="flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-sm"
              style={{ background: SERIES[i % SERIES.length] }}
            />
            {n}
          </li>
        ))}
      </ul>
    </>
  )
}

function TableChart({ c }: { c: Extract<SimpleChart, { kind: 'table' }> }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[28rem] border-collapse text-sm">
        <thead>
          <tr>
            {c.columns.map((h) => (
              <th
                key={h}
                scope="col"
                className="border-line bg-surface-2 border p-2 text-left font-semibold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {c.rows.map((r) => (
            <tr key={r.label}>
              <th scope="row" className="border-line border p-2 text-left font-semibold">
                {r.label}
              </th>
              {r.values.map((v, i) => (
                <td key={i} className="border-line border p-2 tabular-nums">
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ProcessChart({ c }: { c: Extract<SimpleChart, { kind: 'process' }> }) {
  return (
    <ol className="grid gap-2 sm:grid-cols-[repeat(auto-fit,minmax(9rem,1fr))]">
      {c.steps.map((s, i) => (
        <li key={i} className="flex items-center gap-2 sm:flex-col sm:items-stretch">
          <div className="border-line bg-surface flex-1 rounded-xl border p-3 text-center text-sm">
            <span className="text-muted block text-xs font-semibold">Stage {i + 1}</span>
            <span className="font-semibold">{s.label}</span>
            {s.detail && <span className="text-muted block text-xs">{s.detail}</span>}
          </div>
          {(i < c.steps.length - 1 || c.cycle) && (
            <span className="text-muted flex justify-center" aria-hidden="true">
              <ArrowRight size={18} className="hidden sm:block" />
              <ArrowDown size={18} className="sm:hidden" />
            </span>
          )}
        </li>
      ))}
      {c.cycle && (
        <li className="text-muted text-center text-xs sm:col-span-full">
          ↺ The cycle then begins again.
        </li>
      )}
    </ol>
  )
}

function Simple({ c }: { c: SimpleChart }) {
  switch (c.kind) {
    case 'line':
      return <LineChart c={c} />
    case 'bar':
      return <BarChart c={c} />
    case 'pie':
      return <PieCharts c={c} />
    case 'table':
      return <TableChart c={c} />
    case 'process':
      return <ProcessChart c={c} />
    case 'map':
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {c.maps.map((m) => (
            <div key={m.label}>
              <p className="mb-1 text-center text-sm font-semibold">{m.label}</p>
              <DiagramView diagram={m.diagram} />
            </div>
          ))}
        </div>
      )
  }
}

export default function ChartView({ chart }: { chart: Chart }) {
  const charts = chart.kind === 'mixed' ? chart.charts : [chart]
  return (
    <figure className="bg-surface border-line rounded-2xl border p-3">
      <figcaption className="mb-2 text-center text-sm font-semibold">{chart.title}</figcaption>
      <div className="grid gap-6">
        {charts.map((c, i) => (
          <div key={i}>
            {chart.kind === 'mixed' && (
              <p className="mb-1 text-center text-sm font-semibold">{c.title}</p>
            )}
            <Simple c={c} />
          </div>
        ))}
      </div>
      <pre className="sr-only">{chartAsText(chart)}</pre>
    </figure>
  )
}
