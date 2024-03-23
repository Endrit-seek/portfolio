// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/color-mode", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Roboto: true,
      Montserrat: true,
    },
    download: true,
  },
});
