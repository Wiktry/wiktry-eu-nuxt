<script setup>
import { useStoresStrapi } from '@/stores/storesStrapi.ts';
import { useStoresSettings } from '@/stores/storesSettings.ts';
const settings = useStoresSettings();
const strapi = useStoresStrapi();

const { find } = useStrapi4();
</script>

<template>
<div class="index-main">
  
  <index-aside />

  <article class="index-content">
    <div class="hero">

    </div>
    <div class="experience">
      
    </div>
    <div class="projects">
      <div class="card-row">
          <h2>CSS Showcases</h2>
          <div class="card-container" v-if="!strapi.isLoading">
            <div v-if="settings.language === 'swedish'">
              <index-link-card v-for="article in strapi.cardsSv.showcases" :key="article.id" :article="article.attributes.card" />
            </div>
            <div v-else-if="settings.language === 'english'">
              <index-link-card v-for="article in strapi.cardsEn.showcases" :key="article.id" :article="article.attributes.card" />
            </div>
          </div>
          <div class="card-container" v-else>
            <index-link-card />
          </div>
      </div>
      <div class="card-row">
        <h2>Games</h2>
          <div class="card-container" v-if="!strapi.isLoading">
            <div v-if="settings.language === 'swedish'">
              <index-link-card v-for="article in strapi.cardsSv.games" :key="article.id" :article="article.attributes.card" />
            </div>
            <div v-else-if="settings.language === 'english'">
              <index-link-card v-for="article in strapi.cardsEn.games" :key="article.id" :article="article.attributes.card" />
            </div>
          </div>
          <div class="card-container" v-else>
            <index-link-card />
          </div>
      </div>
    </div>
  </article>

  <div class="flex-pusher"></div>
</div>
</template>

<style >
.index-main {
  width: 100%;
  position: fixed;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

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

.index-content {
  max-height: calc(var(--vh, 1vh) * 100);
  overflow-y: scroll;
  background-color: var(--main-dark);
}

.card-container > div {
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
}
.card-container {
  padding: 10px;
  overflow-y: scroll;
}

.flex-pusher {
  width: 10px;
  height: 50vh;
}

@media (max-width: 600px) {
  .index-main {
    
  }
  .index-content {
    margin-left: 0;
    width: 100%;
  }
  .flex-pusher {
    display: none;
    height: 0;
    width: 0;
  }
}
</style>