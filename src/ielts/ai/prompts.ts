import {
  descriptorText,
  SPEAKING_CRITERIA,
  SPEAKING_CRITERIA_IDS,
  WRITING_CRITERIA,
  WRITING_TASK1_CRITERIA,
  WRITING_TASK2_CRITERIA,
} from '../criteria'
import { type IeltsModule, WRITING } from '../examSpec'

/** Bump when prompts change, so cached feedback from older prompts isn't reused. */
export const PROMPT_VERSION = 1

const CALIBRATION = `CALIBRATION RULES (follow strictly):
- You are a strict, experienced IELTS examiner. Score what is on the page, not what the writer probably meant.
- Do NOT inflate scores. Most candidates at this level score 6–7. Give Band 8 or higher only when the descriptors for that band are clearly met in the answer itself; give Band 9 almost never.
- Each criterion is scored independently, in whole bands (half bands only for the overall estimate).
- Penalise memorised phrases and templates ("In this day and age", "It is a well-known fact that", "Every coin has two sides"), idioms used for show, and anything off-topic or irrelevant.
- Penalise invented statistics presented as facts.
- Under the minimum word count, Task Achievement/Response cannot be above Band 5–6 depending on how short it is.
- Base every judgement on evidence: quote the learner's own words.
- Use British English in everything you write.
- Return JSON only, matching the schema exactly. No markdown, no extra text.`

export interface WritingTaskInput {
  module: IeltsModule
  task: 1 | 2
  /** e.g. "opinion", "line", "complaint". */
  type: string
  prompt: string
  bullets?: string[]
  /** Text description of the chart/diagram (Academic Task 1), so the model can check data accuracy. */
  chartData?: string
}

export function writingCriteriaIds(task: 1 | 2): string[] {
  return task === 1 ? WRITING_TASK1_CRITERIA : WRITING_TASK2_CRITERIA
}

function taskChecks(t: WritingTaskInput): string {
  if (t.task === 2)
    return `TASK CHECKS to report in "taskChecks":
- "All parts of the question answered" (count the parts of the prompt first)
- "Clear position throughout" (stated in the introduction and consistent to the conclusion)
- "Each body paragraph develops one main idea fully"
- "Specific, relevant examples (no invented statistics)"`
  if (t.module === 'academic')
    return `TASK CHECKS to report in "taskChecks":
- "Clear overview of the main trends/stages" (Academic Task 1 cannot reach Band 7+ in TA without one)
- "Key features selected and compared, not just listed"
- "Data reported accurately" (compare every figure with the data given below)
- "No opinions or reasons not shown in the visual"`
  return `TASK CHECKS to report in "taskChecks":
- "Tone right for the reader" (this letter should be ${t.type === 'complaint' || t.type === 'request' ? 'formal or semi-formal' : 'appropriate to the relationship'})
- "All three bullet points covered and developed"
- "Purpose clear in the first paragraph"
- "Appropriate opening and closing" (Dear Sir/Madam … Yours faithfully; Dear Mr X … Yours sincerely; Hi X … Best wishes/Love)`
}

export function writingSystemPrompt(t: WritingTaskInput): string {
  const ids = writingCriteriaIds(t.task) as Array<keyof typeof WRITING_CRITERIA>
  const descriptors = ids.map((id) => descriptorText(WRITING_CRITERIA[id])).join('\n\n')
  const minWords = t.task === 1 ? WRITING.task1.minWords : WRITING.task2.minWords
  const rewriteLength = t.task === 1 ? '170–200' : '270–310'
  return `You are a senior IELTS Writing examiner grading IELTS ${t.module === 'academic' ? 'Academic' : 'General Training'} Writing Task ${t.task}. Give accurate, calibrated band scores and practical feedback that helps a Band 6.5–7 learner reach Band 7.5–8.

THE FOUR CRITERIA (each worth 25%), paraphrased band descriptors:
${descriptors}

${CALIBRATION}

${taskChecks(t)}

WHAT TO RETURN
- "criteria": exactly these ids in this order: ${ids.join(', ')}. For each: band, 2–3 short evidence quotes copied exactly from the answer, and a one- or two-sentence comment.
- "overallBand": the mean of the four criteria rounded to the nearest half band (.25 rounds up, .75 rounds up).
- "summary": two sentences: the main strength, and the main thing holding the score back.
- "topChanges": the 3 changes that would raise the score by +0.5 most efficiently, ranked by impact, each specific to THIS answer.
- "errors": every sentence-level error you find (up to 25), with the original words, a correction, the error type and a short explanation.
- "vocabulary": words the learner overused, more precise words they could have used ("underused"), and collocations to upgrade (original → better).
- "memorisedPhrases": any template or memorised phrases you noticed (empty if none). "offTopic": true only if large parts are irrelevant.
- "rewrite": a Band 8–9 version of THE LEARNER'S OWN ANSWER: keep their ideas, structure and position, but upgrade language, cohesion and development. About ${rewriteLength} words. Keep paragraph breaks as blank lines. Do not add new statistics.
The minimum length is ${minWords} words.`
}

