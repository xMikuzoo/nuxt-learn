import type { Exercise } from '~/shared/types/workout'
export const easyExercises: Exercise[] = [
  {
    id: 'bodyweight-squat',
    name: 'przysiad bez obciążenia',
    description: 'stopy na szerokość bioder, plecy proste',
    level: 'easy',
  },
  {
    id: 'knee-pushups',
    name: 'pompki na kolanach',
    description: 'łokcie blisko tułowia, klatka do podłogi',
    level: 'easy',
  },
  {
    id: 'plank',
    name: 'plank',
    description: '3 × 30 s, biodra w jednej linii z barkami',
    level: 'easy',
  },
  {
    id: 'stationary-lunges',
    name: 'wykroki w miejscu',
    description: 'kolano z tyłu prawie dotyka podłogi',
    level: 'easy',
  },
]

export const hardExercises: Exercise[] = [
  {
    id: 'deadlift',
    name: 'martwy ciąg',
    description: '5 × 3, ciężar powyżej 1,5 × masa ciała',
    level: 'hard',
  },
  {
    id: 'pistol-squat',
    name: 'pistol squat',
    description: 'przysiad na jednej nodze, druga wyprostowana z przodu',
    level: 'hard',
  },
  {
    id: 'weighted-pullups',
    name: 'podciąganie z obciążeniem',
    description: '4 × 5 z +20 kg na pasie',
    level: 'hard',
  },
  {
    id: 'muscle-up',
    name: 'muscle-up',
    description: 'podciągnięcie i przejście nad drążek w jednym ruchu',
    level: 'hard',
  },
]
export const exercises = [...easyExercises, ...hardExercises]
