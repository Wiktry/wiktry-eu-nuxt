<script setup>
import { useStoresMenu } from '@/stores/storesMenu.ts';
import { useStoresStrapi } from '@/stores/storesStrapi.ts';
import { useStoresSettings } from '@/stores/storesSettings.ts';
import UtilSkeletonLoaderMenu from './UtilSkeletonLoaderMenu.vue';
const settings = useStoresSettings();
const menu = useStoresMenu();
const strapi = useStoresStrapi();
</script>

<template>
  <aside class="menu" :class="{ show: menu.show }">
    <div class="link-cont" v-if="settings.language === 'english'">
      <h2 class="title">Games</h2>
      <template v-if="strapi.cardsSv.games">
        <util-aside-menu-link v-for="card in strapi.cardsSv.games" :key="card.id" :card="card.attributes.card" @travel="menu.closeMenu" />
      </template>
      <template v-else>
        <util-skeleton-loader-menu />
      </template>
    </div>
    <div class="link-cont" v-else>
      <h2 class="title">Spel</h2>
      <template v-if="strapi.cardsEn.games">
        <util-aside-menu-link v-for="card in strapi.cardsEn.games" :key="card.id" :card="card.attributes.card" @travel="menu.closeMenu" />
      </template>
      <template v-else>
        <util-skeleton-loader-menu />
      </template>
    </div>

    <div class="link-cont" v-if="settings.language === 'english'">
      <h2 class="title">CSS Showcases</h2>
      <template v-if="strapi.cardsSv.showcases">
        <util-aside-menu-link v-for="card in strapi.cardsSv.showcases" :key="card.id" :card="card.attributes.card" @travel="menu.closeMenu" />
      </template>
      <template v-else>
        <util-skeleton-loader-menu />
      </template>
    </div>
    <div class="link-cont" v-else>
      <h2 class="title">CSS Uppvisning</h2>
      <template v-if="strapi.cardsEn.showcases">
        <util-aside-menu-link v-for="card in strapi.cardsEn.showcases" :key="card.id" :card="card.attributes.card" @travel="menu.closeMenu" />
      </template>
      <template v-else>
        <util-skeleton-loader-menu />
      </template>
    </div>
  </aside>
</template>

<style scoped>
.menu {
  position: fixed;
  height: 100%;
  width: 400px;

  background-color: var(--menu-background-color);
  
  top: 40px;
  left: -600px;
  z-index: 100;

  border-top-right-radius: 20px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);

  transition: left .4s ease;

  align-self: start;
}

.show {
  left: 0;
}

.title {
  margin-left: 10px;
}

@media (max-width: 600px) {
  .menu {
    border-top-right-radius: 0;
    box-shadow: none;
  }
  .show {
    width: 100vw;
  }
}
</style>