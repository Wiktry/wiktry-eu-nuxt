<script setup>
import { mdiLinkedin, mdiGithub } from '@mdi/js';
import { swedish, english, any } from '@/assets/index/IndexText.json';

const props = defineProps({
  language: {
    type: String,
    default: 'swedish'
  }
})

console.log(props);

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
</script>

<template>
  <aside class="personal-info">
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
    <div class="aside-footer-pusher" />
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
      <button class="footer-button" @click="$emit('changeLanguage')">
        <div class="language-select">
          <img src="~/assets/index/se.svg" height="27" width="36" v-if="props.language === 'swedish'"/>
          <img src="~/assets/index/us.svg" height="27" width="36" v-else-if="props.language === 'english'"/>
        </div>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.personal-info {
  width: 300px;
  height: 100%;
  position: absolute;
  left: 0;

  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: var(--main-dark);
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
  overflow: scroll;
  display: flex;
  justify-content: center;
}
.experience {
  width: 240px;
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

.aside-footer-pusher {
  min-height: 60px;
  width: 100%;
}
.aside-footer {
  width: 300px;
  height: 60px;

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
  }
  .aside-footer {
    width: 100%;
  }
}
</style>