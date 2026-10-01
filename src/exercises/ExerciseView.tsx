import { type Exercise } from '../content/schema'
import { BuildSentence } from './BuildSentence'
import { DialogueReply } from './DialogueReply'
import { Dictation } from './Dictation'
import { FillGap } from './FillGap'
import { ListenChoose } from './ListenChoose'
import { MatchPairs } from './MatchPairs'
import { MinimalPairs } from './MinimalPairs'
import { MultipleChoice } from './MultipleChoice'
import { SpeakSentence } from './SpeakSentence'
import { TypeAnswer } from './TypeAnswer'
import { type ExerciseApi, type Verdict } from './types'

/** Renders any exercise by its type. */
export function ExerciseView({
  exercise,
  api,
  verdict,
}: {
  exercise: Exercise
  api: ExerciseApi
  verdict: Verdict | null
}) {
  switch (exercise.type) {
    case 'mcq':
      return <MultipleChoice exercise={exercise} api={api} verdict={verdict} />
    case 'listen':
      return <ListenChoose exercise={exercise} api={api} verdict={verdict} />
    case 'type':
      return <TypeAnswer exercise={exercise} api={api} verdict={verdict} />
    case 'dictation':
      return <Dictation exercise={exercise} api={api} verdict={verdict} />
    case 'build':
      return <BuildSentence exercise={exercise} api={api} verdict={verdict} />
    case 'match':
      return <MatchPairs exercise={exercise} api={api} verdict={verdict} />
    case 'gap':
      return <FillGap exercise={exercise} api={api} verdict={verdict} />
    case 'minimalPair':
      return <MinimalPairs exercise={exercise} api={api} verdict={verdict} />
    case 'speak':
      return <SpeakSentence exercise={exercise} api={api} verdict={verdict} />
    case 'dialogueReply':
      return <DialogueReply exercise={exercise} api={api} verdict={verdict} />
  }
}
