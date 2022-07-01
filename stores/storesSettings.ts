import { defineStore } from "pinia";
import { getLocalStorage, putLocalStorage } from "~~/scripts/localStorage";

export const useStoresSettings = defineStore('stores-settings', {
  state: () => {
    return {
      theme: {
        dark: false,
        iconColor: 'rgb(44, 62, 80)'
      },
      ordet: {
        hideUsedLetters: false,
      }
    }
  },
  actions: {
    changeTheme() {
      if (this.theme.dark) {
        this.theme.dark = false;
        this.theme.iconColor = 'rgb(44, 62, 80)';
        document.documentElement.classList.toggle('dark');
      } else {
        this.theme.dark = true;
        this.theme.iconColor = 'white';
        document.documentElement.classList.add('dark');
      }
      this.toLocalStorage();
    },
    ordetshowUsedLetters() {
      this.showUsedLetters = !this.showUsedLetters;
    },


    toLocalStorage() {
      const tmp = {
        theme: this.theme,
        ordet: this.ordet,
      }

      putLocalStorage('settings', tmp);
    },
    fromLocalStorage() {
      const settings = getLocalStorage('settings');
      if (settings) {
        if (settings.theme)
          this.theme = settings.theme;
        if (settings.ordet)
          this.ordet = settings.ordet;
        
          if (settings.theme.dark)
          document.documentElement.classList.add('dark');
      }
    }
  }
})