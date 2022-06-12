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

  font-weight: 600;
  font-size: 2em;
  line-height: 0;
  text-transform: capitalize;
  color: var(--text-color);

  border: 2px solid var(--border-color);
  box-sizing: border-box;

  transition: border .3s ease;
}
.unused {
  background-color: var(--unused-background-color);
}
.misplaced {
  background-color: var(--misplaced-background-color);
}
.correct {
  background-color: var(--correct-background-color);
}
.added {
  /*border: 2px solid var(--tile-border-color-transition);*/
  /*animation: letter-added .3s ease;*/
  border: 2px solid var(--border-color-transparent);
}

@keyframes letter-added {
  0%, 100% {
    border: 2px solid var(--border-color);
  }
  50% {
    border: 2px solid var(--border-color-transparent);
  }
}

@media (max-height: 600px) {
  .tile {
    font-size: 1.2rem;
  }
}
</style>