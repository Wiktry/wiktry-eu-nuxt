<script setup>
import { useStoresSettings } from '@/stores/storesSettings.ts';
const settings = useStoresSettings();
console.log(settings);
</script>

<template>
<div class="settings" >
  <div class="title">
    <h2>Inställningar</h2>
  </div>
  <div class="settings-box">
    <div class="setting">
      <v-checkbox label="Dölj oanvända bokstäver?" dense v-model="settings.ordet.hideUsedLetters" />
    </div>
  </div>
</div>
</template>

<style scoped>
.settings {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.title {
  margin: 20px 0;
}
.settings-box {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
</style>