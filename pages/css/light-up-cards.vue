<script setup>
const props = defineProps({
  language: {
    type: String,
    default: 'english'
  }
})
const { findOne } = useStrapi4();

let strapi = undefined;
if (props.language === 'english')
  strapi = await findOne('showcases', 2, { populate: 'post' });
else if (props.language === 'swedish')
  strapi = await findOne('showcases', 4, { populate: 'post' });
console.log(strapi);
</script>

<template>
  <NuxtLayout name="layout-css">
    <template #css>
      <css-light-up-card />
    </template>
    <template #article>
      <article-css v-if="strapi" :title="strapi.data.attributes.post.title" :text="strapi.data.attributes.post.text" />
    </template>
  </NuxtLayout>
</template>

<style scoped>

</style>