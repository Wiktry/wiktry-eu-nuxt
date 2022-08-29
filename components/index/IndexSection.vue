<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Default'
  },
  index: {
    type: String,
    default: '0.'
  }
})
</script>

<template>
  <transition appear>
    <section class="section">
      <div class="container">
        <h2 class="sub-title">
          <span>{{ index }}</span>
          <span>{{ title }}</span>
        </h2>
        <slot></slot>
      </div>
    </section>
  </transition>
</template>

<style scoped>
.section {
  width: 75vw;
  max-width: 1100px;
  padding: 2vw 0 0;
  margin: auto;
}
.section:nth-child(1) { /* Links */
  padding-top: 4vw;
}
.section:nth-child(4) { /* About */
  padding-top: 6vw;
}
.container {

  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}
.sub-title {
  margin-bottom: 20px;

  font-family: 'Roboto Slab';
  font-size: 2.4rem;
}
.sub-title span:first-child {
  font-size: 1.4rem;
  margin-right: 8px;
}



.v-enter-active {
  transition: 500ms ease;
  transition-delay: 200ms;
  transition-property: opacity, transform;
}
.v-enter-from {
  transform: translateY(40px);
  opacity: 0;
}

@media (max-width: 600px) {
  .section {
    padding: 8vw 6vw;
    width: 100%;
  }

  .sub-title {
    font-size: 9vw;
  }
  .sub-title span:first-child {
    font-size: 5vw;
    margin-right: 8px;
  }
}
</style>