<script setup lang="ts">
const prop = defineProps({
  word: {
    type: String,
    default: "default"
  },
  delay: {
    type: Number,
    default: 0
  }
});

const letters = [];
for (let i = 0; i < prop.word.length; i++) {
  letters.push({id: i, l: prop.word.charAt(i)});
}

const mounted = ref(false);

onMounted(() => {
  setTimeout(() => {
    mounted.value = true;
  }, prop.delay);
})
</script>

<template>
  <div class="container">
    <span v-for="el in letters" :key="el.id" class="letter" :class="{ active: mounted }" :style="{ '--delay': 400 + (50 * el.id) + 'ms' }">
      {{ el.l }}
    </span>
  </div>
</template>

<style scoped>
.container {
  font-size: 8vw;
  font-family: 'Roboto Slab';
  line-height: 7vw;

  text-transform: uppercase;
}
.container:nth-child(2) {
  margin-left: 6vw;
}
.container:nth-child(3) {
  margin-left: 12vw;
}
.container:nth-child(4) {
  margin-left: 18vw;
}

.letter {
  display: inline-block;

  opacity: 0;
  transform: translateY(20px);

  transition: .3s ease;
  transition-delay: var(--delay);
  transition-property: opacity, transform;
}
.active {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 600px) {
  .container {
    font-size: 14vw;
    line-height: 12vw;
  }
  .container:nth-child(2) {
    margin-left: 3vw;
  }
  .container:nth-child(3) {
    margin-left: 6vw;
  }
  .container:nth-child(4) {
    margin-left: 9vw;
  }
}
</style>