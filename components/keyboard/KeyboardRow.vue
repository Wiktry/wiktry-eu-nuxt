<script setup>
const props = defineProps(['letters']);
</script>

<template>
<div class="keyboard-row">
  <KeyboardKey v-for="letter in letters" :key="letter.id" :letter="letter" />
</div>
</template>

<style>
.keyboard-row {
  display: flex;
  flex-flow: row nowrap;
  gap: 4px;
  justify-content: space-between;
}
</style>