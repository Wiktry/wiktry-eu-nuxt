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
  height: 120px;
  width: 120px;

  display: flex;
  justify-content: center;
  align-items: center;

  --size: 18px;
}
.square_1 {
  position: absolute;
  height: var(--size);
  width: var(--size);

  background-color: var(--color);

  animation: slide 1s ease infinite;
}
.square_2 {
  position: absolute;
  height: var(--size);
  width: var(--size);

  background-color: var(--color);
  opacity: .2;

  animation: slide 1s linear infinite;
}

@keyframes slide {
  0% {
    transform: translateX(-40px);
  }
  50% {
    transform: translateX(40px);
  }
  100% {
    transform: translateX(-40px);
  }
}
</style>