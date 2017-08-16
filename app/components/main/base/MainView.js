import { View } from 'backbone.marionette'
import template from './main.pug'
import CartView from '../cart/views/CartView'
import MenuItemsView from '../menu/MenuItemsView'
import './main.styl'

export default View.extend({
  template: template,
  regions: {
    cart: {
      el: '#cart',
      replaceElement: true
    },
    content: '#content'
  },
  onRender () {
    this.showChildView('cart', new CartView())
    this.showChildView('content', new MenuItemsView())
  }
})
