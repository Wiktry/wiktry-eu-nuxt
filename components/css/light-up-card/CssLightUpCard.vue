<script setup>
import { useMouseInElement  } from '@vueuse/core';
const target = ref(null);
const { elementX, elementY, isOutside } = useMouseInElement(target);

const list = [0,1,2,3,4,5]
</script>

<template>
  <div class="main">
    <ul class="list" ref="target" :style="{ '--x': elementX + 'px', '--y': elementY + 'px' }">
      <li class="card" v-for="i in list" :key="i" :style="{ '--ix': 200 * (i % 3) + 8 * (i % 3) + 'px', '--iy': ( i > 2 ? 150 + 8 : 0 ) + 'px' }">
        <div class="card-overlay"></div>
        <div class="card-content"></div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  background-color: #1e1e1f;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  font-family: 'Gotham', 'Open Sans';

  overflow: hidden;

  z-index: 1234;
}

.list {
  list-style: none;
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  --border-opacity: 0;
}
.list:hover {
  --border-opacity: 1;
}
.card {
  --card-width: 200px;
  --card-height: 150px;

  width: var(--card-width);
  height: var(--card-height);

  contain: strict;
  position: relative;
  overflow: hidden;

  background-color: rgba(255,255,255,0.1) none repeat scroll 0% 0%;

  border-radius: 6px;
}
.card::before {
  content: '';
  position: absolute;
  inset: 0;

  box-sizing: border-box;
  border-radius: inherit;

  opacity: var(--border-opacity);

  transition: .4s ease;
  background-image: radial-gradient(400px circle at calc(var(--x) - var(--ix)) calc(var(--y) - var(--iy)), rgba(255,255,255,0.12), transparent 80%);
}
.card-overlay {
  pointer-events: none;
  user-select: none;
  position: absolute;
  z-index: 1;
  opacity: 0;
  top: 1px;
  bottom: 1px;
  left: 1px;
  right: 1px;
  border-radius: 6px;
  transition: opacity .3s ease;
  contain: strict;
  background-image: radial-gradient(200px circle at calc(var(--x) - var(--ix)) calc(var(--y) - var(--iy)), rgba(255,255,255,0.1), transparent 80%);
}
.card:hover .card-overlay {
  opacity: 1;
}
.card-content {
  position: absolute;
  top: 1px;
  bottom: 1px;
  left: 1px;
  right: 1px;
  border-radius: 6px;
  background-color: #2b2b2c;
  box-sizing: border-box;
}
</style>