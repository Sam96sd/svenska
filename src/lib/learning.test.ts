import { describe, expect, it } from 'vitest'
import { makeProfile } from './storage/actions'
import {
  applyLessonResult,
  applyReview,
  cardId,
  dueCardIds,
  lessonXp,
  weakVocabIds,
} from './learning'

const NOW = new Date(2026, 5, 1, 12).getTime()

describe('lessons', () => {
  it('computes XP with a perfect bonus and halves replays', () => {
    expect(lessonXp(10, 10, false)).toBe(10 + 30 + 10)
    expect(lessonXp(8, 10, false)).toBe(10 + 24)
    expect(lessonXp(10, 10, true)).toBe(25)
  })

  it('records completion, adds review cards and XP', () => {
    const p = applyLessonResult(
      makeProfile('A', '#000'),
      {
        lessonId: 'u01-l01',
        score: 0.8,
        xp: 40,
        vocabIds: ['hej', 'tack'],
        mistakeVocabIds: ['tack'],
      },
      NOW,
    )
    expect(p.lessons['u01-l01']).toMatchObject({ bestScore: 0.8, attempts: 1 })
    expect(Object.keys(p.srs)).toEqual([cardId('hej'), cardId('tack')])
    expect(dueCardIds(p, NOW)).toEqual([cardId('tack')]) // struggled → due now
    expect(p.xp).toBe(40)
    expect(p.mistakes.tack?.count).toBe(1)
  })

  it('keeps the best score and existing cards on replay', () => {
    let p = makeProfile('A', '#000')
    const r = { lessonId: 'l', score: 0.9, xp: 10, vocabIds: ['hej'], mistakeVocabIds: [] }
    p = applyLessonResult(p, r, NOW)
    const card = p.srs[cardId('hej')]
    p = applyLessonResult(p, { ...r, score: 0.5 }, NOW + 1000)
    expect(p.lessons.l).toMatchObject({ bestScore: 0.9, attempts: 2 })
    expect(p.srs[cardId('hej')]).toEqual(card)
  })
})

describe('reviews', () => {
  it('reschedules the card, tracks weak words and awards XP', () => {
    let p = applyLessonResult(
      makeProfile('A', '#000'),
      { lessonId: 'l', score: 1, xp: 0, vocabIds: ['hej'], mistakeVocabIds: [] },
      NOW,
    )
    p = applyReview(p, cardId('hej'), 'again', NOW)
    expect(weakVocabIds(p)).toEqual(['hej'])
    expect(p.srs[cardId('hej')]?.lapses).toBe(1)
    p = applyReview(p, cardId('hej'), 'good', NOW)
    expect(weakVocabIds(p)).toEqual([])
    expect(p.xp).toBe(2)
  })
})
