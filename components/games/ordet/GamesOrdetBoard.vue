<script setup>
import { useStoresOrdet } from '@/stores/storesOrdet.ts';
import { computed } from '@vue/reactivity';
import { inject, ref } from 'vue';

const store = useStoresOrdet();
const gameState = inject('gameState');

const rows = computed(() => {
  const tmp = [];
  for (let i = 0; i < 7; i++) {
    const tmp_rw = gameState.getRow(i);
    tmp.push(tmp_rw);
  }
  return tmp;
});

</script>

<template>
<div class="board">
  <GamesOrdetRow v-for="row in rows" :key="row.id" :letters="row.value" :rowResult="row.id === store.rowResult[0] ? store.rowResult[1] : 0" />
</div>
</template>

<style>
.board {
  margin: 4px 0;
  width: 100%;
  height: 100%;
  max-height: 460px;
  max-width: 350px;

  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
}
</style>