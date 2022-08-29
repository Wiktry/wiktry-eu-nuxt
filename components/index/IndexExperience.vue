<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'default'
  },
  text: {
    type: Array,
    default: ['default']
  }
});
</script>

<template>
<div class="container">
  <span>{{ title }}</span>
  <div class="content">
      <slot></slot>
    <div class="text">
      <p v-for="para in text">
        {{ para }}
      </p>
    </div>
  </div>
</div>
</template>

<style scoped>
.container {
  transform: translateX(var(--trans));
}
.container:nth-child(2) {
  grid-column-start: 2;
  grid-row-start: 3;

  justify-self: center;
}
.container:nth-child(3) {
  grid-column-start: 3;
  grid-row-start: 5;

  justify-self: right;
}

.container > span {
  padding: 4px 12px;
  margin-left: 40px;
  margin-bottom: -10px;

  background-color: var(--highlight);
  border-radius: 4px;
  display: inline-block;

  font-family: 'Roboto Slab';
  font-weight: 400;
  font-size: 1.8rem;
  text-align: center;
  color: white;

  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
}

.content {
  height: 320px;
  width: 600px;

  padding: 30px;

  background-color: var(--content-background-color);
  /*background: linear-gradient(to right top, rgb(215, 77, 163), rgb(118, 117, 236));*/
  border-radius: 6px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 260px;
  gap: 10px;

  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
}
.text {
  font-size: 1.4rem;
}

.text > p:nth-child(2) {
  margin-top: 1.4rem;
}

@media (max-width: 600px) {
  .container > span {
    margin-left: 20px;
    font-size: 1.4rem;
  }
  .content {
    width: 80vw;
    height: 600px;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 1fr;
  }
}
</style>