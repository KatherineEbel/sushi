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
  handleCountChange (model) {
    this.render()
    console.log('Model count changed to: ' + model.get('count'))
  }
})
