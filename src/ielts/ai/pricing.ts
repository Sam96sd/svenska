/**
 * Estimated Gemini API prices, used only for the "≈ $ used this month" meter and the soft cap.
 * EDIT THESE when Google changes its prices (https://ai.google.dev/gemini-api/docs/pricing).
 * Prices are US dollars per 1 million tokens. Thinking tokens are billed as output.
 *
 * Matching is by prefix of the model id, first match wins, so list specific ids first.
 */
export interface Price {
  /** Model id prefix, e.g. "gemini-2.5-pro". */
  match: string
  inputPerM: number
  outputPerM: number
  /** Audio input is often priced higher than text. */
  audioInputPerM?: number
}

export const PRICES: Price[] = [
  { match: 'gemini-3', inputPerM: 2.0, outputPerM: 12.0, audioInputPerM: 2.0 },
  { match: 'gemini-2.5-pro', inputPerM: 1.25, outputPerM: 10.0, audioInputPerM: 1.25 },
  { match: 'gemini-2.5-flash-lite', inputPerM: 0.1, outputPerM: 0.4, audioInputPerM: 0.3 },
  { match: 'gemini-2.5-flash', inputPerM: 0.3, outputPerM: 2.5, audioInputPerM: 1.0 },
]

/** Used when no row matches: deliberately on the high side, so the cap errs towards caution. */
export const FALLBACK_PRICE: Price = {
  match: '',
  inputPerM: 2.5,
  outputPerM: 15.0,
  audioInputPerM: 2.5,
}

export function priceFor(model: string): Price {
  return PRICES.find((p) => model.startsWith(p.match)) ?? FALLBACK_PRICE
}

/** Estimated cost of one call in US dollars. */
export function estimateCost(
  model: string,
  usage: { promptTokens: number; outputTokens: number; thoughtsTokens: number },
  opts: { audio?: boolean } = {},
): number {
  const p = priceFor(model)
  const input = opts.audio ? (p.audioInputPerM ?? p.inputPerM) : p.inputPerM
  return (
    (usage.promptTokens * input + (usage.outputTokens + usage.thoughtsTokens) * p.outputPerM) /
    1_000_000
  )
}
