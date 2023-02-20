const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin') // 引入
const webpack = require('webpack');
 

module.exports = {
  lintOnSave: false,
  
  configureWebpack: {
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/msun-lib-ui[/\\]lib[/\\]styles[/\\](.*)\.css/),
      new MonacoWebpackPlugin()
    ],
  }
};