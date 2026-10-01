import { describe, expect, it } from 'vitest'
import { checkAnswer, levenshtein, normalize, similarity, stripAccents } from './answer'

describe('normalize', () => {
  it('ignores case, punctuation and extra spaces', () => {
    expect(normalize('  Hej,   hur MÅR du? ')).toBe('hej hur mår du')
    expect(normalize('Jag heter Anna.')).toBe('jag heter anna')
  })
  it('treats idag and i dag (and friends) as the same', () => {
    expect(normalize('Jag är ledig i dag.')).toBe(normalize('Jag är ledig idag'))
    expect(normalize('I morgon åker vi')).toBe('imorgon åker vi')
    expect(normalize('i kväll')).toBe('ikväll')
    expect(normalize('i dagarna')).toBe('i dagarna')
  })
  it('keeps å, ä and ö', () => {
    expect(normalize('ÅÄÖ')).toBe('åäö')
  })
  it('treats decomposed and composed å the same', () => {
    expect(normalize('å')).toBe('å')
  })
  it('drops a leading article or "to" in English', () => {
    expect(normalize('To speak', 'en')).toBe('speak')
    expect(normalize('the house', 'en')).toBe('house')
    expect(normalize('the house', 'sv')).toBe('the house')
  })
})

describe('levenshtein', () => {
  it('counts edits', () => {
    expect(levenshtein('kitten', 'sitting')).toBe(3)
    expect(levenshtein('', 'abc')).toBe(3)
    expect(levenshtein('bil', 'bil')).toBe(0)
    expect(levenshtein('ursäkta', 'ursäkat')).toBe(1)
  })
})

describe('checkAnswer', () => {
  it('accepts exact answers regardless of case and punctuation', () => {
    expect(checkAnswer('jag heter anna', ['Jag heter Anna.']).status).toBe('correct')
  })

  it('accepts alternatives', () => {
    const r = checkAnswer('hejsan', ['hej', 'hejsan'])
    expect(r).toEqual({ status: 'correct', expected: 'hejsan' })
  })

  it('flags missing å/ä/ö as almost', () => {
    const r = checkAnswer('jag mar bra', ['Jag mår bra'])
    expect(r.status).toBe('almost')
    expect(r.reason).toBe('accents')
    expect(r.expected).toBe('Jag mår bra')
  })

  it('forgives one typo in a medium word', () => {
    expect(checkAnswer('tackk', ['tack']).status).toBe('wrong') // short words: no tolerance
    expect(checkAnswer('ursäkat', ['ursäkta']).status).toBe('almost')
  })

  it('forgives two typos in a sentence', () => {
    expect(checkAnswer('jag drciker kafe', ['Jag dricker kaffe']).status).toBe('almost')
  })

  it('rejects clearly wrong answers', () => {
    expect(checkAnswer('hus', ['bil']).status).toBe('wrong')
    expect(checkAnswer('', ['bil']).status).toBe('wrong')
  })

  it('does not treat en/ett mix-ups as typos', () => {
    expect(checkAnswer('en hus', ['ett hus']).status).toBe('wrong')
  })

  it('strict mode has no typo tolerance but still ignores case', () => {
    expect(checkAnswer('stor', ['stort'], { strict: true }).status).toBe('wrong')
    expect(checkAnswer('STORT', ['stort'], { strict: true }).status).toBe('correct')
  })

  it('reject list overrides typo tolerance', () => {
    expect(checkAnswer('talar', ['talat'], { reject: ['talar'] }).status).toBe('wrong')
  })

  it('handles English answers', () => {
    expect(checkAnswer('to speak', ['speak'], { lang: 'en' }).status).toBe('correct')
    expect(checkAnswer('a car', ['car'], { lang: 'en' }).status).toBe('correct')
  })
})

describe('similarity', () => {
  it('is 1 for equal text and lower for different text', () => {
    expect(similarity('Hej, hur mår du?', 'hej hur mår du')).toBe(1)
    expect(similarity('hej hur mar du', 'hej hur mår du')).toBe(1)
    expect(similarity('hej', 'tack')).toBeLessThan(0.5)
  })
  it('strips accents', () => {
    expect(stripAccents('åäö é')).toBe('aao e')
  })
})
