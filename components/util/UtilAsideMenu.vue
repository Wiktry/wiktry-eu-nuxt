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
  position: fixed;
  height: 100%;
  width: 400px;

  background-color: var(--menu-background-color);
  
  top: 40px;
  left: -600px;
  z-index: 100;

  border-top-right-radius: 20px;

  transition: left .4s ease;

  align-self: start;
}

.show {
  left: 0;
}

@media (max-width: 600px) {
  .show {
    width: 100vw;
  }
}
</style>