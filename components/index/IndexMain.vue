<script setup>
import { useStoresStrapi } from '@/stores/storesStrapi.ts';
import { useStoresSettings } from '@/stores/storesSettings.ts';
const settings = useStoresSettings();
const strapi = useStoresStrapi();
</script>

<template>
  <article class="index-content">
    <img class="index-back-img" src="~/assets/index/index_back.jpg" alt="background" />
    <div class="index-grad"></div>
    <div class="hero">
      <div class="index-hero-back"></div>
      <img class="index-hero-img" src="~/assets/index/index_hero_dark.jpg" alt="hero" />
    </div>
    <div class="hero-grad"></div>
    <div class="experience">
      
    </div>
    <div class="projects">
      <div class="card-row">
          <h2>{{ settings.language === 'swedish' ? 'CSS Uppvisning' : 'CSS Showcases' }}</h2>
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
        <h2>{{ settings.language === 'swedish' ? 'Spel' : 'Games' }}</h2>
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
</template>

<style scoped>
.index-content {
  margin-left: 300px;
  width: calc(100vw - 300px);
  background-color: black;
  
  z-index: 0;

  display: flex;
  flex-flow: column nowrap;
}
.index-back-img {
  width: 100%;
  position: absolute;
  z-index: 0;

  object-fit: cover;
  opacity: .5;
}
.index-grad {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}

.hero {
  margin: 20px auto 0;
  padding: 40px 0;
  width: 80%;
  
  z-index: 2;

  background-color: var(--main-dark);
}
.index-hero-img {
  margin: 0 0 0 -5%;
  width: 110%;
  object-fit: contain;

  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
}
.hero-grad {
  position: relative;
  margin-top: -300px;
  height: 300px;

  background-image: linear-gradient(to top, var(--main-dark) 30%, transparent);
}

.projects {
  margin: 0 auto;
  padding: 0 5%;
  width: 100%;
  z-index: 2;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;

  background-color: var(--main-dark);
}

.card-row {
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
}
.card-row > h2:first-child {
  margin-left: 20px;
}
.card-container {
  width: 100%;
  padding: 10px;
}
.card-container > div:first-child {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}

@media (max-width: 600px) {
  .index-content {
    margin-left: 0;
    width: 100%;
  }

  .hero {
    padding: 20px 0;
  }
  .index-hero-img {
    margin-left: -12.5%;
    width: 100vw;
    height: 300px;

    object-fit: cover;
  }

  .projects {
    padding: 0;
  }
  .card-row {
    padding: 0;
  }
  .card-container > div:first-child {
    flex-flow: column;
    align-items: center;
    gap: 20px;
  }
}
</style>