<script setup>
import { mdiHome } from '@mdi/js'; 
import { useStoresSettings } from '@/stores/storesSettings.ts'; 
const settings = useStoresSettings();
</script>

<template>
  <NuxtLink class="home" :to="'/'">
    <v-icon class="icon" :icon="mdiHome" :color="settings.theme.iconColor" size="28" />
  </NuxtLink>
</template>