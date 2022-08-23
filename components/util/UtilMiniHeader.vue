<script setup>
import { useStoresMenu } from '@/stores/storesMenu.ts';
const menu = useStoresMenu();

defineProps({
  active: {
    type: Boolean,
    default: false,
  }
})

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
})
</script>

<template>
  <transition name="mini-header">
    <div class="container" :class="{ active: !active, menu: menu.show }" v-if="mounted">
      <div>
        <header-menu-button />
        <header-home-button />
      </div>
      <div>
        <header-theme-selector />
        <header-language-select />
      </div>
      <util-aside-menu />
    </div>
  </transition>
</template>

<style scoped>
.container {
  padding: 0 10px;

  position: fixed;
  top: 0;
  left: 0;
  height: 40px;

  background-color: var(--menu-background-color);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  z-index: 1;

  border-bottom-right-radius: 10px;

  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);

  transition: .4s ease;
  transition-property: left, border-bottom-right-radius;
}
.container::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 0;

  height: 38px;
  width: 38px;
  border-top-left-radius: 50%;
  background-color: transparent;
  box-shadow: 0 -20px 0 0 var(--menu-background-color);
}
.container > div {
  height: 40px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.active {
  left: -200px;
}
.menu {
  border-bottom-right-radius: 0;
}


.mini-header-enter-active {
  transition: 500ms ease;
  transition-delay: 100ms;
  transition-property: opacity, transform;
}

.mini-header-enter-from {
  transform: translateY(-40px);
  opacity: 0;
}

@media (max-width: 600px) {
  .container {
    width: 100vw;
    padding-right: 10px;
    border-bottom-right-radius: 20px;
    justify-content: space-between;
  }
  .menu {
    border-bottom-right-radius: 0;
  }
}
</style>