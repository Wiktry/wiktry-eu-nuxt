<script setup>
</script>

<template>
  <div id="footer">
    <div id="footer-pusher"></div>
    <div id="footer-container">
      <p>HELLO THERE</p>
    </div>
  </div>
</template>

<style scoped>
#footer {
  --height: 300px;

  height: var(--height);
}
#footer-pusher {
  height: var(--height);
}
#footer-container {
  padding-left: 300px;
  height: var(--height);
  width: 100%;

  position: fixed;
  bottom: 0;
  z-index: -1;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--main-light); 
}

@media (max-width: 600px) {
  #footer {
    width: 100vw;
  }
}
</style>