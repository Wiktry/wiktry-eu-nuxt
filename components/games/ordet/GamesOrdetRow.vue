<script setup>
import { useStoresOrdet } from '@/stores/storesOrdet.ts';
const props = defineProps({
  letters: Object,
  rowResult: Number
});
</script>

<template>
<div class="game-row" :class="{ 'word-not-found': rowResult === 2 && letters[4].value !== '', 'word-found': rowResult === 1 && letters[4].value !== '', '': rowResult === 0 }">
  <GamesOrdetTile v-for="letter in letters" :key="letter.id" :letter="letter" />
</div>
</template>

<style>
.game-row {
  height: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 5px;
}

.v-enter-from, .v-enter-to {
  border: 2px solid var(--tile-border-color-transition);
}

.v-enter-active {
  transition: border .3s;
}

.word-not-found {
  animation: word-not-found-k .3s;
}

@keyframes word-not-found-k {
  0%, 20%, 40%, 60%, 80% { transform: translateX(0) }
  10%, 90% { transform: translateX(5px) }
  30%, 70% { transform: translateX(-5px) }
  50% { transform: translateX(5px) }
}

@keyframes word-found {

}
</style>