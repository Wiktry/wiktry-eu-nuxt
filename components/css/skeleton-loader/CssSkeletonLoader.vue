<template>
  <div class="main">
    <div class="card">
      <util-skeleton-loader-old />
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  overflow: hidden;

  background-color: var(--content-background-color);

  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  background-color: var(--main-dark);
  border-radius: 6px;
}
</style>