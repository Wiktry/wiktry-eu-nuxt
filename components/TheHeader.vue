<script setup>
import { inject, ref } from 'vue';
import { mdiHelpCircleOutline, mdiMenu } from '@mdi/js';
import { useStoresSettings } from '@/stores/storesSettings.ts';
import { useStoresMenu } from '@/stores/storesMenu.ts';

const settings = useStoresSettings();
const menu = useStoresMenu();
</script>

<template>
<div class="header">
  <div class="upper-header">
    <div class="util-area">
      <button class="button" @click="menu.changeMenu">
        <v-icon :icon="mdiMenu" :color="settings.theme.iconColor" size="38" />
      </button>
      <HeaderThemeSelector />
    </div>
    <div class="slot-name">
      <slot name="name">

      </slot>
    </div>
    <div class="slot-icons">
      <slot name="icons">

      </slot>
    </div>
  </div>
  <div class="lower-header">
    <div class="lower-header-left"></div>
  </div>

  <ModalBase>
    <slot name="modal">

    </slot>
  </ModalBase>

  <TheMenu />
  
</div>
</template>

<style scoped>
.header {
  height: 60px;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
}
.upper-header {
  height: 40px;
  width: 100%;

  background-color: var(--content-background-color);
  border-bottom-right-radius: 20px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.util-area {
  height: 100%;
  padding: 0 10px;

  background-color: var(--menu-background-color);
  border-bottom-right-radius: 10px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
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

@media (max-height: 600px) {
  .header {
    height: 40px;
  }
  .upper-header {
    height: 30px;
  }
  .lower-header-left {
    height: 10px;
  }
}

@media (max-width: 300px) {
  .slot-name {
    font-size: 0.8rem;
  }
}
</style>