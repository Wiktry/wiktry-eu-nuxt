<script setup>
import { useElementSize } from "@vueuse/core";

const el = ref(null);
const { width } = useElementSize(el);
</script>

<template>
  <div class="main" ref="el" :class="{ thin: width < 600 }">
    <div class="card">
      <util-skeleton-loader-old />
    </div>
    <div class="card">
      <util-skeleton-loader />
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  overflow: hidden;

  background-color: #1e1f28;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.thin {
  flex-flow: column;
}
.card {
  border-radius: 6px;
}
</style>