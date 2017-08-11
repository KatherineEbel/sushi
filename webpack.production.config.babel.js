'use strict';

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StatsPlugin from 'stats-webpack-plugin';

export default = {
  entry: [
    path.join(__dirname, 'app/main.js')
  ],
  output: {
    path: path.join(__dirname, '/public/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({

    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({

    }),
    new StatsPlugin('webpack.stats.json', {

    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    });
  ]
}
