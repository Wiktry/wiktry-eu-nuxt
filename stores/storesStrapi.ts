import { defineStore } from "pinia";

export const useStoresStrapi = defineStore('stores-strapi', {
  state: () => {
    return {
      isLoading: true,
      cardsSv: {
        showcases: [],
        games: []
      },
      cardsEn: {
        showcases: [],
        games: []
      }
    }
  },
  actions: {
    async init(find: any) {
      const showcasesSv: any = await find('showcases', { populate: 'card', locale: 'sv' });
      const showcasesEn: any = await find('showcases', { populate: 'card', locale: 'en' });
      const gamesSv: any = await find('games', { populate: 'card', locale: 'sv' });
      const gamesEn: any = await find('games', { populate: 'card', locale: 'en' });

      if(showcasesSv) {
        this.cardsSv.showcases = showcasesSv.data;
      }
      if(showcasesEn) {
        this.cardsEn.showcases = showcasesEn.data;
      }
      if(gamesSv) {
        this.cardsSv.games = gamesSv.data;
      }
      if(gamesEn) {
        this.cardsEn.games = gamesEn.data;
      }

      this.isLoading = false;
    }
  }
})