'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _JSONCrud = require('../api/JSON-crud');

var _JSONCrud2 = _interopRequireDefault(_JSONCrud);

var _menu = require('../../app/data/menu.json');

var _menu2 = _interopRequireDefault(_menu);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var routeFiles = ['menuItems'];

var api = Object.create(_JSONCrud2.default).init(_menu2.default);

_lodash2.default.forEach(routeFiles, function (file) {
  require(_path2.default.resolve(_path2.default.dirname(__dirname), 'routes/' + file)).default(router, api);
});

exports.default = router;