import { describe, expect, it } from 'vitest'
import {
  criteriaBand,
  formatBand,
  overallBand,
  rawNeeded,
  rawToBand,
  roundBand,
  scaledBand,
  writingBand,
} from './scoring'

describe('raw score → band', () => {
  it('converts Listening scores (approximate table)', () => {
    const cases: Array<[number, number]> = [
      [40, 9],
      [39, 9],
      [38, 8.5],
      [37, 8.5],
      [36, 8],
      [35, 8],
      [34, 7.5],
      [32, 7.5],
      [31, 7],
      [30, 7],
      [29, 6.5],
      [26, 6.5],
      [25, 6],
      [23, 6],
    ]
    for (const [raw, band] of cases) expect(rawToBand(raw, 'listening', 'academic')).toBe(band)
    // Listening is the same test for both modules.
    expect(rawToBand(33, 'listening', 'general')).toBe(7.5)
  })

  it('converts Academic Reading scores', () => {
    const cases: Array<[number, number]> = [
      [40, 9],
      [39, 9],
      [38, 8.5],
      [37, 8.5],
      [36, 8],
      [35, 8],
      [34, 7.5],
      [33, 7.5],
      [32, 7],
      [30, 7],
      [29, 6.5],
      [27, 6.5],
      [26, 6],
      [23, 6],
    ]
    for (const [raw, band] of cases) expect(rawToBand(raw, 'reading', 'academic')).toBe(band)
  })

  it('converts General Training Reading scores', () => {
    const cases: Array<[number, number]> = [
      [40, 9],
      [39, 8.5],
      [38, 8],
      [37, 8],
      [36, 7.5],
      [35, 7],
      [34, 7],
      [33, 6.5],
      [32, 6.5],
      [31, 6],
      [30, 6],
    ]
    for (const [raw, band] of cases) expect(rawToBand(raw, 'reading', 'general')).toBe(band)
  })

  it('clamps and rounds odd input', () => {
    expect(rawToBand(55, 'listening', 'academic')).toBe(9)
    expect(rawToBand(-3, 'listening', 'academic')).toBe(0)
    expect(rawToBand(34.6, 'listening', 'academic')).toBe(8)
    expect(rawToBand(2, 'listening', 'academic')).toBe(2.5)
  })

  it('scales short sections to 40 questions', () => {
    expect(scaledBand(10, 10, 'listening', 'academic')).toBe(9)
    expect(scaledBand(8, 10, 'reading', 'academic')).toBe(7)
    expect(scaledBand(0, 0, 'reading', 'academic')).toBe(0)
  })

  it('gives the raw score needed for a target', () => {
    expect(rawNeeded(8, 'listening', 'academic')).toBe(35)
    expect(rawNeeded(8, 'reading', 'academic')).toBe(35)
    expect(rawNeeded(8, 'reading', 'general')).toBe(37)
    expect(rawNeeded(7, 'reading', 'general')).toBe(34)
    expect(rawNeeded(9.5, 'reading', 'general')).toBeNull()
  })
})

describe('band rounding', () => {
  it('rounds to the nearest half band, with .25 and .75 rounding up', () => {
    expect(roundBand(6.25)).toBe(6.5)
    expect(roundBand(6.75)).toBe(7)
    expect(roundBand(6.1)).toBe(6)
    expect(roundBand(6.125)).toBe(6)
    expect(roundBand(6.5)).toBe(6.5)
    expect(roundBand(6.625)).toBe(6.5)
    expect(roundBand(6.875)).toBe(7)
    expect(roundBand(9)).toBe(9)
  })

  it('computes the overall band as the rounded mean of four skills', () => {
    expect(overallBand({ listening: 6.5, reading: 6.5, writing: 5, speaking: 7 })).toBe(6.5) // 6.25
    expect(overallBand({ listening: 4, reading: 3.5, writing: 4, speaking: 4 })).toBe(4) // 3.875
    expect(overallBand({ listening: 6.5, reading: 6.5, writing: 6, speaking: 6 })).toBe(6.5) // 6.25
    expect(overallBand({ listening: 7, reading: 7, writing: 7, speaking: 6 })).toBe(7) // 6.75
    expect(overallBand({ listening: 8, reading: 8, writing: 7.5, speaking: 7.5 })).toBe(8) // 7.75
    expect(overallBand({ listening: 6, reading: 6, writing: 6, speaking: 6.5 })).toBe(6) // 6.125
  })

  it('weights Writing Task 2 twice as much as Task 1', () => {
    expect(writingBand(6, 7)).toBe(6.5) // 6.67
    expect(writingBand(8, 7)).toBe(7.5) // 7.33 → 7.5
    expect(writingBand(7, 7)).toBe(7)
  })

  it('averages criterion bands', () => {
    expect(criteriaBand([7, 7, 8, 8])).toBe(7.5)
    expect(criteriaBand([7, 7, 7, 8])).toBe(7.5) // 7.25
    expect(criteriaBand([6, 7, 7, 7])).toBe(7) // 6.75
    expect(criteriaBand([])).toBe(0)
  })

  it('formats bands', () => {
    expect(formatBand(7)).toBe('7')
    expect(formatBand(7.5)).toBe('7.5')
    expect(formatBand(null)).toBe('–')
  })
})
