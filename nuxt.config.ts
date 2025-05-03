export default defineNuxtConfig({
  ssr: false,
  target: 'static',
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
