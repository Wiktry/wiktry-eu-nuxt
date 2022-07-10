<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div class="container" :class="{ active: !active }">
    <header-menu-button />
    <header-home-button />
    <header-theme-selector />
    <util-aside-menu />
  </div>
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

  border-bottom-right-radius: 10px;

  transition: left .4s ease;
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
.active {
  left: -160px;
}

@media (max-width: 600px) {
  .container {
    width: 100vw;
    border-bottom-right-radius: 20px;
  }
}
</style>