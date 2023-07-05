const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 关闭eslint语法验证
  lintOnSave: false,
  transpileDependencies: true,
  /**
     * 注意，nginx配置后，刷新可能会存在404问题，解决方案如下：
     * 
     * 第一种方案
location /shifun {
  alias   /var/www/html/shifun/;
  index index.html;
  try_files $uri $uri/ /shifun/index.html;
}
      第二种方案
      通过hashhistory # 来解决
     */
  publicPath: process.env.NODE_ENV === 'production' ? '/shifun/' : '/',
  devServer: {
    proxy: { //配置跨域  baseurl在 utils/request.js中修改‘/api’
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
