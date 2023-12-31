const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
        scss: {
            additionalData: `
              @import "@/assets/scss/_variables";  
              @import "@/assets/scss/_fonts";  
              @import "@/assets/scss/_mixins";
            `
        }
    }
},
})
