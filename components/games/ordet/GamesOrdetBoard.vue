<script setup>
import { computed } from '@vue/reactivity';
import { inject, ref } from 'vue';

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
  <GamesOrdetRow v-for="row in rows" :key="row.id" :letters="row.value" />
</div>
</template>

<style>
.board {
  margin: 4px 0;
  /*width: 100%;
  height: 100%;*/
  height: 460px;
  width: 350px;

  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
}

.word-not-found {
  animation: word-not-found .6s;
}

@keyframes word-not-found {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translate(5px);
  }
}
</style>