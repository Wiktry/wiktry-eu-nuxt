<script setup>
import { inject, ref } from 'vue';
import { mdiHelpCircleOutline, mdiMenu } from '@mdi/js';
import { useStoresSettings } from '@/stores/storesSettings.ts';
import { useStoresMenu } from '@/stores/storesMenu.ts';

const settings = useStoresSettings();
const menu = useStoresMenu();

defineProps({
  onlyMenu: {
    type: Boolean,
    required: false
  }
});
</script>

<template>
<div class="header" :class="{ 'only-menu': onlyMenu }">
  <div class="util-area">
    <header-menu-button />
    <header-home-button />
    <header-theme-selector />
  </div>
  <div class="slot-name" v-if="!onlyMenu">
    <slot name="name">
      
    </slot>
  </div>
  <div class="slot-icons" v-if="!onlyMenu">
    <slot name="icons">

    </slot>
  </div>

  <modal-base>
    <slot name="modal">

    </slot>
  </modal-base>

  <util-aside-menu />
  
</div>
</template>

<style scoped>
.header {
  height: 40px;
  width: 100%;

  background-color: var(--content-background-color);
  border-bottom-right-radius: 20px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.only-menu {
  background-color: transparent;
}
.util-area {
  height: 100%;
  padding: 0 10px;

  background-color: var(--menu-background-color);
  border-bottom-right-radius: 10px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 8px;
}
.slot-name {
  font-size: 1.4rem;
  font-weight: bold;
}
.slot-icons {
  height: 100%;
  padding: 0 10px;

  background-color: var(--menu-background-color);
  border-bottom-left-radius: 10px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.lower-header {
  width: 100%;

  background-color: var(--menu-background-color);

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.lower-header-left {
  height: 20px;
  width: 100%;

  background-color: var(--background-color);
  border-top-left-radius: 20px;
}
.button {
  background: none;
  border: none;

  user-select: none;
  touch-action: manipulation;
  cursor: pointer;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 800px) {
  .util-area {
    gap: 4px;
  }
}

@media (max-width: 300px) {
  .slot-name {
    font-size: 0.8rem;
  }
}
</style>