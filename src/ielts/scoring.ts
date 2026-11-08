import { type IeltsModule, type Skill } from './examSpec'

/**
 * Band scores. Raw-score tables are APPROXIMATE: the real conversion varies a little from one
 * test version to the next. Rows from Band 6 up follow widely published conversions; the
 * lower rows are rougher estimates.
 */
export const RAW_TABLE_NOTE = 'Approximate — the exact conversion varies per test version.'

/** [minimum raw score out of 40, band], highest band first. */
type RawTable = ReadonlyArray<readonly [number, number]>

export const LISTENING_TABLE: RawTable = [
  [39, 9],
  [37, 8.5],
  [35, 8],
  [32, 7.5],
  [30, 7],
  [26, 6.5],
  [23, 6],
  [18, 5.5],
  [16, 5],
  [13, 4.5],
  [10, 4],
  [8, 3.5],
  [6, 3],
]

export const ACADEMIC_READING_TABLE: RawTable = [
  [39, 9],
  [37, 8.5],
  [35, 8],
  [33, 7.5],
  [30, 7],
  [27, 6.5],
  [23, 6],
  [19, 5.5],
  [15, 5],
  [13, 4.5],
  [10, 4],
  [8, 3.5],
  [6, 3],
]

export const GENERAL_READING_TABLE: RawTable = [
  [40, 9],
  [39, 8.5],
  [37, 8],
  [36, 7.5],
  [34, 7],
  [32, 6.5],
  [30, 6],
  [27, 5.5],
  [23, 5],
  [19, 4.5],
  [15, 4],
  [12, 3.5],
  [9, 3],
]

export type ObjectiveSkill = Extract<Skill, 'listening' | 'reading'>

export function rawTable(skill: ObjectiveSkill, module: IeltsModule): RawTable {
  if (skill === 'listening') return LISTENING_TABLE
  return module === 'academic' ? ACADEMIC_READING_TABLE : GENERAL_READING_TABLE
}

/** Band for a raw score out of 40. Scores below the table give Band 2.5 (very rough). */
export function rawToBand(raw: number, skill: ObjectiveSkill, module: IeltsModule): number {
  const r = Math.max(0, Math.min(40, Math.round(raw)))
  for (const [min, band] of rawTable(skill, module)) if (r >= min) return band
  return r > 0 ? 2.5 : 0
}

/** Band for a section that isn't 40 questions long (drills, short diagnostic sections). */
export function scaledBand(
  correct: number,
  total: number,
  skill: ObjectiveSkill,
  module: IeltsModule,
): number {
  if (total <= 0) return 0
  return rawToBand((correct / total) * 40, skill, module)
}

/** The lowest raw score (out of 40) that reaches `band`, or null if no raw score does. */
export function rawNeeded(band: number, skill: ObjectiveSkill, module: IeltsModule): number | null {
  const rows = rawTable(skill, module).filter(([, b]) => b >= band)
  if (rows.length === 0) return null
  return Math.min(...rows.map(([min]) => min))
}

/**
 * Rounds to the nearest half band the way IELTS reports the overall score:
 * a fraction of .25 rounds up to .5, and .75 rounds up to the next whole band.
 * 6.1 → 6, 6.25 → 6.5, 6.6 → 6.5, 6.75 → 7.
 */
export function roundBand(value: number): number {
  // Work in quarters with a small tolerance, so 6.2499999 from float maths still counts as 6.25.
  const whole = Math.floor(value + 1e-9)
  const frac = value - whole
  if (frac >= 0.75 - 1e-9) return whole + 1
  if (frac >= 0.25 - 1e-9) return whole + 0.5
  return whole
}

/** Overall band: the mean of the four skill bands, rounded to the nearest half band. */
export function overallBand(bands: Record<Skill, number>): number {
  const { listening, reading, writing, speaking } = bands
  return roundBand((listening + reading + writing + speaking) / 4)
}

/** Mean of a task's four criterion bands (each criterion counts 25%). */
export function criteriaBand(criteria: readonly number[]): number {
  if (criteria.length === 0) return 0
  return roundBand(criteria.reduce((a, b) => a + b, 0) / criteria.length)
}

/**
 * Writing band from the two task bands: Task 2 carries twice the weight of Task 1.
 * This mirrors how examiners combine the tasks, but the official method isn't published
 * in full, so treat it as an estimate.
 */
export function writingBand(task1: number, task2: number): number {
  return roundBand((task1 + 2 * task2) / 3)
}

/** "7", "7.5" — bands always show one decimal only when there is a half. */
export function formatBand(band: number | null | undefined): string {
  if (band === null || band === undefined || Number.isNaN(band)) return '–'
  return Number.isInteger(band) ? String(band) : band.toFixed(1)
}
