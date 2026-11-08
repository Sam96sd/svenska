export interface Highlight {
  id: string
  /** Paragraph key (see paraKey). */
  key: string
  start: number
  end: number
  note: string
}

let counter = 0

/** Adds a highlight, merging it with any it overlaps in the same paragraph. */
export function addHighlight(
  list: Highlight[],
  h: Omit<Highlight, 'id'>,
): { next: Highlight[]; id: string } {
  let start = h.start
  let end = h.end
  const notes: string[] = h.note ? [h.note] : []
  const keep: Highlight[] = []
  for (const x of list) {
    if (x.key === h.key && x.start <= end && x.end >= start) {
      start = Math.min(start, x.start)
      end = Math.max(end, x.end)
      if (x.note) notes.push(x.note)
    } else keep.push(x)
  }
  const id = `h${Date.now().toString(36)}${(counter++).toString(36)}`
  return { next: [...keep, { id, key: h.key, start, end, note: notes.join(' · ') }], id }
}

/** Stable key for a paragraph: its label ("B") or its position ("t0p2"). */
export function paraKey(textIndex: number, paraIndex: number, label?: string): string {
  return label ?? `t${textIndex}p${paraIndex}`
}

/** Finds the quote in the text, ignoring differences in whitespace. */
export function findQuote(text: string, quote: string): [number, number] | null {
  const i = text.indexOf(quote)
  if (i >= 0) return [i, i + quote.length]
  const flat = (s: string) => s.replace(/\s+/g, ' ')
  const j = flat(text).indexOf(flat(quote))
  return j >= 0 ? [j, j + flat(quote).length] : null
}
