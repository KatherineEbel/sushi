import Mn from 'backbone.marionette'
import CartItemCollectionView from '../cartItem/CartItemCollectionView.js'
import CartActionView from '../cartActions/CartActionsView.js'
import template from './cart.pug'
import './cart.styl'

export default Mn.View.extend({
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
