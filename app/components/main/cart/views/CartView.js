import { View } from 'backbone.marionette'
import CartItemCollectionView from '../cartItem/CartItemCollectionView.js'
import Cart from '../../base/Cart'
import CartActionView from '../cartActions/CartActionsView.js'
import MenuItemsCollection from '../../menu/Items'
import template from '../templates/cart'
import '../styles/cart.styl'

export default View.extend({
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
  initialize (options) {
    this.model = new Cart({ cartTotal: options.item.get('price') || 0 })
    this.collection = new MenuItemsCollection(options.item)
    this.listenTo(Radio.channel('uiChannel'), 'item:added', this.addToCart)
    this.listenTo(Radio.channel('uiChannel'), 'item:removed', (model) => {
      const price = model.get('price')
      const currentTotal = this.model.get('cartTotal')
      const newTotal = currentTotal - price
      this.model.set({ cartTotal: newTotal })
      Radio.channel('uiChannel').reply('cart:total', newTotal)
      Radio.channel('uiChannel').trigger('cart:total', newTotal)
    })
  },
  addToCart (model) {
    this.model.get('items').add(model)
    const price = model.get('price')
    this.model.set({ cartTotal: this.model.get('cartTotal') + price })
    Radio.channel('uiChannel').trigger('cart:total', this.model.get('cartTotal'))
    Radio.channel('uiChannel').reply('cart:total', this.model.get('cartTotal'))
  },
  emptyCart () {
    Radio.channel('uiChannel').trigger('cart:empty')
    console.log(this.model.get('items').get('url'))
  },
  getCheckout () {
    Radio.channel('uiChannel').trigger('show:checkout')
  },
  onRender () {
    this.showCartActionView()
    this.showCartItemCollectionView(this.model.get('items'))
  },
  showCartItemCollectionView (collection) {
    this.showChildView('cartItems', new CartItemCollectionView({ collection: collection }))
  },
  showCartActionView () {
    this.showChildView('cartActions', new CartActionView({ cartTotal: this.model.get('cartTotal') }))
  }
})
