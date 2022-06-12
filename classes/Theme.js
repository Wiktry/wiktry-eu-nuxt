import { ref } from 'vue';
import { putLocalStorage, getLocalStorage } from '../scripts/localStorage';

class Theme {
  constructor() {
    this.dark = ref(false);
    this.iconColor = ref('black');

    this.#getls();
  }

  #getls() {
    const local = getLocalStorage('theme');
    if (local) {
      this.dark.value = local;
      if (local === true)
        this.iconColor.value = 'white';
    }
  }

  // Create a new class object from a json string
  static from(json) {
    return Object.assign(new Theme(), json);
  }

  changeTheme() {
    this.dark.value = !this.dark.value
    
    if (this.dark.value) {
      this.iconColor.value = 'white';
      document.documentElement.classList.add('dark');
    } else {
      this.iconColor.value = 'rgb(44, 62, 80)';
      document.documentElement.classList.toggle('dark');
    }

    putLocalStorage('theme', this);

    /*if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setColor('#fff');
    } else {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', 'light');
      setColor('#000');
    }*/
  }
}

export default Theme;