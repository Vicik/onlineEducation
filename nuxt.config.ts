export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["nuxt-windicss", "@ant-design-vue/nuxt"],
  css: ["~/assets/css/main.less"],
  antd: {
    extractStyle: true, // 默认为 false
  },
  nitro: {
    routeRules: {
      "/api/**": {
        proxy: "http://127.0.0.1:4523/m1/8900447-8699879-default/api/**",
      },
    },
  },
});
