<script lang="ts" setup>
import { exercises } from '~/data/exercises'

const route = useRoute()
const exercise = computed(() => exercises.find((x) => x.id === route.params.id))
</script>
<template>
  <main>
    <div v-if="!exercise">Nie znaleziono ćwiczenia</div>
    <template v-else>
      <h2>Strona ćwiczenia: {{ exercise.name }}</h2>
      <NuxtLink to="/">Wróć</NuxtLink>
      <div>
        <WorkoutDetails v-bind="exercise" />
      </div>
    </template>
  </main>
</template>
