<script setup>
defineProps({
  card: {
    type: Object,
    default: undefined
  }
})
</script>

<template>
  <NuxtLink :to="card.path" class="button" v-if="card !== undefined" @click="$emit('travel')">
    <p class="title">{{ card.title }}</p>
  </NuxtLink>
</template>

<style scoped>

</style>