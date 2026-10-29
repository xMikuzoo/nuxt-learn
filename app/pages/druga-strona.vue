<script setup lang="ts">
const exercises = [
  {
    name: 'martwy ciąg',
    description: '5 × 3, ciężar powyżej 1,5 × masa ciała',
    level: 'hard',
  },
  {
    name: 'pistol squat',
    description: 'przysiad na jednej nodze, druga wyprostowana z przodu',
    level: 'hard',
  },
  {
    name: 'podciąganie z obciążeniem',
    description: '4 × 5 z +20 kg na pasie',
    level: 'hard',
  },
  {
    name: 'muscle-up',
    description: 'podciągnięcie i przejście nad drążek w jednym ruchu',
    level: 'hard',
  },
] as const
</script>
<template>
  <main>
    <h1>Plan trudny</h1>
    <WorkoutCard
      v-for="exercise in exercises"
      :key="exercise.name"
      :name="exercise.name"
      :description="exercise.description"
      :level="exercise.level"
    />
  </main>
</template>
