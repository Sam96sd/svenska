import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  generate,
  GeminiError,
  listModels,
  parseJsonText,
  toGeminiError,
  withRetry,
} from './gemini'
import { parseModelId, pickProModel, pickStandardModel, type ModelInfo } from './models'
import { estimateCost } from './pricing'

const m = (id: string, methods = ['generateContent']): ModelInfo => ({
  id,
  displayName: id,
  methods,
  inputTokenLimit: null,
})

afterEach(() => vi.unstubAllGlobals())

describe('model selection', () => {
  it('parses standard model ids and rejects special-purpose ones', () => {
    expect(parseModelId('gemini-2.5-flash')).toMatchObject({
      tier: 'flash',
      channel: 'stable',
      alias: true,
    })
    expect(parseModelId('gemini-2.0-flash-001')).toMatchObject({ channel: 'stable', alias: false })
    expect(parseModelId('gemini-3-flash-preview')).toMatchObject({
      channel: 'preview',
      version: [3],
    })
    expect(parseModelId('gemini-2.5-flash-preview-09-2025')).toMatchObject({ channel: 'preview' })
    expect(parseModelId('gemini-2.5-flash-lite')).toMatchObject({ channel: 'lite' })
    expect(parseModelId('gemini-2.5-flash-lite-preview-06-17')).toMatchObject({ channel: 'lite' })
    for (const id of [
      'gemini-2.5-flash-image',
      'gemini-2.5-flash-preview-tts',
      'gemini-2.5-flash-native-audio-preview-09-2025',
      'gemini-live-2.5-flash',
      'gemini-flash-latest',
      'gemini-embedding-001',
      'gemma-3-27b-it',
      'gemini-2.5-flash-image-preview',
    ])
      expect(parseModelId(id)).toBeNull()
  })

  it('picks the newest stable Flash, skipping lite and preferring stable over preview', () => {
    const models = [
      m('gemini-2.0-flash'),
      m('gemini-2.5-flash'),
      m('gemini-2.5-flash-lite'),
      m('gemini-3-flash-preview'),
      m('gemini-3.5-flash-lite'),
      m('gemini-2.5-pro'),
      m('gemini-2.5-flash-preview-tts'),
    ]
    expect(pickStandardModel(models)).toEqual({ id: 'gemini-2.5-flash', warning: null })
  })

  it('prefers a newer stable version and the plain alias', () => {
    const models = [
      m('gemini-2.5-flash'),
      m('gemini-3.1-flash-001'),
      m('gemini-3.1-flash'),
      m('gemini-3-flash'),
    ]
    expect(pickStandardModel(models)?.id).toBe('gemini-3.1-flash')
  })

  it('falls back to preview, then to Flash-Lite with a warning', () => {
    expect(
      pickStandardModel([m('gemini-3-flash-preview'), m('gemini-2.5-flash-lite')]),
    ).toMatchObject({
      id: 'gemini-3-flash-preview',
    })
    const lite = pickStandardModel([m('gemini-2.5-flash-lite'), m('gemini-2.0-flash-lite')])
    expect(lite?.id).toBe('gemini-2.5-flash-lite')
    expect(lite?.warning).toMatch(/Flash-Lite/)
    expect(pickStandardModel([m('gemma-3-4b-it')])).toBeNull()
  })

  it('ignores models that cannot generate content', () => {
    expect(
      pickStandardModel([m('gemini-3-flash', ['countTokens']), m('gemini-2.5-flash')])?.id,
    ).toBe('gemini-2.5-flash')
  })

  it('picks the newest Pro model for the premium key, or falls back to Flash', () => {
    expect(
      pickProModel([m('gemini-2.5-pro'), m('gemini-3-pro-preview'), m('gemini-2.5-flash')])?.id,
    ).toBe('gemini-2.5-pro')
    expect(pickProModel([m('gemini-3-pro-preview'), m('gemini-2.5-flash')])?.id).toBe(
      'gemini-3-pro-preview',
    )
    const fb = pickProModel([m('gemini-2.5-flash')])
    expect(fb?.id).toBe('gemini-2.5-flash')
    expect(fb?.warning).toMatch(/No Pro model/)
  })
})

