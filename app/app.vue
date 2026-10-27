<script setup lang="ts">
const count = ref(0)
console.log('setup, typeof window =', typeof window)
const width = ref<number | null>(null)
onMounted(() => {
  width.value = window.innerWidth
})
</script>

<template>
  <div>
    <button @click="count++">+1</button>
    <p>count: {{ count }}</p>
  </div>
  <p v-if="width != null">width: {{ width }}</p>
</template>
