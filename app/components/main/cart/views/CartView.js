import { View } from 'backbone.marionette'
import CartItemCollectionView from '../cartItem/CartItemCollectionView.js'
import CartItemCollection from '../cartItem/CartItemCollection'
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
  childViewEvents: {
    'notifyEmptyCart': 'emptyCart',
    'notifyCheckout': 'getCheckout'
  },
  initialize () {
    this.collection = new CartItemCollection()
    this.listenTo(Radio.channel('uiChannel'), 'item:added', (model) => {
      this.collection.add(model)
    })
  },
  emptyCart () {
    Radio.channel('uiChannel').trigger('cart:empty')
  },
  getCheckout () {
    Radio.channel('uiChannel').trigger('show:checkout')
  },
  onRender () {
    this.showCartActionView()
    this.showCartItemCollectionView(this.collection)
  },
  showCartItemCollectionView (collection) {
    this.showChildView('cartItems', new CartItemCollectionView({ collection: collection }))
  },
  showCartActionView () {
    const cartTotal = _.head(this.collection.slice(0, 1)).get('price')
    this.showChildView('cartActions', new CartActionView({ cartTotal: cartTotal }))
  }
})
