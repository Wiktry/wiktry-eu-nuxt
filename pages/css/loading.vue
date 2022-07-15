<script setup>
const strapi = await getStrapiPost(7, 'showcases');
</script>

<template>
  <NuxtLayout name="layout-css">
    <template #css>
      <css-loading />
    </template>
    <template #article>
      <article-css v-if="strapi" :title="strapi.data.attributes.post.title" :text="strapi.data.attributes.post.text" />
    </template>
  </NuxtLayout>
</template>

<style scoped>

</style>