// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxt/test-utils/module",
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      apiBaseUrlKey: process.env.API_BASE_URL_KEY,
    },
  },
  components: [
    // custom scanner for component auto-import
    { path: "~/components/pages", prefix: "" },
    { path: "~/components/commons", prefix: "" },

    // It's important that this comes last if you have overrides you wish to apply
    "~/components",
  ],
});
