// 自定义配置
module.exports = {
  chainWebpack (config) {
    config
      .module
      .rule('eslint')
      .use('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
  }
}
