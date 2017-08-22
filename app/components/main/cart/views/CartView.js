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
  initialize () {
    this.collection = new CartItemCollection()
    this.listenTo(Radio.channel('uiChannel'), 'item:added', (model) => {
      this.collection.add(model)
    })
  },
  onRender () {
    this.showCartItemCollectionView(this.collection)
    this.showCartActionView()
  },
  showCartItemCollectionView (collection) {
    this.showChildView('cartItems', new CartItemCollectionView({ collection: collection }))
  },
  showCartActionView () {
    this.showChildView('cartActions', new CartActionView())
  }
})
