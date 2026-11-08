/**
 * Item generators for the listening dictation trainer: names spelled letter by letter, phone
 * numbers, postcodes, dates and prices — the things Part 1 tests and learners mis-hear.
 * Each item says something (for text-to-speech) and lists the accepted typed answers.
 */

export type DictationMode = 'spelling' | 'phone' | 'postcode' | 'dates' | 'prices' | 'teens'

export interface DictationItem {
  say: string
  answer: string
  accept: string[]
}

export const MODE_LABEL: Record<DictationMode, string> = {
  spelling: 'Spelled names',
  phone: 'Phone numbers',
  postcode: 'Postcodes',
  dates: 'Dates',
  prices: 'Prices',
  teens: '15 or 50?',
}

const SURNAMES = [
  'Whitcombe',
  'Fairbairn',
  'Lyttleton',
  'Haddad',
  'Okafor',
  'Pemberton',
  'Ashworth',
  'Quigley',
  'Vasquez',
  'Barraclough',
  'Kowalczyk',
  'Nakamura',
  'Featherstone',
  'Mbatha',
  'Rossiter',
  'Gallagher',
  'Thistlewood',
  'Abernethy',
  'Jaworski',
  'Penhaligon',
  'Oyelaran',
  'Hargreaves',
  'Dunleavy',
  'Strachan',
  'Yeomans',
  'Fitzgerald',
  'Llewellyn',
  'Mackintosh',
  'Szabo',
  'Ferreira',
]
const STREETS = [
  'Mill Lane',
  'Harbour Road',
  'Chestnut Avenue',
  'Bridge Street',
  'Kingsway',
  'Orchard Close',
]

const ONES = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
]
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const ORD: Record<number, string> = {
  1: 'first',
  2: 'second',
  3: 'third',
  5: 'fifth',
  8: 'eighth',
  9: 'ninth',
  12: 'twelfth',
}
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function numberWords(n: number): string {
  if (n < 20) return ONES[n]!
  if (n < 100) return TENS[Math.floor(n / 10)]! + (n % 10 ? `-${ONES[n % 10]}` : '')
  if (n < 1000) {
    const rest = n % 100
    return `${ONES[Math.floor(n / 100)]} hundred${rest ? ` and ${numberWords(rest)}` : ''}`
  }
  const rest = n % 1000
  return `${numberWords(Math.floor(n / 1000))} thousand${rest ? (rest < 100 ? ' and ' : ' ') + numberWords(rest) : ''}`
}

export function ordinalWords(n: number): string {
  if (ORD[n]) return ORD[n]!
  if (n < 20) return `${ONES[n]}th`
  const t = Math.floor(n / 10)
  const o = n % 10
  if (o === 0) return `${TENS[t]!.replace(/y$/, 'ie')}th`
  return `${TENS[t]}-${ORD[o] ?? `${ONES[o]}th`}`
}

const pick = <T>(xs: readonly T[], rnd: () => number) => xs[Math.floor(rnd() * xs.length)]!

/** "W, H, I, T, C, O, M, B, E" — with "double T" for repeated letters, as people say on the phone. */
export function spellOut(word: string): string {
  const letters = word.toUpperCase().split('')
  const out: string[] = []
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i + 1]) {
      out.push(`double ${letters[i]}`)
      i++
    } else out.push(letters[i]!)
  }
  return out.join(', ')
}

/** Digits read the British way: 0 as "oh", pairs as "double". */
export function sayDigits(digits: string): string {
  const name = (d: string) => (d === '0' ? 'oh' : ONES[Number(d)]!)
  const out: string[] = []
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === digits[i + 1] && digits[i + 1] !== digits[i + 2]) {
      out.push(`double ${name(digits[i]!)}`)
      i++
    } else out.push(name(digits[i]!))
  }
  return out.join(' ')
}

export function makeItem(mode: DictationMode, rnd: () => number = Math.random): DictationItem {
  switch (mode) {
    case 'spelling': {
      const name = pick(SURNAMES, rnd)
      return {
        say: `The surname is ${name}. That's ${spellOut(name)}.`,
        answer: name,
        accept: [name],
      }
    }
    case 'phone': {
      const rest = Array.from({ length: 9 }, () => Math.floor(rnd() * 10)).join('')
      const num = `07${rest}`
      const groups = [num.slice(0, 5), num.slice(5, 8), num.slice(8)]
      return {
        say: `My number is ${groups.map(sayDigits).join(', ')}.`,
        answer: `${groups.join(' ')}`,
        accept: [num, groups.join(' ')],
      }
    }
    case 'postcode': {
      const L = 'ABCDEFGHJKLMNPRSTUWY'
      const area = pick(['BS', 'LS', 'CF', 'EH', 'NE', 'OX', 'M', 'G', 'B', 'SW'], rnd)
      const code = `${area}${1 + Math.floor(rnd() * 19)} ${Math.floor(rnd() * 10)}${pick(L.split(''), rnd)}${pick(L.split(''), rnd)}`
      const spoken = code
        .split('')
        .map((c) => (c === ' ' ? '…' : /\d/.test(c) ? ONES[Number(c)]! : c))
        .join(', ')
        .replace(/, …, /g, '… ')
      return {
        say: `It's ${pick(STREETS, rnd)}, and the postcode is ${spoken}.`,
        answer: code,
        accept: [code, code.replace(' ', '')],
      }
    }
    case 'dates': {
      const m = Math.floor(rnd() * 12)
      const d = 1 + Math.floor(rnd() * 28)
      const month = MONTHS[m]!
      const say =
        rnd() < 0.5
          ? `It starts on the ${ordinalWords(d)} of ${month}.`
          : `It starts on ${month} the ${ordinalWords(d)}.`
      return { say, answer: `${d} ${month}`, accept: [`${d} ${month}`] }
    }
    case 'prices': {
      const pounds = 3 + Math.floor(rnd() * 240)
      const pence = pick([0, 25, 50, 75, 95, 99, 45], rnd)
      const say = pence
        ? `That comes to ${numberWords(pounds)} pounds ${numberWords(pence)}.`
        : `That's ${numberWords(pounds)} pounds altogether.`
      const answer = pence ? `£${pounds}.${String(pence).padStart(2, '0')}` : `£${pounds}`
      return { say, answer, accept: [answer, answer.slice(1)] }
    }
    case 'teens': {
      const base = 3 + Math.floor(rnd() * 7)
      const n = rnd() < 0.5 ? 10 + base : base * 10
      const unit = pick(['minutes', 'people', 'kilometres', 'pounds', 'rooms'], rnd)
      return {
        say: `There will be about ${numberWords(n)} ${unit}.`,
        answer: String(n),
        accept: [String(n)],
      }
    }
  }
}
