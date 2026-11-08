import { BookOpenText, Headphones, Mic, PenLine } from 'lucide-react'
import { type Skill } from '../examSpec'

export const SKILL_ICON: Record<Skill, typeof Headphones> = {
  listening: Headphones,
  reading: BookOpenText,
  writing: PenLine,
  speaking: Mic,
}
