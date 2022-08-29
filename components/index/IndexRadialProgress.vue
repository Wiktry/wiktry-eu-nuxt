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
    <v-progress-circular
      :size="60"
      :modelValue="value"
      color="#9e1663"
    >
      {{ value }}
    </v-progress-circular>
    <span class="text-normal">{{ title }}</span>
  </div>
</template>

<style scoped>
.progress {
  width: 100px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 8px;
}
</style>