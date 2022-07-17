<script setup>

</script>

<template>
  <div class="cont">
    <div class="image"></div>
  </div>
</template>

<style scoped>
.cont {
  padding: 0;
  width: 320px;
  height: 260px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  overflow: hidden;

  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 24px;
  border-bottom-left-radius: 24px;
}

.image {
  height: 100%;
  width: 100%;
}

.image {
  background: #eee;
  background: linear-gradient(110deg, rgba(255,255,255,0.1) 12%, rgba(255,255,255,0.2) 22%, rgba(255,255,255,0.1) 37%);
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>