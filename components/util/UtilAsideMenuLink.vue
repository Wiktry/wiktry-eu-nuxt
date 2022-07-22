<script setup>
import { useElementSize } from "@vueuse/core";

const cont = ref(null);
const par = ref(null);

const contW = useElementSize(cont);
const parW = useElementSize(par);

defineProps({
  card: {
    type: Object,
    default: undefined
  }
})
</script>

<template>
  <NuxtLink :to="card.path" class="link-cont" v-if="card !== undefined" @click="$emit('travel')" ref="cont" :style="{ '--contW': contW.width.value + 'px', '--parW': parW.width.value + 'px' }">
    <p class="name" ref="par">{{ card.title }}</p>
  </NuxtLink>
</template>

<style scoped>
.link-cont {
  padding: 4px;
  margin: 10px;
  margin-left: 20px;
  width: calc(100% - 40px);

  background-color: var(--content-background-color);
  border-radius: 6px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);

  display: flex;
}
.link-cont:link, .link-cont:visited {
  text-decoration: none;
  color: var(--text-color);
}
.name {
  margin-left: 10px;
  width: 100%;
  font-size: 1.4rem;
}
</style>