<script setup lang="ts">
const exercises = [
  {
    name: 'przysiad bez obciążenia',
    description: 'stopy na szerokość bioder, plecy proste',
    level: 'easy',
  },
  {
    name: 'pompki na kolanach',
    description: 'łokcie blisko tułowia, klatka do podłogi',
    level: 'easy',
  },
  {
    name: 'plank',
    description: '3 × 30 s, biodra w jednej linii z barkami',
    level: 'easy',
  },
  {
    name: 'wykroki w miejscu',
    description: 'kolano z tyłu prawie dotyka podłogi',
    level: 'easy',
  },
] as const
</script>
<template>
  <main>
    <h1>Platforma treningowa</h1>
    <WorkoutCard
      v-for="exercise in exercises"
      :key="exercise.name"
      :name="exercise.name"
      :description="exercise.description"
      :level="exercise.level"
    />
  </main>
</template>
