/** Words of a sentence as tiles; the final full stop / question mark is dropped. */
export function tokenize(sentence: string): string[] {
  return sentence
    .trim()
    .replace(/[.!?]+$/, '')
    .split(/\s+/)
    .filter(Boolean)
}
