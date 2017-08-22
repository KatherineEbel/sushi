export default (router, dataApi) => {
  router.route('/menuItems/:id')
    .get((req,res) => {
      const id = req.params.id
      const item = dataApi.getMenuItem(id)
      console.log(item)
      res.json(item)
    })
  router.route('/menuItems')
    .get((req, res) => {
      res.json(dataApi.getMenu())
    })
}

