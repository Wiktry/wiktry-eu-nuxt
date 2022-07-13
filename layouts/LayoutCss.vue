<script setup>
import { useScroll, useWindowSize, usePointerSwipe } from "@vueuse/core";
import { vScroll } from '@vueuse/components';

const frame = ref(null);
const { height, width } = useWindowSize();
const { y } = useScroll(frame);
const oldY = ref(0);

const el = ref(null);
const top = ref('0');
const opacity = ref(1);
const containerHeight = computed(() => el.value.offsetHeight) 

// This shouldn't be necessary. But without it, desktop chrome spazzes out
// So here it is
const onScroll = (state) => {
  if (state.y.value < 60 && oldY.value >= 60) {
    frame.value.scrollTop = 0;
    oldY.value = 0;
  } else if (oldY.value < state.y.value) {
    oldY.value = state.y.value;
  }
}

const { isSwiping, distanceY } = usePointerSwipe(el, {
  onSwipe(e) {
    if (distanceY.value > 0) {
      const distance = Math.abs(distanceY.value);
      top.value = '-' + distance + 'px';
      opacity.value = 1.25 - distance / containerHeight.value;
    }
  },
  onSwipeEnd(e, direction) {
    if (Math.abs(distanceY.value) / containerHeight.value >= 0.15) {
      top.value = '-100%';
      opacity.value = 0;
    } else {
      top.value = '0';
      opacity.value = 1;
    }
  }
});
</script>

<template>
  <div class="frame" :class="{ 'frame-active': y > 60 && width > 600 }" :style="{ '--y': y + 'px' }" ref="frame" v-scroll="onScroll">
    <div v-if="width > 600" class="css-pusher" :class="{ 'css-pusher-active': y > 60 && width > 600 }"></div>
    <div class="css" :class="{ 'css-active': y > 60 && width > 600, 'css-swipe': !isSwiping }" :style="{ '--top': top, '--op': opacity }" ref="el">
      <slot name="css"></slot>
      <util-scroll-window :active="y > 60 || width < 600" />
    </div>
    <article class="article" :class="{ 'article-active': y > 60 && width > 600 }">
      <slot name="article"></slot>
    </article>
    <util-mini-header :active="y > 60 || width < 600" />
  </div>
</template>

<style scoped>
.frame {
  height: 100%;
  overflow: inherit;
  overflow-y: scroll;
}
.css-pusher {
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  z-index: 2;
  position: relative;

  transition: height .5s ease;
}
.css-pusher-active {
  height: 0;
}
.css {
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;

  z-index: 1;
  position: fixed;

  top: 0;
  right: 0;

  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.6);

  transition: .5s ease;
  transition-property: top, right, height, width;
}
.css-active {
  width: 300px;
  height: 600px;
  min-height: 600px;

  top: calc(50% - 300px);
  right: calc(50vw - 400px - 40px - 150px);
}
.article {
  margin-left: calc(50vw - 400px - 150px);
  padding: 160px 20px;

  width: 800px;
  min-height: 120vh;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

@media (max-width: 1200px) {
  .css-active {
    right: calc(50vw - 300px - 20px - 150px);
  }
  .article {
    margin-left: calc(50vw - 320px - 150px);
    width: 600px;
  }
}

@media (max-width: 600px) {
  .frame {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .css {
    top: var(--top);
    opacity: var(--op);
    transition: 0s;
  }
  .css-swipe {
    transition: .4s ease;
    transition-property: top, opacity;
  }
  .article {
    margin: 0;
    padding: 20px;
    position: static;
    width: 100vw;
  }
}
</style>
