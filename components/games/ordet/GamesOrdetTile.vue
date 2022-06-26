<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps(['letter']);

const classObject = computed(() => ({
  unused: props.letter.res === 3,
  misplaced: props.letter.res === 2,
  correct: props.letter.res === 1,
  added: props.letter.value !== ''
}));
</script>

<template>

  <div class="tile" :class="classObject" :key="props.letter.value">
    {{ props.letter.value }}
  </div>

</template>

<style scoped>
.tile {
  height: 100%;
  width: 100%;
  min-height: 40px;
  min-width: 40px;

  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  font-size: 2em;
  line-height: 0;
  text-transform: capitalize;
  color: var(--text-color);

  border: 2px solid var(--border-color);
  box-sizing: border-box;

  transition: .3s ease;
}
.unused {
  background-color: var(--unused-background-color);
  border: 2px solid var(--unused-background-color);
}
.misplaced {
  background-color: var(--misplaced-background-color);
  border: 2px solid var(--misplaced-background-color);
}
.correct {
  background-color: var(--correct-background-color);
  border: 2px solid var(--correct-background-color);
}
.added {
  animation: letter-added .15s ease;
}

@keyframes letter-added {
  0%, 100% {
    border: 2px solid var(--border-color);
    transform: scale(1);
  }
  50% {
    border: 2px solid var(--border-color-transparent);
    transform: scale(1.1);
  }
}

@keyframes letter-unused {
  0% {

  }
  50% {

  }
  100% {
    
  }
}

@media (max-height: 600px) {
  .tile {
    font-size: 1.2rem;
  }
}
</style>