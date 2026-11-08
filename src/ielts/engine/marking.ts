import { groupTypeKey, type Location, type QuestionGroup } from '../content/schema'
import { checkText, tfngReason, type WrongReason } from './answerCheck'

/** The learner's answers by question number. "Choose TWO" items store "A,D" under `n`. */
export type Answers = Record<number, string>

export interface MarkedQuestion {
  n: number
  /** Question type key, e.g. "tfng", "completion-note". */
  type: string
  correct: boolean
  given: string
  /** The answer key as shown to the learner. */
  expected: string
  reason: WrongReason | null
  explanation: string
  location: Location
  /** Why the option the learner chose was tempting but wrong, if the content says. */
  trapNote: string | null
}

export interface Marked {
  questions: MarkedQuestion[]
  correct: number
  total: number
}

const letter = (s: string | undefined) => (s ?? '').trim()

/** Marks every question in the groups. */
export function markGroups(groups: QuestionGroup[], answers: Answers): Marked {
  const out: MarkedQuestion[] = []
  for (const g of groups) {
    const type = groupTypeKey(g)
    switch (g.type) {
      case 'tfng':
      case 'ynng':
        for (const q of g.questions) {
          const given = letter(answers[q.n])
          const correct = given === q.answer
          out.push({
            n: q.n,
            type,
            correct,
            given,
            expected: q.answer,
            reason: correct ? null : tfngReason(given, q.answer),
            explanation: q.explanation,
            location: q.location,
            trapNote: null,
          })
        }
        break
      case 'headings':
      case 'match-info':
      case 'match-features':
      case 'match-endings':
      case 'map':
      case 'mcq':
        for (const q of g.questions) {
          const given = letter(answers[q.n])
          const correct = given.toLowerCase() === q.answer.toLowerCase()
          const trapNote = !correct && given ? (q.traps?.[given] ?? null) : null
          let reason: WrongReason | null = null
          if (!correct) {
            if (!given) reason = 'blank'
            else if (g.type === 'headings') reason = trapNote ? 'detail-heading' : 'paraphrase'
            else if (trapNote) reason = 'distractor'
            else reason = g.type === 'mcq' ? 'misread' : 'paraphrase'
          }
          out.push({
            n: q.n,
            type,
            correct,
            given,
            expected: q.answer,
            reason,
            explanation: q.explanation,
            location: q.location,
            trapNote,
          })
        }
        break
      case 'mcq-multi':
        for (const q of g.questions) {
          const chosen = letter(answers[q.n])
            .split(',')
            .map((s) => s.trim().toUpperCase())
            .filter(Boolean)
          const right = q.answers.map((a) => a.toUpperCase())
          const hits = new Set(chosen.filter((c) => right.includes(c))).size
          const wrongPick = chosen.find((c) => !right.includes(c))
          const trapNote = wrongPick ? (q.traps?.[wrongPick] ?? null) : null
          const given = chosen.join(', ')
          const reason = (ok: boolean): WrongReason | null =>
            ok
              ? null
              : chosen.length === 0
                ? 'blank'
                : hits === 1
                  ? 'partly-correct'
                  : trapNote
                    ? 'distractor'
                    : 'misread'
          out.push(
            {
              n: q.n,
              type,
              correct: hits >= 1,
              given,
              expected: right.join(', '),
              reason: reason(hits >= 1),
              explanation: q.explanation,
              location: q.location,
              trapNote,
            },
            {
              n: q.n2,
              type,
              correct: hits >= 2,
              given,
              expected: right.join(', '),
              reason: reason(hits >= 2),
              explanation: q.explanation,
              location: q.location,
              trapNote,
            },
          )
        }
        break
      case 'completion':
        for (const q of g.questions) {
          const given = (answers[q.n] ?? '').trim()
          let correct: boolean
          let reason: WrongReason | null
          if (g.wordBank) {
            correct = given.toLowerCase() === (q.answers[0] ?? '').toLowerCase()
            reason = correct ? null : given ? 'paraphrase' : 'blank'
          } else {
            const v = checkText(given, q.answers, {
              wordLimit: g.wordLimit,
              distractors: q.distractors,
            })
            correct = v.correct
            reason = v.reason
          }
          out.push({
            n: q.n,
            type,
            correct,
            given,
            expected: g.wordBank
              ? `${q.answers[0]} (${g.wordBank.find((w) => w.key === q.answers[0])?.text ?? ''})`
              : q.answers[0]!,
            reason,
            explanation: q.explanation,
            location: q.location,
            trapNote: null,
          })
        }
        break
    }
  }
  out.sort((a, b) => a.n - b.n)
  return { questions: out, correct: out.filter((q) => q.correct).length, total: out.length }
}

/** Question numbers the learner has answered ("choose TWO" counts both once two are picked). */
export function answeredNumbers(groups: QuestionGroup[], answers: Answers): Set<number> {
  const out = new Set<number>()
  for (const g of groups)
    for (const q of g.questions) {
      const a = (answers[q.n] ?? '').trim()
      if (!a) continue
      out.add(q.n)
      if (g.type === 'mcq-multi' && 'n2' in q && a.split(',').filter(Boolean).length >= 2)
        out.add(q.n2)
    }
  return out
}
