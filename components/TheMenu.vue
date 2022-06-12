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
  background-color: red;
  position: fixed;
  top: 40px;
  z-index: 100;
  transition: .3s ease;
}
.show {
  width: 300px;
}

@media (max-width: 500px) {
  .show {
    width: 100vw;
  }
}
</style>