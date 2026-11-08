import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { wordDiff } from '../engine/diff'
import { GeminiError } from './gemini'
import { copyableWritingPrompt, writingSystemPrompt, type WritingTaskInput } from './prompts'
import { parseSpeakingFeedback, parseWritingFeedback, writingResponseSchema } from './schemas'

const T2: WritingTaskInput = {
  module: 'academic',
  task: 2,
  type: 'opinion',
  prompt: 'Some people think X. To what extent do you agree?',
}

const goodWriting = {
  criteria: [
    { id: 'tr', band: 7, evidence: ['I strongly believe'], comment: 'Clear position.' },
    { id: 'cc', band: 7.4, evidence: [], comment: '' },
    { id: 'lr', band: '6', evidence: ['big damage'], comment: 'Some errors.' },
    { id: 'gra', band: 11, evidence: [], comment: '' },
  ],
  overallBand: 7,
  summary: 'Good.',
  topChanges: [{ change: 'Add an example', why: 'Support', impact: 'huge' }],
  errors: [
    {
      original: 'a big damage',
      correction: 'considerable damage',
      type: 'collocation',
      explanation: 'x',
    },
  ],
  rewrite: 'Better essay.',
}

describe('Gemini response parsing', () => {
  it('accepts a structured writing result and repairs odd values', () => {
    const f = parseWritingFeedback(goodWriting, ['tr', 'cc', 'lr', 'gra'])
    expect(f.criteria.map((c) => c.band)).toEqual([7, 7.5, 6, 9])
    expect(f.topChanges[0]?.impact).toBe('medium')
    expect(f.vocabulary).toEqual({ overused: [], underused: [], collocations: [] })
    expect(f.memorisedPhrases).toEqual([])
    expect(f.offTopic).toBe(false)
  })

  it('puts criteria in the expected order', () => {
    const shuffled = { ...goodWriting, criteria: [...goodWriting.criteria].reverse() }
    expect(
      parseWritingFeedback(shuffled, ['tr', 'cc', 'lr', 'gra']).criteria.map((c) => c.id),
    ).toEqual(['tr', 'cc', 'lr', 'gra'])
  })

  it('rejects results without all criteria', () => {
    expect(() =>
      parseWritingFeedback({ ...goodWriting, criteria: goodWriting.criteria.slice(0, 3) }, [
        'tr',
        'cc',
        'lr',
        'gra',
      ]),
    ).toThrow(GeminiError)
    expect(() =>
      parseWritingFeedback(
        {
          ...goodWriting,
          criteria: goodWriting.criteria.map((c) => ({ ...c, id: c.id === 'tr' ? 'ta' : c.id })),
        },
        ['tr', 'cc', 'lr', 'gra'],
      ),
    ).toThrow(/missing a criterion/)
    expect(() => parseWritingFeedback({ nonsense: true }, ['tr', 'cc', 'lr', 'gra'])).toThrow(
      GeminiError,
    )
  })

  it('parses speaking results', () => {
    const f = parseSpeakingFeedback({
      transcript: 'Well, um, I live in…',
      criteria: ['p', 'gra', 'lr', 'fc'].map((id) => ({ id, band: 7, evidence: [], comment: '' })),
      overallBand: 7,
      pronunciation: [
        { issue: 'ed-ending', example: 'walk(ed)', tip: 'Release the /t/' },
        { issue: 'weird', example: '', tip: '' },
      ],
    })
    expect(f.criteria.map((c) => c.id)).toEqual(['fc', 'lr', 'gra', 'p'])
    expect(f.pronunciation[1]?.issue).toBe('other')
    expect(f.fluency.selfCorrections).toBe(0)
  })

  it('builds a schema that asks for the right criteria', () => {
    const s = writingResponseSchema(['ta', 'cc', 'lr', 'gra']) as unknown as {
      properties: { criteria: { items: { properties: { id: { enum: string[] } } } } }
    }
    expect(s.properties.criteria.items.properties.id.enum).toEqual(['ta', 'cc', 'lr', 'gra'])
  })

  it('writes calibration rules into the prompts', () => {
    const p = writingSystemPrompt(T2)
    expect(p).toMatch(/Do NOT inflate scores/)
    expect(p).toMatch(/memorised phrases/)
    expect(p).toMatch(/Return JSON only/)
    expect(copyableWritingPrompt(T2, 'essay', { words: 1, minutes: null })).not.toMatch(
      /Return JSON only/,
    )
  })
})

