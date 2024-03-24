// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
  ],
  colorMode: {
    classSuffix: "",
  },
  googleFonts: {
    families: {
      Roboto: true,
      Montserrat: true,
    },
    download: true,
  },
});
