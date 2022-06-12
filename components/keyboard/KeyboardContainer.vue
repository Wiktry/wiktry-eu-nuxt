<script setup>
import { inject, computed } from 'vue';

const keyboardState = inject('keyboardState');

const rows = computed(() => {
  const tmp = [];
  for (let i = 0; i < 3; i++) {
    tmp.push({id: i, value: keyboardState.getRow(i)});
  }
  return tmp;
});

</script>

<template>
<div class="keyboard">
  <KeyboardRow v-for="row in rows" :key="row.id" :letters="row.value" />
</div>
</template>

<style>
.keyboard {
  width: 100%;
  max-width: 492px;
  margin: 0 0 2px 0;

  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
}
</style>