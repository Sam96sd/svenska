import { withinWordLimit } from '../engine/answerCheck'
import { findQuote, paraKey } from '../engine/reader/highlights'
import {
  bodyGaps,
  groupNumbers,
  groupTypeKey,
  type ListeningPart,
  type Passage,
  type QuestionGroup,
} from './schema'

/**
 * Checks that go beyond the schema: the review pass in code form. Returns a list of problems
 * (empty = fine). Used by content.test.ts for every passage and listening part.
 */

/** American spellings that shouldn't appear in British-English content. */
const US_SPELLINGS =
  /\b(color|colors|colored|favor|favorite|behavior|neighbor|neighborhood|labor|honor|humor|center|centers|theater|meter|meters|liter|liters|organiz\w*|realiz\w*|recogniz\w*|analyz\w*|prioritiz\w*|traveled|traveling|traveler|canceled|canceling|labeled|modeling|program|programs|catalog|defense|offense|license|gray|tire|tires|aluminum|jewelry|enrollment|fulfill)\b/i

export function britishSpellingIssues(text: string): string[] {
  const out: string[] = []
  for (const m of text.matchAll(new RegExp(US_SPELLINGS, 'gi'))) out.push(m[0])
  return out
}

function checkGroups(
  groups: QuestionGroup[],
  findRef: (ref: string) => string | null,
  problems: string[],
  where: string,
) {
  const numbers = groups.flatMap(groupNumbers)
  const sorted = [...numbers].sort((a, b) => a - b)
  if (new Set(numbers).size !== numbers.length)
    problems.push(`${where}: duplicate question numbers`)
  sorted.forEach((n, i) => {
    if (i > 0 && n !== sorted[i - 1]! + 1)
      problems.push(`${where}: question numbers jump from ${sorted[i - 1]} to ${n}`)
  })

  for (const g of groups) {
    const type = groupTypeKey(g)
    for (const q of g.questions) {
      const text = findRef(q.location.ref)
      if (text === null)
        problems.push(`${where} Q${q.n}: location ref "${q.location.ref}" not found`)
      else if (!findQuote(text, q.location.quote))
        problems.push(
          `${where} Q${q.n}: quote not found in ${q.location.ref}: "${q.location.quote}"`,
        )
    }

    switch (g.type) {
      case 'tfng':
        for (const q of g.questions)
          if (!['TRUE', 'FALSE', 'NOT GIVEN'].includes(q.answer))
            problems.push(`${where} Q${q.n}: ${q.answer} in a TFNG group`)
        break
      case 'ynng':
        for (const q of g.questions)
          if (!['YES', 'NO', 'NOT GIVEN'].includes(q.answer))
            problems.push(`${where} Q${q.n}: ${q.answer} in a YNNG group`)
        break
      case 'headings': {
        const keys = new Set(g.headings.map((h) => h.key))
        if (g.headings.length <= g.questions.length)
          problems.push(`${where}: need more headings than paragraphs`)
        for (const q of g.questions) {
          if (!keys.has(q.answer))
            problems.push(`${where} Q${q.n}: heading ${q.answer} not in the list`)
          if (findRef(q.para) === null)
            problems.push(`${where} Q${q.n}: paragraph ${q.para} not found`)
          for (const t of Object.keys(q.traps ?? {}))
            if (!keys.has(t)) problems.push(`${where} Q${q.n}: trap ${t} not a heading`)
        }
        if (!g.questions.every((q, i, all) => all.findIndex((x) => x.answer === q.answer) === i))
          problems.push(`${where}: a heading is used twice`)
        break
      }
      case 'match-info':
      case 'match-features':
      case 'match-endings':
      case 'map': {
        const keys = new Set(g.options.map((o) => o.key))
        for (const q of g.questions)
          if (!keys.has(q.answer))
            problems.push(`${where} Q${q.n}: answer ${q.answer} not an option`)
        if (!g.reuse && new Set(g.questions.map((q) => q.answer)).size !== g.questions.length)
          problems.push(`${where}: an option is used twice but reuse is off`)
        if (g.type === 'map') {
          const markers = new Set(
            g.diagram?.items.flatMap((i) => (i.shape === 'marker' ? [i.letter] : [])) ?? [],
          )
          for (const k of keys)
            if (!markers.has(k)) problems.push(`${where}: map option ${k} has no marker`)
        }
        break
      }
      case 'mcq':
        for (const q of g.questions) {
          if (!q.options.some((o) => o.key === q.answer))
            problems.push(`${where} Q${q.n}: answer not an option`)
          for (const t of Object.keys(q.traps ?? {}))
            if (t === q.answer)
              problems.push(`${where} Q${q.n}: the right answer is listed as a trap`)
        }
        break
      case 'mcq-multi':
        for (const q of g.questions) {
          if (q.n2 !== q.n + 1) problems.push(`${where} Q${q.n}: n2 should be ${q.n + 1}`)
          for (const a of q.answers)
            if (!q.options.some((o) => o.key === a))
              problems.push(`${where} Q${q.n}: answer ${a} not an option`)
          if (new Set(q.answers).size !== 2)
            problems.push(`${where} Q${q.n}: the two answers must differ`)
        }
        break
      case 'completion': {
        const gaps = bodyGaps(g.body)
        const qs = g.questions.map((q) => q.n)
        if ([...gaps].sort((a, b) => a - b).join() !== [...qs].sort((a, b) => a - b).join())
          problems.push(
            `${where} (${type}): gaps [${gaps.join(',')}] don't match questions [${qs.join(',')}]`,
          )
        if (!g.wordBank && !g.wordLimit)
          problems.push(`${where} (${type}): needs a word limit or a word bank`)
        for (const q of g.questions) {
          if (g.wordBank) {
            if (!g.wordBank.some((w) => w.key === q.answers[0]))
              problems.push(`${where} Q${q.n}: answer not in word bank`)
          } else
            for (const a of q.answers)
              if (!withinWordLimit(a.replace(/[()]/g, ''), g.wordLimit))
                problems.push(`${where} Q${q.n}: accepted answer "${a}" breaks the word limit`)
        }
        break
      }
    }
  }
}

