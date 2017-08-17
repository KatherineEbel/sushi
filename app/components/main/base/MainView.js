import { View } from 'backbone.marionette'
import template from './main.pug'
import CartView from '../cart/views/CartView'
import MenuItemsView from '../menu/MenuItemsView'
import Item from '../menuItem/Item.js'
import ItemDetailView from '../menuItemView/ItemDetailView.js'
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
  initialize () {
    this.listenTo(Radio.channel('uiChannel'), 'show:menuItem', this.showMenuItem)
  },
  onRender () {
    this.showChildView('cart', new CartView())
    this.showChildView('content', new MenuItemsView())
  },
  showMenu () {
    this.showChildView('content', new MenuItemsView())
  },
  showMenuItem (item) {
    let itemView = new ItemDetailView({model: new Item(item)})
    console.log(itemView)
    console.log(itemView.model.get('id'))
    this.showChildView('content', itemView)
  }
})
