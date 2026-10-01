import { units } from '../content/course'
import { isUnitComplete } from './courseProgress'
import { levelInfo } from './progress'
import { type Profile } from './storage/schema'

export interface Badge {
  id: string
  emoji: string
  title: string
  description: string
  earned: (p: Profile) => boolean
}

const lessonsDone = (p: Profile) => Object.keys(p.lessons).length
const deckSize = (p: Profile) => Object.keys(p.srs).length
const unitsDone = (p: Profile) => units.filter((u) => isUnitComplete(u, p)).length

export const BADGES: Badge[] = [
  {
    id: 'first-lesson',
    emoji: '🌱',
    title: 'Första steget',
    description: 'Finish your first lesson',
    earned: (p) => lessonsDone(p) >= 1,
  },
  {
    id: 'perfect',
    emoji: '💯',
    title: 'Perfekt',
    description: 'Finish a lesson without a single mistake',
    earned: (p) => Object.values(p.lessons).some((l) => l.bestScore === 1),
  },
  {
    id: 'streak-3',
    emoji: '🔥',
    title: 'Tre dagar',
    description: 'Learn 3 days in a row',
    earned: (p) => p.streak.longest >= 3,
  },
  {
    id: 'streak-7',
    emoji: '🔥',
    title: 'En vecka',
    description: 'Learn 7 days in a row',
    earned: (p) => p.streak.longest >= 7,
  },
  {
    id: 'streak-30',
    emoji: '🏆',
    title: 'En månad',
    description: 'Learn 30 days in a row',
    earned: (p) => p.streak.longest >= 30,
  },
  {
    id: 'words-50',
    emoji: '📗',
    title: '50 ord',
    description: 'Add 50 words to your review deck',
    earned: (p) => deckSize(p) >= 50,
  },
  {
    id: 'words-150',
    emoji: '📘',
    title: '150 ord',
    description: 'Add 150 words to your review deck',
    earned: (p) => deckSize(p) >= 150,
  },
  {
    id: 'words-300',
    emoji: '📚',
    title: '300 ord',
    description: 'Add 300 words to your review deck',
    earned: (p) => deckSize(p) >= 300,
  },
  {
    id: 'unit-1',
    emoji: '🔤',
    title: 'Första enheten',
    description: 'Complete a whole unit',
    earned: (p) => unitsDone(p) >= 1,
  },
  {
    id: 'halfway',
    emoji: '🗺️',
    title: 'Halvvägs',
    description: 'Complete half of the units',
    earned: (p) => unitsDone(p) >= Math.ceil(units.length / 2),
  },
  {
    id: 'course',
    emoji: '🎓',
    title: 'Klar!',
    description: 'Complete every unit',
    earned: (p) => units.length > 0 && unitsDone(p) === units.length,
  },
  {
    id: 'level-5',
    emoji: '⭐',
    title: 'Nivå 5',
    description: 'Reach level 5',
    earned: (p) => levelInfo(p.xp).level >= 5,
  },
  {
    id: 'level-10',
    emoji: '🌟',
    title: 'Nivå 10',
    description: 'Reach level 10',
    earned: (p) => levelInfo(p.xp).level >= 10,
  },
]

export function earnedBadgeIds(p: Profile): string[] {
  return BADGES.filter((b) => b.earned(p)).map((b) => b.id)
}

/** Badges earned but not yet recorded on the profile. */
export function newBadges(p: Profile): Badge[] {
  return BADGES.filter((b) => b.earned(p) && !p.badges.includes(b.id))
}
