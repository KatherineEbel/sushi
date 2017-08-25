import Mn from 'backbone.marionette'
import Item from '../../menuItem/Item.js'
import template from './cartItem.pug'

export default Mn.View.extend({
  tagName: 'li',
  template: template,
  model: Item,
  modelEvents: {
    'change:count': 'updatePrice'
  },
  ui: {
    'price': '.price'
  },
  updatePrice (model) {
    let price = this.getUI('price')
    let count = this.model.get('count')
    let itemPrice = this.model.get('price')
    price.text(`${count} x ${parseFloat(itemPrice).toFixed(2)}`)
  }
})
