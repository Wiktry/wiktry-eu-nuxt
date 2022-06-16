<script setup>
import { provide, ref, onMounted } from 'vue';
import { useStoresTheme } from '@/stores/storesTheme.ts';

const theme = useStoresTheme();

onMounted(() => {
  theme.fromLocalStorage();

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
  <div class="page">
    <NuxtPage />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;
}
</style>