import { Highlighter, StickyNote, Trash2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { cx } from '../../../components/styles'
import { type Passage } from '../../content/schema'
import { addHighlight, findQuote, paraKey, type Highlight } from './highlights'

export interface PassageViewProps {
  passage: Passage
  highlights: Highlight[]
  onChange: (next: Highlight[]) => void
  /** After marking: the quote that justifies the selected answer, highlighted and scrolled to. */
  focus?: { ref: string; quote: string } | null
  /** Highlighting and notes on/off (off in review of other people's work, etc.). */
  tools?: boolean
}

interface Segment {
  text: string
  highlight: Highlight | null
  answer: boolean
}

function segments(text: string, marks: Highlight[], answer: [number, number] | null): Segment[] {
  const cuts = new Set([0, text.length])
  for (const m of marks) {
    cuts.add(m.start)
    cuts.add(m.end)
  }
  if (answer) {
    cuts.add(answer[0])
    cuts.add(answer[1])
  }
  const points = [...cuts].filter((c) => c >= 0 && c <= text.length).sort((a, b) => a - b)
  const out: Segment[] = []
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i]!
    const b = points[i + 1]!
    if (a === b) continue
    out.push({
      text: text.slice(a, b),
      highlight: marks.find((m) => m.start <= a && m.end >= b) ?? null,
      answer: !!answer && answer[0] <= a && answer[1] >= b,
    })
  }
  return out
}

function offsetsIn(el: HTMLElement, range: Range): [number, number] | null {
  if (!el.contains(range.startContainer) || !el.contains(range.endContainer)) return null
  const pre = document.createRange()
  pre.selectNodeContents(el)
  pre.setEnd(range.startContainer, range.startOffset)
  const start = pre.toString().length
  const len = range.toString().length
  return len > 0 ? [start, start + len] : null
}

