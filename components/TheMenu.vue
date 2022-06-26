<script setup>
import { useStoresMenu } from '@/stores/storesMenu.ts'; 
const menu = useStoresMenu();
</script>

<template>
<aside class="menu" :class="{ show: menu.show }">

</aside>
</template>

<style scoped>
.menu {
  height: 100%;
  width: 0;
  background-color: var(--content-background-color);
  position: fixed;
  top: 40px;
  z-index: 100;
  transition: .3s ease;
  align-self: start;
}

.show {
  width: 400px;
}

@media (max-width: 500px) {
  .show {
    width: 100vw;
  }
}
</style>