'use strict';

const baseConfig = require('./webpack.config.js')
baseConfig.devTool = 'cheap-module-source-map'

module.exports = baseConfig
