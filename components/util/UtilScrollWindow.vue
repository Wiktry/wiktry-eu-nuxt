<script setup>
import { mdiArrowRight } from '@mdi/js'; 
import { useStoresSettings } from '@/stores/storesSettings.ts'; 
const settings = useStoresSettings();

defineProps({
  deg: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['scroll']);

const onClick = () => {
  emit('scroll');
}
</script>

<template>
  <button class="scroll" :class="{ active: active }" @click="onClick" :style="{ '--deg': deg + 'deg' }">
    <svg height="60" width="40" :style="{ '--icon': settings.theme.iconColor }">
      <polyline points="10,20 20,30 30,20" style="fill:none;stroke-width:3" class="arrow arrow-1" />
      <polyline points="10,30 20,40 30,30" style="fill:none;stroke-width:3" class="arrow arrow-2" />
      <polyline points="10,40 20,50 30,40" style="fill:none;stroke-width:3" class="arrow arrow-3" />
    </svg>
  </button>
</template>

<style scoped>
.scroll {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;

  height: 60px;
  width: 40px;

  border-radius: 6px;

  background-color: var(--menu-background-color);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);

  transition: .3s ease;
}
.icon {
  transform: rotateZ(-90deg);
  transition: transform .4s ease;
}
.active {
  opacity: 0;
}

.arrow {
  position: fixed;
  transform: translateY(-10px);
  stroke: var(--icon);
}
.arrow-1 {
  animation: arrows-1 1.6s ease-in infinite;
}
.arrow-2 {
  animation: arrows-2 1.6s ease-in infinite;
}
.arrow-3 {
  animation: arrows-3 1.6s ease-in infinite;
}

@media (max-width: 600px) {
  .scroll {
    bottom: 20px;
    right: 20px;
  }
}

@keyframes arrows-1 {
  30% {
    transform: translateY(-10px);
  }
  40% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(-10px);
  }
}
@keyframes arrows-2 {
  20% {
    transform: translateY(-10px);
  }
  30% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(-10px);
  }
}
@keyframes arrows-3 {
  10% {
    transform: translateY(-10px);
  }
  20% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(-10px);
  }
}
</style>