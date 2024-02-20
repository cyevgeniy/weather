// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
    'dayjs-nuxt',
  ],
  dayjs: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'bg-slate-100',
      },
    },
  },
})
