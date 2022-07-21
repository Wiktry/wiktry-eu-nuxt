<script setup>
import { useStoresSettings } from '@/stores/storesSettings.ts';
import { useWindowSize } from '@vueuse/core';
const settings = useStoresSettings();

defineProps({
  height: {
    type: Number,
    default: 200,
  },
  width: {
    type: Number,
    default: 800,
  }
})
</script>

<template>
  <div class="container" :style="{ height: height + 'px', width: width + 'px'}">
    <div class="text">
      <p :style="{ 'font-size': width > 600 || height < 400 ? width * 0.04 + 'px' : width * 0.08 + 'px' }">
        {{ settings.language === 'swedish' ?
          'Upptäck min fantastiska hemsida!' :
          'Discover my amazing site!'
        }}
      </p>
      <p :style="{ 'font-size': width > 600 || height < 400 ? width * 0.014 + 'px' : width * 0.038 + 'px' }">
        <span class="span-code">{{'code'}}</span>
        {{ settings.language === 'swedish' ?
          'Jag bygger saker med text.' :
          'I build things with text.'
        }}
        <span class="span-code">{{'code'}}</span>
      </p>
      <div :style="{ height: width > 600 || height < 400 ? '100px' : 0 }"></div>
    </div>
    <img class="portrait-img" src="~/assets/index/big_me.webp" alt="not me" :style="{ height: width > 600 || height < 400 ? height + 20 + 'px' : height * 0.6 + 'px' }" />
  </div>
</template>

<style scoped>
.container {
  grid-column: 1;
  grid-row: 2;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
}

.text {
  width: 50%;
  padding: 2%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
}
.text > p:first-child {
  font-weight: 800;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, .6);
}
.text > p:nth-child(2) {
  font-family: monospace;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, .6);
}
.span-code {
  color: var(--main-accent-light);
}
.span-code::before {
  content: '<';
  color: white;
}
.span-code:nth-of-type(2):before {
  content: '</';
  color: white;
}
.span-code::after {
  content: '>';
  color: white;
}

.portrait-img {
  margin-top: -20px;
  object-fit: contain;
}

@media (max-width: 600px) {
  .container {
    flex-flow: column nowrap;
    justify-content: space-between;
  }
  .text {
    width: 100%;
    gap: 20px;
  }
  .portrait-img {
    margin-top: 0;
  }
}
</style>