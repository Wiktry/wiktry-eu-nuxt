<script setup>
import { computed, inject, ref } from 'vue';
import { mdiBackspaceOutline, mdiArrowRightCircleOutline  } from '@mdi/js'; 
import { useStoresTheme } from '@/stores/storesTheme.ts';

const props = defineProps(['letter']);

const isEnter = props.letter.value === "!";
const isBack = props.letter.value === "?";
const isSpecial = ref((isEnter || isBack));
const innerHeight = ref(window.innerHeight);

const setThemeIcons = computed(() => {
  if (useStoresTheme.dark.value) {
    return '#ffffff';
  }
  return '#000000';
});

const setScaleIcons = computed(() => {
  if (innerHeight.value > 600) {
    return 2;
  }
  return 1.4;
})

const sendEvent = (key) => {
  window.dispatchEvent(new KeyboardEvent('keydown', {'key': key}));
  console.log(key);
}

const decideEvent = () => {
  if (!isSpecial.value) {
    sendEvent(props.letter.value);
  } else if (isEnter) {
    sendEvent('Enter');
  } else if (isBack) {
    sendEvent('Backspace');
  }  
}

const classObject = computed(() => ({
  unused: props.letter.res === 3,
  misplaced: props.letter.res === 2,
  correct: props.letter.res === 1,
}));
</script>

<template>
<button v-if="!isSpecial" class="letter" :class="classObject" @click="decideEvent">
  {{ letter.value }}
</button>
<button v-else-if="isEnter" class="letter special" :class="classObject" @click="decideEvent">
  <v-icon :icon="mdiArrowRightCircleOutline" :color="useStoresTheme.iconColor" size="32" />
</button>
<button v-else-if="isBack" class="letter special" :class="classObject" @click="decideEvent">
  <v-icon :icon="mdiBackspaceOutline" :color="useStoresTheme.iconColor" size="32" />
</button>
</template>

<style scoped>
.letter {
  height: 58px;
  padding: 0;
  margin: 0 1px;
  background-color: var(--keyboard-key-color);

  user-select: none;
  touch-action: manipulation;
  cursor: pointer;

  box-sizing: border-box;
  display: block;
  flex: 1;

  font-size: 1.5em;
  font-weight: bold;
  text-transform: capitalize;
  color: var(--text-color);

  outline: none;
  box-shadow: none;
  border-width: 1px;
  border-style: solid;
  border-image: var(--keyboard-key-border-image-gradiant);

  border-bottom: 2px solid var(--keyboard-key-border-color);
  border-radius: 4px;
}
.letter:hover {
  background-color: none;
}
.unused {
  background-color: transparent;
  background-image: var(--unused-background-gradient);
}
.misplaced {
  background-color: transparent;
  background-image: var(--misplaced-background-gradient);
}
.correct {
  background-color: transparent;
  background-image: var(--correct-background-gradient);
}
.special {
  flex-grow: 2.2;
}

@media (max-height: 600px) {
  .letter {
    height: 48px;
    font-size: 1.2rem;
  }
}
</style>