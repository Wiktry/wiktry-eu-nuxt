import { defineStore } from "pinia";
import { getLocalStorage, putLocalStorage } from "~~/scripts/localStorage";

export const useStoresTheme = defineStore('stores-theme', {
  state: () => {
    return {
      dark: false,
      iconColor: 'white'
    }
  },
  actions: {
    changeTheme() {
      if (this.dark) {
        this.dark = false;
        this.iconColor = 'rgb(44, 62, 80)';
        document.documentElement.classList.toggle('dark');
      } else {
        this.dark = true;
        this.iconColor = 'white';
        document.documentElement.classList.add('dark');
      }
      putLocalStorage('theme', this.dark);
    },
    fromLocalStorage() {
      const theme = getLocalStorage('theme');
      if (theme) {
        this.dark = true;
        this.iconColor = 'white';
        document.documentElement.classList.add('dark');
      } else {
        this.dark = false;
        this.iconColor = 'rgb(44, 62, 80)';
      }
    }
  }
})