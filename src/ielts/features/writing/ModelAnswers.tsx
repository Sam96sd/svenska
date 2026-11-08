import { useState } from 'react'
import { type ModelAnswer, type WritingTask } from '../../content/schema'
import { formatBand } from '../../scoring'
import { BandBadge } from '../../components/ui'
import { Tabs } from '../shared/AiWidgets'

/** The same task answered at Band 6, 7 and 8–9, with notes on what lifts each level. */
export function ModelAnswers({ task }: { task: WritingTask }) {
  const [band, setBand] = useState<string>('8.5')
  if (task.models.length === 0)
    return (
      <p className="text-muted text-sm">
        This is an AI-generated task, so there are no model answers. The AI feedback includes a Band
        8–9 version of your own answer.
      </p>
    )
  return <ModelAnswersInner task={task} band={band} setBand={setBand} />
}

function ModelAnswersInner({
  task,
  band,
  setBand,
}: {
  task: WritingTask
  band: string
  setBand: (b: string) => void
}) {
  const model =
    task.models.find((m) => String(m.band) === band) ?? task.models[2] ?? task.models[0]!
  return (
    <div className="grid gap-4">
      <Tabs
        label="Model answer level"
        value={band}
        onChange={setBand}
        tabs={task.models.map((m) => ({
          value: String(m.band),
          label: m.band === 8.5 ? 'Band 8–9' : `Band ${m.band}`,
        }))}
      />
      <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <article className="border-line rounded-2xl border p-4">
          <div className="mb-3 flex items-center gap-3">
            <BandBadge band={model.band === 8.5 ? '8–9' : formatBand(model.band)} />
            <span className="text-muted text-sm">
              {model.text.trim().split(/\s+/).length} words
            </span>
          </div>
          <Annotated model={model} />
        </article>
        <aside aria-label="What this answer does">
          <h3 className="mb-2 font-semibold">Examiner notes</h3>
          <ol className="grid gap-2">
            {model.annotations.map((a, i) => (
              <li key={i} className="bg-surface-2 rounded-2xl p-3 text-sm">
                <span className="bg-accent text-on-accent mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                  {i + 1}
                </span>
                <q className="italic">{a.quote}</q>
                <p className="mt-1">{a.note}</p>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </div>
  )
}

/** The model text with each annotated quote marked and numbered. */
function Annotated({ model }: { model: ModelAnswer }) {
  const marks = model.annotations
    .map((a, i) => ({
      i,
      start: model.text.indexOf(a.quote),
      end: model.text.indexOf(a.quote) + a.quote.length,
    }))
    .filter((m) => m.start >= 0)
    .sort((a, b) => a.start - b.start)
  const parts: Array<{ text: string; n: number | null }> = []
  let pos = 0
  for (const m of marks) {
    if (m.start < pos) continue
    parts.push({ text: model.text.slice(pos, m.start), n: null })
    parts.push({ text: model.text.slice(m.start, m.end), n: m.i + 1 })
    pos = m.end
  }
  parts.push({ text: model.text.slice(pos), n: null })
  return (
    <p className="text-[15px] leading-7 whitespace-pre-wrap">
      {parts.map((p, i) =>
        p.n ? (
          <mark
            key={i}
            className="text-ink rounded-sm bg-[color-mix(in_srgb,var(--color-accent)_35%,transparent)]"
          >
            {p.text}
            <sup className="ml-0.5 font-bold">{p.n}</sup>
          </mark>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </p>
  )
}
