import { defineStore } from "pinia";

export const useStoresModal = defineStore('stores-modal', {
  state: () => {
    return {
      show: false,
      id: 0,
      swap: false,
    }
  },
  actions: {
    changeModal(id: number) {
      if (this.id !== id && this.show) {
        this.id = id;
      } else {
        this.show = !this.show;
        this.id = id;
      }
    },
    openModal() {
      this.show = true;
    },
    closeModal() {
      this.show = false;
    }
  }
})