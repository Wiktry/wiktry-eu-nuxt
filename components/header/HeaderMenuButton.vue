<script setup>
import { useStoresMenu } from '@/stores/storesMenu.ts';
const menu = useStoresMenu();
</script>

<template>
  <button class="menu-button" @click="menu.changeMenu()">
    <div class="burger" :class="{ open: menu.show}"></div>
  </button>
</template>

<style scoped>
.menu-button {
  padding: 5px;
  width: 34px;
  height: 34px;

  cursor: pointer;
}

.burger {
  position: relative;
  user-select: none;
  box-sizing: border-box;
}

.burger, .burger::before, .burger::after {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--text-color);

  transition: 300ms ease;
  transition-property: transform, background-color;
}

.burger::before, .burger::after {
  content: '';
  position: absolute;
  left: 0px;
}

.burger::before {
  top: -8px;
}

.burger::after {
  top: 8px;
}

.open {
  background-color: transparent;
}

.open::before {
  transform: translateY(8px) rotate(45deg);
}
.open::after {
  transform: translateY(-8px) rotate(-45deg);
}
</style>