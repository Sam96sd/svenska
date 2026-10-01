import { useEffect, useState } from 'react'
import { loadAllUnits, type LoadedUnit, type VocabEntry } from './course'

export interface CourseData {
  units: LoadedUnit[]
  vocab: VocabEntry[]
  byId: Map<string, VocabEntry>
}

let cached: CourseData | null = null

/** Loads every unit (lazily, once) for pages that need the whole course, like the dictionary. */
export function useCourseData(): CourseData | null {
  const [data, setData] = useState<CourseData | null>(cached)
  useEffect(() => {
    if (cached) return
    let alive = true
    loadAllUnits().then((units) => {
      const vocab = units.flatMap((u) =>
        u.lessons.flatMap((l) => l.vocab.map((v) => ({ ...v, unitId: u.meta.id, lessonId: l.id }))),
      )
      cached = { units, vocab, byId: new Map(vocab.map((v) => [v.id, v])) }
      if (alive) setData(cached)
    })
    return () => {
      alive = false
    }
  }, [])
  return data
}
