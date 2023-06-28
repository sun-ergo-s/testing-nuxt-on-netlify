import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  runtimeConfig: {
      nuxtSecret: process.env.NUXT_SECRET,
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      googleSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  modules: [
    '@sidebase/nuxt-auth'
  ],
  auth: {
    origin: process.env.AUTH_ORIGIN
  }
})
