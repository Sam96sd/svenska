import { type CueCard } from '../../content/schema'

/** The cue card as plain text (for the grader and the copyable prompt). */
export function cueText(c: CueCard): string {
  return [c.prompt, 'You should say:', ...c.points.map((p) => `- ${p}`), c.explain].join('\n')
}
