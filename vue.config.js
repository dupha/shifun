const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 关闭eslint语法验证
  lintOnSave: false,
  transpileDependencies: true
})
