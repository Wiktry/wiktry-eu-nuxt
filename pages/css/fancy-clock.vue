<script setup>
const strapi = await getStrapiPost(1, 'showcases');
</script>

<template>
  <NuxtLayout name="layout-css">
    <template #css>
      <css-fancy-clock />
    </template>
    <template #article>
      <article-css v-if="strapi" :title="strapi.data.attributes.post.title" :text="strapi.data.attributes.post.text" />
    </template>
  </NuxtLayout>
</template>

<style scoped>

</style>