const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin') // 引入
const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/monaco-apptest/dist/' : '/',
  lintOnSave: false,
  publicPath: '/monaco-apptest/dist/',
  configureWebpack: {
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/msun-lib-ui[/\\]lib[/\\]styles[/\\](.*)\.css/),
      new MonacoWebpackPlugin()
    ],
  }
};
