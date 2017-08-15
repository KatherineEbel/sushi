export default (router, dataApi) => {
  router.route('/menuItems')
    .get((req, res) => {
      res.json(dataApi.getMenu())
    })
}

