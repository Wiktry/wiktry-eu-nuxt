<script setup>
const { find } = useStrapi4();

const language = ref('swedish');

const changeLanguage = () => {
  if (language.value === 'swedish') {
    language.value = 'english';
  } else {
    language.value = 'swedish';
  }
}

let cards = reactive({
  showcasesSv: undefined,
  showcasesEn: undefined,
  gamesSv: undefined,
  gamesEn: undefined
})
onMounted(async () => {
  cards.showcasesSv = await find('showcases', { populate: 'card', locale: 'sv' });
  cards.showcasesEn = await find('showcases', { populate: 'card', locale: 'en' });
  cards.gamesSv = await find('games', { populate: 'card', locale: 'sv' });
  cards.gamesEn = await find('games', { populate: 'card', locale: 'en' });
})
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
        <div class="card-container" v-if="cards.gamesEn && cards.gamesSv">
          <index-link-card v-for="article in language.value === 'swedish' ? cards.gamesSv.data : cards.gamesEn.data" :key="article.id" :article="article.attributes.card" />
        </div>
        <div class="card-container" v-else>
          <index-link-card skeleton />
        </div>
      </div>
      <div class="showcases">
        <h2>CSS Showcases</h2>
        <div class="card-container" v-if="cards.showcasesEn && cards.showcasesSv">
          <index-link-card v-for="article in language.value === 'swedish' ? cards.showcasesSv.data : cards.showcasesEn.data" :key="article.id" :article="article.attributes.card" />
        </div>
        <div class="card-container" v-else>
          <index-link-card skeleton />
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

/*.content {
  height: 400px;
  width: 600px;

  border-radius: 8px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.3)
}*/

@media (max-width: 600px) {
  .main {
    flex-flow: column nowrap;
  }
  .content {
    margin-left: 0;
  }
}
</style>