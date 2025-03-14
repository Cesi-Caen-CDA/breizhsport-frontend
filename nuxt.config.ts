// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: true,
  modules: [
    'vuetify-nuxt-module',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
  ],
  build:{
    transpile: ['@pinia/nuxt']
  },
  googleFonts: {
    families: {
      'Poppins': ['400', '500', '700'],
      'Montserrat': ['400', '500', '600', '700'],
    },
  display: 'swap',
},
app:{
  head:{
    link:[
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      
      }
    ]
  }
}
})
