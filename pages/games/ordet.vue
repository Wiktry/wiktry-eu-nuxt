<script setup>
import { provide, ref, onMounted } from 'vue';
import defineWord from '@/scripts/defineWord.js';
import KeyboardState from '@/classes/KeyboardState';
import defineGameState from '@/classes/GameState';
import useEventListener from '@/composables/event.js';
import { useStoresOrdet } from '@/stores/storesOrdet.ts';
import { useStoresModal } from '@/stores/storesModal.ts';
import { useStoresTheme } from '@/stores/storesTheme.ts';
import { mdiChartBoxOutline, mdiHelpCircleOutline } from '@mdi/js';


// Get today's word to send to the board
const correctWord = defineWord();
const store = useStoresOrdet();
store.getStats();
const modal = useStoresModal();
const theme = useStoresTheme();
const keyboardState = new KeyboardState();
const gameState = defineGameState(keyboardState, store);
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
})

provide('gameState', gameState);
provide('keyboardState', keyboardState);

const useKey = (event) => {
  if (gameState.isRunning) {
    const key = event.key.toLowerCase();
    if (key && keyboardState.exists(key)) {
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
      gameState.removeLetter(store);
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

    <template #icons>
      <button class="button" @click="modal.changeModal(0)">
        <v-icon :icon="mdiChartBoxOutline" :color="theme.iconColor" size="32" />
      </button>
      <button class="button" @click="modal.changeModal(1)">
        <v-icon :icon="mdiHelpCircleOutline" :color="theme.iconColor" size="32" />
      </button>
    </template>

    <template #modal>
      <ModalGamesOrdetStats v-if="modal.id === 0" />
      <ModalGamesOrdetGuide v-else-if="modal.id === 1" />
    </template>

    <template #game>
      <v-alert class="alert" :class="{ 'alert-visible': store.notAWord }" dense elevation="3" type="info">Det ordet finns inte</v-alert>
      <div class="game">
        <GamesOrdetBoard v-if='isMounted' />
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
.alert {
  position: fixed;
  align-self: center;
  margin: 20px 0 0 0;
  opacity: 0;
  transition: .4s ease;
}
.alert-visible {
  opacity: 1;
}
.divider {
  min-height: 1px;
}
</style>