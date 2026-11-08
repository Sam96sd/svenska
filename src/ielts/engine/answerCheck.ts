import { type WordLimit } from '../content/schema'

/**
 * Marking typed answers the way IELTS does:
 * - case doesn't matter; spelling does (British and American spellings both count)
 * - numbers may be written as digits or words ("15" = "fifteen")
 * - a hyphenated word counts as one word, and "part-time" = "part time"
 * - going over the word limit makes the answer wrong, even if the words are right
 * - "(the) library" in the key means "the library" and "library" are both accepted
 */

export type WrongReason =
  | 'blank'
  | 'word-limit'
  | 'spelling'
  | 'plural'
  | 'distractor'
  | 'paraphrase'
  | 'ng-vs-false'
  | 'assumed-true'
  | 'misread'
  | 'detail-heading'
  | 'partly-correct'

export const REASON_LABEL: Record<WrongReason, string> = {
  blank: 'No answer',
  'word-limit': 'Over the word limit',
  spelling: 'Spelling',
  plural: 'Singular / plural',
  distractor: 'Fell for a distractor',
  paraphrase: 'Missed the paraphrase',
  'ng-vs-false': 'Not Given vs False',
  'assumed-true': 'Assumed it was true',
  misread: 'Misread the question',
  'detail-heading': 'Heading matched a detail only',
  'partly-correct': 'Only one of two right',
}

const SMALL: Record<string, number> = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
}
const TENS: Record<string, number> = {
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
}
const SCALES: Record<string, number> = { hundred: 100, thousand: 1000, million: 1_000_000 }

/** "two hundred and fifty" → 250; null if the words aren't a number. */
export function wordsToNumber(text: string): number | null {
  const words = text
    .toLowerCase()
    .replace(/-/g, ' ')
    .split(/\s+/)
    .filter((w) => w && w !== 'and')
  if (words.length === 0) return null
  let total = 0
  let current = 0
  for (const w of words) {
    if (w in SMALL) current += SMALL[w]!
    else if (w in TENS) current += TENS[w]!
    else if (w === 'hundred') current = (current || 1) * 100
    else if (w in SCALES) {
      total += (current || 1) * SCALES[w]!
      current = 0
    } else return null
  }
  return total + current
}

const MONTHS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

