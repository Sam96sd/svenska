import { type LessonContentInput } from '../../schema'

// Collects every lesson-XX.ts in this folder. Copy this file unchanged into new units.
const lessons = import.meta.glob<LessonContentInput>('./lesson-*.ts', {
  eager: true,
  import: 'default',
})

export default Object.values(lessons)
