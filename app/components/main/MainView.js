import Mn from 'backbone.marionette'
import template from '../../assets/views/main.pug'
import CartView from '../cart/CartView.js'
import MenuItemsView from '../items/MenuItemsView.js'

export default Mn.View.extend({
  template: template,
  regions: {
    cart: '#cart',
    content: '#content'
  },
  onRender () {
    this.showChildView('cart', new CartView)
    this.showChildView('content', new MenuItemsView)
  }
})