describe('Gemini client', () => {
  it('sends the key in a header, never in the URL', async () => {
    const fetch = vi.fn(
      async () =>
        new Response(
          JSON.stringify({
            models: [
              { name: 'models/gemini-2.5-flash', supportedGenerationMethods: ['generateContent'] },
            ],
          }),
        ),
    )
    vi.stubGlobal('fetch', fetch)
    const models = await listModels('AIzaSECRET')
    expect(models[0]?.id).toBe('gemini-2.5-flash')
    const [url, init] = fetch.mock.calls[0] as unknown as [string, RequestInit]
    expect(url).not.toContain('AIzaSECRET')
    expect((init.headers as Record<string, string>)['x-goog-api-key']).toBe('AIzaSECRET')
  })

  it('reads structured answers and token usage, skipping thought parts', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(
        async () =>
          new Response(
            JSON.stringify({
              candidates: [
                {
                  content: {
                    parts: [{ text: 'thinking…', thought: true }, { text: '{"ok":true}' }],
                  },
                },
              ],
              usageMetadata: {
                promptTokenCount: 10,
                candidatesTokenCount: 5,
                thoughtsTokenCount: 20,
                totalTokenCount: 35,
              },
            }),
          ),
      ),
    )
    const r = await generate({
      key: 'k',
      model: 'gemini-2.5-flash',
      parts: [{ text: 'hi' }],
      responseSchema: {},
    })
    expect(parseJsonText(r.text)).toEqual({ ok: true })
    expect(r.usage).toEqual({
      promptTokens: 10,
      outputTokens: 5,
      thoughtsTokens: 20,
      totalTokens: 35,
    })
  })

  it('classifies quota errors and reads the retry delay', async () => {
    const res = new Response(
      JSON.stringify({
        error: {
          code: 429,
          details: [
            {
              '@type': 'type.googleapis.com/google.rpc.QuotaFailure',
              violations: [{ quotaId: 'GenerateRequestsPerMinutePerProjectPerModel-FreeTier' }],
            },
            { '@type': 'type.googleapis.com/google.rpc.RetryInfo', retryDelay: '37s' },
          ],
        },
      }),
      { status: 429 },
    )
    const e = await toGeminiError(res)
    expect(e.kind).toBe('quota')
    expect(e.retryAfterMs).toBe(37_000)
    expect(e.daily).toBe(false)
    expect(e.retryable).toBe(true)
  })

  it('treats a used-up daily quota as not retryable', async () => {
    const res = new Response(
      JSON.stringify({
        error: {
          details: [
            { violations: [{ quotaId: 'GenerateRequestsPerDayPerProjectPerModel-FreeTier' }] },
          ],
        },
      }),
      { status: 429 },
    )
    const e = await toGeminiError(res)
    expect(e.daily).toBe(true)
    expect(e.retryable).toBe(false)
  })

  it('explains bad keys and referrer restrictions without echoing the key', async () => {
    const bad = await toGeminiError(
      new Response(
        JSON.stringify({
          error: {
            message: 'API key not valid. key=AIzaXYZ',
            details: [{ reason: 'API_KEY_INVALID' }],
          },
        }),
        { status: 400 },
      ),
    )
    expect(bad.kind).toBe('auth')
    expect(bad.message).not.toContain('AIza')
    const ref = await toGeminiError(
      new Response(
        JSON.stringify({ error: { details: [{ reason: 'API_KEY_HTTP_REFERRER_BLOCKED' }] } }),
        { status: 403 },
      ),
    )
    expect(ref.kind).toBe('referrer')
  })

  it('retries with exponential backoff, honouring the server delay', async () => {
    const waits: number[] = []
    let n = 0
    const result = await withRetry(
      async () => {
        n++
        if (n === 1) throw new GeminiError('overloaded', 'busy')
        if (n === 2) throw new GeminiError('quota', 'slow down', { retryAfterMs: 10_000 })
        return 'done'
      },
      { sleep: async (ms) => void waits.push(ms) },
    )
    expect(result).toBe('done')
    expect(waits).toEqual([2000, 10_000])
  })

  it('does not retry errors that will not go away', async () => {
    const sleep = vi.fn(async () => {})
    await expect(
      withRetry(async () => Promise.reject(new GeminiError('auth', 'bad key')), { sleep }),
    ).rejects.toThrow('bad key')
    expect(sleep).not.toHaveBeenCalled()
  })

  it('estimates call costs from the editable price table', () => {
    const usd = estimateCost('gemini-2.5-pro', {
      promptTokens: 1_000_000,
      outputTokens: 0,
      thoughtsTokens: 100_000,
    })
    expect(usd).toBeCloseTo(1.25 + 1.0)
  })
})
