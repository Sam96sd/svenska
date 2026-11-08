import { describe, expect, it } from 'vitest'
import {
  canonical,
  checkText,
  countWords,
  expandOptional,
  tfngReason,
  withinWordLimit,
  wordsToNumber,
} from './answerCheck'

const TWO_AND_NUMBER = { words: 2, number: true }
const ONE_WORD = { words: 1, number: false }
const A_NUMBER = { words: 0, number: true }

describe('answer checker', () => {
  it('ignores case, extra spaces and a final full stop', () => {
    expect(checkText('  The LIBRARY. ', ['the library']).correct).toBe(true)
    expect(checkText('Library', ['(the) library']).correct).toBe(true)
  })

  it('expands optional words in the key', () => {
    expect(expandOptional('(the) (old) mill')).toEqual([
      'the old mill',
      'the mill',
      'old mill',
      'mill',
    ])
  })

  it('accepts numbers as digits or words', () => {
    expect(wordsToNumber('two hundred and fifty')).toBe(250)
    expect(wordsToNumber('twenty-five')).toBe(25)
    expect(wordsToNumber('blue')).toBeNull()
    expect(checkText('fifteen', ['15']).correct).toBe(true)
    expect(checkText('15', ['fifteen']).correct).toBe(true)
    expect(checkText('1,500', ['1500']).correct).toBe(true)
    expect(checkText('£45', ['45']).correct).toBe(true)
    expect(checkText('45 per cent', ['45%']).correct).toBe(true)
  })

  it('treats dates and times written differently as equal', () => {
    expect(checkText('March 15th', ['15 March']).correct).toBe(true)
    expect(checkText('the 15th of March', ['15 March']).correct).toBe(false) // "of" is an extra word
    expect(checkText('9.30 am', ['9:30 a.m.']).correct).toBe(true)
    expect(checkText('9:30am', ['9.30 am']).correct).toBe(true)
  })

  it('accepts hyphenated words with or without the hyphen', () => {
    expect(checkText('part time', ['part-time']).correct).toBe(true)
    expect(checkText('part-time', ['part time']).correct).toBe(true)
    expect(checkText('well – known', ['well-known']).correct).toBe(true)
  })

  it('accepts American spellings of British keys, but not misspellings', () => {
    expect(checkText('color', ['colour']).correct).toBe(true)
    expect(checkText('organization', ['organisation']).correct).toBe(true)
    expect(checkText('center', ['centre']).correct).toBe(true)
    expect(checkText('traveled', ['travelled']).correct).toBe(true)
    expect(checkText('program', ['programme']).correct).toBe(true)
    expect(checkText('for', ['four']).correct).toBe(false)
    expect(checkText('acommodation', ['accommodation'])).toEqual({
      correct: false,
      reason: 'spelling',
    })
  })

  it('counts hyphenated words as one word and numbers separately', () => {
    expect(countWords('a well-known café')).toEqual({ words: 3, numbers: 0 })
    expect(countWords('15 March')).toEqual({ words: 1, numbers: 1 })
    expect(countWords('9.30 am')).toEqual({ words: 0, numbers: 1 })
    expect(countWords('£120')).toEqual({ words: 0, numbers: 1 })
    expect(countWords('07700 913 562')).toEqual({ words: 0, numbers: 1 })
    expect(countWords('five working days')).toEqual({ words: 2, numbers: 1 })
    expect(countWords('twenty-five')).toEqual({ words: 0, numbers: 1 })
  })

  it('applies word limits', () => {
    expect(withinWordLimit('city museum', TWO_AND_NUMBER)).toBe(true)
    expect(withinWordLimit('the city museum', TWO_AND_NUMBER)).toBe(false)
    expect(withinWordLimit('15 March', TWO_AND_NUMBER)).toBe(true)
    expect(withinWordLimit('15 March 2026', TWO_AND_NUMBER)).toBe(false)
    expect(withinWordLimit('museum', ONE_WORD)).toBe(true)
    expect(withinWordLimit('old museum', ONE_WORD)).toBe(false)
    expect(withinWordLimit('3,000', A_NUMBER)).toBe(true)
    expect(withinWordLimit('3,000 people', A_NUMBER)).toBe(false)
    expect(withinWordLimit('anything at all', undefined)).toBe(true)
  })

  it('marks a right answer over the word limit as wrong', () => {
    expect(
      checkText('the old mill', ['(the) old mill'], { wordLimit: { words: 2, number: false } }),
    ).toEqual({
      correct: false,
      reason: 'word-limit',
    })
    expect(
      checkText('old mill', ['(the) old mill'], { wordLimit: { words: 2, number: false } }).correct,
    ).toBe(true)
  })

  it('tags wrong answers with a reason', () => {
    expect(checkText('', ['x']).reason).toBe('blank')
    expect(checkText('Tuesday', ['Thursday'], { distractors: ['Tuesday'] }).reason).toBe(
      'distractor',
    )
    expect(checkText('bicycles', ['bicycle']).reason).toBe('plural')
    expect(checkText('a car park', ['parking area']).reason).toBe('paraphrase')
  })

  it('classifies True/False/Not Given mistakes', () => {
    expect(tfngReason('FALSE', 'NOT GIVEN')).toBe('ng-vs-false')
    expect(tfngReason('NOT GIVEN', 'NO')).toBe('ng-vs-false')
    expect(tfngReason('TRUE', 'NOT GIVEN')).toBe('assumed-true')
    expect(tfngReason('TRUE', 'FALSE')).toBe('misread')
    expect(tfngReason('', 'TRUE')).toBe('blank')
  })

  it('builds a stable canonical form', () => {
    expect(canonical('Twenty-Five')).toBe('25')
    expect(canonical('£ 1,200.')).toBe('1200')
  })
})
