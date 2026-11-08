import { describe, expect, it } from 'vitest'
import { QuestionGroupSchema, screenOrder, type QuestionGroup } from '../content/schema'
import { answeredNumbers, markGroups } from './marking'

const loc = { ref: 'A', quote: 'some words here' }
const ex = 'Explanation that is long enough.'

const groups: QuestionGroup[] = [
  {
    type: 'tfng',
    questions: [
      { n: 1, statement: 'Statement one.', answer: 'TRUE', location: loc, explanation: ex },
      { n: 2, statement: 'Statement two.', answer: 'NOT GIVEN', location: loc, explanation: ex },
    ],
  },
  {
    type: 'headings',
    headings: [
      { key: 'i', text: 'One' },
      { key: 'ii', text: 'Two' },
      { key: 'iii', text: 'Three' },
    ],
    questions: [
      {
        n: 3,
        para: 'A',
        answer: 'ii',
        traps: { i: 'Only a detail of A.' },
        location: loc,
        explanation: ex,
      },
    ],
  },
  {
    type: 'mcq',
    questions: [
      {
        n: 4,
        prompt: 'Which one?',
        options: [
          { key: 'A', text: 'a' },
          { key: 'B', text: 'b' },
          { key: 'C', text: 'c' },
        ],
        answer: 'C',
        traps: { A: 'Mentioned, but rejected.' },
        location: loc,
        explanation: ex,
      },
    ],
  },
  {
    type: 'mcq-multi',
    questions: [
      {
        n: 5,
        n2: 6,
        prompt: 'Which TWO?',
        options: ['A', 'B', 'C', 'D', 'E'].map((k) => ({ key: k, text: k })),
        answers: ['B', 'D'],
        location: loc,
        explanation: ex,
      },
    ],
  },
  {
    type: 'completion',
    format: 'summary',
    wordBank: [
      { key: 'A', text: 'cost' },
      { key: 'B', text: 'speed' },
    ],
    body: [{ kind: 'text', text: 'It was the [[7]] that mattered.' }],
    questions: [{ n: 7, answers: ['B'], location: loc, explanation: ex }],
  },
  {
    type: 'completion',
    format: 'note',
    wordLimit: { words: 2, number: true },
    body: [{ kind: 'bullets', items: ['opens at [[9]]', 'in the [[8]]'] }],
    questions: [
      { n: 8, answers: ['(old) mill'], location: loc, explanation: ex },
      { n: 9, answers: ['9.30 am'], distractors: ['10 am'], location: loc, explanation: ex },
    ],
  },
].map((g) => QuestionGroupSchema.parse(g))

describe('marking', () => {
  it('marks every type and tags the reasons', () => {
    const m = markGroups(groups, {
      1: 'TRUE',
      2: 'FALSE',
      3: 'i',
      4: 'A',
      5: 'B,E',
      7: 'B',
      8: 'the old mill',
      9: '10 am',
    })
    const by = Object.fromEntries(m.questions.map((q) => [q.n, q]))
    expect(by[1]?.correct).toBe(true)
    expect(by[2]?.reason).toBe('ng-vs-false')
    expect(by[3]).toMatchObject({
      correct: false,
      reason: 'detail-heading',
      trapNote: 'Only a detail of A.',
    })
    expect(by[4]).toMatchObject({ correct: false, reason: 'distractor' })
    // One of two right in "choose TWO": one mark.
    expect(by[5]?.correct).toBe(true)
    expect(by[6]).toMatchObject({ correct: false, reason: 'partly-correct' })
    expect(by[7]?.correct).toBe(true)
    expect(by[8]).toMatchObject({ correct: false, reason: 'word-limit' })
    expect(by[9]).toMatchObject({ correct: false, reason: 'distractor' })
    expect(m.total).toBe(9)
    expect(m.correct).toBe(3)
  })

  it('gives two marks when both "choose TWO" answers are right, in any order', () => {
    const m = markGroups(groups, { 5: 'D,B' })
    expect(m.questions.filter((q) => q.n === 5 || q.n === 6).every((q) => q.correct)).toBe(true)
  })

  it('treats blanks as wrong with reason "blank"', () => {
    const m = markGroups(groups, {})
    expect(m.correct).toBe(0)
    expect(m.questions.every((q) => q.reason === 'blank')).toBe(true)
  })

  it('lists questions in screen order and counts answered ones', () => {
    expect(screenOrder(groups)).toEqual([1, 2, 3, 4, 5, 6, 7, 9, 8])
    expect([...answeredNumbers(groups, { 5: 'A', 1: 'TRUE' })].sort()).toEqual([1, 5])
    expect([...answeredNumbers(groups, { 5: 'A,C' })].sort()).toEqual([5, 6])
  })
})
