<script setup>
import defineWord from '@/scripts/defineWord.js';
import { getLocalStorage } from '@/scripts/localStorage.js';
import { useStoresOrdet } from '@/stores/storesOrdet.ts';

const correctWord = defineWord();
const ordet = useStoresOrdet();
</script>

<template>
<div class="container">
  <div class="box">
    <h2>Statistik</h2>
  </div>
  <div class="box">
    <text v-if="ordet.isRunning" >Vad kan ordet vara?</text>
    <text v-else >Ordet var: {{ correctWord }}</text>
  </div>
  <div class="box">
    <table class="table">
      <tr class="table-box">
        <th>Försök</th>
        <th></th>
        <th>Resultat</th>
      </tr>
      <template v-for="item in ordet.stats">
        <tr class="table-box">
          <th>{{ item.id }}</th>
          <th class="progress-container">
            <progress class="progress" :max="item.max" :value="item.value" />
          </th>
          <th>{{ item.value }}</th>
        </tr>
      </template>
    </table>
  </div>
</div>
</template>

<style scoped>
.container {
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.box {
  margin: 10px 0;
}
.table-box {
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
}
.progress-container {
  display: flex;
  align-items: center;
}
.progress {
  appearance: none;
  border: none;
  background-color: transparent;

}
.progress::-webkit-progress-value {
  background-color: var(--text-color);
}
.progress::-moz-progress-bar {
  background-color: var(--text-color);
}
</style>