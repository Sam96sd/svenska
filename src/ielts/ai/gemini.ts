import { type ModelInfo } from './models'

/**
 * A minimal Gemini REST client, called straight from the browser (no backend).
 * The API key goes in the `x-goog-api-key` header, never in the URL, so it doesn't end up in
 * browser history, proxies or logs. Error messages never contain the key.
 */

export const GEMINI_API = 'https://generativelanguage.googleapis.com/v1beta'

export type GeminiErrorKind =
  'auth' | 'referrer' | 'quota' | 'overloaded' | 'network' | 'blocked' | 'bad-response' | 'other'

export class GeminiError extends Error {
  readonly kind: GeminiErrorKind
  /** How long the API asked us to wait before retrying, if it said. */
  readonly retryAfterMs: number | null
  /** A daily quota is used up: retrying today won't help. */
  readonly daily: boolean
  readonly status: number | null

  constructor(
    kind: GeminiErrorKind,
    message: string,
    opts: { retryAfterMs?: number | null; daily?: boolean; status?: number | null } = {},
  ) {
    super(message)
    this.name = 'GeminiError'
    this.kind = kind
    this.retryAfterMs = opts.retryAfterMs ?? null
    this.daily = opts.daily ?? false
    this.status = opts.status ?? null
  }

  get retryable(): boolean {
    return (
      (this.kind === 'quota' && !this.daily) ||
      this.kind === 'overloaded' ||
      this.kind === 'network'
    )
  }
}

interface ErrorBody {
  error?: {
    code?: number
    message?: string
    status?: string
    details?: Array<{
      '@type'?: string
      retryDelay?: string
      reason?: string
      violations?: Array<{ quotaId?: string }>
    }>
  }
}

function parseDelay(value: string | undefined): number | null {
  const m = value ? /^(\d+(?:\.\d+)?)s$/.exec(value) : null
  return m ? Math.ceil(Number(m[1]) * 1000) : null
}

/** Turns an HTTP error into a friendly GeminiError. Exported for tests. */
export async function toGeminiError(res: Response): Promise<GeminiError> {
  let body: ErrorBody = {}
  try {
    body = (await res.json()) as ErrorBody
  } catch {
    // Not JSON: fall back to the status code.
  }
  const details = body.error?.details ?? []
  const reasons = details.map((d) => d.reason).filter(Boolean)
  const status = res.status
  const text = body.error?.message ?? ''

  if (reasons.includes('API_KEY_HTTP_REFERRER_BLOCKED'))
    return new GeminiError(
      'referrer',
      'Google blocked this request because of the key’s website restriction. Add this site’s address to the key’s allowed referrers in Google Cloud Console.',
      { status },
    )
  if (
    reasons.includes('API_KEY_INVALID') ||
    status === 401 ||
    (status === 400 && /api key/i.test(text))
  )
    return new GeminiError(
      'auth',
      'Google didn’t accept this API key. Check that it was pasted in full.',
      {
        status,
      },
    )
  if (status === 403)
    return new GeminiError(
      'auth',
      'This key isn’t allowed to use the Gemini API. Make sure the “Generative Language API” is enabled for its project.',
      { status },
    )
  if (status === 429) {
    const retry = parseDelay(details.find((d) => d.retryDelay)?.retryDelay)
    const quotaIds = details.flatMap((d) => d.violations ?? []).map((v) => v.quotaId ?? '')
    const daily = quotaIds.some((q) => /PerDay/i.test(q))
    return new GeminiError(
      'quota',
      daily
        ? 'Today’s free Gemini quota for this model is used up. It resets at midnight Pacific time; until then you can use the offline grading tools.'
        : 'Gemini’s free tier allows only a few requests per minute. Waiting a moment and trying again…',
      { retryAfterMs: retry, daily, status },
    )
  }
  if (status === 500 || status === 502 || status === 503 || status === 504)
    return new GeminiError('overloaded', 'Gemini is busy right now. Trying again shortly…', {
      status,
      retryAfterMs: null,
    })
  if (status === 404)
    return new GeminiError(
      'other',
      'This Gemini model isn’t available any more. Re-detect models in Settings → AI.',
      { status },
    )
  if (status === 413 || (status === 400 && /too large|exceeds/i.test(text)))
    return new GeminiError(
      'other',
      'That’s too much to send in one request (try a shorter recording).',
      {
        status,
      },
    )
  return new GeminiError('other', `Gemini answered with an error (${status}).`, { status })
}

async function call(
  key: string,
  path: string,
  init: RequestInit & { signal?: AbortSignal } = {},
): Promise<Response> {
  if (!key.trim()) throw new GeminiError('auth', 'Add a Gemini API key in Settings → AI first.')
  let res: Response
  try {
    res = await fetch(`${GEMINI_API}${path}`, {
      ...init,
      headers: {
        'x-goog-api-key': key.trim(),
        ...(init.body ? { 'Content-Type': 'application/json' } : {}),
      },
    })
  } catch (e) {
    if (e instanceof DOMException && e.name === 'AbortError') throw e
    throw new GeminiError('network', 'Couldn’t reach Gemini. Check your internet connection.')
  }
  if (!res.ok) throw await toGeminiError(res)
  return res
}

interface ListResponse {
  models?: Array<{
    name?: string
    displayName?: string
    supportedGenerationMethods?: string[]
    inputTokenLimit?: number
  }>
  nextPageToken?: string
}

