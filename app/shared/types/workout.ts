export type Exercise = {
  id: string
  name: string
  description: string
  level: 'easy' | 'normal' | 'hard'
}

export type ExerciseSummary = Pick<Exercise, 'id' | 'name'>
