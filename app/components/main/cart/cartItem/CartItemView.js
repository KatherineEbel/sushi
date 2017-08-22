import Mn from 'backbone.marionette'
import CartItem from './CartItem'
import template from './cartItem.pug'

export default Mn.View.extend({
  tagName: 'li',
  template: template,
  model: CartItem,
  modelEvents: {
    'change:count': 'handleCountChange'
  },
  ui: {
    'price': '.price'
  },
  handleCountChange (model) {
    let price = this.getUI('price')
    let count = this.model.get('count')
    let itemPrice = this.model.get('price')
    price.text(`${count} x ${parseFloat(itemPrice).toFixed(2)}`)
  }
})
