const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 关闭eslint语法验证
  lintOnSave: false,
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/shifun/' : '/',
  devServer: {
    proxy: { //配置跨域
      '/api': {
          target: 'https://flashcash4test.com', //填写请求的目标地址
          secure: false,
          changOrigin: true, //允许跨域
          pathRewrite : {                  //重写路径
              '^/api' : ''                 //把 /api 变为空字符
          }
        }
      }
    }
})
