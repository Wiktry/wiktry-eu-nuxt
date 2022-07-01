<script setup>
import { provide, ref, onMounted } from 'vue';
import { useStoresSettings } from '@/stores/storesSettings.ts';

const settings = useStoresSettings();

onMounted(() => {
  settings.fromLocalStorage();

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
})

</script>

<template>
  <NuxtPage />
</template>

<style>
.page {
  /*height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  height: calc(100vh - env(safe-area-inset-bottom));*/
}
</style>