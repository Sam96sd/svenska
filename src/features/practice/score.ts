/** Encouraging Swedish headline (with English) for a 0–1 score. */
export function scoreHeadline(score: number): { sv: string; en: string } {
  if (score === 1) return { sv: 'Perfekt!', en: 'Perfect — no mistakes!' }
  if (score >= 0.8) return { sv: 'Bra jobbat!', en: 'Great job!' }
  if (score >= 0.5) return { sv: 'Snyggt!', en: 'Nicely done!' }
  return { sv: 'Bra kämpat!', en: 'Good effort — practice makes perfect!' }
}
