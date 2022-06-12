import { ref, reactive } from "vue";

class Modal {
  constructor(state = []) {
    this.visible = ref(false);
    this.State = reactive(state);
  }

  changeVisible() {
    this.visible.value = !this.visible.value;
  }

  getState(state) {
    this.State.forEach(element => {
      if (state === element)
        return element;
    });
  }
}

export default Modal;