<script setup lang="ts">
import { easyExercises } from '~/data/exercises'
</script>
<template>
  <main>
    <h1>Platforma łatwy</h1>
    <WorkoutCard
      v-for="exercise in easyExercises"
      :key="exercise.id"
      :id="exercise.id"
      :name="exercise.name"
    />
  </main>
</template>
