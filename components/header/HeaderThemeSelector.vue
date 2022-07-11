<script setup>
import { mdiWeatherNight, mdiWeatherSunny  } from '@mdi/js'; 
import { computed } from '@vue/reactivity';
import { useStoresSettings } from '@/stores/storesSettings.ts'; 
const settings = useStoresSettings();

const classObject = computed(() => ({
  'dark': settings.theme.dark,
}))

</script>

<template>
  <button
    class="theme-button"
    :class="{ 'theme-button-dark': settings.theme.dark }"
    @click="settings.changeTheme"
  >
    <v-icon class="icon" :icon="mdiWeatherSunny" :color="!settings.theme.dark ? settings.theme.iconColor : settings.theme.inactiveIconColor" size="20" />
    <v-icon class="icon" :icon="mdiWeatherNight" :color="settings.theme.dark ? settings.theme.iconColor : settings.theme.inactiveIconColor" size="20" />
  </button>
</template>

<style scoped>
.theme-button {
  height: 28px;
  width: 52px;
  padding: 5px;

  background-color: var(--background-color);
  
  border-radius: 20px;

  box-shadow: inset 0 0 4px 1px rgba(0,0,0,.4);

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
}
.theme-button::after {
  content: '';

  height: 20px;
  width: 20px;
  position: absolute;

  background-color: var(--menu-background-color);
  border-radius: 20px;

  box-shadow: 0 0 4px 0 rgba(0,0,0,.4);

  transform: translateX(-11.5px);
  transition: transform .3s ease;
}
.theme-button-dark::after {
  transform: translate(11.5px);
}
.icon {
  z-index: 1;
}
.focus {
  color: blue;
}
</style>