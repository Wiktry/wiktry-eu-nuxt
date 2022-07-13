<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div v-html="text" class="html"/>
</template>

<style>
.html h2{
  margin: 20px 0;
}
.html h2::before {
  content: '#';
  margin-right: 4px;
}
.html pre {
  margin: 20px 0;
  padding: 20px;
  max-width: 100%;
  overflow-x: scroll;

  background-color: var(--menu-background-color);
  border: 1px solid rgba(0, 0, 0, .4);
  border-radius: 6px;

  font-family: 'Fira Code', monospace;
}
.html code {
  font-family: 'Fira Code', monospace;
}

::-webkit-scrollbar {
  width: 4px;
  height: 6px;
  float: right;
}
::-webkit-scrollbar-track {
  background: transparent;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,.2);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>