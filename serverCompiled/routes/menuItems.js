'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (router, dataApi) {
  router.route('/menuItems/:id').get(function (req, res) {
    var id = req.params.id;
    var item = dataApi.getMenuItem(id);
    console.log(item);
    res.json(item);
  });
  router.route('/menuItems').get(function (req, res) {
    res.json(dataApi.getMenu());
  });
};