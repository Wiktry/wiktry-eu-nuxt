<script setup>
import { mdiHome } from '@mdi/js';
import { useStoresMenu } from '@/stores/storesMenu.ts';
import { useStoresSettings } from '@/stores/storesSettings.ts'; 
const settings = useStoresSettings();
const menu = useStoresMenu();
</script>

<template>
  <NuxtLink class="home" :to="'/'" @click="menu.closeMenu">
    <v-icon class="icon" :icon="mdiHome" :color="settings.theme.iconColor" size="28" />
  </NuxtLink>
</template>