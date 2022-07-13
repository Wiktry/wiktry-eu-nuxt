<script setup>
import { useScroll } from "@vueuse/core";

const main = ref(null);
const mainScroll = useScroll(main);
</script>

<template>
  <div class="main" >
    <div class="fixed" ref="main"></div>
    <div class="article"></div>
  </div>
</template>

<style scoped>
.main {
  overflow-y: scroll;

  height: 100%;
  width: 100%;
}
.fixed {
  height: 100%;
  width: 100%;

  background-color: red;

  position: fixed;
  top: 0;
  right: 0;
}
.article {
  height: 3000px;
  width: 100%;
}
.article:hover {
  background-color: aqua;
}
</style>