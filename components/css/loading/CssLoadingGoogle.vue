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
  border: 3px solid var(--color);
  border-right: 3px solid transparent;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;

  animation: rotate 1s ease infinite;
}
.circle_2 {
  position: absolute;
  height: 50px;
  width: 50px;

  border-radius: 50%;
  border: 3px dotted var(--color);
  border-right: 3px solid transparent;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;

  opacity: .2;

  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>