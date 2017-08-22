import { View } from 'backbone.marionette'
import Bb from 'backbone'
import template from './main.pug'
import CartView from '../cart/views/CartView'
import MenuItems from '../../../collections/MenuItems'
import MenuItemsView from '../menu/MenuItemsView'
import ItemDetailView from '../menuItemView/ItemDetailView.js'
import './main.styl'

export default View.extend({
  channelName: 'uiChannel',
  template: template,
  regions: {
    cart: {
      el: '#cart',
      replaceElement: true
    },
    content: '#content'
  },
  radioEvents: {
    'show:menuItem': 'onShowMenuItem',
    'cart:empty': 'emptyCart',
    'item:added': 'onShowCartView'
  },
  childViewEvents: {
    'getPrev:id': 'renderPrevItem',
    'getNext:id': 'renderNextItem',
    'addCart:id': 'addCartItem',
    'goBack': 'onShowMenu'

  },
  emptyCart () {
    this.getRegion('cart').empty()
  },
  initialize () {
    // this.listenTo(Radio.channel('uiChannel'), 'show:menuItem', this.onShowMenuItem)
    // this.listenTo(Radio.channel('uiChannel'), 'cart:empty', () => this.getRegion('cart').empty())
    // this.listenTo(Radio.channel('uiChannel'), 'item:added', (model) => {
    //   this.triggerMethod('showCartView', model)
    // })
    this.collection = new MenuItems()
    let menuDataDeferred = Radio.channel('resourceChannel').request('menuItems')
    menuDataDeferred.done((collection) => {
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
      Radio.channel('uiChannel').reply('first:item:added', model)
      const cartView = new CartView()
      cartView.collection.add(model)
      this.showChildView('cart', cartView)
    }
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
