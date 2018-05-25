const baseWebpack = require('./webpack.config.base');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const settings = Object.assign({}, baseWebpack, {
  output: {
    filename: 'bundle-[name].js'
  },
  plugins: [
    ...baseWebpack.plugins,
    new CleanWebpackPlugin('dist', {root: `${__dirname}/../`})
  ],
  mode: 'production'
});

module.exports = settings;
