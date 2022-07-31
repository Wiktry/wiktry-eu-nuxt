<script setup>
defineProps({
  numbers: {
    type: Array,
    required: true
  },
  current: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="number-column" :style="{ '--i': current }">
    <span class="number" v-for="number in numbers" 
      :key="number" 
      :class="{ 'current': number === current }" 
    >
      {{ number }}
    </span>
  </div>
</template>

<style scoped>
.number-column {
  width: calc(100% / 9);

  transition: .5s;
  transform: translateZ(-10px) translateY(calc(-70px * var(--i) - 10px));
}
.number {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  height: 70px;

  color: rgb(46, 73, 85);
  transition: .5s ease;
}
.current {
  margin: 10px 0;
  height: 100px;
  color: white;
}
</style>