<script setup>
import { provide, ref } from 'vue';
import defineWord from '../../scripts/defineWord.js';
import KeyboardState from '../../classes/KeyboardState';
import defineGameState from '../../classes/GameState';
import useEventListener from '../../composables/event.js';
import { useStoresOrdet } from '@/stores/storesOrdet.ts';


// Get today's word to send to the board
const correctWord = defineWord();
const store = useStoresOrdet();
store.getStats();
const keyboardState = new KeyboardState();
const gameState = defineGameState(keyboardState, store);

provide('gameState', gameState);
provide('keyboardState', keyboardState);

const useKey = (event) => {
  if (gameState.isRunning) {
    const key = event.key.toLowerCase();
    if (key && key.length === 1) {
      event.preventDefault();
      gameState.addLetter(key);
    } else if (key && key === 'enter') {
      event.preventDefault();
      const i = gameState.compareWords(correctWord, store);
      if (i) {
        gameState.compareResults(keyboardState);
      }
    } else if (key && key === 'backspace') {
      event.preventDefault();
      gameState.removeLetter();
    }
  }
}

useEventListener('keydown', useKey);
</script>

<template>
  <NuxtLayout name="games">
    <template #name>
      <text>Ordet</text>
    </template>
    <template #game>
      <div class="game">
        <GamesOrdetBoard />
      </div>
      <KeyboardContainer />
    </template>
  </NuxtLayout>
</template>

<style scoped>
.game {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  overflow: hidden;
}
.divider {
  min-height: 1px;
}
</style>