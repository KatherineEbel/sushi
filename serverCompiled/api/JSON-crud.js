"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: {},
  getMenu: function getMenu() {
    return this.data.menuItems;
  },
  init: function init(data) {
    this.data = data;
    return this;
  }
};