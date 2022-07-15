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
    <div class="circle_1"></div>
    <div class="circle_2"></div>
  </div>
</template>

<style scoped>
.container {
  height: 120px;
  width: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.circle_1 {
  position: absolute;
  height: 50px;
  width: 50px;

  border-radius: 50%;
  background-image: linear-gradient(to top, transparent 20%, var(--color));
  

  animation: rotate 1s linear infinite;
}
.circle_2 {
  position: absolute;
  height: 44px;
  width: 44px;

  border-radius: 50%;
  background-color: var(--content-background-color);
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>