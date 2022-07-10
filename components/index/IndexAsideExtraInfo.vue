<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="extra">
    <span class="bold">{{ title }}</span>
    <span class="text-dark">{{ response }}</span>
  </div>
</template>

<style scoped>
.extra {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>