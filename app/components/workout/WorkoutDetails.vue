<script lang="ts" setup>
defineProps<{
  id: string
  name: string
  description: string
  level: 'easy' | 'normal' | 'hard'
}>()
</script>
<template>
  <div class="workout-card">
    <p>
      <strong>{{ name }}</strong>
    </p>
    <p>{{ description }}</p>
    <p>{{ level }} | {{ id }}</p>
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
