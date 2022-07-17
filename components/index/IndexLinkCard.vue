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
  <div class="card">
    <Transition appear mode="out-in">
      <NuxtLink :to="article.path" class="button" v-if="article !== undefined">
        <div class="img-cont">
          <img :src="article.imgurl" class="img" alt="error" />
        </div>
        <div class="container">
          <p class="title">{{ article.title }}</p>
          <div class="desc" v-html="article.desc"></div>
        </div>
      </NuxtLink>
      <util-skeleton-loader v-else />
    </Transition>
  </div>
</template>

<style scoped>
.card {
  margin: 10px;
  width: 320px;
  height: 260px;
  color: white;
}
.button {
  display: grid;
}
.img-cont {
  width: 320px;
  height: 240px;
  overflow: hidden;

  grid-column: 1;
  grid-row: 1;

  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 24px;
  border-bottom-left-radius: 24px;

  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.6);
}
.img {
  width: 320px;
  height: 240px;
  object-fit: cover;

  grid-column: 1;
  grid-row: 1;

  transition: .3s ease;
}
.container {
  padding: 10px;
  width: 260px;
  height: 120px;
  position: relative;

  display: flex;
  flex-flow: column nowrap;

  left: 10px;
  top: 180px;
  opacity: 0;

  grid-column: 1;
  grid-row: 1;

  background-color: rgb(20, 20, 20);

  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 24px;
  border-bottom-left-radius: 24px;

  transition: .3s ease;
}
.title {
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}
.desc {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

.button:link, .button:visited {
  text-decoration: none;
  color: white;
}
.button:hover .img{
  border-top-right-radius: 42px;
  border-bottom-left-radius: 42px;
  transform: scale(1.2);
}
.button:hover .container{
  top: 160px;
  opacity: 1;
  box-shadow: 0 0 6px 4px rgba(0,0,0,0.2);
}


.v-enter-active,
.v-leave-active {
  transition: opacity .3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .container {
    top: 160px;
    opacity: 1;
    box-shadow: 0 0 6px 4px rgba(0,0,0,0.2);
  }
  .img-cont {
    border-top-right-radius: 42px;
    border-bottom-left-radius: 42px;
  }
}
</style>