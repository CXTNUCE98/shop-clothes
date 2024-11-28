// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  imports: {
    dirs: [
      'constants',
      'composables',
    ],
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
    },
    baseURL: '/',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/tailwindcss'], 
  css: ['boxicons/css/boxicons.min.css']
})