<script setup>
import { provide, ref, onMounted } from 'vue';
import { useStoresTheme } from '@/stores/storesTheme.ts';

const theme = useStoresTheme();

onMounted(() => {
  theme.fromLocalStorage();
})

</script>

<template>
  <NuxtPage />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

/* Variables */
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;

  font-family: 'Open Sans', sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
}
</style>