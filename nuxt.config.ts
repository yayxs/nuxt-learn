export default defineNuxtConfig({
  // My Nuxt config
  devtools: { enabled: true },

  vue: {
    // 启用vue的实验性功能
    defineModel: true,
    propsDestructure: true
  },

  runtimeConfig:{
    // 服务端可以用
    test1:'x',
    public:{
      // 客户端可以用
      test2:'y'
    }
  },

  modules: ["@nuxt/eslint"]
})