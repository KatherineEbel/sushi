import Mn from 'backbone.marionette'
import Bb from 'backbone'
import template from './main.pug'
import CartView from '../cart/views/CartView'
import CheckoutLayoutView from '../checkout/CheckoutLayoutView.js'
import MenuItems from '../../../collections/MenuItems'
import MenuItemsView from '../menu/MenuItemsView'
import ItemDetailView from '../menuItemView/ItemDetailView.js'
import './main.styl'

export default Mn.View.extend({
  template: template,
  regions: {
    cart: {
      el: '#cart',
      replaceElement: true
    },
    content: '#content'
  },
  childViewEvents: {
    'getPrev:id': 'renderPrevItem',
    'getNext:id': 'renderNextItem',
    'addCart:id': 'addCartItem',
    'goBack': 'onShowMenu',
    'cancelOrder': 'onShowMenu'
  },
  emptyCart () {
    this.getRegion('cart').empty()
  },
  initialize () {
    this.listenTo(Radio.channel('uiChannel'), 'show:menuItem', this.onShowMenuItem)
    this.listenTo(Radio.channel('uiChannel'), 'cart:empty', () => this.getRegion('cart').empty())
    this.listenTo(Radio.channel('uiChannel'), 'item:added', (model) => {
      if (this.getRegion('content').currentView.el.id === 'checkout') {
        return
      }
      this.triggerMethod('showCartView', model)
    })
    this.listenTo(Radio.channel('uiChannel'), 'show:checkout', () => {
      this.onShowCheckout()
      this.emptyCart()
    })
    this.collection = new MenuItems()
    Radio.channel('uiChannel').request('menuItems').done(collection => {
      this.collection.reset(collection)
      this.collection.numPages = this.collection.length
    })
  },
  onRender () {
    this.triggerMethod('showMenu')
  },
  onShowMenu () {
    this.showChildView('content', new MenuItemsView({ collection: this.collection }))
    Bb.history.navigate('menu')
  },
  onShowMenuItem (model) {
    let itemView = new ItemDetailView({model: model})
    this.showChildView('content', itemView)
    Bb.history.navigate(`menu/${model.id}`)
  },
  onShowCartView (model) {
    if (!this.getRegion('cart').hasView()) {
      const cartView = new CartView()
      cartView.collection.add(model)
      this.showChildView('cart', cartView)
    }
  },
  onShowCheckout () {
    let cartCollection = this.getRegion('cart').currentView.collection
    this.showChildView('content', new CheckoutLayoutView({ collection: cartCollection }))
    Bb.history.navigate('checkout')
  },
  renderPrevItem (id) {
    this.triggerMethod('showMenuItem', this.collection.get(this.collection.pagePrev()))
  },
  renderNextItem (id) {
    this.triggerMethod('showMenuItem', this.collection.get(this.collection.pageNext()))
  },
  addCartItem (id) {

  }
})