/** Every model this key can use. */
export async function listModels(key: string, signal?: AbortSignal): Promise<ModelInfo[]> {
  const out: ModelInfo[] = []
  let token: string | undefined
  for (let page = 0; page < 10; page++) {
    const q = new URLSearchParams({ pageSize: '1000' })
    if (token) q.set('pageToken', token)
    const res = await call(key, `/models?${q.toString()}`, { signal })
    const body = (await res.json()) as ListResponse
    for (const m of body.models ?? []) {
      if (!m.name) continue
      out.push({
        id: m.name.replace(/^models\//, ''),
        displayName: m.displayName ?? m.name,
        methods: m.supportedGenerationMethods ?? [],
        inputTokenLimit: m.inputTokenLimit ?? null,
      })
    }
    token = body.nextPageToken
    if (!token) break
  }
  return out
}

export type Part = { text: string } | { inlineData: { mimeType: string; data: string } }

export interface GenerateRequest {
  key: string
  model: string
  system?: string
  parts: Part[]
  /** OpenAPI-subset schema for structured JSON output. */
  responseSchema?: object
  temperature?: number
  maxOutputTokens?: number
  signal?: AbortSignal
}

export interface Usage {
  promptTokens: number
  outputTokens: number
  /** "Thinking" tokens are billed as output tokens. */
  thoughtsTokens: number
  totalTokens: number
}

export interface GenerateResult {
  text: string
  usage: Usage
  model: string
}

interface GenerateResponse {
  candidates?: Array<{
    content?: { parts?: Array<{ text?: string; thought?: boolean }> }
    finishReason?: string
  }>
  promptFeedback?: { blockReason?: string }
  usageMetadata?: {
    promptTokenCount?: number
    candidatesTokenCount?: number
    thoughtsTokenCount?: number
    totalTokenCount?: number
  }
  modelVersion?: string
}

/** Pulls the answer text and token counts out of a generateContent response. */
export function readGenerateResponse(body: GenerateResponse, model: string): GenerateResult {
  if (body.promptFeedback?.blockReason)
    throw new GeminiError('blocked', 'Gemini declined to process this request.')
  const candidate = body.candidates?.[0]
  if (!candidate) throw new GeminiError('bad-response', 'Gemini returned an empty answer.')
  if (candidate.finishReason === 'SAFETY' || candidate.finishReason === 'PROHIBITED_CONTENT')
    throw new GeminiError('blocked', 'Gemini declined to answer (safety filter).')
  const text = (candidate.content?.parts ?? [])
    .filter((p) => !p.thought && typeof p.text === 'string')
    .map((p) => p.text)
    .join('')
  if (!text) {
    if (candidate.finishReason === 'MAX_TOKENS')
      throw new GeminiError('bad-response', 'Gemini ran out of room before it finished the answer.')
    throw new GeminiError('bad-response', 'Gemini returned an empty answer.')
  }
  const u = body.usageMetadata ?? {}
  return {
    text,
    model: body.modelVersion ?? model,
    usage: {
      promptTokens: u.promptTokenCount ?? 0,
      outputTokens: u.candidatesTokenCount ?? 0,
      thoughtsTokens: u.thoughtsTokenCount ?? 0,
      totalTokens: u.totalTokenCount ?? 0,
    },
  }
}

export async function generate(req: GenerateRequest): Promise<GenerateResult> {
  const generationConfig: Record<string, unknown> = {}
  if (req.responseSchema) {
    generationConfig.responseMimeType = 'application/json'
    generationConfig.responseSchema = req.responseSchema
  }
  if (req.temperature !== undefined) generationConfig.temperature = req.temperature
  if (req.maxOutputTokens !== undefined) generationConfig.maxOutputTokens = req.maxOutputTokens

  const body = {
    ...(req.system ? { systemInstruction: { parts: [{ text: req.system }] } } : {}),
    contents: [{ role: 'user', parts: req.parts }],
    generationConfig,
  }
  const res = await call(req.key, `/models/${encodeURIComponent(req.model)}:generateContent`, {
    method: 'POST',
    body: JSON.stringify(body),
    signal: req.signal,
  })
  return readGenerateResponse((await res.json()) as GenerateResponse, req.model)
}

/** JSON from a structured response. Some models wrap it in a ```json fence; strip that. */
export function parseJsonText(text: string): unknown {
  const trimmed = text
    .trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/, '')
  try {
    return JSON.parse(trimmed)
  } catch {
    throw new GeminiError('bad-response', 'Gemini’s answer wasn’t valid JSON.')
  }
}

export interface RetryOptions {
  retries?: number
  /** Called before each wait, so the UI can show a countdown. */
  onWait?: (ms: number, attempt: number, error: GeminiError) => void
  signal?: AbortSignal
  sleep?: (ms: number, signal?: AbortSignal) => Promise<void>
}

function defaultSleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(resolve, ms)
    signal?.addEventListener(
      'abort',
      () => {
        clearTimeout(t)
        reject(new DOMException('Aborted', 'AbortError'))
      },
      { once: true },
    )
  })
}

/** Exponential backoff (2 s, 4 s, 8 s…, or what the API asked for) for retryable errors. */
export async function withRetry<T>(fn: () => Promise<T>, opts: RetryOptions = {}): Promise<T> {
  const retries = opts.retries ?? 3
  const sleep = opts.sleep ?? defaultSleep
  for (let attempt = 0; ; attempt++) {
    try {
      return await fn()
    } catch (e) {
      if (!(e instanceof GeminiError) || !e.retryable || attempt >= retries) throw e
      const backoff = 2000 * 2 ** attempt
      const ms = Math.min(90_000, Math.max(backoff, e.retryAfterMs ?? 0))
      opts.onWait?.(ms, attempt + 1, e)
      await sleep(ms, opts.signal)
    }
  }
}
