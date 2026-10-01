import { type Vocab } from './schema'

/** "en bil", "ett hus", "tala", "god morgon". */
export function svDisplay(v: Pick<Vocab, 'sv' | 'gender' | 'pos'>): string {
  return v.pos === 'noun' && v.gender ? `${v.gender} ${v.sv}` : v.sv
}

/** A compact line of inflected forms, e.g. "bilen · bilar · bilarna" or "talar · talade · har talat". */
export function formsLine(v: Vocab): string | null {
  const f = v.forms
  if (!f) return null
  if (v.pos === 'noun') {
    return [f.definite, f.plural, f.pluralDefinite].filter(Boolean).join(' · ') || null
  }
  if (v.pos === 'verb') {
    return (
      [f.present, f.past, f.supine && `har ${f.supine}`, f.imperative && `${f.imperative}!`]
        .filter(Boolean)
        .join(' · ') || null
    )
  }
  if (v.pos === 'adjective') {
    const base = [v.sv, f.neuter, f.plural].filter(Boolean).join(' · ')
    const degrees = [f.comparative, f.superlative].filter(Boolean).join(', ')
    return degrees ? `${base} (${degrees})` : base
  }
  return Object.values(f).filter(Boolean).join(' · ') || null
}

export const POS_LABEL: Record<Vocab['pos'], string> = {
  noun: 'noun',
  verb: 'verb',
  adjective: 'adjective',
  adverb: 'adverb',
  pronoun: 'pronoun',
  preposition: 'preposition',
  conjunction: 'conjunction',
  numeral: 'number',
  phrase: 'phrase',
  interjection: 'interjection',
  other: 'word',
}
