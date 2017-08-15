'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (router, dataApi) {
  router.route('/menuItems').get(function (req, res) {
    res.json(dataApi.getMenu());
  });
};