export function PassageView({
  passage,
  highlights,
  onChange,
  focus,
  tools = true,
}: PassageViewProps) {
  const container = useRef<HTMLDivElement>(null)
  const [pending, setPending] = useState<{
    key: string
    start: number
    end: number
    x: number
    y: number
  } | null>(null)
  const [open, setOpen] = useState<string | null>(null)

  useEffect(() => {
    if (!focus) return
    const el = container.current?.querySelector(`[data-para="${CSS.escape(focus.ref)}"]`)
    el?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }, [focus])

  function onPointerUp() {
    if (!tools) return
    // Wait a tick: on touch devices the selection settles after pointerup.
    setTimeout(() => {
      const sel = window.getSelection()
      if (!sel || sel.isCollapsed || sel.rangeCount === 0) return setPending(null)
      const range = sel.getRangeAt(0)
      const el = (
        range.commonAncestorContainer instanceof Element
          ? range.commonAncestorContainer
          : range.commonAncestorContainer.parentElement
      )?.closest<HTMLElement>('[data-para]')
      if (!el || !container.current?.contains(el)) return setPending(null)
      const offs = offsetsIn(el, range)
      if (!offs) return setPending(null)
      const rect = range.getBoundingClientRect()
      setPending({
        key: el.dataset.para!,
        start: offs[0],
        end: offs[1],
        x: rect.left + rect.width / 2,
        y: rect.top,
      })
    }, 10)
  }

  function apply(withNote: boolean) {
    if (!pending) return
    const { next, id } = addHighlight(highlights, {
      key: pending.key,
      start: pending.start,
      end: pending.end,
      note: '',
    })
    onChange(next)
    window.getSelection()?.removeAllRanges()
    setPending(null)
    if (withNote) setOpen(id)
  }

  return (
    <div ref={container} onPointerUp={onPointerUp} className="relative">
      {passage.intro && <p className="text-muted mb-4 text-sm italic">{passage.intro}</p>}
      {passage.texts.map((t, ti) => (
        <article key={ti} className={cx(ti > 0 && 'border-line mt-8 border-t pt-6')}>
          {t.kind && (
            <p className="text-muted mb-1 text-xs font-semibold tracking-wide uppercase">
              {t.kind}
            </p>
          )}
          {t.title && <h3 className="font-display mb-4 text-xl font-semibold">{t.title}</h3>}
          {t.paragraphs.map((p, pi) => {
            const key = paraKey(ti, pi, p.label, p.key)
            const marks = highlights.filter((h) => h.key === key)
            const answer = focus && focus.ref === key ? findQuote(p.text, focus.quote) : null
            const openMark = marks.find((m) => m.id === open)
            return (
              <div key={key} className="mb-4 flex gap-3">
                {p.label && <span className="w-5 shrink-0 pt-0.5 font-bold">{p.label}</span>}
                <div className="min-w-0 flex-1">
                  <p
                    data-para={key}
                    className="scroll-mt-24 text-[16px] leading-7 whitespace-pre-line"
                  >
                    {segments(p.text, marks, answer).map((s, i) =>
                      s.highlight || s.answer ? (
                        <mark
                          key={i}
                          onClick={s.highlight ? () => setOpen(s.highlight!.id) : undefined}
                          className={cx(
                            'text-ink rounded-sm',
                            s.answer
                              ? 'bg-success-soft ring-success ring-1'
                              : 'bg-[color-mix(in_srgb,var(--color-accent)_45%,transparent)]',
                            s.highlight?.note && 'underline decoration-dotted underline-offset-4',
                            s.highlight && 'cursor-pointer',
                          )}
                        >
                          {s.text}
                        </mark>
                      ) : (
                        <span key={i}>{s.text}</span>
                      ),
                    )}
                  </p>
                  {openMark && (
                    <NoteEditor
                      highlight={openMark}
                      onSave={(note) =>
                        onChange(highlights.map((h) => (h.id === openMark.id ? { ...h, note } : h)))
                      }
                      onRemove={() => {
                        onChange(highlights.filter((h) => h.id !== openMark.id))
                        setOpen(null)
                      }}
                      onClose={() => setOpen(null)}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </article>
      ))}
      {pending && (
        <SelectionToolbar
          x={pending.x}
          y={pending.y}
          onHighlight={() => apply(false)}
          onNote={() => apply(true)}
        />
      )}
    </div>
  )
}

function SelectionToolbar({
  x,
  y,
  onHighlight,
  onNote,
}: {
  x: number
  y: number
  onHighlight: () => void
  onNote: () => void
}) {
  return (
    <div
      role="toolbar"
      aria-label="Selected text"
      className="bg-ink text-bg fixed z-50 flex -translate-x-1/2 -translate-y-full gap-1 rounded-xl p-1 shadow-lg"
      style={{ left: Math.max(70, Math.min(window.innerWidth - 70, x)), top: Math.max(56, y - 8) }}
      onPointerUp={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={onHighlight}
        className="flex h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold hover:bg-white/15"
      >
        <Highlighter size={16} aria-hidden="true" /> Highlight
      </button>
      <button
        type="button"
        onClick={onNote}
        className="flex h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold hover:bg-white/15"
      >
        <StickyNote size={16} aria-hidden="true" /> Note
      </button>
    </div>
  )
}

function NoteEditor({
  highlight,
  onSave,
  onRemove,
  onClose,
}: {
  highlight: Highlight
  onSave: (note: string) => void
  onRemove: () => void
  onClose: () => void
}) {
  const [text, setText] = useState(highlight.note)
  return (
    <div
      className="bg-surface-2 mt-2 grid gap-2 rounded-xl p-3"
      onPointerUp={(e) => e.stopPropagation()}
    >
      <label className="text-sm font-semibold" htmlFor={`note-${highlight.id}`}>
        Note
      </label>
      <textarea
        id={`note-${highlight.id}`}
        autoFocus
        rows={2}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={() => onSave(text)}
        className="border-line bg-bg focus:border-primary rounded-lg border p-2 text-sm outline-none"
      />
      <div className="flex justify-between gap-2">
        <button
          type="button"
          onClick={onRemove}
          className="text-danger flex items-center gap-1 text-sm font-semibold"
        >
          <Trash2 size={15} aria-hidden="true" /> Remove highlight
        </button>
        <button
          type="button"
          onClick={() => {
            onSave(text)
            onClose()
          }}
          className="text-primary text-sm font-semibold"
        >
          Done
        </button>
      </div>
    </div>
  )
}
