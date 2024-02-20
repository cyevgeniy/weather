// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
      apiUrl: process.env.API_BASE_URL,
    },
  },
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
