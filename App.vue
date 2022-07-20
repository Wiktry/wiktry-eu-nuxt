<script setup>
import { provide, ref, onMounted } from 'vue';
import { useStoresSettings } from '@/stores/storesSettings.ts';
import { useStoresStrapi } from '@/stores/storesStrapi.ts';

const settings = useStoresSettings();
const strapi = useStoresStrapi();

onMounted(async () => {
  const { find } = useStrapi4();

  settings.fromLocalStorage();
  strapi.init(find);

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
.v-enter-active,
.v-leave-active {
  transition: left .5s ease;
}

.v-enter-from {
  left: -100vw;
}

.v-leave-to {
  left: 200vw;
}
</style>