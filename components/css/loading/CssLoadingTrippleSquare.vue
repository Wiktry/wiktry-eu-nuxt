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
    <div class="inner-cont">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div> 
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
.inner-cont {
  height: 50px;
  width: 50px;

  display: grid;
  grid-template-columns: 20px 20px;
  grid-template-rows: 20px 20px;
  gap: 10px;
}
.box {
  width: 20px;
  height: 20px;

  position: relative;

  background-color: var(--color);
}

.box:nth-child(1) {
  animation: box_2 6s ease infinite;
}
.box:nth-child(2) {
  animation: box_1 6s ease infinite;
}
.box:nth-child(3) {
  animation: box_3 6s ease infinite;
}

@keyframes box_1 {
  0% {
    left: 0;
    top: 0;
    height: 20px;
    width: 20px;
  }
  12.5% {
    left: 0;
    top: 0;
    height: 50px;
    width: 20px;
  }
  25%, 75% {
    left: 0;
    top: 30px;
    height: 20px;
    width: 20px;
  }
  87.5% {
    left: -30px;
    top: 30px;
    height: 20px;
    width: 50px;
  }
  100% {
    left: -30px;
    top: 30px;
    height: 20px;
    width: 20px;
  }
}

@keyframes box_2 {
  0%, 25% {
    left: 0;
    top: 0;
    height: 20px;
    width: 20px;
  }
  37.5% {
    left: 0;
    top: 0;
    height: 20px;
    width: 50px;
  }
  50%, 100% {
    left: 30px;
    top: 0;
    height: 20px;
    width: 20px;
  }
}

@keyframes box_3 {
  0%, 50% {
    left: 0;
    top: 0;
    height: 20px;
    width: 20px;
  }
  62.5% {
    left: 0;
    top: -30px;
    height: 50px;
    width: 20px;
  }
  75%, 100% {
    left: 0;
    top: -30px;
    height: 20px;
    width: 20px;
  }
}
</style>