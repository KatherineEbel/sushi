import Mn from 'backbone.marionette'
import template from './main.pug'
// import CartView from '../cart/CartView.js'
import MenuItemsView from '../items/MenuItemsView.js'
import './main.styl'

export default Mn.View.extend({
  template: template,
  regions: {
    cart: '#cart',
    content: '#content'
  },
  onRender () {
    // this.showChildView('cart', new CartView)
    this.showChildView('content', new MenuItemsView())
  }
})
