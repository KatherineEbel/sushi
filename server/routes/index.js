export default (router, dataApi) => {
  router.get('/', (req, res,) => {
    res.render('index', {
      title: 'Sushi Restaurant',
      menuItems: dataApi.getMenu()
    }) 
  })
}
