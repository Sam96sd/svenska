import { useSyncExternalStore } from 'react'
import { type CueCard, type WritingTask } from '../content/schema'
import { type GeneratedLetter, type GeneratedSpeaking, type GeneratedTask2 } from './generators'

/*
 * AI-generated practice items, kept on this device only (a per-device convenience, like the
 * writing drafts). They're labelled as AI-generated and never replace the hand-written content.
 */

export type GeneratedItem =
  | { id: string; kind: 'task2'; createdAt: number; data: GeneratedTask2 }
  | { id: string; kind: 'letter'; createdAt: number; data: GeneratedLetter }
  | { id: string; kind: 'speaking'; createdAt: number; data: GeneratedSpeaking }

const key = (profileId: string) => `ielts:generated:${profileId}`
const listeners = new Set<() => void>()
const cache = new Map<string, GeneratedItem[]>()

function read(profileId: string): GeneratedItem[] {
  const hit = cache.get(profileId)
  if (hit) return hit
  let list: GeneratedItem[] = []
  try {
    const raw = localStorage.getItem(key(profileId))
    if (raw) list = JSON.parse(raw) as GeneratedItem[]
  } catch {
    // Unreadable: start empty.
  }
  cache.set(profileId, list)
  return list
}

export function saveGenerated(profileId: string, item: GeneratedItem) {
  const next = [item, ...read(profileId)].slice(0, 30)
  cache.set(profileId, next)
  try {
    localStorage.setItem(key(profileId), JSON.stringify(next))
  } catch {
    // Storage full: keep in memory.
  }
  for (const l of listeners) l()
}

export function useGenerated(profileId: string): GeneratedItem[] {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => read(profileId),
  )
}

export function generatedById(profileId: string, id: string): GeneratedItem | undefined {
  return read(profileId).find((g) => g.id === id)
}

/** A generated Task 2 or letter as a writing task (without model answers). */
export function asWritingTask(g: GeneratedItem): WritingTask | null {
  if (g.kind === 'task2')
    return {
      id: g.id,
      skill: 'writing',
      use: 'practice',
      module: 'both',
      task: 2,
      type: g.data.type,
      topic: g.data.topic,
      title: `AI: ${g.data.topic}`,
      prompt: g.data.prompt,
      planHints: g.data.planHints,
      models: [],
    } as unknown as WritingTask
  if (g.kind === 'letter')
    return {
      id: g.id,
      skill: 'writing',
      use: 'practice',
      module: 'general',
      task: 1,
      type: g.data.type,
      tone: g.data.tone,
      topic: 'AI-generated letter',
      title: `AI: ${g.data.type} letter`,
      prompt: g.data.situation,
      bullets: g.data.bullets,
      planHints: [
        `Tone: ${g.data.tone}. Choose the matching opening and closing.`,
        'Purpose in the first paragraph; one paragraph per bullet point.',
        'Invent specific details: dates, names, amounts.',
      ],
      models: [],
    } as unknown as WritingTask
  return null
}

/** A generated speaking set as a cue card plus Part 1 questions. */
export function asSpeaking(g: GeneratedItem): { cue: CueCard; part1: string[] } | null {
  if (g.kind !== 'speaking') return null
  return {
    cue: {
      id: g.id,
      skill: 'speaking',
      use: 'practice',
      kind: 'cue-card',
      title: g.data.title,
      theme: g.data.title,
      prompt: g.data.cue.prompt,
      points: g.data.cue.points,
      explain: g.data.cue.explain,
      part3: g.data.part3,
    },
    part1: g.data.part1,
  }
}
