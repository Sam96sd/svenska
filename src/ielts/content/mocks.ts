import { type IeltsModule } from '../examSpec'

/**
 * Full mock tests. Academic N and General Training N share the same Listening and Speaking (as in
 * the real exam); Reading and Writing differ by module. Every id must exist with use: 'mock'
 * (checked by the catalog test), so mock material never appears in the Practice lists.
 */
export interface MockTest {
  id: string
  module: IeltsModule
  title: string
  /** Parts 1–4, each numbered 1–10 in its file; the mock renumbers them 1–40. */
  listening: [string, string, string, string]
  /** Passages/sections 1–3; renumbered 1–40. */
  reading: [string, string, string]
  writing: { task1: string; task2: string }
  speaking: { part1: string; cue: string }
}

export const MOCKS: MockTest[] = [
  {
    id: 'mock-ac-1',
    module: 'academic',
    title: 'Academic mock test 1',
    listening: ['m1-l1', 'm1-l2', 'm1-l3', 'm1-l4'],
    reading: ['m-ac1-p1', 'm-ac1-p2', 'm-ac1-p3'],
    writing: { task1: 'm-ac1-task1', task2: 'm-ac1-task2' },
    speaking: { part1: 'p1-mock1', cue: 'cue-mock1' },
  },
  {
    id: 'mock-ac-2',
    module: 'academic',
    title: 'Academic mock test 2',
    listening: ['m2-l1', 'm2-l2', 'm2-l3', 'm2-l4'],
    reading: ['m-ac2-p1', 'm-ac2-p2', 'm-ac2-p3'],
    writing: { task1: 'm-ac2-task1', task2: 'm-ac2-task2' },
    speaking: { part1: 'p1-mock2', cue: 'cue-mock2' },
  },
  {
    id: 'mock-gt-1',
    module: 'general',
    title: 'General Training mock test 1',
    listening: ['m1-l1', 'm1-l2', 'm1-l3', 'm1-l4'],
    reading: ['m-gt1-s1', 'm-gt1-s2', 'm-gt1-s3'],
    writing: { task1: 'm-gt1-task1', task2: 'm-gt1-task2' },
    speaking: { part1: 'p1-mock1', cue: 'cue-mock1' },
  },
  {
    id: 'mock-gt-2',
    module: 'general',
    title: 'General Training mock test 2',
    listening: ['m2-l1', 'm2-l2', 'm2-l3', 'm2-l4'],
    reading: ['m-gt2-s1', 'm-gt2-s2', 'm-gt2-s3'],
    writing: { task1: 'm-gt2-task1', task2: 'm-gt2-task2' },
    speaking: { part1: 'p1-mock2', cue: 'cue-mock2' },
  },
]

export const mocksFor = (module: IeltsModule) => MOCKS.filter((m) => m.module === module)

export function mockIds(m: MockTest): string[] {
  return [
    ...m.listening,
    ...m.reading,
    m.writing.task1,
    m.writing.task2,
    m.speaking.part1,
    m.speaking.cue,
  ]
}
