<script setup>
let strapi = ref(null);
onMounted(async () => {
  const wait = await getStrapiPost(7, 'showcases');
  strapi.value = wait;
})
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