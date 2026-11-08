import { type Block, type ListeningPart, type Passage, type QuestionGroup } from './schema'

/*
 * Full mock tests: four listening parts become one 40-question recording, and three reading
 * passages become one 60-minute section, with questions renumbered 1–40 as in the real test.
 */

const shiftText = (t: string, by: number) =>
  t.replace(/\[\[(\d+)\]\]/g, (_, n: string) => `[[${Number(n) + by}]]`)

function shiftBlock(b: Block, by: number): Block {
  switch (b.kind) {
    case 'text':
    case 'heading':
      return { ...b, text: shiftText(b.text, by) }
    case 'bullets':
      return { ...b, items: b.items.map((t) => shiftText(t, by)) }
    case 'table':
      return { ...b, rows: b.rows.map((r) => r.map((t) => shiftText(t, by))) }
    case 'flow':
      return { ...b, steps: b.steps.map((t) => shiftText(t, by)) }
    case 'diagram':
      return {
        ...b,
        diagram: {
          ...b.diagram,
          items: b.diagram.items.map((it) => (it.shape === 'gap' ? { ...it, n: it.n + by } : it)),
        },
      }
  }
}

/** Renumbers a group's questions by `by` and rewrites location refs with `ref`. */
export function shiftGroup(
  g: QuestionGroup,
  by: number,
  ref: (r: string) => string,
): QuestionGroup {
  const loc = <T extends { n: number; location: { ref: string; quote: string } }>(q: T): T => ({
    ...q,
    n: q.n + by,
    location: { ...q.location, ref: ref(q.location.ref) },
  })
  switch (g.type) {
    case 'mcq-multi':
      return { ...g, questions: g.questions.map((q) => ({ ...loc(q), n2: q.n2 + by })) }
    case 'completion':
      return { ...g, body: g.body.map((b) => shiftBlock(b, by)), questions: g.questions.map(loc) }
    case 'tfng':
    case 'ynng':
      return { ...g, questions: g.questions.map(loc) }
    case 'headings':
      return { ...g, questions: g.questions.map(loc) }
    case 'mcq':
      return { ...g, questions: g.questions.map(loc) }
    default:
      return { ...g, questions: g.questions.map(loc) }
  }
}

const maxN = (groups: QuestionGroup[]) =>
  Math.max(0, ...groups.flatMap((g) => g.questions.map((q) => ('n2' in q ? q.n2 : q.n))))

/** Four parts → one recording with "Now turn to Part N" and reading time between parts. */
export function mergeListening(id: string, title: string, parts: ListeningPart[]): ListeningPart {
  const lines: ListeningPart['lines'] = []
  const groups: QuestionGroup[] = []
  const speakers: ListeningPart['speakers'] = [
    { id: 'mock-narrator', name: 'Narrator', role: 'Narrator', gender: 'm', accent: 'en-GB' },
  ]
  let offset = 0
  let line = 0
  parts.forEach((p, i) => {
    const map = new Map<string, string>()
    if (i > 0)
      lines.push({
        id: `l${++line}`,
        speaker: 'mock-narrator',
        text: `That is the end of Part ${i}. Now turn to Part ${i + 1}. ${p.context.replace(/questions \d+ to \d+/i, `questions ${offset + 1} to ${offset + maxN(p.groups)}`)}`,
        pause: 30,
      })
    for (const l of p.lines) {
      const nid = `l${++line}`
      map.set(l.id, nid)
      lines.push({ ...l, id: nid, speaker: `p${i + 1}-${l.speaker}` })
    }
    speakers.push(...p.speakers.map((s) => ({ ...s, id: `p${i + 1}-${s.id}` })))
    groups.push(...p.groups.map((g) => shiftGroup(g, offset, (r) => map.get(r) ?? r)))
    offset += maxN(p.groups)
  })
  return {
    id,
    skill: 'listening',
    part: 1,
    use: 'mock',
    title,
    topic: 'Full Listening test',
    context: `This is the Listening test. There are four parts, and you will hear each part once only. ${parts[0]?.context ?? ''}`,
    speakers,
    lines,
    groups,
  }
}

/** Three passages → one 60-minute Reading section with passage headings. */
export function mergeReading(
  id: string,
  title: string,
  passages: Passage[],
  minutes = 60,
): Passage {
  const texts: Passage['texts'] = []
  const groups: QuestionGroup[] = []
  let offset = 0
  passages.forEach((p, i) => {
    const prefix = `p${i + 1}.`
    p.texts.forEach((t, ti) =>
      texts.push({
        ...t,
        kind:
          ti === 0
            ? `${p.section === 'academic' ? 'Reading Passage' : 'Section'} ${i + 1} · Questions ${offset + 1}–${offset + maxN(p.groups)}`
            : t.kind,
        paragraphs: t.paragraphs.map((para, pi) => ({
          ...para,
          key: `${prefix}${para.key ?? para.label ?? `t${ti}p${pi}`}`,
        })),
      }),
    )
    groups.push(...p.groups.map((g) => shiftGroup(g, offset, (r) => `${prefix}${r}`)))
    offset += maxN(p.groups)
  })
  const first = passages[0]!
  return {
    id,
    skill: 'reading',
    module: first.module,
    section: first.section,
    use: 'mock',
    title,
    topic: 'Full Reading test',
    minutes,
    level: 3,
    texts,
    groups,
  }
}
