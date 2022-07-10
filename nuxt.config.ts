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
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/strapi'
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'https://wiktry-eu-nuxt.herokuapp.com' || 'http://localhost:1337',  
    prefix: '/api',  
    version: 'v4',  
    cookie: {},
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    }
  },
  ssr: false,
  meta: {
    link: [
      {
        rel: 'stylesheet',
        href: "http://fonts.cdnfonts.com/css/gotham"
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'http://fonts.cdnfonts.com/css/space-mono'
      }
    ]
  }
})              