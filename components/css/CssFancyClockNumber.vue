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

const i = '--i';
</script>

<template>
  <div class="number-row" :style="{'--i': current}">
    <span v-for="number in numbers" 
      :key="number" 
      :class="{ 'current': number === current }" 
    >
      {{ number }}
    </span>
  </div>
</template>

<style scoped>
span {
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