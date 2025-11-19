// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  ssr: false,
  css: ['~/assets/css/main.css'],
  vite: {    
    plugins: [      
      tailwindcss(),    
    ],  
  },
  modules: ['@nuxtjs/i18n', '@nuxt/ui', '@nuxt/image','@nuxt/content','nuxt-particles'],
  i18n: {
    defaultLocale: 'es',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' }
    ]
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        //class: "h-full",
      },
      bodyAttrs: {
        //class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
})