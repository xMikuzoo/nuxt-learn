<script setup lang="ts">
import { hardExercises } from '~/data/exercises'
</script>
<template>
  <main>
    <h1>Plan trudny</h1>
    <WorkoutCard
      v-for="exercise in hardExercises"
      :key="exercise.id"
      :id="exercise.id"
      :name="exercise.name"
    />
  </main>
</template>
