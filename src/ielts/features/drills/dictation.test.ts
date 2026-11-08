import { describe, expect, it } from 'vitest'
import { checkText } from '../../engine/answerCheck'
import {
  makeItem,
  MODE_LABEL,
  numberWords,
  ordinalWords,
  sayDigits,
  spellOut,
  type DictationMode,
} from './dictation'

function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

describe('dictation trainer', () => {
  it('says numbers and letters the way people do on the phone', () => {
    expect(numberWords(38)).toBe('thirty-eight')
    expect(numberWords(250)).toBe('two hundred and fifty')
    expect(ordinalWords(21)).toBe('twenty-first')
    expect(ordinalWords(30)).toBe('thirtieth')
    expect(ordinalWords(12)).toBe('twelfth')
    expect(spellOut('Lyttleton')).toBe('L, Y, double T, L, E, T, O, N')
    expect(sayDigits('07700')).toBe('oh double seven double oh')
  })

  it('accepts its own answers for every mode', () => {
    const rnd = seeded(42)
    for (const mode of Object.keys(MODE_LABEL) as DictationMode[])
      for (let i = 0; i < 25; i++) {
        const item = makeItem(mode, rnd)
        expect(checkText(item.answer, item.accept).correct, `${mode}: ${item.answer}`).toBe(true)
      }
  })

  it('accepts natural ways of typing prices, dates and phone numbers', () => {
    expect(checkText('14.50', ['£14.50', '14.50']).correct).toBe(true)
    expect(checkText('March 3rd', ['3 March']).correct).toBe(true)
    expect(checkText('07700 913562', ['07700913562']).correct).toBe(true)
  })
})
