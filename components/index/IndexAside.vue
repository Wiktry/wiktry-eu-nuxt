<script setup>
import { mdiLinkedin, mdiGithub } from '@mdi/js';
import { useWindowSize } from "@vueuse/core";
import { swedish, english, any } from '@/assets/index/IndexText.json';

const { width } = useWindowSize();

const props = defineProps({
  language: {
    type: String,
    default: 'swedish'
  }
})

const text = reactive({
  extra: swedish.extra,
  lang: swedish.lang,
  pLang: any.pLang
});

const changeLang = (lang) => {
  if (lang === 'swedish') {
    text.extra = swedish.extra;
    text.lang = swedish.lang;
  } else if (lang === 'english') {
    text.extra = english.extra;
    text.lang = english.lang;
  }
}

watch(props, newLang => {
  changeLang(newLang.language);
})

onMounted(() => {
  changeLang(props.language);
})

const changeUrl = (url) => {
  window.open(url, '_blank').focus();
}

const openAside = ref(false);
</script>

<template>
  <aside class="personal-info" :class="{ 'aside-open': openAside }" :style="{ '--width': width + 'px', '--padding': (width - 240) / 2 + 'px' }">
    <div class="name-title">
      <img src="~/assets/index/portrait.png" height="100" width="100" class="img" />
      <span class="bold text-name">Wiktor Rydlund</span>
      <div>
        <p class="sub-title">Software Developer <br /> Sleep Enthusiast</p>
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
          <index-aside-linear-progress :title="text.pLang.python.title" :value="text.pLang.python.value" />
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
      <button class="footer-button" @click="$emit('changeLanguage')">
        <div class="language-select">
          <img src="~/assets/index/se.svg" height="27" width="36" v-if="props.language === 'swedish'"/>
          <img src="~/assets/index/us.svg" height="27" width="36" v-else-if="props.language === 'english'"/>
        </div>
      </button>
      <div class="footer-button" v-if="width <= 600">
        <index-aside-reveal @reveal="openAside = !openAside" :active="openAside" />
      </div>
    </div>
  </aside>
</template>

<style scoped>
.personal-info {
  width: 300px;
  height: calc(var(--vh, 1vh) * 100);

  background-color: var(--main-dark);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);
}
.name-title {
  height: 200px;
  width: 100%;
  padding: 20px;
  background-color: var(--main-middle-dark);
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

  background-color: var(--main-middle-dark);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);

  display: flex;
  flex-flow: row nowrap;
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
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);
}

::-webkit-scrollbar {
  width: 4px;
  float: right;
}
::-webkit-scrollbar-track {
  background: transparent;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,.2);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
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

    z-index: 1;
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