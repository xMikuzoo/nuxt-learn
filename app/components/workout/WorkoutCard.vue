<script lang="ts" setup>
import type { ExerciseSummary } from '~/shared/types/workout'

defineProps<ExerciseSummary>()
</script>
<template>
  <div class="workout-card">
    <p>
      <strong>{{ name }}</strong>

      <NuxtLink
        :to="{
          name: 'exercises-id',
          params: { id },
        }"
      >
        Zobacz szczegóły
      </NuxtLink>
    </p>
  </div>
</template>
<style lang="css" scoped>
.workout-card {
  border: 1px solid #bbbbbb;
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
  min-width: 20em;
  width: fit-content;
}
</style>
