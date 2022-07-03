import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css', '@/assets/css/globalStyle.css'],
  build: {
    transpile: [
      'vuetify',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/fontawesome-free',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/vue-fontawesome',
      'three',
    ],
  },
  modules: ['@pinia/nuxt'],
  vite: {
    define: {
      'process.env.DEBUG': false,
    }
  },
  ssr: false,
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: "http://fonts.cdnfonts.com/css/gotham"
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:100,200,300,400,500,600,700,800,900'
      }
    ]
  }
})              