<script setup>
import { mdiArrowRight } from '@mdi/js'; 
const props = defineProps({
  article: {
    type: Object,
    default: undefined,
  }
})
</script>

<template>
  <div class="card-cont">
    <Transition appear mode="out-in">
      <div class="card" v-if="article !== undefined">
        <img :src="article.imgurl" class="img" alt="error" />
        <div class="container">
          <p class="title">{{ article.title }}</p>
          <div class="desc" v-html="article.desc"></div>
          <NuxtLink :to="article.path" class="button">
            Check it out!
            <v-icon class="icon" :icon="mdiArrowRight" size="22" />
          </NuxtLink>
        </div>
      </div>
      <div v-else>
        <util-skeleton-loader />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.card-cont {
  width: 320px;
  height: 320px;

  display: flex;
  flex-flow: column nowrap;

  background-color: var(--main-dark);
  border-radius: 6px;
  box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.2);
}
.card {
  --font-color: rgba(255,255,255,0.6);

  width: 320px;
  height: 320px;

  display: flex;
  flex-flow: column nowrap;

  color: var(--font-color);
}
.img {
  width: 100%;
  height: 140px;
  object-fit: cover;

  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
.container {
  padding: 14px;

  height: 100%;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
.title {
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
}
.button {
  width: 100%;
  height: 36px;
  padding: 10px;
  background-color: var(--main-middle-dark);

  font-weight: 500;

  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 3px;

  transition: background .2s ease;
}
.button:link, .button:visited {
  text-decoration: none;
  color: var(--font-color);
}
.button:hover {
  background-color: var(--main-middle-dark-hover);
}

.v-enter-active,
.v-leave-active {
  transition: opacity .3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>