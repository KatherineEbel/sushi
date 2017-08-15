'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (router, dataApi) {
  router.get('/', function (req, res) {
    res.render('index', {
      title: 'Sushi Restaurant',
      menuItems: dataApi.getMenu()
    });
  });
};