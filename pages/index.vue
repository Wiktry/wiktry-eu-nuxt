<script setup lang="ts">
import { swedish, english, any } from '@/assets/index/IndexText.json';
import { useStoresSettings } from '@/stores/storesSettings';
import { useStoresStrapi } from '@/stores/storesStrapi';
const settings = useStoresSettings();
const strapi = useStoresStrapi();

const language = computed(() => {
  if (settings.language === 'swedish') {
    return swedish;
  } else {
    return english;
  }
})

const delay = 500;

const mounted = ref(false);
onMounted(() => {
  setTimeout(() => {
    mounted.value = true;
  }, delay)
})
</script>

<template>
  <article id="home">
    <util-mini-header :active="true" />
    <section class="hero" :class="{ 'hero-dark': settings.theme.dark }">
      <div id="hero-grad">
        <div id="name" v-if="mounted">
          <index-split-text :word="'Wiktor'" :delay="0" />
          <index-split-text :word="'Rydlund'" :delay="200"  />
          <index-split-text :word="'Software'" :delay="400" />
          <index-split-text :word="'Developer'" :delay="600" />
        </div>
        <div class="hero-placeholder" v-else>
          <p>placeholder</p>
          <p>placeholder</p>
          <p>placeholder</p>
          <p>placeholder</p>
        </div>
      </div>
    </section>
    <transition appear>
      <div class="divider" v-if="mounted"></div>
    </transition>

    
    <index-section :index="'0.'" :title="settings.language === 'swedish' ? 'Om mig' : 'About'" v-if="mounted">
      <div class="about-cont">
        <p class="about-text" v-for="para in language.about">
          {{ para }}
        </p>
      </div>
    </index-section>
    <index-section :index="'1.'" :title="settings.language === 'swedish' ? 'Erfarenheter' : 'Experience'" v-if="mounted">
      <div class="experience-container">
        <index-experience :title="language.lang.title" :text="language.lang.text" >
          <div class="experience-flags">
            <img src="~/assets/index/se.svg" />
            <img src="~/assets/index/us.svg" />
          </div>
        </index-experience>
        <index-experience :title="language.pLang.title" :text="language.pLang.text">
          <div class="language-flags">
            <img src="~/assets/index/svg/html.svg" />
            <img src="~/assets/index/svg/css3.svg" />
            <img src="~/assets/index/svg/javascript.svg" />
            <img src="~/assets/index/svg/typescript.svg" />
            <img src="~/assets/index/svg/cpp.svg" />
            <img src="~/assets/index/svg/rust.svg" />
          </div>
        </index-experience>
        <index-experience :title="language.frameworks.title" :text="language.frameworks.text">
          <div class="language-flags">
            <img src="~/assets/index/svg/vue.svg" />
            <img src="~/assets/index/svg/nuxt.svg" />
            <img src="~/assets/index/svg/react.svg" />
            <img src="~/assets/index/svg/next-js.svg" />
            <img src="~/assets/index/svg/npm.svg" />
            <img src="~/assets/index/svg/vitejs.svg" />
          </div>
        </index-experience>
      </div>
    </index-section>
    <index-section :index="'2.'" :title="settings.language === 'swedish' ? 'Projekt' : 'Projects'" v-if="mounted">
      <template v-if="!strapi.isLoading">
        <h2>{{ settings.language === 'swedish' ? 'Spel' : 'Games' }}</h2>
        <div class="card-container">
          <template v-if="settings.language === 'swedish'">
            <index-link-card v-for="article in strapi.cardsSv.games" :key="article.id" :article="article.attributes.card" />
          </template>
          <template v-else-if="settings.language === 'english'">
            <index-link-card v-for="article in strapi.cardsEn.games" :key="article.id" :article="article.attributes.card" />
          </template>
        </div>

        <h2>{{ settings.language === 'swedish' ? 'CSS Uppvisning' : 'CSS Showcases' }}</h2>
        <div class="card-container">
          <template v-if="settings.language === 'swedish'">
            <index-link-card v-for="article in strapi.cardsSv.showcases" :key="article.id" :article="article.attributes.card" />
          </template>
          <template v-else-if="settings.language === 'english'">
            <index-link-card v-for="article in strapi.cardsEn.showcases" :key="article.id" :article="article.attributes.card" />
          </template>
        </div>
      </template>
      <template v-else>
        <div class="card-container">
          <index-link-card />
        </div>
      </template>
    </index-section>
    <index-section :index="'3.'" :title="settings.language === 'swedish' ? 'Länkar' : 'Links'">
      <div class="about-cont">
        <p class="about-text">
          {{ language.links }}
        </p>
      </div>
    </index-section>
    <div :style="{ height: 60 + 'px' }" />
  </article>
</template>

<style scoped>
#home {
  position: relative;
  width: 100%;

  background-color: var(--background-color);
  box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.6);

  z-index: 1;
}

.hero {
  position: relative;
  width: 100%;


  background-image: url(~/assets/index/light_1.webp);
  background-size: cover;
  background-position: center;
}
.hero-dark {
  background-image: url(~/assets/index/dark_1.webp);
}
.hero-placeholder {
  font-size: 8vw;
  font-family: 'Roboto Slab';
  line-height: 7vw;

  opacity: 0;
}
#hero-grad {
  width: 100%;
  padding: 6vw 7vw;

  display: flex;
  justify-content: center;

  background-image: linear-gradient(to top, var(--background-color) 10%, transparent 50%);
}

.divider {
  margin: auto;
  width: 60%;
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 50%;
}

.about-cont {
  margin: 20px 0;
}
.about-text {
  margin: 0 0 1rem 0;
  
  font-size: 1.2rem;
  font-weight: 400;
}

.experience-container {
  margin: 20px 0;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  grid-template-rows: 1fr .2fr 1fr .2fr 1fr;
}

.experience-flags {
  display: grid;
  grid-template-rows: 120px 120px;
  grid-template-columns: 160px;
  gap: 20px;
}
.experience-flags > img {
  border-radius: 10px;
}

.language-flags {
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
}
.language-flags > img {
  width: 60px;
}

.card-container {
  margin-bottom: 40px;
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 40px;
}


.text-enter-active,
.text-leave-active {
  transition: 200ms ease;
  transition-property: opacity;
}
.text-enter-from,
.text-leave-to {
  opacity: 0;
}

.v-enter-active {
  transition: 500ms ease;
  transition-delay: 200ms;
  transition-property: opacity, transform;
}
.v-enter-from {
  transform: translateY(40px);
  opacity: 0;
}

@media (max-width: 600px) {
  #hero-grad {
    padding: 18vw 1vw 8vw 1vw;

    background-image: linear-gradient(to top, var(--background-color) 10%, transparent 60%);
  }
  .hero-placeholder {
    font-size: 14vw;
    line-height: 12vw;
  }
  .section {
    padding: 8vw 6vw;
  }

  .sub-title {
    font-size: 9vw;
  }
  .sub-title span:first-child {
    font-size: 5vw;
    margin-right: 8px;
  }

  .experience-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 30px;
  }

  .experience-flags {
    grid-template-rows: 100px;
    grid-template-columns: 1fr 1fr;
    align-self: center;
  }
  .language-flags {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }

  .card-container {
    justify-content: center;
  }
}
</style>