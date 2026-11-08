/**
 * Picking a Gemini model from the ones an API key can use. Model ids are never hard-coded:
 * Google renames and retires models often, so the app lists them and chooses by pattern.
 *
 * - Standard tier ("Flash"): the newest stable `gemini-X.Y-flash`. `-lite` and special-purpose
 *   models (image, TTS, live, native audio…) are excluded; stable beats `-preview`. Flash-Lite is
 *   only a last resort, with a warning.
 * - Pro tier (premium key only): the newest `gemini-X.Y-pro`, else the best Flash.
 */

export interface ModelInfo {
  /** e.g. "gemini-2.5-flash" (without the "models/" prefix). */
  id: string
  displayName: string
  methods: string[]
  inputTokenLimit: number | null
}

export type Tier = 'flash' | 'pro'
export type Channel = 'stable' | 'preview' | 'lite'

export interface ParsedModel {
  id: string
  tier: Tier
  version: number[]
  channel: Channel
  /** True for the plain alias (gemini-2.5-flash) rather than a pinned one (…-001). */
  alias: boolean
}

const NAME = /^gemini-(\d+(?:\.\d+)*)-(flash|pro)(?:-(.+))?$/

/** Understands standard Gemini text models; returns null for anything else. */
export function parseModelId(id: string): ParsedModel | null {
  const m = NAME.exec(id)
  if (!m) return null
  const version = m[1]!.split('.').map(Number)
  const tier = m[2] as Tier
  const suffix = m[3]
  if (!suffix) return { id, tier, version, channel: 'stable', alias: true }
  if (/^\d{3}$/.test(suffix)) return { id, tier, version, channel: 'stable', alias: false }
  if (/^lite(?:$|-)/.test(suffix)) {
    // "lite", "lite-001" or "lite-preview-…"; special-purpose lite variants are excluded.
    if (/^lite(?:-\d{3}|-preview(?:-[\d-]+)?)?$/.test(suffix))
      return { id, tier, version, channel: 'lite', alias: suffix === 'lite' }
    return null
  }
  // "preview", "preview-09-2025", "exp-1206" — but not "preview-tts", "image-preview" etc.
  if (/^(?:preview|exp)(?:-[\d-]+)?$/.test(suffix))
    return { id, tier, version, channel: 'preview', alias: suffix === 'preview' }
  return null
}

function compareVersions(a: number[], b: number[]): number {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const d = (a[i] ?? 0) - (b[i] ?? 0)
    if (d !== 0) return d
  }
  return 0
}

/** Newest version first; at equal version, the plain alias before pinned/dated ids. */
function newestFirst(a: ParsedModel, b: ParsedModel): number {
  const v = compareVersions(b.version, a.version)
  if (v !== 0) return v
  if (a.alias !== b.alias) return a.alias ? -1 : 1
  return a.id < b.id ? 1 : -1
}

function usable(models: ModelInfo[]): ParsedModel[] {
  return models
    .filter((m) => m.methods.includes('generateContent'))
    .map((m) => parseModelId(m.id))
    .filter((m): m is ParsedModel => m !== null)
}

function best(models: ParsedModel[], tier: Tier, channel: Channel): ParsedModel | undefined {
  return models.filter((m) => m.tier === tier && m.channel === channel).sort(newestFirst)[0]
}

export interface Pick {
  id: string
  /** Shown to the user when the choice is a compromise. */
  warning: string | null
}

export function pickStandardModel(models: ModelInfo[]): Pick | null {
  const list = usable(models)
  const stable = best(list, 'flash', 'stable')
  if (stable) return { id: stable.id, warning: null }
  const preview = best(list, 'flash', 'preview')
  if (preview)
    return {
      id: preview.id,
      warning:
        'Only a preview Flash model is available to this key. Results may change without notice.',
    }
  const lite = best(list, 'flash', 'lite')
  if (lite)
    return {
      id: lite.id,
      warning:
        'No standard Flash model is available to this key, so Flash-Lite is used. Its grading is less reliable.',
    }
  return null
}

export function pickProModel(models: ModelInfo[]): Pick | null {
  const list = usable(models)
  const stable = best(list, 'pro', 'stable')
  if (stable) return { id: stable.id, warning: null }
  const preview = best(list, 'pro', 'preview')
  if (preview) return { id: preview.id, warning: null }
  const fallback = pickStandardModel(models)
  return fallback
    ? {
        id: fallback.id,
        warning: 'No Pro model is available to the premium key; using Flash instead.',
      }
    : null
}

/** Models offered in the manual override menu: every standard text model, newest first. */
export function selectableModels(models: ModelInfo[]): ParsedModel[] {
  return usable(models).sort((a, b) =>
    a.tier !== b.tier ? (a.tier === 'pro' ? -1 : 1) : newestFirst(a, b),
  )
}
