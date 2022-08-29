<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <div class="progress">
    <span class="text-normal">{{ title }}</span>
    <span class="sub-title">{{ value }}%</span>
    <v-progress-linear :modelValue="value" color="#9e1663"></v-progress-linear>
  </div>
</template>

<style scoped>
.progress {
  min-width: 220px;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 4px;
}
</style>