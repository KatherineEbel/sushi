export default (router, dataApi) => {
  router.route('/menuItems/:id')
    .get((req,res) => {
      const id = req.params.id
      res.json(dataApi.getMenuItem(id))
    })
  router.route('/menuItems')
    .get((req, res) => {
      res.json(dataApi.getMenu())
    })
}

