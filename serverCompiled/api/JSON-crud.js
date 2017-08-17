'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: {},
  getMenu: function getMenu() {
    return this.data.menuItems;
  },
  init: function init(data) {
    this.data = data;
    return this;
  },
  getMenuItem: function getMenuItem(id) {
    var menuItems = data.menuItems || [];
    return _lodash2.default.find(menuItems, function (item) {
      return item.id = id;
    });
  }
};