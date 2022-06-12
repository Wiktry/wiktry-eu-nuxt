<script setup>
import { useStoresModal } from '@/stores/storesModal.ts';
const modal = useStoresModal();
</script>

<template>
<div class="modal-back" :class="{'show-back': modal.show}" @click="modal.closeModal()">
  <div class="modal" :class="{ show: modal.show }">
    <slot>

    </slot>
  </div>
</div>
</template>

<style scoped>
.modal-back {
  height: 0;
  width: 100vw;
  margin-top: 40px;
  position: fixed;
  z-index: 50;

  display: flex;
  justify-content: center;

  background-color: rgba(0,0,0,0.4);
}
.modal {
  height: 0;
  width: 100vw;

  background-color: var(--content-background-color);
  position: fixed;
  overflow: hidden;

  transition: height .3s ease;
}
.show-back {
  display: flex;
}
.show {
  height: calc(100vh - 40px);
}

/* If the screen is less than 600px tall */
@media (max-height: 600px) {
  .modal-back {
    margin-top: 38px;
  }
}

/* If the screen is more than 500px wide */
@media (min-width: 500px) {
  .modal {
    display: none;
    height: auto;
    width: 500px;
    margin-top: 200px;
    border-radius: 20px;
  }
  .modal-back {
    height: calc(100vh - 40px);
    display: none;
  }
  .show-back {
    display: flex;
  }
  .show {
    display: block;
  }
}
</style>