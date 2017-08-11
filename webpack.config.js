'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/app.js')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/'
  },
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'standard-loader',
        exclude: /node_modules/,
        options: {
          error: true,
          snazzy: true,
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 'file']
      },
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug'
      },
      {
        test: /\.(html)$/,
        loader: 'html'
      },
      {
        test: /\.(css|styl)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style',
          use: 'css!stylus'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({
      title: 'Sushi',
      template: 'app/assets/views/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash'
    }),
    new CleanWebpackPlugin(['public'])
  ],
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'app')
    ]
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  }
}
