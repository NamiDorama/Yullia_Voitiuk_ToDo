const baseWebpack = require('./webpack.config.base');
const webpack = require('webpack');
const path = require('path');

module.exports = Object.assign({}, baseWebpack, {
  plugins: [
    ...baseWebpack.plugins,
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve('dist'),
    publicPath: '/',
    port: 9000,
    hot: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map'
});
