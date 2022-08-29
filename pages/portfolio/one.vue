<script setup>
import { useStoresSettings } from '@/stores/storesSettings.ts';
const settings = useStoresSettings();
</script>

<template>
<div class="index-main">
  <one-index-aside />
  <one-index-main />
  <util-footer />
</div>
</template>

<style >
.index-main {
  --main-dark: rgb(26, 55, 77);
  --main-middle-dark: rgb(43, 76, 99);
  --main-middle-dark-hover: rgb(64, 100, 126);
  --main-middle-light: rgb(105, 152, 171);
  --main-light: rgb(177, 208, 224);
  --main-accent: rgb(77, 26, 55);
  --main-accent-light: rgb(157, 21, 98);
  --main-text: #fff;
  --sub-title: hsl(206, 50%, 20%);

  --main-dark: #1e1f28;
  --main-middle: #20212c;
  --main-light: #252531;

  width: 100%;

  display: flex;
  flex-flow: column nowrap;

  font-family: 'Open Sans';
  font-weight: 400;
  color: var(--main-text);
}
.text-name {
  font-size: 1.4rem;
}
.bold {
  font-weight: bold;
}
.sub-title {
  color: var(--main-middle-light);
  font-weight: 500;
  font-size: .9rem;
  line-height: 1rem;
}
.text-normal {
  font-weight: normal;
  font-size: .9rem;
  line-height: 1rem;
}
.text-dark {
  color: var(--main-middle-light);
}
</style>