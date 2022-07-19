<script setup>

</script>

<template>
  <div class="main">
    <div class="container">
      <css-loading-google />
      <css-loading-gradient-circle />
      <css-loading-slide />
      <css-loading-two-circle />
      <css-loading-three-circle />
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100%;

  background-color: #1e1f28;

  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  background-color: var(--content-background-color);
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
}
</style>