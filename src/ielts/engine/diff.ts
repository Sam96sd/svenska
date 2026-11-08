/**
 * Word-level diff between the learner's text and the upgraded version, so changes can be
 * highlighted side by side. Longest-common-subsequence over word tokens (whitespace kept).
 */

export interface DiffPart {
  text: string
  changed: boolean
}

function tokens(text: string): string[] {
  return text.match(/\s+|[^\s]+/g) ?? []
}

const norm = (t: string) => t.toLowerCase().replace(/[.,;:!?"“”‘’()]/g, '')

/** Returns the two texts split into parts, with changed words flagged on each side. */
export function wordDiff(before: string, after: string): { before: DiffPart[]; after: DiffPart[] } {
  const a = tokens(before)
  const b = tokens(after)
  // Compare words only; whitespace tokens always count as equal.
  const aw = a.map((t, i) => ({ t, i })).filter((x) => !/^\s+$/.test(x.t))
  const bw = b.map((t, i) => ({ t, i })).filter((x) => !/^\s+$/.test(x.t))
  const n = aw.length
  const m = bw.length
  const dp: Uint16Array[] = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1))
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      dp[i]![j] =
        norm(aw[i]!.t) === norm(bw[j]!.t)
          ? dp[i + 1]![j + 1]! + 1
          : Math.max(dp[i + 1]![j]!, dp[i]![j + 1]!)

  const keepA = new Set<number>()
  const keepB = new Set<number>()
  let i = 0
  let j = 0
  while (i < n && j < m) {
    if (norm(aw[i]!.t) === norm(bw[j]!.t)) {
      keepA.add(aw[i]!.i)
      keepB.add(bw[j]!.i)
      i++
      j++
    } else if (dp[i + 1]![j]! >= dp[i]![j + 1]!) i++
    else j++
  }

  const build = (toks: string[], keep: Set<number>): DiffPart[] => {
    const out: DiffPart[] = []
    toks.forEach((t, idx) => {
      const changed = /^\s+$/.test(t)
        ? (out.at(-1)?.changed ?? false) && !keep.has(idx + 1)
        : !keep.has(idx)
      const last = out.at(-1)
      if (last && last.changed === changed) last.text += t
      else out.push({ text: t, changed })
    })
    return out
  }
  return { before: build(a, keepA), after: build(b, keepB) }
}

/** Share of the learner's words kept in the rewrite (0–1), to show how much changed. */
export function keptShare(before: string, after: string): number {
  const d = wordDiff(before, after)
  const words = (parts: DiffPart[], changed: boolean) =>
    parts
      .filter((p) => p.changed === changed)
      .reduce((n, p) => n + (p.text.match(/[^\s]+/g)?.length ?? 0), 0)
  const kept = words(d.before, false)
  const total = kept + words(d.before, true)
  return total ? kept / total : 1
}
