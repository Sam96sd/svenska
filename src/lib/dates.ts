export const DAY_MS = 24 * 60 * 60 * 1000

/** Local calendar day as YYYY-MM-DD. Streaks and daily XP are tracked per local day. */
export function dayKey(time: number | Date = Date.now()): string {
  const d = new Date(time)
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

/** Local midnight at the start of the given time's day. */
export function startOfDay(time: number): number {
  const d = new Date(time)
  d.setHours(0, 0, 0, 0)
  return d.getTime()
}

/** Local midnight `days` days after the start of `time`'s day (DST-safe). */
export function addDays(time: number, days: number): number {
  const d = new Date(startOfDay(time))
  d.setDate(d.getDate() + days)
  return d.getTime()
}

export function previousDayKey(key: string): string {
  const [y, m, d] = key.split('-').map(Number)
  return dayKey(new Date(y!, m! - 1, d! - 1))
}

/** The 7 day keys of the current week, Monday first (Swedish weeks start on Monday). */
export function weekDayKeys(time: number = Date.now()): string[] {
  const d = new Date(startOfDay(time))
  const offset = (d.getDay() + 6) % 7
  d.setDate(d.getDate() - offset)
  return Array.from({ length: 7 }, (_, i) => {
    const x = new Date(d)
    x.setDate(d.getDate() + i)
    return dayKey(x)
  })
}
