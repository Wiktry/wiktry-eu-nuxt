<script setup>
import { mdiLinkedin, mdiGithub } from '@mdi/js';
import { useWindowSize } from "@vueuse/core";
import { swedish, english, any } from '@/assets/index/IndexText.json';
import { useStoresSettings } from '@/stores/storesSettings.ts';

const settings = useStoresSettings();
const { width } = useWindowSize();

const text = computed(() => {
  if (settings.language === 'swedish') {
    return {
      extra: swedish.extra,
      lang: swedish.lang,
      pLang: any.pLang
    }
  } else if (settings.language === 'english') {
    return {
      extra: english.extra,
      lang: english.lang,
      pLang: any.pLang
    }
  }
})

const changeUrl = (url) => {
  window.open(url, '_blank').focus();
}

const openAside = ref(false);
</script>

<template>
  <aside class="personal-info" :class="{ 'aside-open': openAside }" :style="{ '--width': width + 'px', '--padding': (width - 240) / 2 + 'px' }">
    <div class="name-title">
      <img src="~/assets/index/portrait.webp" height="100" width="100" class="img" />
      <span class="bold text-name">Wiktor Rydlund</span>
      <div>
        <p class="sub-title" v-if="settings.language === 'english'">
          Software Developer <br /> Design Enthusiast
        </p>
        <p class="sub-title" v-else>
          Mjukvaruutvecklare <br /> Designentusiast
        </p>
      </div>
    </div>
    <div class="experience-cont">
      <div class="experience">
        <div class="extra-info">
          <index-aside-extra-info :title="text.extra.country.title" :response="text.extra.country.response" />
          <index-aside-extra-info :title="text.extra.state.title" :response="text.extra.state.response" />
          <index-aside-extra-info :title="text.extra.city.title" :response="text.extra.city.response" />
          <index-aside-extra-info :title="text.extra.age.title" :response="text.extra.age.response" />
        </div>
        <v-divider />
        <div class="language">
          <index-aside-radial-progress :title="text.lang.swedish.title" :value="text.lang.swedish.value" />
          <index-aside-radial-progress :title="text.lang.english.title" :value="text.lang.english.value" />
        </div>
        <v-divider />
        <div class="p-language">
          <index-aside-linear-progress :title="text.pLang.html.title" :value="text.pLang.html.value" />
          <index-aside-linear-progress :title="text.pLang.css.title" :value="text.pLang.css.value" />
          <index-aside-linear-progress :title="text.pLang.js.title" :value="text.pLang.js.value" />
          <index-aside-linear-progress :title="text.pLang.react.title" :value="text.pLang.react.value" />
          <index-aside-linear-progress :title="text.pLang.vue.title" :value="text.pLang.vue.value" />
          <index-aside-linear-progress :title="text.pLang.cpp.title" :value="text.pLang.cpp.value" />
        </div>
        <v-divider />
        <div class="frameworks">

        </div>
      </div>
    </div>
    <div class="footer-pusher"></div>
    <div class="aside-footer">
      <button @click="changeUrl('https://www.linkedin.com/in/wiktor-rydlund/')" class="footer-button">
        <v-icon :icon="mdiLinkedin" size="32" />
      </button>
      <button @click="changeUrl('https://github.com/Wiktry/wiktry-eu-nuxt')" class="footer-button">
        <v-icon :icon="mdiGithub" size="32" />
      </button>
      <div class="footer-button">
        <header-theme-selector />
      </div>
      <button class="footer-button" @click="settings.changeLanguage">
        <div class="language-select">
          <Transition mode="out-in">
            <img src="~/assets/index/se.svg" height="27" width="36" v-if="settings.language === 'swedish'"/>
            <img src="~/assets/index/us.svg" height="27" width="36" v-else-if="settings.language === 'english'"/>
          </Transition>
        </div>
      </button>
      <div class="footer-button" v-if="width <= 600">
        <index-aside-reveal @reveal="openAside = !openAside" :active="openAside" />
      </div>
    </div>
  </aside>
</template>

<style scoped>

.v-enter-active,
.v-leave-active {
  transition: 0.2s ease;
}
.v-enter-from,
.v-leave-to {
  width: 0;
}

.personal-info {
  width: 300px;
  height: calc(var(--vh, 1vh) * 100);
  position: fixed;
  z-index: 1;

  background-color: var(--main-middle);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);
}
.name-title {
  height: 200px;
  width: 100%;
  padding: 20px;
  background-color: var(--main-light);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;

  text-align: center;
}

.experience-cont {
  width: 100%;
  height: calc(100% - 200px - 50px);
  display: flex;
  justify-content: center;
}
.experience {
  width: 300px;
  padding: 0 30px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.extra-info {
  width: 240px;
  margin: 20px 0;
}
.language {
  width: 100%;
  margin: 20px 0;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
}
.p-language {
  margin: 20px 0;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
}

.aside-footer {
  width: 300px;
  height: 50px;

  position: fixed;
  bottom: 0;

  background-color: var(--main-light);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
}

.footer-button {
  width: calc(100% / 4);
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: .3s ease;
}
.footer-button:nth-child(-n+2):hover {
  transform: translateY(-6px);
  animation-name: icon-party;
  animation-delay: 2s;
  animation-duration: .6s;
  animation-iteration-count: infinite;
}
.language-select {
  height: 27px;
}
.language-select > img {
  object-fit: cover;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);
}

@keyframes icon-party {
  0% {
    color: white;
  }
  33% {
    color: purple;
  }
  66% {
    color: orange
  }
  100% {
    color: white;
  }
}

@media (max-width: 600px) {
  .personal-info {
    width: 100vw;

    position: fixed;
    left: -100vw;

    transition: left .3s ease
  }
  .experience {
    width: 100%;
    padding: 0 var(--padding);
  }
  .aside-open {
    left: 0;
  }
  .footer-pusher {
    height: 50px;
    width: 100%;
  }
  .aside-footer {
    width: var(--width);
  }
}
</style>