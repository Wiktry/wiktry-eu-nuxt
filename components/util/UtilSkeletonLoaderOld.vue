<script setup>

</script>

<template>
  <div class="cont">
    <div class="image"></div>
    <div class="title"></div>
    <div class="text"></div>
    <div class="button"></div>
  </div>
</template>

<style scoped>
.cont {
  padding: 0;
  width: 320px;
  height: 320px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  border-radius: 6px;
}

.image {
  height: 140px;
  width: 100%;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.title {
  margin: 0 14px;
  height: 30px;
  width: 50%;

  border-radius: 6px;
}
.text {
  margin: 0 14px;
  height: 60px;
  width: calc(100% - 28px);

  border-radius: 6px;
}
.button {
  margin: 0 14px 14px 14px;
  height: 36px;
  width: calc(100% - 28px);

  border-radius: 6px;
}

.image, .title, .text, .button {
  background: #eee;
  background: linear-gradient(110deg, rgba(255,255,255,0.1) 8%, rgba(255,255,255,0.2) 18%, rgba(255,255,255,0.1) 33%);
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>