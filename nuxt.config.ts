// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    baseURL: '/portfolio/', 
    head:{
      htmlAttrs: {
        lang: 'ko'
      },
      title: '포트폴리오',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'google',
          content: 'notranslate'
        }
      ],
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
  css: [
    '@/assets/scss/common.scss',
  ],
  build: {
    transpile: ['gsap']
  },
})