export function validatePassage(p: Passage): string[] {
  const problems: string[] = []
  const paras = new Map<string, string>()
  p.texts.forEach((t, ti) =>
    t.paragraphs.forEach((para, pi) => paras.set(paraKey(ti, pi, para.label), para.text)),
  )
  checkGroups(p.groups, (ref) => paras.get(ref) ?? null, problems, p.id)

  const words = [...paras.values()].join(' ').split(/\s+/).length
  if (p.section === 'academic' && (words < 700 || words > 1000))
    problems.push(`${p.id}: academic passage has ${words} words (aim for 750–950)`)

  const allText = [...paras.values(), ...p.groups.flatMap((g) => JSON.stringify(g)), p.title].join(
    ' ',
  )
  const us = britishSpellingIssues(allText)
  if (us.length) problems.push(`${p.id}: American spellings: ${[...new Set(us)].join(', ')}`)
  return problems
}

export function validateListening(l: ListeningPart): string[] {
  const problems: string[] = []
  const lines = new Map(l.lines.map((x) => [x.id, x.text]))
  const speakers = new Set(l.speakers.map((s) => s.id))
  for (const line of l.lines)
    if (!speakers.has(line.speaker)) problems.push(`${l.id} ${line.id}: unknown speaker`)
  if (lines.size !== l.lines.length) problems.push(`${l.id}: duplicate line ids`)
  checkGroups(l.groups, (ref) => lines.get(ref) ?? null, problems, l.id)
  // Listening answers must come in the order of the recording.
  const order = l.groups.flatMap((g) =>
    g.questions.map((q) => ({ n: q.n, line: Number(q.location.ref.slice(1)) })),
  )
  order.sort((a, b) => a.n - b.n)
  for (let i = 1; i < order.length; i++)
    if (order[i]!.line < order[i - 1]!.line)
      problems.push(`${l.id}: Q${order[i]!.n} is heard before Q${order[i - 1]!.n}`)
  const us = britishSpellingIssues([...lines.values(), JSON.stringify(l.groups)].join(' '))
  // A speaker with an American accent may say American words, but the written questions stay British.
  if (us.length && l.speakers.every((s) => s.accent !== 'en-US' && s.accent !== 'en-CA'))
    problems.push(`${l.id}: American spellings: ${[...new Set(us)].join(', ')}`)
  return problems
}
