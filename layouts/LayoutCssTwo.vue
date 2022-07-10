<script setup>
import { useWindowScroll, useWindowSize } from "@vueuse/core";
const { height, width } = useWindowSize();
const { y } = useWindowScroll();
</script>

<template>
  <div class="frame" :class="{ 'frame-active': y > 100 }" :style="{ '--x': x + 'px' }">
    <div class="css" :class="{ 'css-active': y > 100 }">
      <slot name="css"></slot>
    </div>
    <article class="article" :class="{ 'article-active': y > 100 }">
      <slot name="article"></slot>
    </article>
  </div>
</template>

<style scoped>
.frame {
  height: 100%;
  width: 100vw;
  overflow: scroll;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.css {
  min-height: 100vh;
  width: 100%;

  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.6);

  transition: .5s ease;
}
.article {
  margin: auto 0;
  padding: 20px 0;

  min-height: 2000px;
  max-width: 800px;
  min-width: 400px;
  width: 70%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  transition: .3s;
}

@media (min-width: 1000px) {
  .frame {
    display: unset;
    flex-flow: unset;
    justify-content: unset;
    align-items: unset;
  }
  .css {
    height: 100vh;

    position: fixed;
    z-index: 1;

    top: 0;
    right: 0;
  }
  .css-active {
    width: 300px;
    height: 600px;
    min-height: 600px;

    top: calc(50% - 300px);
    right: 5%;
  }
  .article {
    position: absolute;
    padding: 0;
  }
  .article-active {
    padding: 120px 0;

    right: calc(50vw + 150px);
  }
}
</style>
