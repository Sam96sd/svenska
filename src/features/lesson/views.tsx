import { Eye, EyeOff, Lightbulb, Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { RichText } from '../../components/RichText'
import { SpeakButtons } from '../../components/Speak'
import { cx } from '../../components/styles'
import { Button } from '../../components/ui'
import { formsLine, POS_LABEL, svDisplay } from '../../content/display'
import { type Dialogue, type Section, type Vocab } from '../../content/schema'
import { speakSequence } from '../../lib/audio'

export function SectionView({
  section,
  tone = 'plain',
}: {
  section: Section
  tone?: 'plain' | 'culture'
}) {
  const svCols = new Set(section.table?.svColumns ?? [])
  return (
    <section
      className={cx(
        'rounded-card p-5 sm:p-6',
        tone === 'culture' ? 'bg-accent-soft' : 'bg-surface border-line border',
      )}
    >
      {section.title && (
        <h3 className="mb-3 text-lg font-semibold">
          {tone === 'culture' && <span aria-hidden="true">🇸🇪 </span>}
          {section.title}
        </h3>
      )}
      {section.text && <RichText text={section.text} className="text-[17px]" />}

      {section.examples && (
        <ul className="mt-4 grid gap-2">
          {section.examples.map((ex, i) => (
            <li key={i} className="bg-bg flex items-center gap-3 rounded-2xl p-3">
              <SpeakButtons text={ex.sv} size="sm" />
              <div className="min-w-0">
                <p lang="sv" className="text-lg font-semibold">
                  {ex.sv}
                </p>
                <p className="text-muted text-sm">
                  {ex.en}
                  {ex.note && <span className="text-primary"> · {ex.note}</span>}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-left text-[15px]">
            {section.table.caption && (
              <caption className="text-muted mb-2 text-left text-sm">
                {section.table.caption}
              </caption>
            )}
            <thead>
              <tr>
                {section.table.headers.map((h, i) => (
                  <th key={i} className="border-line text-muted border-b px-3 py-2 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, r) => (
                <tr key={r} className="border-line border-b last:border-0">
                  {row.map((cell, c) => (
                    <td key={c} className="px-3 py-2 align-middle">
                      {svCols.has(c) && cell ? (
                        <span className="flex items-center gap-2">
                          <SpeakButtons text={cell} size="sm" slow={false} />
                          <span lang="sv" className="font-semibold">
                            {cell}
                          </span>
                        </span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.tip && (
        <div className="bg-primary-soft mt-4 flex gap-3 rounded-2xl p-4">
          <Lightbulb className="text-primary mt-0.5 shrink-0" size={20} aria-hidden="true" />
          <RichText text={section.tip} className="text-[15px]" />
        </div>
      )}
    </section>
  )
}

export function GenderBadge({ gender }: { gender: 'en' | 'ett' }) {
  return (
    <span
      className={cx(
        'rounded-full px-2 py-0.5 text-xs font-bold',
        gender === 'en' ? 'bg-primary-soft text-primary' : 'bg-accent-soft text-accent-ink',
      )}
    >
      {gender}-word
    </span>
  )
}

export function WordCard({ word, showPron = true }: { word: Vocab; showPron?: boolean }) {
  const forms = formsLine(word)
  const display = svDisplay(word)
  return (
    <article className="bg-surface border-line rounded-card flex gap-4 border p-4">
      <SpeakButtons text={display} size="md" className="flex-col self-start" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 lang="sv" className="text-xl font-semibold">
            {display}
          </h3>
          {word.gender ? (
            <GenderBadge gender={word.gender} />
          ) : (
            <span className="text-muted text-xs font-medium">{POS_LABEL[word.pos]}</span>
          )}
        </div>
        <p className="mt-0.5 text-[16px]">{word.en}</p>
        {showPron && word.pron && (
          <p className="text-muted mt-1 text-sm">
            Sounds like: <span className="text-ink font-medium italic">{word.pron}</span>
          </p>
        )}
        {forms && (
          <p lang="sv" className="text-muted mt-1 text-sm">
            {forms}
          </p>
        )}
        {word.note && <p className="text-muted mt-1 text-sm">{word.note}</p>}
      </div>
    </article>
  )
}

const PITCHES = [1, 1.25, 0.85, 1.1]

export function DialogueView({ dialogue }: { dialogue: Dialogue }) {
  const [showEn, setShowEn] = useState(false)
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const [current, setCurrent] = useState(-1)
  const stopRef = useRef<(() => void) | null>(null)
  const speakers = [...new Set(dialogue.lines.map((l) => l.speaker))]

  useEffect(() => () => stopRef.current?.(), [])

  const playAll = () => {
    if (current >= 0) {
      stopRef.current?.()
      stopRef.current = null
      return
    }
    stopRef.current = speakSequence(
      dialogue.lines.map((l) => ({
        text: l.sv,
        pitch: PITCHES[speakers.indexOf(l.speaker) % PITCHES.length],
      })),
      setCurrent,
    )
  }

  return (
    <div>
      {dialogue.setting && <p className="text-muted mb-4">{dialogue.setting}</p>}
      <div className="mb-5 flex flex-wrap gap-2">
        <Button variant="primary" size="sm" onClick={playAll}>
          {current >= 0 ? <Pause size={16} /> : <Play size={16} />}
          {current >= 0 ? 'Stop' : 'Play dialogue'}
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setShowEn((v) => !v)}
          aria-pressed={showEn}
        >
          {showEn ? <EyeOff size={16} /> : <Eye size={16} />}
          {showEn ? 'Hide translation' : 'Show translation'}
        </Button>
      </div>
      <ol className="grid grid-cols-1 gap-3">
        {dialogue.lines.map((line, i) => {
          const side = speakers.indexOf(line.speaker) % 2
          const en = showEn || revealed.has(i)
          return (
            <li key={i} className={cx('flex items-end gap-2', side === 1 && 'flex-row-reverse')}>
              <SpeakButtons
                text={line.sv}
                size="sm"
                slow
                className={side === 1 ? 'flex-row-reverse' : ''}
              />
              <button
                type="button"
                onClick={() => setRevealed((r) => new Set(r).add(i))}
                className={cx(
                  'max-w-[80%] rounded-2xl px-4 py-2.5 text-left transition-shadow',
                  side === 0 ? 'bg-surface-2 rounded-bl-sm' : 'bg-primary-soft rounded-br-sm',
                  current === i && 'ring-primary ring-2',
                )}
                aria-label={`${line.speaker}: ${line.sv}. Tap to show translation.`}
              >
                <span className="text-muted block text-xs font-semibold">{line.speaker}</span>
                <span lang="sv" className="block text-lg font-medium">
                  {line.sv}
                </span>
                {en && <span className="text-muted block text-sm">{line.en}</span>}
              </button>
            </li>
          )
        })}
      </ol>
      <p className="text-muted mt-4 text-sm">Tap a line to see its translation.</p>
    </div>
  )
}

const CONFETTI_COLORS = ['#2C5D8F', '#F2C14E', '#5CC491', '#E07A5F', '#7FB0E0']

/** Lightweight CSS confetti. */
export function Confetti({ pieces = 70 }: { pieces?: number }) {
  const [items] = useState(() =>
    Array.from({ length: pieces }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 0.6,
      duration: 1.8 + Math.random() * 1.6,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      rotate: Math.random() * 360,
      size: 6 + Math.random() * 6,
      drift: (Math.random() - 0.5) * 120,
    })),
  )
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className="confetti-piece absolute top-0 block rounded-sm"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 0.45,
              background: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              '--rot': `${p.rotate}deg`,
              '--drift': `${p.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
