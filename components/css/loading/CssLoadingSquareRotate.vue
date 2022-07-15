<script setup>
defineProps({
  color: {
    type: String,
    default: 'purple'
  }
})
</script>

<template>
  <div class="container" :style="{ '--color': color }" >
    <div class="square_1"></div>
    <div class="square_2"></div>
  </div>
</template>

<style scoped>
.container {
  height: 60px;
  width: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.square_1 {
  position: absolute;
  height: 40px;
  width: 40px;

  border: 2px solid var(--color);

  /* Needs a cubic timing function */

  animation: rotate 4s ease infinite;
}
.square_2 {
  position: absolute;
  height: 40px;
  width: 40px;

  border: 2px solid var(--color);

  animation: rotate 4s ease .6s infinite;
}

@keyframes rotate {
  10% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  60% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>