<script setup lang="ts">
import { useStoresSettings } from '@/stores/storesSettings';
const settings = useStoresSettings();
</script>

<template>
  <button class="language-select" @click="settings.changeLanguage">
    <Transition mode="out-in">
      <img src="~/assets/index/se.svg" height="24" width="34" v-if="settings.language === 'swedish'"/>
      <img src="~/assets/index/us.svg" height="24" width="34" v-else-if="settings.language === 'english'"/>
    </Transition>
  </button>
</template>

<style scoped>
.language-select {
  height: 24px;

  border-radius: 4px;
}
.language-select > img {
  object-fit: cover;

  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);
}

.v-enter-active,
.v-leave-active {
  transition: 0.24s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>