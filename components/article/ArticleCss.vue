<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: 'Title'
  },
  text: {
    type: String,
    required: true,
    default: 'Text'
  }
})
</script>

<template>
  <div class="title">
    <h1 class="title">{{ title }}</h1>
  </div>
  <div class="text">
    <article-text-html :text="text" />
  </div>
</template>

<style scoped>
.title {
  padding: 20px 0;
  font-size: 2rem;
}
.text {
  width: 100%;
}
</style>