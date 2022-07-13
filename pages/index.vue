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

  <article class="index-content">
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

  <div class="flex-pusher"></div>
</div>
</template>

<style >
.main {
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
  flex-flow: row wrap;
  gap: 20px;
}


.flex-pusher {
  width: 10px;
  height: 50vh;
}

@media (max-width: 600px) {
  .main {
    flex-flow: column nowrap;
  }
  .content {
    margin-left: 0;
  }
  .flex-pusher {
    height: 0;
    width: 0;
  }
}
</style>