<script setup>
import { mdiArrowRight } from '@mdi/js'; 
import { useStoresSettings } from '@/stores/storesSettings.ts'; 
const settings = useStoresSettings();

const active = ref(false);

const emit = defineEmits(['scroll']);

const onClick = () => {
  emit('scroll');
  active.value = !active.value;
}
</script>

<template>
  <button class="scroll" @click="onClick">
    <v-icon class="icon" :class="{ active: active }" :icon="mdiArrowRight" :color="settings.theme.iconColor" size="28" />
  </button>
</template>

<style scoped>
.scroll {
  position: fixed;
  bottom: 40px;
  right: 30px;
  z-index: 100;

  height: 60px;
  width: 60px;

  background-color: var(--menu-background-color);

  border-radius: 50%;
}
.icon {
  transform: rotateZ(-90deg);
  transition: transform .4s ease;
}
.active {
  transform: rotateZ(450deg);
}

@media (max-width: 600px) {
  .scroll {
    bottom: 20px;
    right: 10px;
  }
}
</style>