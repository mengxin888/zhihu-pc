const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 配置代理
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.mxnzp.com',
        changeOrigin: true, // 是否跨域
        // 开启https
        secure: false,
        pathRewrite: {
          // '^/api': ''
        }
      }
    }
  },
  transpileDependencies: true,
  css:{
    loaderOptions:{
      sass:{
        additionalData:'@import "@/style/index.scss";'
      },
      // scss:{
      //   additionalData:'@import @/style/index.scss'
      // }
      less:{
        additionalData:'@import "@/style/index.less";'
      }
    }
  },
})
   