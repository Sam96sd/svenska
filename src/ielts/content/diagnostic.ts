import { type IeltsModule } from '../examSpec'

/**
 * The placement diagnostic (about 45 minutes): one listening part, one reading passage for the
 * learner's module, one Task 2 essay and one Part 2 cue card. Ids must exist in the catalog
 * (checked by the catalog test).
 */
export const DIAGNOSTIC = {
  listening: 'l3-group-project',
  reading: { academic: 'ac-standard-time', general: 'gt2-warehouse-induction' } satisfies Record<
    IeltsModule,
    string
  >,
  writing: 't2-news-social-media',
  speaking: 'cue-admired-person',
} as const

export function diagnosticIds(module: IeltsModule): string[] {
  return [DIAGNOSTIC.listening, DIAGNOSTIC.reading[module], DIAGNOSTIC.writing, DIAGNOSTIC.speaking]
}
