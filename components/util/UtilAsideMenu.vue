<script setup>
import { useStoresMenu } from '@/stores/storesMenu.ts';
import { useStoresStrapi } from '@/stores/storesStrapi.ts';
import { useStoresSettings } from '@/stores/storesSettings.ts';
const settings = useStoresSettings();
const menu = useStoresMenu();
const strapi = useStoresStrapi();
</script>

<template>
  <aside class="menu" :class="{ show: menu.show }">
    <div class="link-cont" v-if="settings.language === 'english'">
      <h2 class="title">Games</h2>
      <util-aside-menu-link v-for="card in strapi.cardsSv.games" :key="card.id" :card="card.attributes.card" @travel="menu.closeMenu" />
    </div>
    <div class="link-cont" v-else>
      <h2 class="title">Spel</h2>
      <util-aside-menu-link v-for="card in strapi.cardsEn.games" :key="card.id" :card="card.attributes.card" @travel="menu.closeMenu" />
    </div>

    <div class="link-cont" v-if="settings.language === 'english'">
      <h2 class="title">CSS Showcases</h2>
      <util-aside-menu-link v-for="card in strapi.cardsSv.showcases" :key="card.id" :card="card.attributes.card" @travel="menu.closeMenu" />
    </div>
    <div class="link-cont" v-else>
      <h2 class="title">CSS Uppvisning</h2>
      <util-aside-menu-link v-for="card in strapi.cardsEn.showcases" :key="card.id" :card="card.attributes.card" @travel="menu.closeMenu" />
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

  transition: left .4s ease;

  align-self: start;
}

.show {
  left: 0;
}

@media (max-width: 600px) {
  .show {
    width: 100vw;
  }
}
</style>