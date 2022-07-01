<script setup>
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
    <span 
      class="circle" 
      :class="{ 'circle-dark': settings.theme.dark }"
    ></span>
  </button>
</template>

<style scoped>
.theme-button {
  min-height: 32px;
  min-width: 60px;
  padding: 5px;
  margin-left: 10px;

  background-color: var(--background-color);
  background-image: var(--theme-selector-gradient);
  
  border-radius: 20px;

  box-shadow: inset 0 0 4px 0 rgba(0,0,0,.1);

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.theme-button-dark {
  background-image: var(--theme-selector-gradient);
}
.circle {
  height: 23px;
  width: 23px;

  background-color: var(--menu-background-color);
  border-radius: 20px;

  box-shadow: 0 0 4px 0 rgba(0,0,0,.1);

  transition: transform .3s ease;
}
.circle-dark {
  transform: translate(27px);
}

@media (max-height: 600px) {
  .theme-button {
    min-height: 16px;
    min-width: 30px;
    padding: 3px;
    margin-left: 5px;
    border-radius: 10px;
    box-shadow: inset 0 0 2px 0 rgba(0,0,0,.1);
  }
  .circle {
    height: 11px;
    width: 11px;
    box-shadow: 0 0 2px 0 rgba(0,0,0,.1);
  }
  .circle-dark {
    transform: translate(13px);
  }
}

@media (max-width: 450px) {
  .theme-button {
    min-height: 20px;
    min-width: 40px;
    padding: 4px;
    margin-left: 8px;
    border-radius: 15px;
    box-shadow: inset 0 0 3px 0 rgba(0,0,0,.1);
  }
  .circle {
    height: 16px;
    width: 16px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,.1);
  }
  .circle-dark {
    transform: translate(17px);
  }
}
</style>