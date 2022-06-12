<script setup>
import { mdiHelpCircleOutline, mdiChartBoxOutline  } from '@mdi/js';
import { useStoresModal } from '@/stores/storesModal.ts'; 
import { useStoresTheme } from '@/stores/storesTheme.ts';

const theme = useStoresTheme();
const modal = useStoresModal();
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
})
</script>

<template>
<div class="page">

  <TheHeader>

    <template v-slot:name>
      Ordet
    </template>

    <template v-slot:icons>
      <button class="button" @click="modal.changeModal(0)">
        <v-icon :icon="mdiChartBoxOutline" :color="theme.iconColor" size="32" />
      </button>
      <button class="button" @click="modal.changeModal(1)">
        <v-icon :icon="mdiHelpCircleOutline" :color="theme.iconColor" size="32" />
      </button>
    </template>

    <template v-slot:modal>
      <ModalGamesOrdetStats v-if="modal.id === 0" />
      <ModalGamesOrdetGuide v-else-if="modal.id === 1" />
    </template>

  </TheHeader>

  <div class="content">
    <TheMenu />

    <slot>
      <!-- Here goes the actual game -->
    </slot>
  </div>

</div>
</template>

<style>
.page {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.content {
  height: calc(100vh - 60px);
  width: 100%;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.button {
  margin: 0 5px;
}
</style>