/**
 * Answer checking for typed answers. Tolerant of capitalisation, punctuation and
 * extra spaces; small typos are "almost" (counted correct, with the right spelling shown).
 */

export type CheckStatus = 'correct' | 'almost' | 'wrong'

export interface CheckResult {
  status: CheckStatus
  /** The accepted answer closest to what was typed. */
  expected: string
  reason?: 'typo' | 'accents'
}

export interface CheckOptions {
  /** No typo tolerance (the exercise tests spelling or an ending). */
  strict?: boolean
  /** Answers that are always wrong, even if they are one letter away. */
  reject?: string[]
  /** English answers: ignore a leading "to", "a", "an" or "the". */
  lang?: 'sv' | 'en'
}

const PUNCTUATION = /[.,!?;:"“”„«»()[\]¿¡…–—/]/g

export function normalize(input: string, lang: 'sv' | 'en' = 'sv'): string {
  let s = input
    .normalize('NFC')
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(PUNCTUATION, ' ')
    .replace(/\s+-\s+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (lang === 'en') s = s.replace(/^(to|a|an|the) /, '')
  return s
}

/** å→a, ä→a, ö→o, é→e … for "you forgot the dots" feedback. */
export function stripAccents(s: string): string {
  return s.normalize('NFD').replace(/\p{M}/gu, '').normalize('NFC')
}

/** Edit distance where swapping two neighbouring letters counts as one edit (OSA distance). */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  )
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      let v = Math.min(d[i - 1]![j]! + 1, d[i]![j - 1]! + 1, d[i - 1]![j - 1]! + cost)
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        v = Math.min(v, d[i - 2]![j - 2]! + 1)
      }
      d[i]![j] = v
    }
  }
  return d[a.length]![b.length]!
}

/** How many typos we forgive for an answer of this length. */
export function typoAllowance(length: number): number {
  if (length < 5) return 0
  if (length < 10) return 1
  if (length < 25) return 2
  return 3
}

export function checkAnswer(
  given: string,
  accepted: string[],
  opts: CheckOptions = {},
): CheckResult {
  const lang = opts.lang ?? 'sv'
  const g = normalize(given, lang)
  const first = accepted[0] ?? ''
  if (!g) return { status: 'wrong', expected: first }

  const candidates = accepted.map((a) => ({ a, n: normalize(a, lang) }))
  const exact = candidates.find((c) => c.n === g)
  if (exact) return { status: 'correct', expected: exact.a }

  if (opts.reject?.some((r) => normalize(r, lang) === g))
    return { status: 'wrong', expected: first }

  const accentMatch = candidates.find((c) => stripAccents(c.n) === stripAccents(g))
  if (accentMatch) return { status: 'almost', expected: accentMatch.a, reason: 'accents' }

  let best = candidates[0]!
  let bestDist = Infinity
  for (const c of candidates) {
    const d = levenshtein(c.n, g)
    if (d < bestDist) {
      best = c
      bestDist = d
    }
  }

  if (!opts.strict && bestDist <= typoAllowance(best.n.length)) {
    return { status: 'almost', expected: best.a, reason: 'typo' }
  }
  return { status: 'wrong', expected: best.a }
}

/** 0–1 similarity, used to grade speech recognition transcripts. */
export function similarity(a: string, b: string): number {
  const x = stripAccents(normalize(a))
  const y = stripAccents(normalize(b))
  const max = Math.max(x.length, y.length)
  return max === 0 ? 1 : 1 - levenshtein(x, y) / max
}
