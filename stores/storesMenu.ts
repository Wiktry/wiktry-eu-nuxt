import { defineStore } from "pinia";

export const useStoresMenu = defineStore('stores-menu', {
  state: () => {
    return {
      show: false,
    }
  },
  actions: {
    changeMenu() {
      this.show = !this.show;
    },
    openMenu() {
      this.show = true;
    },
    closeMenu() {
      this.show = false;
    }
  }
})