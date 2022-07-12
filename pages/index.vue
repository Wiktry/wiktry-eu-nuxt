<script setup>
import { useStoresStrapi } from '@/stores/storesStrapi.ts';
const strapi = useStoresStrapi();

const { find } = useStrapi4();

const language = ref('swedish');

const changeLanguage = () => {
  if (language.value === 'swedish') {
    language.value = 'english';
  } else {
    language.value = 'swedish';
  }
}
</script>

<template>
<div class="main">
  
  <index-aside :language="language" @change-language="changeLanguage"></index-aside>

  <article class="content">
    <div class="hero">

    </div>
    <div class="experience">
      
    </div>
    <div class="projects">
      <div class="games">
        <h2>Games</h2>
          <div class="card-container" v-if="!strapi.isLoading">
            <div v-if="language === 'swedish'">
              <index-link-card v-for="article in strapi.cardsSv.games" :key="article.id" :article="article.attributes.card" />
            </div>
            <div v-else-if="language === 'english'">
              <index-link-card v-for="article in strapi.cardsEn.games" :key="article.id" :article="article.attributes.card" />
            </div>
          </div>
          <div class="card-container" v-else>
            <index-link-card />
          </div>
      </div>
      <div class="showcases">
          <h2>CSS Showcases</h2>
          <div class="card-container" v-if="!strapi.isLoading">
            <div v-if="language === 'swedish'">
              <index-link-card v-for="article in strapi.cardsSv.showcases" :key="article.id" :article="article.attributes.card" />
            </div>
            <div v-else-if="language === 'english'">
              <index-link-card v-for="article in strapi.cardsEn.showcases" :key="article.id" :article="article.attributes.card" />
            </div>
          </div>
          <div class="card-container" v-else>
            <index-link-card />
          </div>
      </div>
    </div>
  </article>
</div>
</template>

<style>
.main {
  --main-dark: rgb(26, 55, 77);
  --main-middle-dark: rgb(43, 76, 99);
  --main-middle-dark-hover: rgb(64, 100, 126);
  --main-middle-light: rgb(105, 152, 171);
  --main-light: rgb(177, 208, 224);
  --main-accent: rgb(77, 26, 55);
  --main-accent-light: rgb(157, 21, 98);
  --main-text: #fff;
  --sub-title: hsl(206, 50%, 20%);

  width: 100%;
  height: 100%;

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

.content {
  margin-left: 300px;
}

@media (max-width: 600px) {
  .main {
    flex-flow: column nowrap;
  }
  .content {
    margin-left: 0;
  }
}
</style>