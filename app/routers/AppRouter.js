import { AppRouter } from 'backbone.marionette'
import AppController from '../controllers/AppController'

export default AppRouter.extend({
  initialize (options) {
    this.controller = new AppController(options)
  },
  appRoutes: {
    '': 'showHome',
    'menu': 'showMenu',
    'menu/:item': 'showMenuItem',
    'checkout': 'showCheckout'
  }
})
