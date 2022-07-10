<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div v-html="text" />
</template>

<style>
h2 {
  margin: 20px 0;
}
h2::before {
  content: '#';
  margin-right: 4px;
}
pre {
  margin: 20px 0;
  padding: 20px;
  max-width: 100%;
  overflow-x: scroll;

  background-color: var(--menu-background-color);
  border: 1px solid var(--border-color);
  border-radius: 6px;

  font-family: 'Fira Code', monospace;
}
code {
  font-family: 'Fira Code', monospace;
}
</style>