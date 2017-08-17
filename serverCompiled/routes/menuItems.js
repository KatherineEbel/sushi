'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (router, dataApi) {
  router.route('/menuItems/:id').get(function (req, res) {
    var id = req.params.id;
    res.json(dataApi.getMenuItem(id));
  });
  router.route('/menuItems').get(function (req, res) {
    res.json(dataApi.getMenu());
  });
};