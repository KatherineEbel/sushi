'use strict';

import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/app.js')
  ],
  output: {
    path: path.join(__dirname, '/public/'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'standard-loader',
        exclude: /node_modules/,
        options: {
          error: false,
          snazzy: true,
          parser: 'babel-eslint'
        }
      },
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.pug$/,
        loader: 'pug'
      },
      {
        test: /\.styl$/,
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
      template: 'app/index.pug'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore'
    })
  ],
  resolveLoader: {
    moduleExtensions: ['-loader']
  }
}
