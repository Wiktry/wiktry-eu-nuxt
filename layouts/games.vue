<script setup>
import { mdiHelpCircleOutline, mdiChartBoxOutline  } from '@mdi/js';
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
})
</script>

<template>
<div class="game-layout">

  <TheHeader>

    <template #name>
      <slot name="name"></slot>
    </template>

    <template v-slot:icons>
      <slot name="icons"></slot>
    </template>

    <template v-slot:modal>
      <slot name="modal"></slot>
    </template>
  </TheHeader>

  <div class="content">
    <slot name="game">
      <!-- Here goes the actual game -->
    </slot>
  </div>

</div>
</template>

<style scoped>
.game-layout {
  height: 100%;
}
.content {
  height: calc(100% - 60px);
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
}
.button {
  margin: 0 5px;
}

@media (max-height: 600px) {
  .content {
    height: calc(100% - 40px);
  }
}
</style>