import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass', 
    'mdi/css/materialdesignicons.min.css', 
    '@/assets/css/globalStyle.css', 
    '@/assets/css/globalFonts.css'
  ],
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
    title: "Software Developer | Wiktor Rydlund",
    link: [
      {
        rel: 'icon',
        href: '/logo.svg',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;800&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap'
      },
    ]
  }
})