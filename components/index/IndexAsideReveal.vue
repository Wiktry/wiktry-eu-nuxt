<script setup>
import { mdiArrowRight } from '@mdi/js'; 
import { useStoresSettings } from '@/stores/storesSettings.ts';
const settings = useStoresSettings();
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();

defineProps({
  active: {
    type: Boolean
  }
})

const emit = defineEmits(['reveal']);

const onClick = () => {
  emit('reveal');
}
</script>

<template>
  <button class="scroll" @click="onClick" :class="{ 'scroll-active': !active }" :style="{ '--width': width + 'px' }">
    <v-icon class="icon" :class="{ active: active }" :icon="mdiArrowRight" size="28" />
  </button>
</template>

<style scoped>
.scroll {
  position: absolute;
  bottom: 0;
  left: calc(100vw - var(--width / 2));
  z-index: 12;

  height: 50px;
  width: 60px;

  border-radius: 6px;
  background-color: var(--main-light);

  transition: .3s;
}
.icon {
  transform: rotateZ(0deg);
  transition: transform .4s ease;
}
.scroll-active {
  padding-left: 20px;
  left: calc(var(--width) - 14px);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
}
.active {
  transform: rotateZ(540deg);
}
</style>