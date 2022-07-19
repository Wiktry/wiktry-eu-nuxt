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
    <div class="circle_3"></div>
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
  border: 3px solid transparent;
  border-bottom: 3px solid var(--color);

  animation: rotate 1s linear infinite;
}
.circle_2 {
  position: absolute;
  height: 38px;
  width: 38px;

  border-radius: 50%;
  border: 3px solid transparent;
  border-bottom: 3px solid var(--color);

  animation: rotate 1s linear .2s infinite reverse;
}
.circle_3 {
  position: absolute;
  height: 26px;
  width: 26px;

  border-radius: 50%;
  border: 3px solid transparent;
  border-bottom: 3px solid var(--color);

  animation: rotate 1s linear .6s infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>