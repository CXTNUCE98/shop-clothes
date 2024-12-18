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
      title: 'TCSHOP',
      viewport: 'width=device-width,initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
  modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt', '@unocss/nuxt', '@vueuse/nuxt',],   
  css: ['boxicons/css/boxicons.min.css', 'element-plus/dist/index.css']
})