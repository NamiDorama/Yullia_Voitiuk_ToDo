const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const images = ['jpg', 'jpeg', 'png', 'gif', 'svg'];

let stylesLoader = [
  {loader: 'style-loader'},
  {loader: "css-loader"},
  {loader: "sass-loader"}
];

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Test app',
    template: 'index.html'
  }),
  new MiniCssExtractPlugin({
    filename: 'styles.css'
  }),
  new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component']
  }),
  new CopyWebpackPlugin([
    ...images.map(ext => ({ from: `**/*/*.${ext}`, to: 'img/[name].[ext]' }))
  ])
];

module.exports = {
  entry: ['babel-polyfill', './app.js'],
  context: path.resolve('src'),
  output: {
    filename: 'bundle-[name].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-0'],
            plugins: [
              'syntax-dynamic-import',
              'transform-class-properties',
              'transform-object-rest-spread',
              'transform-regenerator'
            ]
          }
        }
      },

      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      },

      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'img/[name].[ext]'
          }
        }]
      },

      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      }
    ]
  },

  plugins,

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },

  mode: 'development'
};

