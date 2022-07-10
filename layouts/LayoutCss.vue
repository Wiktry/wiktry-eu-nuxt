<script setup>
import { useWindowScroll, useWindowSize, usePointerSwipe } from "@vueuse/core";
const { height, width } = useWindowSize();
const { y } = useWindowScroll();
const el = ref(null);
const { isSwiping, direction } = usePointerSwipe(el);
</script>

<template>
  <div class="frame" :style="{ '--x': y + 'px' }" >
    <div class="css" :class="{ 'css-active': y > 40 && width > 600 }" ref="el">
      <slot name="css"></slot>
    </div>
    <article class="article" :class="{ 'article-active': y > 40 && width > 600 }">
      <slot name="article"></slot>
    </article>
    <util-mini-header :active="y > 40 || width < 600" />
  </div>
</template>

<style scoped>
.css {
  height: 100vh;
  width: 100vw;

  position: fixed;
  z-index: 1;

  top: 0;
  right: 0;

  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.6);

  transition-property: top right height width;
  transition: .5s ease;
}
.css-active {
  width: 300px;
  height: 600px;
  min-height: 600px;

  top: calc(50% - 300px);
  right: calc(50vw - 400px - 80px - 150px);
}
.article {
  margin-left: calc(50vw - 400px - 150px);
  padding: 100vh 20px;

  width: 800px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  transition: padding .5s ease;
  position: absolute;
}
.article-active {
  padding: 120px 20px;
}

@media (max-width: 600px) {
  .frame {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .css {
    position: static;
  }
  .article {
    margin: 0;
    padding: 20px;
    position: static;
    width: 100vw;
  }
}
</style>
