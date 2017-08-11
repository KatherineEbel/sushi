'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackConfig = require('./webpack.config.js');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDevelopment = process.env.NODE_ENV != 'production';
var port = isDevelopment ? 3000 : process.env.PORT;
var app = (0, _express2.default)();

if (isDevelopment) {
  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
  var middleware = (0, _webpackDevMiddleware2.default)(compiler, {
    publicPath: _webpackConfig2.default.output.publicPath,
    contentBase: 'app',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false
    }
  });

  app.use(middleware);
  app.use((0, _webpackHotMiddleware2.default)(compiler));
  app.get('/', function (req, res) {
    return res.write(middleware.fileSystem.readFileSync(_path2.default.join(__dirname, 'public/index.html')));
  });
} else {
  app.use(_express2.default.static(_path2.default.join(__dirname, '/public')));
  app.get('/', function (req, res) {
    return res.sendFile(_path2.default.join(__dirname, 'public/index.html'));
  });
}

app.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.info('===> \uD83C\uDF0E Listening on port ' + port + '. Open up http://localhost:' + port + '/ in your browser.');
});
