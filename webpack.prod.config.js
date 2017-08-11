'use strict';

const baseConfig = require('./webpack.config.js')
baseConfig.devtool = 'cheap-module-source-map'

module.exports = baseConfig