describe('gradeWriting', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.resetModules()
  })
  afterEach(() => vi.unstubAllGlobals())

  async function setup() {
    const keys = await import('./keys')
    const { gradeWriting } = await import('./grade')
    const actions = await import('../storage/actions')
    keys.updateAiConfig('p1', {
      freeKey: 'AIzaFREE',
      premiumKey: 'AIzaPRO',
      standard: { pick: { id: 'gemini-2.5-flash', warning: null }, models: [], at: 1 },
      pro: { pick: { id: 'gemini-2.5-pro', warning: null }, models: [], at: 1 },
    })
    const fetch = vi.fn(
      async (_url: string, _init?: RequestInit) =>
        new Response(
          JSON.stringify({
            candidates: [{ content: { parts: [{ text: JSON.stringify(goodWriting) }] } }],
            usageMetadata: {
              promptTokenCount: 2000,
              candidatesTokenCount: 3000,
              thoughtsTokenCount: 1000,
            },
          }),
        ),
    )
    vi.stubGlobal('fetch', fetch)
    return { gradeWriting, fetch, actions }
  }

  it('grades with the free key, then serves the same answer from the cache', async () => {
    const { gradeWriting, fetch } = await setup()
    const a = await gradeWriting({ profileId: 'p1', tier: 'standard' }, T2, 'My essay text.', {
      words: 3,
      minutes: 30,
    })
    expect(a.model).toBe('gemini-2.5-flash')
    expect(a.costUsd).toBe(0)
    expect((fetch.mock.calls[0]![1]!.headers as Record<string, string>)['x-goog-api-key']).toBe(
      'AIzaFREE',
    )
    const b = await gradeWriting({ profileId: 'p1', tier: 'standard' }, T2, 'My essay text.  ', {
      words: 3,
      minutes: 30,
    })
    expect(b.fromCache).toBe(true)
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('uses the premium key for Pro, records the spend, and asks near the cap', async () => {
    const { gradeWriting, fetch, actions } = await setup()
    const { getIeltsProfile } = await import('../storage/hooks')
    const r = await gradeWriting({ profileId: 'p1', tier: 'pro' }, T2, 'Essay one.', {
      words: 2,
      minutes: null,
    })
    expect((fetch.mock.calls[0]![1]!.headers as Record<string, string>)['x-goog-api-key']).toBe(
      'AIzaPRO',
    )
    expect(r.costUsd).toBeCloseTo((2000 * 1.25 + 4000 * 10) / 1e6)
    expect(actions.proSpendThisMonth(getIeltsProfile('p1'))).toBeCloseTo(r.costUsd)

    // Push spend over 80% of the default $8 cap: the next Pro call needs confirmation.
    actions.recordProSpend('p1', 7)
    await expect(
      gradeWriting({ profileId: 'p1', tier: 'pro' }, T2, 'Essay two.', { words: 2, minutes: null }),
    ).rejects.toThrow(/cancelled/)
    const confirmPro = vi.fn(() => true)
    await gradeWriting({ profileId: 'p1', tier: 'pro', confirmPro }, T2, 'Essay two.', {
      words: 2,
      minutes: null,
    })
    expect(confirmPro).toHaveBeenCalledOnce()
  })

  it('explains a missing key', async () => {
    const { gradeWriting } = await import('./grade')
    await expect(
      gradeWriting({ profileId: 'nobody', tier: 'standard' }, T2, 'x', { words: 1, minutes: null }),
    ).rejects.toThrow(/Add a free Gemini key/)
  })
})

describe('word diff', () => {
  it('flags changed words on both sides', () => {
    const d = wordDiff('Pollution make big damage.', 'Pollution causes considerable damage.')
    expect(d.before.filter((p) => p.changed).map((p) => p.text.trim())).toEqual(['make big'])
    expect(d.after.filter((p) => p.changed).map((p) => p.text.trim())).toEqual([
      'causes considerable',
    ])
    expect(d.after.map((p) => p.text).join('')).toBe('Pollution causes considerable damage.')
  })
})
