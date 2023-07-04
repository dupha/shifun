const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 关闭eslint语法验证
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: { //配置跨域
      '/api': {
          target: 'https://flashcash4test.com/tuanjian/shifun/teamBuilding', //填写请求的目标地址
          changOrigin: true, //允许跨域
          pathRewrite: {
            '^/api': '' //请求的时候使用这个api就可以
          }
        }
      }
    }
})
