import { defineStore } from "pinia";
import { getLocalStorage, putLocalStorage } from "~~/scripts/localStorage";

export const useStoresSettings = defineStore('stores-settings', {
  state: () => {
    return {
      language: 'english',
      theme: {
        dark: false,
        iconColor: 'rgb(44, 62, 80)',
        inactiveIconColor: 'grey'
      },
      ordet: {
        hideUsedLetters: false,
      }
    }
  },
  actions: {
    changeLanguage() {
      if (this.language === 'swedish') {
        this.language = 'english';
      } else {
        this.language = 'swedish';
      }
      this.toLocalStorage();
    },
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

      this.toLocalStorage();
    },


    toLocalStorage() {
      const tmp = {
        language: this.language,
        theme: this.theme,
        ordet: this.ordet,
      }

      putLocalStorage('settings', tmp);
    },
    fromLocalStorage() {
      const settings = getLocalStorage('settings');
      if (settings) {
        if (settings.language) {
          this.language = settings.language
        }
        if (settings.theme) {
          this.theme.dark = settings.theme.dark;
          this.theme.iconColor = settings.theme.iconColor;
        }
        if (settings.ordet) {
          this.ordet = settings.ordet;
        }
        if (settings.theme.dark) {
          document.documentElement.classList.add('dark');
        }
      }
    }
  }
})