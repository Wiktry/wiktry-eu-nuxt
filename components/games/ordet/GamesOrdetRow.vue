<script setup>
const props = defineProps(['letters']);
</script>

<template>
<div class="game-row">
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
</style>