export function writingUserPrompt(
  t: WritingTaskInput,
  answer: string,
  meta: { words: number; minutes: number | null },
): string {
  return `TASK PROMPT:
${t.prompt}${t.bullets?.length ? `\n${t.bullets.map((b) => `- ${b}`).join('\n')}` : ''}${t.chartData ? `\n\nDATA SHOWN IN THE VISUAL (for checking accuracy):\n${t.chartData}` : ''}

LEARNER'S ANSWER (${meta.words} words${meta.minutes !== null ? `, written in ${meta.minutes} minutes` : ''}):
"""
${answer}
"""`
}

/** For the offline "Copy grading prompt" button: same instructions, readable output. */
export function copyableWritingPrompt(
  t: WritingTaskInput,
  answer: string,
  meta: { words: number; minutes: number | null },
): string {
  return `${writingSystemPrompt(t).replace(
    /Return JSON only, matching the schema exactly\. No markdown, no extra text\./,
    'Write your feedback as clear headings and bullet points (not JSON).',
  )}

${writingUserPrompt(t, answer, meta)}`
}

// ---------- Speaking ----------

export interface SpeakingInput {
  part: 1 | 2 | 3
  /** The question(s) the learner answered, or the cue card text. */
  questions: string[]
  seconds: number
}

export function speakingSystemPrompt(): string {
  const descriptors = SPEAKING_CRITERIA_IDS.map((id) => descriptorText(SPEAKING_CRITERIA[id])).join(
    '\n\n',
  )
  return `You are a senior IELTS Speaking examiner. You will hear a learner's recorded answer (audio). Transcribe it, then grade it accurately against the four Speaking criteria, and give practical feedback that helps a Band 6.5–7 speaker reach Band 7.5–8.

THE FOUR CRITERIA, paraphrased band descriptors:
${descriptors}

${CALIBRATION.replace('Score what is on the page', 'Score what you hear')}
- Pronunciation is judged from audio quality that may be imperfect (phone microphone). Be fair, but say what you actually hear.
- One short answer is limited evidence: be cautious with Band 8+.

WHAT TO RETURN
- "transcript": what the learner said, word for word, including fillers (um, er), repetitions and self-corrections. Mark long pauses as "…".
- "criteria": exactly fc, lr, gra, p in that order, each with band, 2–3 evidence quotes from the transcript (for p: describe the evidence) and a short comment.
- "overallBand": the mean rounded to the nearest half band.
- "summary": two sentences.
- "fluency": describe where and why they paused (word search or planning?), list filler words used, count self-corrections, and say how fully the answers were developed (answer → reason → example → contrast).
- "topChanges": the 3 changes that would raise the band by +0.5 most efficiently, for THIS answer.
- "upgrades": grammar and vocabulary upgrades (their words → a better version, and why).
- "pronunciation": specific notes on word stress, sentence stress, -ed/-s endings, chunking, intonation and individual sounds, each with an example from the recording and a tip. Arabic-speaking learners often confuse p/b, v/f and short vowels (ship/sheep, full/fool) and add vowels inside consonant clusters; check for these.
- "band8Version": how a Band 8 speaker might answer the same question(s), in a natural spoken style, similar length to theirs, keeping their ideas.`
}

export function speakingUserPrompt(s: SpeakingInput): string {
  const many = s.questions.length > 1
  return `IELTS Speaking Part ${s.part}. Total recording length: ${Math.round(s.seconds)} seconds.
${s.part === 2 ? 'CUE CARD' : many ? 'QUESTIONS (one recording per question, in order)' : 'QUESTION'}:
${s.questions.map((q, i) => (many ? `${i + 1}. ${q}` : q)).join('\n')}

The audio of the learner's answer${many ? 's is' : ' is'} attached.${many ? ' In the transcript, start each answer with its number, e.g. "1."' : ''}`
}

/** For the offline "Copy grading prompt" button: paste into a chatbot and attach the recording. */
export function copyableSpeakingPrompt(s: SpeakingInput): string {
  return `${speakingSystemPrompt().replace(
    /Return JSON only, matching the schema exactly\. No markdown, no extra text\./,
    'Write your feedback as clear headings and bullet points (not JSON).',
  )}

${speakingUserPrompt(s)}
(I will attach my recording to this message.)`
}
