import { generate, parseJsonText } from './gemini'

/** A tiny structured call that proves the key, the model and JSON output all work. */
export async function testConnection(
  key: string,
  model: string,
  signal?: AbortSignal,
): Promise<{ ms: number; reply: string; model: string }> {
  const started = performance.now()
  const result = await generate({
    key,
    model,
    signal,
    parts: [
      {
        text: 'This is a connection test. Set ok to true and reply with a short friendly greeting (max 6 words) for an IELTS learner.',
      },
    ],
    responseSchema: {
      type: 'OBJECT',
      properties: { ok: { type: 'BOOLEAN' }, reply: { type: 'STRING' } },
      required: ['ok', 'reply'],
    },
  })
  const json = parseJsonText(result.text) as { ok?: unknown; reply?: unknown }
  return {
    ms: Math.round(performance.now() - started),
    reply: typeof json.reply === 'string' ? json.reply : 'OK',
    model: result.model,
  }
}
