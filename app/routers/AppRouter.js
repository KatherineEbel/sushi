import { AppRouter } from 'backbone.marionette'
import AppController from '../controllers/AppController'

export default AppRouter.extend({
  initialize (options) {
    this.controller = new AppController(options)
  },
  appRoutes: {
    '': 'showLayout',
    'menu': 'showMenu',
    'menu/:item': 'showMenuItem',
    'checkout': 'showCheckout'
  },
  onRoute (name, path, args) {
    console.log(name, path, args)
    this.navigate(path)
  }
})
