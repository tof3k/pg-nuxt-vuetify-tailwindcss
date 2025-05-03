export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'static'
  },
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    }
  }
})
