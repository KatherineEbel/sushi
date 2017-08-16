import { View } from 'backbone.marionette'
import CartItemCollectionView from '../cartItem/CartItemCollectionView.js'
import CartActionView from '../cartActions/CartActionsView.js'
import template from '../templates/cart'
import '../styles/cart.styl'

export default View.extend({
  id: 'cart',
  template: template,
  regions: {
    cartItems: {
      el: '#cartItems',
      replaceElement: true
    },
    cartActions: {
      el: '#cartActions',
      replaceElement: true
    }
  },
  onRender () {
    this.showChildView('cartItems', new CartItemCollectionView())
    this.showChildView('cartActions', new CartActionView())
  }
})