/** Basic clean-up: case, curly quotes, dashes, spaces, final full stop. */
export function normalise(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[‘’`´]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[‐‑‒–—]/g, '-')
    .replace(/\s+/g, ' ')
    .replace(/\s*-\s*/g, '-')
    .trim()
    .replace(/[.,;:!?]+$/g, '')
    .trim()
}

/**
 * A canonical form for comparison: hyphens become spaces, number words become digits,
 * "1,500" = "1500", dates and times written different ways line up, "£" and "$" signs and
 * "%"/"percent" are unified.
 */
export function canonical(text: string): string {
  let s = normalise(text)
  s = s.replace(/(\d),(\d{3})\b/g, '$1$2')
  s = s.replace(/\bper ?cent\b/g, '%').replace(/\s+%/g, '%')
  s = s.replace(/(\d)(st|nd|rd|th)\b/g, '$1')
  s = s.replace(
    /\b(\d{1,2})[.:](\d{2}) ?(am|pm|a\.m\.?|p\.m\.?)/g,
    (_, h, m, ap) => `${h}:${m}${ap[0]}m`,
  )
  s = s.replace(/\b(\d{1,2}) ?(am|pm|a\.m\.?|p\.m\.?)/g, (_, h, ap) => `${h}${ap[0]}m`)
  s = s.replace(/-/g, ' ')
  // Runs of number words → digits ("twenty five" → "25").
  const numberWord = new RegExp(
    `\\b(?:${[...Object.keys(SMALL), ...Object.keys(TENS), 'hundred', 'thousand', 'million'].join('|')})(?:\\s+(?:and\\s+)?(?:${[...Object.keys(SMALL), ...Object.keys(TENS), 'hundred', 'thousand', 'million'].join('|')}))*\\b`,
    'g',
  )
  s = s.replace(numberWord, (m) => {
    const n = wordsToNumber(m)
    return n === null ? m : String(n)
  })
  // "march 15" → "15 march"
  s = s.replace(new RegExp(`\\b(${MONTHS.join('|')}) (\\d{1,2})\\b`, 'g'), '$2 $1')
  // Drop "the" before a month-day date: "the 15 march" → "15 march"
  s = s.replace(new RegExp(`\\bthe (\\d{1,2}) (${MONTHS.join('|')})\\b`, 'g'), '$1 $2')
  s = s.replace(/[£$€]\s?(\d)/g, '$1')
  s = s.replace(/\s+/g, ' ').trim()
  // Phone numbers and codes: "07700 913 562" = "07700913562".
  if (/^[\d ]+$/.test(s)) s = s.replace(/ /g, '')
  return s
}

/** UK spelling in the key → also accept the US form. Rules, not a full dictionary. */
export function spellingVariants(word: string): string[] {
  const out = new Set([word])
  const add = (w: string) => out.add(w)
  if (word.length >= 6 && /our$/.test(word)) add(word.replace(/our$/, 'or'))
  if (/our(s|ed|ing|ite|ites|able)$/.test(word) && word.length >= 7)
    add(word.replace(/our(s|ed|ing|ite|ites|able)$/, 'or$1'))
  if (/is(e|es|ed|ing|ation|ations)$/.test(word) && word.length >= 7)
    add(word.replace(/is(e|es|ed|ing|ation|ations)$/, 'iz$1'))
  if (/ys(e|es|ed|ing)$/.test(word)) add(word.replace(/ys(e|es|ed|ing)$/, 'yz$1'))
  if (/(?<=[^aeiou])tre(s)?$/.test(word) && word.length >= 5) add(word.replace(/tre(s)?$/, 'ter$1'))
  if (/ogue(s)?$/.test(word)) add(word.replace(/ogue(s)?$/, 'og$1'))
  const doubled =
    /^(travel|cancel|label|model|signal|fuel|level|channel|counsel|marvel|quarrel|dial|total)l(ed|ing|er|ers)$/.exec(
      word,
    )
  if (doubled) add(`${doubled[1]}${doubled[2]}`)
  if (/ence$/.test(word) && /^(licence|defence|offence|pretence)$/.test(word))
    add(word.replace(/ence$/, 'ense'))
  if (word === 'programme' || word === 'programmes') add(word.replace('programme', 'program'))
  if (word === 'grey') add('gray')
  if (word === 'tyre' || word === 'tyres') add(word.replace('tyre', 'tire'))
  if (word === 'cheque' || word === 'cheques') add(word.replace('cheque', 'check'))
  if (word === 'aluminium') add('aluminum')
  if (word === 'jewellery') add('jewelry')
  if (word === 'enrolment') add('enrollment')
  return [...out]
}

/** "(the) library" → ["the library", "library"]. */
export function expandOptional(key: string): string[] {
  const m = /\(([^)]+)\)/.exec(key)
  if (!m) return [key.replace(/\s+/g, ' ').trim()]
  const withIt = key.slice(0, m.index) + m[1] + key.slice(m.index + m[0].length)
  const without = key.slice(0, m.index) + key.slice(m.index + m[0].length)
  return [...expandOptional(withIt), ...expandOptional(without)]
}

/** Every accepted form of a key, canonicalised (optional words, US spellings). */
export function acceptedForms(keys: string[]): Set<string> {
  const out = new Set<string>()
  for (const key of keys)
    for (const form of expandOptional(key)) {
      const c = canonical(form)
      out.add(c)
      // Swap each word for its spelling variants, one word at a time.
      const words = c.split(' ')
      words.forEach((w, i) => {
        for (const v of spellingVariants(w)) {
          const copy = [...words]
          copy[i] = v
          out.add(copy.join(' '))
        }
      })
    }
  return out
}

/** Words as IELTS counts them: hyphenated words are one word; a number is a number. */
export function countWords(answer: string): { words: number; numbers: number } {
  const tokens = normalise(answer)
    .replace(/[£$€]/g, '')
    .replace(/(\d) ?(am|pm|a\.m\.?|p\.m\.?)(?=\s|$)/g, '$1$2')
    .split(' ')
    .filter(Boolean)
  let words = 0
  let numbers = 0
  let prevNumber = false
  for (const t of tokens) {
    const isNumber = /^\d[\d,.:/]*(%|am|pm|st|nd|rd|th)?$/.test(t)
    // Digits in groups ("07700 913 562") are one number, as on the answer sheet.
    if (isNumber && !prevNumber) numbers++
    else if (!isNumber) words++
    prevNumber = isNumber
  }
  return { words, numbers }
}

/**
 * Does the answer fit "NO MORE THAN {words} WORDS (AND/OR A NUMBER)"?
 * With `number: true`, one number may be added on top of the words.
 */
export function withinWordLimit(answer: string, limit: WordLimit | undefined): boolean {
  if (!limit) return true
  const { words, numbers } = countWords(answer)
  if (limit.number) {
    if (numbers > 1) return false
    return words <= limit.words
  }
  return words + numbers <= limit.words
}

function editDistance(a: string, b: string): number {
  if (a === b) return 0
  const dp = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0]!
    dp[0] = i
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j]!
      dp[j] = Math.min(dp[j]! + 1, dp[j - 1]! + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1))
      prev = tmp
    }
  }
  return dp[b.length]!
}

/** "bicycle" vs "bicycles", "city" vs "cities", "box" vs "boxes". */
function pluralPair(a: string, b: string): boolean {
  const [short, long] = a.length <= b.length ? [a, b] : [b, a]
  if (short === long) return false
  return (
    long === `${short}s` ||
    long === `${short}es` ||
    (short.endsWith('y') && long === `${short.slice(0, -1)}ies`)
  )
}

export interface TextVerdict {
  correct: boolean
  reason: WrongReason | null
}

/** Marks a typed answer against the accepted keys. */
export function checkText(
  given: string,
  keys: string[],
  opts: { wordLimit?: WordLimit; distractors?: string[] } = {},
): TextVerdict {
  if (!given.trim()) return { correct: false, reason: 'blank' }
  const forms = acceptedForms(keys)
  const g = canonical(given)
  if (forms.has(g)) {
    if (!withinWordLimit(given, opts.wordLimit)) return { correct: false, reason: 'word-limit' }
    return { correct: true, reason: null }
  }
  if (opts.distractors?.some((d) => acceptedForms([d]).has(g)))
    return { correct: false, reason: 'distractor' }
  if (!withinWordLimit(given, opts.wordLimit)) return { correct: false, reason: 'word-limit' }
  for (const f of forms) {
    if (pluralPair(f, g)) return { correct: false, reason: 'plural' }
    const limit = f.length <= 4 ? 1 : 2
    if (editDistance(f, g) <= limit) return { correct: false, reason: 'spelling' }
  }
  return { correct: false, reason: 'paraphrase' }
}

/** True/False/Not Given and Yes/No/Not Given: which kind of mistake was it? */
export function tfngReason(given: string, key: string): WrongReason {
  if (!given) return 'blank'
  const ng = 'NOT GIVEN'
  if (
    (key === ng && (given === 'FALSE' || given === 'NO')) ||
    (given === ng && (key === 'FALSE' || key === 'NO'))
  )
    return 'ng-vs-false'
  if (key === ng && (given === 'TRUE' || given === 'YES')) return 'assumed-true'
  return 'misread'
}
