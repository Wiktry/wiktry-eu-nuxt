<script setup>
const { findOne } = useStrapi4();
const fancyClock = await findOne('showcases', 1, { populate: 'post' });
console.log(fancyClock);
</script>

<template>
  <NuxtLayout name="layout-css">
    <template #css>
      <css-fancy-clock />
    </template>
    <template #article>
      <article-css v-if="fancyClock" :title="fancyClock.data.attributes.post.title" :text="fancyClock.data.attributes.post.text" />
    </template>
  </NuxtLayout>
</template>

<style scoped>

</style>